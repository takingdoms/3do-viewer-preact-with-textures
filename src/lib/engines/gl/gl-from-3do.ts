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

  const wht: ColorRGBA = [1.0, 1.0, 1.0, 1.0];
  const red: ColorRGBA = [1.0, 0.0, 0.0, 1.0];
  const gre: ColorRGBA = [0.0, 1.0, 0.0, 1.0];
  const blu: ColorRGBA = [0.0, 0.0, 1.0, 1.0];
  const yel: ColorRGBA = [1.0, 1.0, 0.0, 1.0];

  return GlModelHelpers.createModelFromIndexedColoredVertices(ctx, {
    vertices: [
      { vertex: v0, color: blu }, { vertex: v1, color: blu }, { vertex: v4, color: blu }, // 0, 1, 2
      { vertex: v1, color: red }, { vertex: v2, color: red }, { vertex: v4, color: red }, // 3, 4, 5
      { vertex: v2, color: gre }, { vertex: v3, color: gre }, { vertex: v4, color: gre }, // 6, 7, 8
      { vertex: v0, color: yel }, { vertex: v3, color: yel }, { vertex: v4, color: yel }, // 9, 10, 11

      { vertex: v0, color: wht }, // 12
      { vertex: v1, color: wht }, // 13
      { vertex: v2, color: wht }, // 14
      { vertex: v3, color: wht }, // 15
    ],
    indices: [
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
      9, 10, 11,
      12, 13, 14,
      12, 14, 15,
    ],
  });
}
