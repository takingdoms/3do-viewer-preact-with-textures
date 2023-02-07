import { Object3do } from "@takingdoms/lib-3do";
import { GlColorBuffer } from "./buffer/gl-color-buffer";
import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";
import { GlModel } from "./gl-model";

export function glEntityFrom3do(object3do: Object3do, ctx: GlContext): GlEntity {
  const model = glModelFrom3do(object3do, ctx);
  const entity = new GlEntity(model);

  return entity;
}

function glModelFrom3do(object3do: Object3do, ctx: GlContext): GlModel {
  const cubePosition = new GlPositionBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexPosition);
  cubePosition.bufferData(
    GlPositionBuffer.createBufferSourceFromPositions([
      // Front face
      -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
      // Back face
      -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
      // Top face
      -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
      // Bottom face
      -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
      // Right face
      1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
      // Left face
      -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
    ])
  );

  const cubeColor = new GlColorBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexColor);
  cubeColor.bufferData(
    GlColorBuffer.createBufferSourceFromColors([
      [1.0, 1.0, 1.0, 1.0], // Front face: white
      [1.0, 0.0, 0.0, 1.0], // Back face: red
      [0.0, 1.0, 0.0, 1.0], // Top face: green
      [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
      [1.0, 1.0, 0.0, 1.0], // Right face: yellow
      [1.0, 0.0, 1.0, 1.0], // Left face: purple
    ])
  );

  const cubeIndices = new GlIndexBuffer(ctx.getGl());
  cubeIndices.bufferData(
    GlIndexBuffer.createBufferSourceFromIndices([
        0,  1,  2,  0,  2,  3, // front
        4,  5,  6,  4,  6,  7, // back
        8,  9, 10,  8, 10, 11, // top
      12, 13, 14, 12, 14, 15, // bottom
      16, 17, 18, 16, 18, 19, // right
      20, 21, 22, 20, 22, 23, // left
    ])
  );

  const model = new GlModel(cubePosition, cubeColor, cubeIndices);
  return model;
}
