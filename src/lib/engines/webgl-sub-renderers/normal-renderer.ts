import { ViewMode } from "src/lib/types";
import { ProgramInfo } from "../gl/program-info";
import { WebGlHelper } from "../gl/webgl-helper";
import { WebglSubRenderer } from "./webgl-sub-renderer";

type NormalProgramInfo = ProgramInfo<
  'vertexPosition' | 'vertexNormal',
  'modelViewMatrix' | 'projectionMatrix' | 'baseColor' | 'entityColor' | 'normalMatrix'
>;

export class NormalRenderer extends WebglSubRenderer<NormalProgramInfo> {
  protected getViewMode(): ViewMode {
    return 'normal';
  }

  protected initProgram(): NormalProgramInfo {
    const { vsSource, fsSource } = this.shaderSources.normal;

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
      },
    };
  }
}
