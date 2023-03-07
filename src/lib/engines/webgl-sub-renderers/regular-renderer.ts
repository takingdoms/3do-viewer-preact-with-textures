import { TextureMapping } from "../../texture-mapping";
import { ModelControls, ViewMode } from "../../types";
import { ProgramInfo } from "../gl/program-info";
import { WebGlHelper } from "../gl/webgl-helper";
import { WebglSubRenderer } from "./webgl-sub-renderer";

type RegularProgramInfo = ProgramInfo<
  'vertexPosition' | 'vertexNormal' | 'textureCoord',
  'modelViewMatrix' | 'projectionMatrix' | 'baseColor' | 'entityColor' | 'normalMatrix' | 'sampler'
    | 'useLights'
>;

export class RegularRenderer extends WebglSubRenderer<RegularProgramInfo> {
  override changeTextureMapping(textureMapping: TextureMapping) {
    this.ctx.changeTextureMapping(textureMapping);
  }

  protected override getViewMode(): ViewMode {
    return 'regular';
  }

  protected override initProgram(): RegularProgramInfo {
    const { vsSource, fsSource } = this.shaderSources.regular;

    const vsShader = WebGlHelper.compileShader(this.gl, vsSource, this.gl.VERTEX_SHADER);
    const fsShader = WebGlHelper.compileShader(this.gl, fsSource, this.gl.FRAGMENT_SHADER);
    const shaderProgram = WebGlHelper.createProgram(this.gl, vsShader, fsShader);

    return {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: this.gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        vertexNormal: this.gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
        textureCoord: this.gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
      },
      uniformLocations: {
        modelViewMatrix: this.gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')!,
        projectionMatrix: this.gl.getUniformLocation(shaderProgram, 'uProjectionMatrix')!,
        baseColor: this.gl.getUniformLocation(shaderProgram, 'baseColor')!,
        entityColor: this.gl.getUniformLocation(shaderProgram, 'entityColor')!,
        normalMatrix: this.gl.getUniformLocation(shaderProgram, 'uNormalMatrix')!,
        sampler: this.gl.getUniformLocation(shaderProgram, 'uSampler')!,
        useLights: this.gl.getUniformLocation(shaderProgram, 'useLights')!,
      },
    };
  }

  protected override inBeforeTheRootRender(gl: WebGLRenderingContext, modelControls: ModelControls): void {
    this.ctx.setUniformBool('useLights', modelControls.enableLightingRegular);
  }
}
