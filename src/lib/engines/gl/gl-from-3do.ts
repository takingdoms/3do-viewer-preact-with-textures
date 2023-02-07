import { Object3do } from "@takingdoms/lib-3do";
import { GlColorBuffer } from "./buffer/gl-color-buffer";
import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";
import { GlModel } from "./gl-model";
import { GlModelHelpers } from "./gl-model-helpers";
import { ColorRGBA, Vector3 } from "./types";

export function glEntityFrom3do(object3do: Object3do, ctx: GlContext): GlEntity {
  const model = glModelFrom3do(object3do, ctx);
  const entity = new GlEntity(model);

  return entity;
}

function glModelFrom3do(object3do: Object3do, ctx: GlContext): GlModel {
  const v0: Vector3 = [-1,  0, +1];
  const v1: Vector3 = [-1,  0, -1];
  const v2: Vector3 = [+1,  0, -1];
  const v3: Vector3 = [+1,  0, +1];
  const v4: Vector3 = [ 0, +1,  0];

  const white: ColorRGBA = [1.0, 1.0, 1.0, 1.0];
  const red: ColorRGBA = [1.0, 0.0, 0.0, 1.0];
  const green: ColorRGBA = [0.0, 1.0, 0.0, 1.0];
  const blue: ColorRGBA = [0.0, 0.0, 1.0, 1.0];
  const yellow: ColorRGBA = [1.0, 1.0, 0.0, 1.0];

  return GlModelHelpers.createModelFromIndexedColoredVertices(ctx, {
    vertices: [
      { vertex: v0, color: blue },
      { vertex: v1, color: red },
      { vertex: v2, color: green },
      { vertex: v3, color: yellow },
      { vertex: v4, color: white },
    ],
    indices: [
      0, 1, 4,
      1, 2, 4,
      2, 3, 4,
      0, 3, 4,
      0, 1, 2,
      0, 2, 3,
    ],
  });
}
