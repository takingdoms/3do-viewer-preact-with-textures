import { mat4, ReadonlyVec4 } from "gl-matrix";
import { TakLogoColorsDefinitions, TakLogoIndex } from "../../logo-colors";
import { LoadableTexture, TextureMapping } from "../../texture-mapping";
import { GlTexture } from "./gl-texture";
import { ProgramInfo } from "./program-info";

export class GlContext {
  protected gl: WebGLRenderingContext;
  protected programInfo: ProgramInfo<any, any>;
  private logoDefs: TakLogoColorsDefinitions;

  private currentLogoIdx: TakLogoIndex;
  private textureDatabase: Record<string, GlTexture | null> = {};
  private lastTexture?: GlTexture | null; // undefined = not initialized; null = no texture

  private baseEntityColor: ReadonlyVec4 = new Float32Array([1.0, 1.0, 1.0, 1.0]); // WHITE

  private textureMinFilter: number;
  private textureMagFilter: number;

  constructor(
    gl: WebGLRenderingContext,
    programInfo: ProgramInfo<any, any>,
    logoDefs: TakLogoColorsDefinitions,
  ) {
    this.gl = gl;
    this.programInfo = programInfo;
    this.logoDefs = logoDefs;

    this.currentLogoIdx = logoDefs.defaultIdx;

    this.textureMinFilter = gl.NEAREST;
    this.textureMagFilter = gl.NEAREST;
  }

  /// Warning: Use this only when REALLY needed
  getGl() {
    return this.gl;
  }

  getProgramInfo(): Readonly<ProgramInfo<any, any>> {
    return this.programInfo;
  }

  getBaseEntityColor(): ReadonlyVec4 {
    return this.baseEntityColor;
  }

  setBaseEntityColor(color: ReadonlyVec4) {
    this.baseEntityColor = color;
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

  setTextureMinFilter(filter: number) {
    this.textureMinFilter = filter;
  }

  setTextureMagFilter(filter: number) {
    this.textureMagFilter = filter;
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
      const actualTextureKey = this.logoDefs.textureKeyUsesLogo(textureKey)
        ? this.logoDefs.idxToTextureKey(this.currentLogoIdx, textureKey)
        : textureKey;

      const fromDb = this.textureDatabase[actualTextureKey];

      if (fromDb === undefined) {
        console.error(`Missing texture for: ${actualTextureKey}`);
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

    texture.use(this.programInfo.uniformLocations['sampler']!, this.textureMinFilter, this.textureMagFilter);
    return true;
  }

  changeTextureMapping(textureMapping: Readonly<TextureMapping>) {
    for (const [key, value] of Object.entries(textureMapping)) {
      const existing = this.textureDatabase[key];
      const didChange = existing !== value;

      if (!didChange) {
        continue;
      }

      if (existing !== undefined && existing !== null) {
        existing.delete();
      }

      this.textureDatabase[key] = value === null
        ? null
        : this.setupTexture(value);
    }
  }

  setCurrentLogoIdx(idx: TakLogoIndex) {
    this.currentLogoIdx = idx;
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
