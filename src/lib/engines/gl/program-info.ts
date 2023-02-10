export type ProgramInfo<Attribs extends string, Uniforms extends string> = {
  program: WebGLProgram;
  attribLocations: Record<Attribs, number>;
  uniformLocations: Record<Uniforms, WebGLUniformLocation>;
};
