import { ModelControls } from "../../types/model-controls";
import { ViewMode } from "../../types/view";
import { ProgramInfo } from "../gl/program-info";
import { WebGlHelper } from "../gl/webgl-helper";
import { WebglSubRenderer } from "./webgl-sub-renderer";

type SolidColorProgramInfo = ProgramInfo<
  'vertexPosition' | 'vertexNormal',
  'modelViewMatrix' | 'projectionMatrix' | 'baseColor' | 'entityColor' | 'normalMatrix' | 'useLights'
>;

export class SolidColorRenderer extends WebglSubRenderer<SolidColorProgramInfo> {
  protected override getViewMode(): ViewMode {
    return 'solid_color';
  }

  override changeModelControls(modelControls: ModelControls): void {
    this.ctx.setBaseEntityColor(modelControls.solidColor);
  }

  protected override initProgram(): SolidColorProgramInfo {
    const { vsSource, fsSource } = this.shaderSources.solid;

    const vsShader = WebGlHelper.compileShader(this.gl, vsSource, this.gl.VERTEX_SHADER);
    const fsShader = WebGlHelper.compileShader(this.gl, fsSource, this.gl.FRAGMENT_SHADER);
    const shaderProgram = WebGlHelper.createProgram(this.gl, vsShader, fsShader);

    return {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: this.gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        vertexNormal: this.gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
      },
      uniformLocations: {
        modelViewMatrix: this.gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')!,
        projectionMatrix: this.gl.getUniformLocation(shaderProgram, 'uProjectionMatrix')!,
        baseColor: this.gl.getUniformLocation(shaderProgram, 'baseColor')!,
        entityColor: this.gl.getUniformLocation(shaderProgram, 'entityColor')!,
        normalMatrix: this.gl.getUniformLocation(shaderProgram, 'uNormalMatrix')!,
        useLights: this.gl.getUniformLocation(shaderProgram, 'useLights')!,
      },
    };
  }

  protected override inBeforeTheRootRender(gl: WebGLRenderingContext, modelControls: ModelControls): void {
    if (modelControls.enableFaceCulling) {
      gl.enable(gl.CULL_FACE);
    } else {
      gl.disable(gl.CULL_FACE);
    }

    this.ctx.setUniformBool('useLights', modelControls.enableLightingSolidColor);
  }
}
