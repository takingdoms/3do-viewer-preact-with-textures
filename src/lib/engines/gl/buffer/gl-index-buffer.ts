import { GlBuffer } from "./gl-buffer";

export class GlIndexBuffer extends GlBuffer {
  private length = 0;

  getLength(): number {
    return this.length;
  }

  protected override doBufferData(data: BufferSource) {
    this.length = data.byteLength / 2; // because it's an array of uint16 (this is pretty bs TODO do smth better)
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.handle);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
  }

  protected override doUse(): void {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.handle);
  }

  static createBufferSourceFromIndices(indices: number[]): BufferSource {
    return new Uint16Array(indices);
  }
}
