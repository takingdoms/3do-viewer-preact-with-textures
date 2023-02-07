import { GlColorBuffer } from "./buffer/gl-color-buffer";
import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";

export class GlModel {
  private positionBuffer: GlPositionBuffer;
  private colorBuffer: GlColorBuffer;
  private indexBuffer: GlIndexBuffer;

  constructor(
    positionBuffer: GlPositionBuffer,
    colorBuffer: GlColorBuffer,
    indexBuffer: GlIndexBuffer,
  ) {
    this.positionBuffer = positionBuffer;
    this.colorBuffer = colorBuffer;
    this.indexBuffer = indexBuffer;
  }

  static createFromTODO(todo: any): GlModel {
    throw 'TODO';
    // return new GlObject();
  }

  draw(ctx: GlContext) {
    this.positionBuffer.use();
    this.colorBuffer.use();

    this.indexBuffer.use();
    ctx.drawElements(this.indexBuffer.getLength());
  }
}
