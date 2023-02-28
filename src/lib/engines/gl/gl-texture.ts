export class GlTexture {
  protected readonly gl: WebGLRenderingContext;
  private handle: WebGLTexture;
  private deleted = false;
  private ok = false; // has a valid texture

  constructor(gl: WebGLRenderingContext) {
    this.gl = gl;
    const handle = gl.createTexture();

    if (handle === null) {
      throw new Error(`Failed to create texture.`);
    }

    this.handle = handle;
  }

  use(sampler: WebGLUniformLocation): boolean {
    if (this.deleted) {
      throw `Trying to use a texture that has already been deleted.`;
    }

    if (!this.ok) {
      return false;
    }

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.handle);
    this.gl.uniform1i(sampler, 0);
    return true;
  }

  loadDataFromPixels(width: number, height: number, data: Uint8Array) {
    if (this.deleted) {
      throw `Trying to use a texture that has already been deleted.`;
    }

    const level = 0;
    const internalFormat = this.gl.RGBA;
    const border = 0;
    const srcFormat = this.gl.RGBA;
    const srcType = this.gl.UNSIGNED_BYTE;

    this.gl.bindTexture(this.gl.TEXTURE_2D, this.handle);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      level,
      internalFormat,
      width,
      height,
      border,
      srcFormat,
      srcType,
      data,
    );

    this.ok = true;
  }

  loadDataFromImage(image: HTMLImageElement) {
    if (this.deleted) {
      throw `Trying to use a texture that has already been deleted.`;
    }

    if (!image.complete || image.naturalWidth === 0) {
      console.error(`Trying to load data from an image that hasn't yet loaded!`);

      const fallbackPixel = new Uint8Array([255, 255, 255, 255]); // opaque white
      this.loadDataFromPixels(1, 1, fallbackPixel);

      image.onload = () => {
        if (image.complete && image.naturalWidth !== 0) {
          this.loadDataFromImage(image);
        }
      };

      return;
    }

    const level = 0;
    const internalFormat = this.gl.RGBA;
    const srcFormat = this.gl.RGBA;
    const srcType = this.gl.UNSIGNED_BYTE;

    this.gl.bindTexture(this.gl.TEXTURE_2D, this.handle);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      level,
      internalFormat,
      srcFormat,
      srcType,
      image,
    );

    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      this.gl.generateMipmap(this.gl.TEXTURE_2D);
    }

    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);

    this.ok = true;
  }

  delete() {
    this.gl.deleteTexture(this.handle);
    this.deleted = true;
  }
}

function isPowerOf2(value: number) {
  return (value & (value - 1)) === 0;
}
