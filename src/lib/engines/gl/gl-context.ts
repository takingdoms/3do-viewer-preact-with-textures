import { mat4 } from "gl-matrix";
import { ProgramInfo } from "./program-info";

type UniformType = 'projection' | 'model';

export class GlContext {
  private gl: WebGLRenderingContext;
  private programInfo: ProgramInfo;

  constructor(gl: WebGLRenderingContext, programInfo: ProgramInfo) {
    this.gl = gl;
    this.programInfo = programInfo;
  }

  /// Warning: Use this only when REALLY needed
  getGl() {
    return this.gl;
  }

  getProgramInfo(): Readonly<ProgramInfo> {
    return this.programInfo;
  }

  setUniform(uniformType: UniformType, matrix: mat4) {
    const location = uniformType === 'projection'
      ? this.programInfo.uniformLocations.projectionMatrix
      : this.programInfo.uniformLocations.modelViewMatrix;

    this.gl.uniformMatrix4fv(location, false, matrix);
  }

  drawElements(length: number) {
    this.gl.drawElements(this.gl.TRIANGLES, length, this.gl.UNSIGNED_SHORT, 0);
  }
}
