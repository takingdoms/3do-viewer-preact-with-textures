uniform lowp vec4 baseColor;
uniform lowp vec4 entityColor;

varying highp vec3 vLighting;

void main(void) {
  gl_FragColor = baseColor + entityColor;
  // gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
}
