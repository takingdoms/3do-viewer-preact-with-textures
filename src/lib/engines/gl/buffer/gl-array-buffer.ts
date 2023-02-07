import { GlBuffer } from "./gl-buffer";

export abstract class GlArrayBuffer extends GlBuffer {
  protected readonly attribLocation: number;

  constructor(gl: WebGLRenderingContext, attribLocation: number) {
    super(gl);
    this.attribLocation = attribLocation;
  }
}
