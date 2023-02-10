import { mat4, ReadonlyVec4 } from "gl-matrix";
import { ProgramInfo } from "./program-info";

export class GlContext {
  protected gl: WebGLRenderingContext;
  protected programInfo: ProgramInfo<any, any>;

  constructor(gl: WebGLRenderingContext, programInfo: ProgramInfo<any, any>) {
    this.gl = gl;
    this.programInfo = programInfo;
  }

  /// Warning: Use this only when REALLY needed
  getGl() {
    return this.gl;
  }

  getProgramInfo(): Readonly<ProgramInfo<any, any>> {
    return this.programInfo;
  }

  setUniformMatrix4(uniform: string, matrix: mat4) {
    const location = this.programInfo.uniformLocations[uniform];

    if (location) {
      this.gl.uniformMatrix4fv(location, false, matrix);
    }
  }

  setUniformFloat4(uniform: string, data: Readonly<Float32List>) {
    if (data.length !== 4) {
      throw new Error(`data.length is not 4: ${data.length}`);
    }

    const location = this.programInfo.uniformLocations[uniform];

    if (location) {
      this.gl.uniform4fv(location, data);
    }
  }

  drawElements(length: number) {
    this.gl.drawElements(this.gl.TRIANGLES, length, this.gl.UNSIGNED_SHORT, 0);
  }
}
