export type ProgramInfo = {
  program: WebGLProgram;
  attribLocations: {
    vertexPosition: number;
  };
  uniformLocations: {
    modelViewMatrix: WebGLUniformLocation;
    projectionMatrix: WebGLUniformLocation;
    baseColor: WebGLUniformLocation;
  };
};
