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

export const GlModelHelpers = {
  createModelFromIndexedColoredVertices,
};
