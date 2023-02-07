export type ProgramInfo = {
  program: WebGLProgram;
  attribLocations: {
    vertexPosition: number;
    vertexColor: number;
  };
  uniformLocations: {
    modelViewMatrix: WebGLUniformLocation;
    projectionMatrix: WebGLUniformLocation;
  };
};
