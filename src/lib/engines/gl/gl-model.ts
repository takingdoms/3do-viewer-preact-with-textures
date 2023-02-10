import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlNormalBuffer } from "./buffer/gl-normal-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";

export class GlModel {
  private positionBuffer: GlPositionBuffer;
  private indexBuffer: GlIndexBuffer;
  private normalBuffer?: GlNormalBuffer;

  constructor(
    positionBuffer: GlPositionBuffer,
    indexBuffer: GlIndexBuffer,
    normalBuffer?: GlNormalBuffer,
  ) {
    this.positionBuffer = positionBuffer;
    this.indexBuffer = indexBuffer;
    this.normalBuffer = normalBuffer;
  }

  usesNormals() {
    return this.normalBuffer !== undefined;
  }

  draw(ctx: GlContext) {
    this.positionBuffer.use();
    this.indexBuffer.use();

    if (this.normalBuffer) {
      this.normalBuffer.use();
    }

    ctx.drawElements(this.indexBuffer.getLength());
  }
}
