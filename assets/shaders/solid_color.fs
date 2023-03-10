uniform lowp vec4 baseColor;
uniform lowp vec4 entityColor;
uniform bool useLights;

varying highp vec3 vLighting;

void main(void) {
  highp vec4 color = baseColor * entityColor;

  if (useLights) {
    gl_FragColor = vec4(color.rgb * vLighting, color.a);
  }
  else {
    gl_FragColor = color;
  }
}
