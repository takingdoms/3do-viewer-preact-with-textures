uniform lowp vec4 baseColor;
uniform lowp vec4 entityColor;
uniform sampler2D uSampler;

varying highp vec3 vLighting;
varying highp vec2 vTextureCoord;

void main(void) {
  highp vec4 texColor = texture2D(uSampler, vTextureCoord);
  highp vec4 color = baseColor * entityColor * texColor;

  gl_FragColor = vec4(color.rgb * vLighting, color.a);
}
