import { Object3do, Primitive3do, Vertex3do } from "@takingdoms/lib-3do";
import { ObjectEntityMap } from "../webgl-sub-renderers/webgl-sub-renderer";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";
import { GlModel } from "./gl-model";
import { GlModelHelpers } from "./gl-model-helpers";
import { Vector3 } from "./types";

const SCALE = 0.000001;

export function addGlEntityFrom3do(
  ctx: GlContext,
  child: Object3do,
  parent: GlEntity,
  inputObjectEntityMap: ObjectEntityMap,
  triangulateQuads: boolean,
  computeNormals: boolean,
  useTextures: boolean,
) {
  // the wrapper exists to isolate the offsets transformations from "user" transformations
  // so for example, if the user calls entity.resetTransformations() the offsets won't be lost
  // provided that the entity being referenced isn't a wrapper (which it should never be)
  // TODO find a better solution (maybe store two matrices? one for parent offset and one for user transforms)
  const wrapper = new GlEntity(null, 'WRAPPER:' + child.name);
  wrapper.translate(child.xOffset * SCALE, child.yOffset * SCALE, child.zOffset * SCALE);

  const modelParts: GlModel[] = [];

  for (const primitive of child.primitives) {
    const model = glModelFrom3do(
      ctx,
      child.vertices,
      primitive,
      triangulateQuads,
      computeNormals,
      useTextures,
    );

    if (model === null) {
      continue;
    }

    if (useTextures && validateTextureName(primitive.textureName)) {
      model.setTextureKey(primitive.textureName);
    }

    modelParts.push(model);
  }

  const objectEntity = new GlEntity(modelParts, child.name);
  wrapper.addChild(objectEntity);
  inputObjectEntityMap.set(child, objectEntity);

  for (const subChild of child.children) {
    addGlEntityFrom3do(
      ctx,
      subChild,
      objectEntity,
      inputObjectEntityMap,
      triangulateQuads,
      computeNormals,
      useTextures,
    );
  }

  parent.addChild(wrapper);
}

function glModelFrom3do(
  ctx: GlContext,
  vertices: Vertex3do[],
  primitive: Primitive3do,
  triangulateQuads: boolean,
  computeNormals: boolean,
  useTextures: boolean,
): GlModel | null {
  // pre-ordered and pre-scaled
  const preOrderedVertices: Vector3[] = primitive.vertexIndices.map((index) => {
    const nextVertex = vertices[index]!;
    return [
      nextVertex.x * SCALE,
      nextVertex.y * SCALE,
      nextVertex.z * SCALE,
    ];
  });

  if (primitive.vertexIndices.length === 3) {
    const texCoords = useTextures
      ? [
        0, 0,
        0, 1,
        1, 1,
      ]
      : null;

    return GlModelHelpers.createModelFromIndexedVertices(ctx, {
      vertices: preOrderedVertices,
      indices: [0, 1, 2],
      texCoords,
    }, computeNormals);
  }

  if (primitive.vertexIndices.length === 4) {
    // when using textures the quads should be triangulated
    const texCoords = useTextures && triangulateQuads
      ? [
        0, 0,
        1, 0,
        1, 1,
        0, 1,
      ]
      : null;

    return GlModelHelpers.createModelFromIndexedVertices(ctx, {
      vertices: preOrderedVertices,
      indices: triangulateQuads
        ? [
          0, 1, 2,
          0, 2, 3,
        ]
        : [0, 1, 2, 3],
      texCoords,
    }, computeNormals);
  }

  return null;
}

// TODO put this function somewhere else
function validateTextureName(textureName: string) {
  // return /^[a-zA-Z0-9]+$/.test(textureName);
  return /^(?!^(?:COM|PRN|AUX|NUL|CON|CLOCK\$)(?:\..+)?$)[^\s\\/:\*\?\"<>\|\x00-\x1F\x7F]{1,254}$/
    .test(textureName);
}
