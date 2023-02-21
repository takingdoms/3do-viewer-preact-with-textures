import { GlArrayBuffer } from "./gl-array-buffer";

export class GlTextureCoordBuffer extends GlArrayBuffer {
  protected override doBufferData(data: BufferSource): void {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
  }

  protected override doUse(): void {
    const num = 2; // U, V
    const type = this.gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);

    this.gl.vertexAttribPointer(
      this.attribLocation,
      num,
      type,
      normalize,
      stride,
      offset,
    );

    this.gl.enableVertexAttribArray(this.attribLocation);
  }

  static createBufferSourceFromCoords(coords: number[]): BufferSource {
    return new Float32Array(coords);
  }
}
