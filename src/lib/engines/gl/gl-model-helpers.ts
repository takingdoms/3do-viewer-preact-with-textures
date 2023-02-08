import { GlColorBuffer } from "./buffer/gl-color-buffer";
import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";
import { GlModel } from "./gl-model";
import { ColorRGBA, Vector3 } from "./types";

type ColoredVertex = {
  vertex: Vector3;
  color: ColorRGBA;
};

type IndexedColoredVerticesData = {
  vertices: ColoredVertex[];
  indices: number[]; // indexes into the above /\
};

function createModelFromIndexedColoredVertices(ctx: GlContext, data: IndexedColoredVerticesData): GlModel {
  const positionData = data.vertices.flatMap((coloredVertex) => {
    return coloredVertex.vertex;
  });

  const position = new GlPositionBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexPosition);
  position.bufferData(GlPositionBuffer.createBufferSourceFromPositions(positionData));

  const colorData = data.vertices.map((coloredVertex) => {
    return coloredVertex.color;
  });

  const color = new GlColorBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexColor);
  color.bufferData(GlColorBuffer.createBufferSourceFromColors(colorData));

  const indicesData = data.indices.map((index) => {
    if (index < 0 || index > data.vertices.length - 1)
      throw `Index out of bounds: ${index}`;

    return index;
  });

  const indices = new GlIndexBuffer(ctx.getGl());
  indices.bufferData(GlIndexBuffer.createBufferSourceFromIndices(indicesData));

  return new GlModel(position, color, indices);
}

// v0    0
// v1    1
// v2    2
// v0    3
// v2    4

function createModelFromSmartColoredVertices(ctx: GlContext, data: ColoredVertex[]): GlModel {
  const uniqueData: ColoredVertex[] = []; // data but without redundant (identical) items
  const uniqueDataIndices: number[] = []; // indexes data's items into the uniqueData items

  outer:for (let i = 0; i < data.length; i++) {
    const item = data[i];

    for (let j = 0; j < uniqueData.length; j++) {
      const normItem = uniqueData[j];

      if (isColoredVertexEqual(item, normItem)) {
        uniqueDataIndices.push(j);
        continue outer;
      }
    }

    uniqueData.push(item);
    uniqueDataIndices.push(uniqueData.length - 1);
  }

  return createModelFromIndexedColoredVertices(ctx, {
    vertices: uniqueData,
    indices: uniqueDataIndices,
  });
}

function isColoredVertexEqual(v1: ColoredVertex, v2: ColoredVertex): boolean {
  return isVertexEqual(v1.vertex, v2.vertex) && isColorEqual(v1.color, v2.color);
}

function isColorEqual(c1: ColorRGBA, c2: ColorRGBA): boolean {
  return c1[0] === c2[0] &&
         c1[1] === c2[1] &&
         c1[2] === c2[2] &&
         c1[3] === c2[3];
}

function isVertexEqual(v1: Vector3, v2: Vector3): boolean {
  return v1[0] === v2[0] &&
         v1[1] === v2[1] &&
         v1[2] === v2[2];
}

export const GlModelHelpers = {
  createModelFromIndexedColoredVertices,
  createModelFromSmartColoredVertices,
  isColoredVertexEqual,
};
