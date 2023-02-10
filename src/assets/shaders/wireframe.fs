uniform lowp vec4 baseColor;
uniform lowp vec4 entityColor;

void main(void) {
  gl_FragColor = baseColor + entityColor;
}
