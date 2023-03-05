import { ViewMode } from "../../../lib/types";
import { ProgramInfo } from "../gl/program-info";
import { WebGlHelper } from "../gl/webgl-helper";
import { WebglSubRenderer } from "./webgl-sub-renderer";

export type WireframeProgramInfo = ProgramInfo<
  'vertexPosition',
  'modelViewMatrix' | 'projectionMatrix' | 'baseColor' | 'entityColor'
>;

export class WireframeRenderer extends WebglSubRenderer<WireframeProgramInfo> {
  protected getViewMode(): ViewMode {
    return 'wireframe';
  }

  protected initProgram(): WireframeProgramInfo {
    const { vsSource, fsSource } = this.shaderSources.wireframe;

    const vsShader = WebGlHelper.compileShader(this.gl, vsSource, this.gl.VERTEX_SHADER);
    const fsShader = WebGlHelper.compileShader(this.gl, fsSource, this.gl.FRAGMENT_SHADER);
    const shaderProgram = WebGlHelper.createProgram(this.gl, vsShader, fsShader);

    return {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: this.gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      },
      uniformLocations: {
        modelViewMatrix: this.gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')!,
        projectionMatrix: this.gl.getUniformLocation(shaderProgram, 'uProjectionMatrix')!,
        baseColor: this.gl.getUniformLocation(shaderProgram, 'baseColor')!,
        entityColor: this.gl.getUniformLocation(shaderProgram, 'entityColor')!,
      },
    };
  }
}
