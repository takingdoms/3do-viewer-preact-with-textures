import { Object3doTree } from "@takingdoms/lib-3do";
import { Engine, EngineListener } from "./engine";
import { ModelControls } from "../types";
import { WebGlHelper } from "./gl/webgl-helper";
import { ProgramInfo } from "./gl/program-info";
import { GlContext } from "./gl/gl-context";
import { GlEntity } from "./gl/gl-entity";
import { glMatrix, mat4 } from "gl-matrix";
import { glEntityFrom3do } from "./gl/gl-from-3do";

// TODO make these configurable(?)
const BASE_CAMERA_OFFSET = 8;
const SCALE = 0.000001;
const ZOOM_MODIFIER = 0.01;
const TRANSLATION_MODIFIER = 0.01;

export class WebGlRenderer extends Engine {
  private gl: WebGLRenderingContext;
  private programInfo: ProgramInfo;
  private ctx: GlContext;
  private rootEntity: GlEntity;

  constructor(
    canvas: HTMLCanvasElement,
    modelControls: ModelControls,
    listener: EngineListener,
    vsSource: string,
    fsSource: string,
    object3doTree: Object3doTree,
  ) {
    super(canvas, modelControls, listener);

    const gl = canvas.getContext('webgl');

    if (gl === null) {
      throw `Couldn't get WebGL rendering context!`;
    }

    this.gl = gl;

    //:: Setup webgl stuff

    const vsShader = WebGlHelper.compileShader(gl, vsSource, gl.VERTEX_SHADER);
    const fsShader = WebGlHelper.compileShader(gl, fsSource, gl.FRAGMENT_SHADER);
    const shaderProgram = WebGlHelper.createProgram(gl, vsShader, fsShader);

    this.programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
      },
      uniformLocations: {
        modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')!,
        projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix')!,
      },
    };

    //:: Setup context

    this.ctx = new GlContext(this.gl, this.programInfo);

    //:: Setup entities

    this.rootEntity = new GlEntity(null);

    for (const object3do of object3doTree.rootNodes) {
      const entity = glEntityFrom3do(object3do, this.ctx);
      this.rootEntity.addChild(entity);
    }

    //:: Setup resizing handler and then render

    // setupScene(this.root, object3doTree);
    // this.root.scale.set(SCALE, SCALE, SCALE);

    this.setupEvents();
  }

  protected onResized(): void {
    console.log(`Resized! (${this.width} x ${this.height})`);
    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    this.render();
  }

  protected render(): void {
    const viewWidth = this.gl.drawingBufferWidth;
    const viewHeight = this.gl.drawingBufferHeight;

    // console.log(`${viewWidth} x ${viewHeight}`);

    // TODO replace all this.gl with this.ctx?
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clearDepth(1.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);

    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    const fieldOfView = (45 * Math.PI) / 180;
    // const aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    const aspect = viewWidth / viewHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    this.gl.useProgram(this.programInfo.program);

    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
    this.ctx.setUniform('projection', projectionMatrix);

    const xOffset = this.modelControls.translationX * TRANSLATION_MODIFIER;
    const yOffset = this.modelControls.translationY * TRANSLATION_MODIFIER * -1;
    const zOffset = (BASE_CAMERA_OFFSET + this.modelControls.zoom * ZOOM_MODIFIER) * -1;

    this.rootEntity.resetTransformations();
    this.rootEntity.translate(xOffset, yOffset, zOffset);
    this.rootEntity.rotateX(glMatrix.toRadian(this.modelControls.rotationX * .75));
    this.rootEntity.rotateY(glMatrix.toRadian(this.modelControls.rotationY * .75));
    this.rootEntity.rotateZ(glMatrix.toRadian(this.modelControls.rotationZ * .75));

    this.rootEntity.render(this.ctx);
  }
}
