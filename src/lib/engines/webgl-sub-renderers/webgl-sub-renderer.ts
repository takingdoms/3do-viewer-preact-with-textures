import { Object3doTree } from "@takingdoms/lib-3do";
import { glMatrix, mat4 } from "gl-matrix";
import { ModelControls, ViewColor, ViewMode } from "../../types";
import { GlContext } from "../gl/gl-context";
import { GlCustomContext } from "../gl/gl-custom-context";
import { GlEntity } from "../gl/gl-entity";
import { addGlEntityFrom3do } from "../gl/gl-from-3do";
import { GlModelHelpers } from "../gl/gl-model-helpers";
import { ProgramInfo } from "../gl/program-info";
import { WebglEngineShaderSources } from "../webgl-engine";

// TODO make these configurable(?)
const BASE_CAMERA_OFFSET = 8;
const ZOOM_MODIFIER = 0.01;
const TRANSLATION_MODIFIER = 0.01;
const DEFAULT_BASE_COLOR: ViewColor = [1.0, 1.0, 1.0, 1.0];

type AnyProgramInfo = ProgramInfo<string, string>;

export abstract class WebglSubRenderer<TProgramInfo extends AnyProgramInfo> {
  protected readonly programInfo: TProgramInfo;
  protected readonly ctx: GlContext;
  protected readonly rootEntity: GlEntity;

  constructor(
    protected readonly gl: WebGLRenderingContext,
    protected readonly shaderSources: WebglEngineShaderSources,
    protected readonly object3doTree: Object3doTree,
  ) {
    this.programInfo = this.initProgram();
    this.ctx = this.initContext();
    this.rootEntity = this.initRootEntity();
  }

  protected abstract getViewMode(): ViewMode;

  protected abstract initProgram(): TProgramInfo;

  protected initContext(): GlContext {
    return new GlCustomContext(this.gl, this.programInfo, this.getViewMode());
  }

  protected initRootEntity(): GlEntity {
    const rootEntity = new GlEntity(null);

    for (const object3do of this.object3doTree.rootNodes) {
      addGlEntityFrom3do(
        this.ctx,
        object3do,
        rootEntity,
        this.getViewMode() !== 'wireframe',
        this.getViewMode() !== 'wireframe',
        this.getViewMode() === 'normal',
      );
    }
    // const cube = GlModelHelpers.makeCube(this.gl, this.programInfo);
    // rootEntity.addChild(cube);

    return rootEntity;
  }

  protected inBeforeTheRootRender() {
    // nothing
  }

  render(gl: WebGLRenderingContext, modelControls: ModelControls, delta?: number) {
    const viewWidth = gl.drawingBufferWidth;
    const viewHeight = gl.drawingBufferHeight;

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const fieldOfView = (45 * Math.PI) / 180;
    const aspect = viewWidth / viewHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    gl.useProgram(this.programInfo.program);

    this.ctx.setUniformFloat4('baseColor', modelControls.viewColor ?? DEFAULT_BASE_COLOR);

    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
    this.ctx.setUniformMatrix4('projectionMatrix', projectionMatrix);

    const xOffset = modelControls.translationX * TRANSLATION_MODIFIER;
    const yOffset = modelControls.translationY * TRANSLATION_MODIFIER * -1;
    const zOffset = (BASE_CAMERA_OFFSET + modelControls.zoom * ZOOM_MODIFIER) * -1;

    this.rootEntity.resetTransformations();
    this.rootEntity.translate(xOffset, yOffset, zOffset);
    this.rootEntity.rotateX(glMatrix.toRadian(modelControls.rotationX * .75));
    this.rootEntity.rotateY(glMatrix.toRadian(modelControls.rotationY * .75));
    this.rootEntity.rotateZ(glMatrix.toRadian(modelControls.rotationZ * .75));

    this.inBeforeTheRootRender();

    this.rootEntity.render(this.ctx);
  }

  update(delta: number) {
    /*const wing1a = this.rootEntity.findChild('wing1a', true)!;
    const wing2a = this.rootEntity.findChild('wing2a', true)!;

    const rotation = 0;

    wing1a.resetTransformations();
    wing1a.rotateZ(glMatrix.toRadian(rotation));

    wing2a.resetTransformations();
    wing2a.rotateZ(glMatrix.toRadian(-rotation));

    wing1a.setColor([1.0, 0.0, 0.0, 1.0]);
    wing2a.setColor([0.0, 0.0, 1.0, 1.0]);*/
  }
}
