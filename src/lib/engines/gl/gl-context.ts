import { mat4, ReadonlyVec4 } from "gl-matrix";
import { ProgramInfo } from "./program-info";

export class GlContext {
  protected gl: WebGLRenderingContext;
  protected programInfo: ProgramInfo;

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

  setUniformMatrix4(uniform: 'projection' | 'model', matrix: mat4) {
    const location = uniform === 'projection'
      ? this.programInfo.uniformLocations.projectionMatrix
      : this.programInfo.uniformLocations.modelViewMatrix;

    this.gl.uniformMatrix4fv(location, false, matrix);
  }

  setUniformFloat4(uniform: 'baseColor', data: Readonly<Float32List>) {
    if (data.length !== 4) {
      throw new Error(`data.length is not 4: ${data.length}`);
    }

    this.gl.uniform4fv(this.programInfo.uniformLocations.baseColor, data);
  }

  drawElements(length: number) {
    this.gl.drawElements(this.gl.TRIANGLES, length, this.gl.UNSIGNED_SHORT, 0);
  }
}
