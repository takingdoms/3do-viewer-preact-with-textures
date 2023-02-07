import { GlContext } from "../gl-context";

export abstract class GlBuffer {
  protected readonly gl: WebGLRenderingContext;
  private readonly _handle: WebGLBuffer;
  private deleted = false;

  constructor(gl: WebGLRenderingContext) {
    this.gl = gl;

    const handle = gl.createBuffer();

    if (handle === null) {
      throw `Failed to create buffer!`;
    }

    this._handle = handle;
  }

  protected get handle() {
    return this._handle;
  }

  bufferData(data: BufferSource): void {
    if (this.deleted) {
      throw `Trying to use a buffer that has already been deleted.`;
    }

    this.doBufferData(data);
  }

  protected abstract doBufferData(data: BufferSource): void;

  use() {
    if (this.deleted) {
      throw `Trying to use a buffer that has already been deleted.`;
    }

    this.doUse();
  }

  protected abstract doUse(): void;

  delete() {
    if (this.deleted) {
      throw `Trying to delete a buffer that has already been deleted.`;
    }

    this.gl.deleteBuffer(this._handle);
    this.deleted = true;
  }
}
