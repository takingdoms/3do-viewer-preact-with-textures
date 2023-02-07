import { Object3do } from "@takingdoms/lib-3do";
import { GlColorBuffer } from "./buffer/gl-color-buffer";
import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";
import { GlModel } from "./gl-model";
import { ColorRGBA } from "./types";

export function glEntityFrom3do(object3do: Object3do, ctx: GlContext): GlEntity {
  const model = glModelFrom3do(object3do, ctx);
  const entity = new GlEntity(model);

  return entity;
}

function glModelFrom3do(object3do: Object3do, ctx: GlContext): GlModel {
  const v0 = [-1,  0, +1];
  const v1 = [-1,  0, -1];
  const v2 = [+1,  0, -1];
  const v3 = [+1,  0, +1];
  const v4 = [ 0, +1,  0];

  const pyramidPosition = new GlPositionBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexPosition);
  pyramidPosition.bufferData(
    GlPositionBuffer.createBufferSourceFromPositions([
      ...v0, ...v1, ...v4,        // left
      ...v1, ...v2, ...v4,        // up
      ...v2, ...v3, ...v4,        // right
      ...v0, ...v3, ...v4,        // down
      ...v0, ...v1, ...v2, ...v3, // base
    ])
  );

  const white: ColorRGBA = [1.0, 1.0, 1.0, 1.0];
  const red: ColorRGBA = [1.0, 0.0, 0.0, 1.0];
  const green: ColorRGBA = [0.0, 1.0, 0.0, 1.0];
  const blue: ColorRGBA = [0.0, 0.0, 1.0, 1.0];
  const yellow: ColorRGBA = [1.0, 1.0, 0.0, 1.0];

  const pyramidColor = new GlColorBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexColor);
  pyramidColor.bufferData(
    GlColorBuffer.createBufferSourceFromColors([
      blue,   red,    white,          // left triangle   (white)
      red,    green,  white,          // up triangle     (red)
      green,  yellow, white,          // right triangle  (green)
      blue,   yellow, white,          // bottom triangle (blue)
      blue,   red,    green, yellow,  // base square     (yellow)
    ])
  );

  const pyramidIndices = new GlIndexBuffer(ctx.getGl());
  pyramidIndices.bufferData(
    GlIndexBuffer.createBufferSourceFromIndices([
       0,  1,  2, // left
       3,  4,  5, // up
       6,  7,  8, // right
       9, 10, 11, // down
      12, 13, 14, // base (top-left half)
      12, 14, 15, // base (bottom-right half)
    ])
  );

  const model = new GlModel(pyramidPosition, pyramidColor, pyramidIndices);
  return model;
}
