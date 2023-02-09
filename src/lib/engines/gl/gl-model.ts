import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";

export class GlModel {
  private positionBuffer: GlPositionBuffer;
  private indexBuffer: GlIndexBuffer;

  constructor(
    positionBuffer: GlPositionBuffer,
    indexBuffer: GlIndexBuffer,
  ) {
    this.positionBuffer = positionBuffer;
    this.indexBuffer = indexBuffer;
  }

  draw(ctx: GlContext) {
    this.positionBuffer.use();

    this.indexBuffer.use();
    ctx.drawElements(this.indexBuffer.getLength());
  }
}
