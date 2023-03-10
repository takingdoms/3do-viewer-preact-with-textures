uniform lowp vec4 baseColor;
uniform lowp vec4 entityColor;
uniform sampler2D uSampler;
uniform bool useLights;

varying highp vec3 vLighting;
varying highp vec2 vTextureCoord;

void main(void) {
  highp vec4 texColor = texture2D(uSampler, vTextureCoord);

  if(texColor.a < 0.5) {
    discard;
  }

  highp vec4 color = baseColor * entityColor * texColor;

  if (useLights) {
    gl_FragColor = vec4(color.rgb * vLighting, color.a);
  }
  else {
    gl_FragColor = color;
  }
}
