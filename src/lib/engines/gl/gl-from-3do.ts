import { Object3do, Primitive3do, Vertex3do } from "@takingdoms/lib-3do";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";
import { GlModel } from "./gl-model";
import { GlModelHelpers } from "./gl-model-helpers";

export function addGlEntityFrom3do(
  ctx: GlContext,
  child: Object3do,
  parent: GlEntity,
  triangulateQuads: boolean,
) {
  // the wrapper exists to isolate the offsets transformations from "user" transformations
  // so for example, if the user calls entity.resetTransformations() the offsets won't be lost
  // provided that the entity being referenced isn't a wrapper (which it should never be)
  // TODO find a better solution (maybe store two matrices? one for parent offset and one for user transforms)
  const wrapper = new GlEntity(null, 'WRAPPER:' + child.name);
  wrapper.translate(child.xOffset, child.yOffset, child.zOffset);

  const group = new GlEntity(null, child.name);
  wrapper.addChild(group);

  for (const primitive of child.primitives) {
    const model = glModelFrom3do(ctx, child.vertices, primitive, triangulateQuads);

    if (model === null) {
      continue;
    }

    const entity = new GlEntity(model);
    group.addChild(entity);
  }

  for (const subChild of child.children) {
    addGlEntityFrom3do(ctx, subChild, group, triangulateQuads);
  }

  parent.addChild(wrapper);
}

function glModelFrom3do(
  ctx: GlContext,
  vertices: Vertex3do[],
  primitive: Primitive3do,
  triangulateQuads: boolean,
): GlModel | null {
  if (primitive.vertexIndices.length === 3) {
    return GlModelHelpers.createModelFromIndexedVertices(ctx, {
      vertices: vertices.map((vert) => [vert.x, vert.y, vert.z]),
      indices: primitive.vertexIndices,
    });
  }

  if (primitive.vertexIndices.length === 4) {
    const indices = primitive.vertexIndices;

    return GlModelHelpers.createModelFromIndexedVertices(ctx, {
      vertices: vertices.map((vert) => [vert.x, vert.y, vert.z]),
      indices: triangulateQuads
        ? [
          indices[0], indices[1], indices[2],
          indices[0], indices[2], indices[3],
        ]
        : [
          indices[0], indices[1], indices[2], indices[3],
        ],
    });
  }

  return null;
}
