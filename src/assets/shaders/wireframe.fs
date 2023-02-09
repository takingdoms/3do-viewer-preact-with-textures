varying lowp vec4 vColor;

uniform lowp vec4 baseColor;

void main(void) {
  gl_FragColor = baseColor * vColor;
}
