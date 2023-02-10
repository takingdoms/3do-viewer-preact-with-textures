import { vec3 } from "gl-matrix";
import { GlIndexBuffer } from "./buffer/gl-index-buffer";
import { GlNormalBuffer } from "./buffer/gl-normal-buffer";
import { GlPositionBuffer } from "./buffer/gl-position-buffer";
import { GlContext } from "./gl-context";
import { GlEntity } from "./gl-entity";
import { GlModel } from "./gl-model";
import { ProgramInfo } from "./program-info";
import { Vector3 } from "./types";

type IndexedVerticesData = {
  vertices: Vector3[];
  indices: number[]; // indexes into the above /\
};

function createModelFromIndexedVertices(
  ctx: GlContext,
  data: IndexedVerticesData,
  computeNormals: boolean,
): GlModel {
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

  let normals: GlNormalBuffer | undefined;

  if (computeNormals) {
    // TODO CALCULATE NORMALS
    // console.log('---');

    const normalList: vec3[] = [];

    /*for (let i = 0; i < indicesData.length; i += 3) {
      const vindex0 = indicesData[i + 0];
      const vindex1 = indicesData[i + 1];
      const vindex2 = indicesData[i + 2];

      const index0 = vec3.fromValues(...data.vertices[vindex0]);
      const index1 = vec3.fromValues(...data.vertices[vindex1]);
      const index2 = vec3.fromValues(...data.vertices[vindex2]);

      const edge0 = vec3.create();
      vec3.sub(edge0, index1, index0); // indicesData[0] - indicesData[1]

      const edge1 = vec3.create();
      vec3.sub(edge1, index2, index0); // indicesData[0] - indicesData[2]

      const normal = vec3.create();
      vec3.cross(normal, edge1, edge0);

      normalList.push(normal);
    }*/

    for (let i = 0; i < data.vertices.length; i++) {
      normalList[i] = vec3.create();
    }

    for (let i = 0; i < indicesData.length; i += 3) {
      const indexA = indicesData[i + 0];
      const indexB = indicesData[i + 1];
      const indexC = indicesData[i + 2];

      const posA = vec3.fromValues(...data.vertices[indexA]);
      const posB = vec3.fromValues(...data.vertices[indexB]);
      const posC = vec3.fromValues(...data.vertices[indexC]);

      const edgeAB = vec3.sub(vec3.create(), posB, posA);
      const edgeAC = vec3.sub(vec3.create(), posC, posA);

      const areaWeightedNormal = vec3.cross(vec3.create(), edgeAB, edgeAC);

      vec3.add(normalList[indexA], normalList[indexA], areaWeightedNormal);
      vec3.add(normalList[indexB], normalList[indexB], areaWeightedNormal);
      vec3.add(normalList[indexC], normalList[indexC], areaWeightedNormal);
    }

    for (let i = 0; i < data.vertices.length; i++) {
      vec3.normalize(normalList[i], normalList[i]);
    }

    normals = new GlNormalBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexNormal);
    normals.bufferData(GlNormalBuffer.createBufferSourceFromPositions(
      normalList.flatMap((normals) => [normals[0], normals[1], normals[2]]),
    ));
  }

  return new GlModel(position, indices, normals);
}

/**
 * Similar to createModelFromIndexedColoredVertices but you can simply pass only the vertex+color
 * information and the function will automatically remove redundant (identical vertex) items
 * and automatically generate indices.
 */
function createModelFromSmartVertices(
  ctx: GlContext,
  data: Vector3[],
  computeNormals: boolean,
): GlModel {
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
  }, computeNormals);
}

function isVertexEqual(v1: Vector3, v2: Vector3): boolean {
  return v1[0] === v2[0] &&
         v1[1] === v2[1] &&
         v1[2] === v2[2];
}

function makeCube(gl: WebGLRenderingContext, programInfo: ProgramInfo<any, any>): GlEntity {
  const positions = new GlPositionBuffer(gl, programInfo.attribLocations.vertexPosition);
    positions.bufferData(GlPositionBuffer.createBufferSourceFromPositions([
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
    ]));

    const indices = new GlIndexBuffer(gl);
    indices.bufferData(GlIndexBuffer.createBufferSourceFromIndices([
      0,
      1,
      2,
      0,
      2,
      3, // front
      4,
      5,
      6,
      4,
      6,
      7, // back
      8,
      9,
      10,
      8,
      10,
      11, // top
      12,
      13,
      14,
      12,
      14,
      15, // bottom
      16,
      17,
      18,
      16,
      18,
      19, // right
      20,
      21,
      22,
      20,
      22,
      23, // left
    ]));

    const normals = new GlNormalBuffer(gl, programInfo.attribLocations.vertexNormal);
    normals.bufferData(GlNormalBuffer.createBufferSourceFromPositions([
      // Front
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,

      // Back
      0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

      // Top
      0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,

      // Bottom
      0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

      // Right
      1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,

      // Left
      -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
    ]))

    const rootModel = new GlModel(positions, indices, normals);
    const rootEntity = new GlEntity(rootModel, 'cube');

    return rootEntity;
}

export const GlModelHelpers = {
  createModelFromIndexedVertices,
  createModelFromSmartVertices,
  makeCube,
};
