import { ViewMode } from "src/lib/types";
import { ProgramInfo } from "../gl/program-info";
import { WebGlHelper } from "../gl/webgl-helper";
import { WebglSubRenderer } from "./webgl-sub-renderer";

type SolidColorProgramInfo = ProgramInfo<
  'vertexPosition',
  'modelViewMatrix' | 'projectionMatrix' | 'baseColor' | 'entityColor'
>;

export class SolidColorRenderer extends WebglSubRenderer<SolidColorProgramInfo> {
  protected getViewMode(): ViewMode {
    return 'solid_color';
  }

  protected initProgram(): SolidColorProgramInfo {
    const { vsSource, fsSource } = this.shaderSources.solid;

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
