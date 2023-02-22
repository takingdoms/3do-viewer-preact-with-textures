import { TextureMapping } from "../texture-mapping";
import { ModelControls } from "../types";

export type EngineListener = {
  onModelControlsChanged: (modelControls: ModelControls) => void;
};

export type EngineConfig = {
  mode:
    | 'static'      // only re-renders when the camera or viewport is updated
    | 'continuous'  // re-renders continuously (usually at 60 FPS)
  ;
  canvas: HTMLCanvasElement;
  modelControls: ModelControls;   // initial
  textureMapping: TextureMapping; // initial
  listener: EngineListener;
};

export abstract class Engine {
  protected readonly config: EngineConfig;
  private resizeObserver: ResizeObserver | undefined;
  private cleanupEvents?: () => void;

  constructor(config: EngineConfig) {
    this.config = config;
  }

  protected setupEvents() {
    const { listener, canvas, mode } = this.config;

    //:: Handle mouse events

    let mouseAction: 'rotate' | 'pan' | undefined;
    let mouseButton: number | undefined;
    let mouseStartX: number | undefined;
    let mouseStartY: number | undefined;
    let controlStartX: number | undefined;
    let controlStartY: number | undefined;

    const onMouseDown = (ev: MouseEvent) => {
      if (mouseButton !== undefined && mouseButton !== ev.button) {
        // stop if another button was already being processed
        return;
      }

      if (ev.button === 0) {
        mouseAction = 'rotate';
        mouseButton = 0;
      }
      else if (ev.button === 1) {
        mouseAction = 'pan';
        mouseButton = 1;
      }
      else {
        // only button 0 (left-click) and button 1 (middle-click) are used
        return;
      }

      mouseStartX = ev.clientX;
      mouseStartY = ev.clientY;

      controlStartX = mouseAction === 'rotate'
        ? this.config.modelControls.rotationX
        : this.config.modelControls.translationX;

      controlStartY = mouseAction === 'rotate'
        ? this.config.modelControls.rotationY
        : this.config.modelControls.translationY;
    };

    const onMouseMove = (ev: MouseEvent) => {
      if (mouseStartX === undefined || mouseStartY === undefined || controlStartX === undefined ||
          controlStartY === undefined)
      {
        return;
      }

      const deltaX = ev.clientX - mouseStartX;
      const deltaY = ev.clientY - mouseStartY;

      if (deltaX === 0 && deltaY === 0) {
        return;
      }

      if (deltaX !== 0) {
        if (mouseAction === 'rotate') {
          this.config.modelControls.rotationY = controlStartY + deltaX;
        } else {
          this.config.modelControls.translationX = controlStartX + deltaX;
        }
      }

      if (deltaY !== 0) {
        if (mouseAction === 'rotate') {
          this.config.modelControls.rotationX = controlStartX + deltaY;
        } else {
          this.config.modelControls.translationY = controlStartY + deltaY;
        }
      }

      if (mode === 'static') {
        this.render();
      }
    };

    const onMouseUp = () => {
      mouseButton = mouseAction = mouseStartX = mouseStartY = controlStartX = controlStartY =
        undefined;

      listener.onModelControlsChanged({ ...this.config.modelControls });
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        onMouseUp();
      }
    };

    const onWheel = (ev: WheelEvent) => {
      if (ev.deltaY === 0)
        return;

      this.config.modelControls.zoom += ev.deltaY;

      if (this.config.mode === 'static') {
        this.render();
      }

      listener.onModelControlsChanged({ ...this.config.modelControls }); // TODO DEBOUNCE! (or not?)
    };

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('visibilitychange', onVisibilityChange);

    canvas.addEventListener('wheel', onWheel);

    this.cleanupEvents = () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousedown', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('visibilitychange', onVisibilityChange);

      canvas.removeEventListener('wheel', onWheel);
    };

    //:: Handle resizing

    const onResized = () => {
      const canvasParent = canvas.parentElement;

      if (!canvasParent) {
        throw new Error(`Canvas has no parent!!`);
      }

      const newWidth = canvasParent.clientWidth;
      const newHeight = canvasParent.clientHeight;

      let didResize = false;

      if (canvas.width !== newWidth) {
        canvas.width = newWidth;
        didResize = true;
      }

      if (canvas.height !== newHeight) {
        canvas.height = newHeight;
        didResize = true;
      }

      if (didResize) {
        this.onResized();
        return true;
      }

      return false;
    };

    this.resizeObserver = new ResizeObserver(onResized);
    const canvasParent = canvas.parentElement;

    if (!canvasParent) {
      window.alert('Failed to create canvas');
      throw new Error(`Canvas has no parent!! (Can't listen to resizing...)`);
    }

    this.resizeObserver.observe(canvasParent);

    // manually call onResized and also call this.onResized if onResized didn't already call it
    if (!onResized()) {
      this.onResized();
    }
  }

  setModelControls(modelControls: ModelControls) {
    this.config.modelControls = modelControls;

    if (this.config.mode === 'static') {
      this.render();
    }
  }

  setTextureMapping(textureMapping: TextureMapping) {
    this.config.textureMapping = textureMapping;

    if (this.config.mode === 'static') {
      this.render();
    }
  }

  destroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    this.cleanupEvents?.();
    // TODO
  }

  protected abstract onResized(): void;

  // delta is only used when this.config.mode === 'continuous'
  protected abstract render(delta?: number): void;

  protected get width() {
    return this.config.canvas.width;
  }

  protected get height() {
    return this.config.canvas.height;
  }
}
