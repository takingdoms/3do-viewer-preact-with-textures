uniform lowp vec4 baseColor;
uniform lowp vec4 entityColor;

varying highp vec3 vLighting;

void main(void) {
  highp vec4 color = baseColor * entityColor;
  // gl_FragColor = color;
  gl_FragColor = vec4(color.rgb * vLighting, color.a);
}
