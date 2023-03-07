import { GlContext } from "./gl-context";
import { ProgramInfo } from "./program-info";
import { ViewMode } from "../../types";
import { TakLogoColorsDefinitions } from "../../logo-colors";

export class GlCustomContext extends GlContext {
  private viewMode: ViewMode;

  constructor(
    gl: WebGLRenderingContext,
    programInfo: ProgramInfo<any, any>,
    logoDefs: TakLogoColorsDefinitions,
    viewMode: ViewMode,
  ) {
    super(gl, programInfo, logoDefs);
    this.viewMode = viewMode;
  }

  override drawElements(length: number): void {
    if (this.viewMode === 'wireframe') {
      this.gl.drawElements(this.gl.LINE_LOOP, length, this.gl.UNSIGNED_SHORT, 0);
    }
    else {
      this.gl.drawElements(this.gl.TRIANGLES, length, this.gl.UNSIGNED_SHORT, 0);
    }
  }

  override useTexture(textureKey: string | null): boolean {
    if (this.viewMode === 'regular')
      return super.useTexture(textureKey);

    return true;
  }
}
