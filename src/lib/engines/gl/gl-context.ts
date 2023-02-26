import { mat4, ReadonlyVec4 } from "gl-matrix";
import { LoadableTexture, TextureMapping } from "../../texture-mapping";
import { GlTexture } from "./gl-texture";
import { ProgramInfo } from "./program-info";

export class GlContext {
  protected gl: WebGLRenderingContext;
  protected programInfo: ProgramInfo<any, any>;

  private textureMapping: Readonly<TextureMapping> | undefined = undefined;

  // keys are the same as the keys in textureMapping
  private textureDatabase: Record<string, GlTexture | null> = {};

  private lastTexture?: GlTexture | null; // undefined = not initialized; null = no texture

  constructor(gl: WebGLRenderingContext, programInfo: ProgramInfo<any, any>) {
    this.gl = gl;
    this.programInfo = programInfo;

    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

    // gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    // gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
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

  setUniformBool(uniform: string, bool: boolean) {
    const location = this.programInfo.uniformLocations[uniform];

    if (location) {
      this.gl.uniform1i(location, bool ? 1 : 0);
    }
  }

  drawElements(length: number) {
    this.gl.drawElements(this.gl.TRIANGLES, length, this.gl.UNSIGNED_SHORT, 0);
  }

  useTexture(textureKey: string | null): boolean {
    let texture: GlTexture | null;

    if (textureKey === null) {
      texture = null;
    }
    else {
      const fromDb = this.textureDatabase[textureKey];

      if (fromDb === undefined) {
        console.error(`Missing texture for: ${textureKey}`);
        texture = null;
      }
      else {
        texture = fromDb;
      }
    }

    if (this.lastTexture === texture) {
      // already using this texture
      return texture !== null;
    }

    this.lastTexture = texture;

    if (texture === null) {
      // TODO unbind texture? or use fallback (all white) texture maybe?
      return false;
    }

    texture.use(this.programInfo.uniformLocations['sampler']!);
    return true;
  }

  changeTextureMapping(textureMapping: Readonly<TextureMapping>) {
    for (const [key, value] of Object.entries(textureMapping)) {
      if (this.textureMapping === undefined) {
        this.textureDatabase[key] = value === null
          ? null
          : this.setupTexture(value);

        continue;
      }

      const didChange = this.textureMapping[key] !== value;

      if (!didChange) {
        continue;
      }

      const existing = this.textureDatabase[key];

      if (existing !== undefined && existing !== null) {
        existing.delete();
      }

      this.textureDatabase[key] = value === null
        ? null
        : this.setupTexture(value);
    }

    this.textureMapping = textureMapping;
  }

  private setupTexture(loadableTexture: LoadableTexture): GlTexture {
    const texture = new GlTexture(this.gl);

    if (loadableTexture.type === 'html') {
      texture.loadDataFromImage(loadableTexture.image);
    }
    else {
      const { width, height, data } = loadableTexture;
      texture.loadDataFromPixels(width, height, data);
    }

    return texture;
  }
}
