// Credits to most of these: https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html

function compileShader(gl: WebGLRenderingContext, shaderSource: string, shaderType: number) {
  const shader = gl.createShader(shaderType);

  if (shader === null) {
    throw `Failed to create shader of type "${shaderType}"`;
  }

  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!success) {
    throw `Could not compile shader: ${gl.getShaderInfoLog(shader)}`;
  }

  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader,
) {
  const program = gl.createProgram();

  if (program === null) {
    throw `Failed to create program`;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    throw `Program failed to link: ${gl.getProgramInfoLog(program)}`;
  }

  return program;
};

function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
  const displayWidth  = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;

  const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;

  if (needResize) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }

  return needResize;
}

export const WebGlHelper = {
  compileShader,
  createProgram,
  resizeCanvasToDisplaySize,
};
