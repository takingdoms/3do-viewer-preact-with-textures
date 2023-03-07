import { Object3doTree } from "@takingdoms/lib-3do";
import { ObjectStateMap } from "../../components/Main";
import { TakLogoColorsDefinitions } from "../logo-colors";
import { TextureMapping } from "../texture-mapping";
import { ModelControls, ViewMode } from "../types";
import { Engine, EngineConfig } from "./engine";
import { RegularRenderer } from "./webgl-sub-renderers/regular-renderer";
import { SolidColorRenderer } from "./webgl-sub-renderers/solid-color-renderer";
import { WebglSubRenderer } from "./webgl-sub-renderers/webgl-sub-renderer";
import { WireframeRenderer } from "./webgl-sub-renderers/wireframe-renderer";

export type ShaderSources = {
  fsSource: string;
  vsSource: string;
};

export type WebglEngineShaderSources = {
  regular: ShaderSources;
  solid: ShaderSources;
  wireframe: ShaderSources;
};

export class WebglEngine extends Engine {
  private gl: WebGLRenderingContext;
  private subRenderers: Record<ViewMode, WebglSubRenderer<any>>;

  constructor(
    config: EngineConfig,
    shaderSources: WebglEngineShaderSources,
    object3doTree: Object3doTree,
    logoDefs: TakLogoColorsDefinitions,
  ) {
    super(config);

    const gl = config.canvas.getContext('webgl');

    if (gl === null) {
      throw `Couldn't get WebGL rendering context!`;
    }

    this.gl = gl;

    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    //:: Setup subRenderers

    this.subRenderers = {
      regular: new RegularRenderer(gl, shaderSources, object3doTree, logoDefs),
      solid_color: new SolidColorRenderer(gl, shaderSources, object3doTree, logoDefs),
      wireframe: new WireframeRenderer(gl, shaderSources, object3doTree, logoDefs),
    };

    for (const subRenderer of Object.values(this.subRenderers)) {
      subRenderer.changeTextureMapping(config.textureMapping);
    }

    //:: Setup resizing handler and then render

    this.setupEvents();

    if (config.mode === 'continuous') {
      let then = 0;

      const render = (now: DOMHighResTimeStamp) => {
        now *= 0.001; // convert to seconds
        const deltaTime = now - then;
        then = now;

        this.update(deltaTime);
        this.render(deltaTime);

        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);
    }
  }

  protected override onResized(): void {
    console.log(`Resized! (${this.width} x ${this.height})`);
    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    if (this.config.mode === 'static') {
      this.render();
    }
  }

  protected override render(delta?: number): void {
    const currentViewMode = this.config.modelControls.viewMode;
    const currentSubRenderer = this.subRenderers[currentViewMode];

    currentSubRenderer.render(this.gl, this.config.modelControls, delta);
  }

  override setTextureMapping(textureMapping: TextureMapping) {
    for (const subRenderer of Object.values(this.subRenderers)) {
      subRenderer.changeTextureMapping(textureMapping);
    }

    super.setTextureMapping(textureMapping);
  }

  override setModelControls(modelControls: ModelControls): void {
    for (const subRenderer of Object.values(this.subRenderers)) {
      subRenderer.changeModelControls(modelControls);
    }

    super.setModelControls(modelControls);
  }

  override setObjectStateMap(objStateMap: ObjectStateMap): void {
    for (const subRenderer of Object.values(this.subRenderers)) {
      subRenderer.changeObjectStateMap(objStateMap);
    }

    super.setObjectStateMap(objStateMap);
  }

  private update(delta: number) {
    const currentViewMode = this.config.modelControls.viewMode;
    const currentSubRenderer = this.subRenderers[currentViewMode];

    currentSubRenderer.update(delta);
  }
}
