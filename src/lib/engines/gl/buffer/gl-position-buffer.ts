import { GlArrayBuffer } from "./gl-array-buffer";

export class GlPositionBuffer extends GlArrayBuffer {
  protected override doBufferData(data: BufferSource) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
  }

  protected override doUse(): void {
    const numComponents = 3; // X, Y, Z
    const type = this.gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);

    this.gl.vertexAttribPointer(
      this.attribLocation,
      numComponents,
      type,
      normalize,
      stride,
      offset,
    );

    this.gl.enableVertexAttribArray(this.attribLocation);
  }

  static createBufferSourceFromPositions(positions: number[]): BufferSource {
    return new Float32Array(positions);
  }
}
