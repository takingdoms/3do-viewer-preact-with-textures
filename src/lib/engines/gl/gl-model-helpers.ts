import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";
import { GlModel } from "./gl-model";
import { ColorRGBA, Vector3 } from "./types";

type IndexedVerticesData = {
  vertices: Vector3[];
  indices: number[]; // indexes into the above /\
};

function createModelFromIndexedVertices(ctx: GlContext, data: IndexedVerticesData): GlModel {
  const positionData = data.vertices.flatMap((vertex) => {
    return vertex;
  });

  const position = new GlPositionBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexPosition);
  position.bufferData(GlPositionBuffer.createBufferSourceFromPositions(positionData));

  const indicesData = data.indices.map((index) => {
    if (index < 0 || index > data.vertices.length - 1)
      throw `Index out of bounds: ${index}`;

    return index;
  });

  const indices = new GlIndexBuffer(ctx.getGl());
  indices.bufferData(GlIndexBuffer.createBufferSourceFromIndices(indicesData));

  return new GlModel(position, indices);
}

/**
 * Similar to createModelFromIndexedColoredVertices but you can simply pass only the vertex+color
 * information and the function will automatically remove redundant (identical vertex) items
 * and automatically generate indices.
 */
function createModelFromSmartVertices(ctx: GlContext, data: Vector3[]): GlModel {
  const uniqueData: Vector3[] = []; // data but without redundant (identical) items
  const uniqueDataIndices: number[] = []; // indexes data's items into the uniqueData items

  outer:for (let i = 0; i < data.length; i++) {
    const item = data[i];

    for (let j = 0; j < uniqueData.length; j++) {
      const normItem = uniqueData[j];

      if (isVertexEqual(item, normItem)) {
        uniqueDataIndices.push(j);
        continue outer;
      }
    }

    uniqueData.push(item);
    uniqueDataIndices.push(uniqueData.length - 1);
  }

  // console.log(data);
  // console.log(uniqueData);

  return createModelFromIndexedVertices(ctx, {
    vertices: uniqueData,
    indices: uniqueDataIndices,
  });
}

function isVertexEqual(v1: Vector3, v2: Vector3): boolean {
  return v1[0] === v2[0] &&
         v1[1] === v2[1] &&
         v1[2] === v2[2];
}

export const GlModelHelpers = {
  createModelFromIndexedVertices,
  createModelFromSmartVertices,
};
