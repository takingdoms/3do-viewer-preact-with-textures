import { ColorRGBA } from "../types";
import { GlArrayBuffer } from "./gl-array-buffer";

export class GlColorBuffer extends GlArrayBuffer {
  protected override doBufferData(data: BufferSource) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
  }

  protected override doUse(): void {
    const numComponents = 4; // R, G, B, A
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
      offset
    );

    this.gl.enableVertexAttribArray(this.attribLocation);
  }

  static createBufferSourceFromColors(colors: ColorRGBA[]): BufferSource {
    const data: number[] = [];

    for (let i = 0; i < colors.length; ++i) {
      const nextColor = colors[i];
      // colors = colors.concat(nextColor, nextColor, nextColor, nextColor);
      data.push(...nextColor, ...nextColor, ...nextColor, ...nextColor);
    }

    return new Float32Array(data);
  }
}
