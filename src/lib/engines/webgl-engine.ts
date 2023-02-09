import { Object3doTree } from "@takingdoms/lib-3do";
import { Engine, EngineConfig, EngineListener } from "./engine";
import { ModelControls, ViewMode } from "../types";
import { WebGlHelper } from "./gl/webgl-helper";
import { ProgramInfo } from "./gl/program-info";
import { GlContext } from "./gl/gl-context";
import { GlEntity } from "./gl/gl-entity";
import { glMatrix, mat4 } from "gl-matrix";
import { addGlEntityFrom3do } from "./gl/gl-from-3do";
import { GlCustomContext } from "./gl/gl-custom-context";
import { WebglSubRenderer } from "./webgl-sub-renderers/webgl-sub-renderer";
import { NormalRenderer } from "./webgl-sub-renderers/normal-renderer";
import { SolidColorRenderer } from "./webgl-sub-renderers/solid-color-renderer";
import { WireframeRenderer } from "./webgl-sub-renderers/wireframe-renderer";

export type ShaderSources = {
  fsSource: string;
  vsSource: string;
};

export type WebglEngineShaderSources = {
  normal: ShaderSources;
  solid: ShaderSources;
  wireframe: ShaderSources;
};

export class WebglEngine extends Engine {
  private gl: WebGLRenderingContext;
  private subRenderers: Record<ViewMode, WebglSubRenderer>;

  constructor(
    config: EngineConfig,
    shaderSources: WebglEngineShaderSources,
    object3doTree: Object3doTree,
  ) {
    super(config);

    const gl = config.canvas.getContext('webgl');

    if (gl === null) {
      throw `Couldn't get WebGL rendering context!`;
    }

    this.gl = gl;

    //:: Setup subRenderers

    this.subRenderers = {
      normal: new NormalRenderer(gl, shaderSources, object3doTree),
      solid_color: new SolidColorRenderer(gl, shaderSources, object3doTree),
      wireframe: new WireframeRenderer(gl, shaderSources, object3doTree),
    };

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

  protected onResized(): void {
    console.log(`Resized! (${this.width} x ${this.height})`);
    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    if (this.getConfig().mode === 'static') {
      this.render();
    }
  }

  protected render(delta?: number): void {
    const currentViewMode = this.getConfig().modelControls.viewMode;
    const currentSubRenderer = this.subRenderers[currentViewMode];

    currentSubRenderer.render(this.gl, this.getConfig().modelControls, delta);
  }

  private update(delta: number) {
    const currentViewMode = this.getConfig().modelControls.viewMode;
    const currentSubRenderer = this.subRenderers[currentViewMode];

    currentSubRenderer.update(delta);
  }
}
