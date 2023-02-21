import { Object3doTree } from "@takingdoms/lib-3do";
import { ViewMode } from "src/lib/types";
import { ProgramInfo } from "../gl/program-info";
import { TextureUtils } from "../gl/texture-utils";
import { WebGlHelper } from "../gl/webgl-helper";
import { WebglEngineShaderSources } from "../webgl-engine";
import { WebglSubRenderer } from "./webgl-sub-renderer";

type NormalProgramInfo = ProgramInfo<
  'vertexPosition' | 'vertexNormal' | 'textureCoord',
  'modelViewMatrix' | 'projectionMatrix' | 'baseColor' | 'entityColor' | 'normalMatrix' | 'sampler'
>;

export class NormalRenderer extends WebglSubRenderer<NormalProgramInfo> {
  private texture: WebGLTexture;

  constructor(
    gl: WebGLRenderingContext,
    shaderSources: WebglEngineShaderSources,
    object3doTree: Object3doTree,
  ) {
    super(gl, shaderSources, object3doTree);

    this.texture = TextureUtils.loadFromUrl(gl, '/assets/texture.png');
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  }

  protected override getViewMode(): ViewMode {
    return 'normal';
  }

  protected override initProgram(): NormalProgramInfo {
    const { vsSource, fsSource } = this.shaderSources.normal;

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
      },
    };
  }

  protected override inBeforeTheRootRender(): void {
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
    this.gl.uniform1i(this.programInfo.uniformLocations.sampler, 0);
  }
}
