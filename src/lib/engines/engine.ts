import { ModelControls } from "../types";

export type EngineListener = {
  onModelControlsChanged: (modelControls: ModelControls) => void;
};

export abstract class Engine {
  private canvas: HTMLCanvasElement;
  private _modelControls: ModelControls; // TODO maybe declare each inner var individually
  private listener: EngineListener;
  private resizeObserver: ResizeObserver | undefined;
  private cleanupEvents: () => void;

  constructor(canvas: HTMLCanvasElement, modelControls: ModelControls, listener: EngineListener) {
    this.canvas = canvas;
    this._modelControls = modelControls;
    this.listener = listener;
  }

  protected setupEvents() {
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
        ? this._modelControls.rotationX
        : this._modelControls.translationX;

      controlStartY = mouseAction === 'rotate'
        ? this._modelControls.rotationY
        : this._modelControls.translationY;
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
          this._modelControls.rotationY = controlStartY + deltaX;
        } else {
          this._modelControls.translationX = controlStartX + deltaX;
        }
      }

      if (deltaY !== 0) {
        if (mouseAction === 'rotate') {
          this._modelControls.rotationX = controlStartX + deltaY;
        } else {
          this._modelControls.translationY = controlStartY + deltaY;
        }
      }

      this.render();
    };

    const onMouseUp = () => {
      mouseButton = mouseAction = mouseStartX = mouseStartY = controlStartX = controlStartY =
        undefined;

      this.listener.onModelControlsChanged({ ...this._modelControls });
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        onMouseUp();
      }
    };

    const onWheel = (ev: WheelEvent) => {
      if (ev.deltaY === 0)
        return;

      this._modelControls.zoom += ev.deltaY;
      this.render();
      this.listener.onModelControlsChanged({ ...this._modelControls }); // TODO DEBOUNCE! (or not?)
    };

    this.canvas.addEventListener('mousedown', onMouseDown);
    this.canvas.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('visibilitychange', onVisibilityChange);

    this.canvas.addEventListener('wheel', onWheel);

    this.cleanupEvents = () => {
      this.canvas.removeEventListener('mousedown', onMouseDown);
      this.canvas.removeEventListener('mousedown', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('visibilitychange', onVisibilityChange);

      this.canvas.removeEventListener('wheel', onWheel);
    };

    //:: Handle resizing

    const onResized = () => {
      const canvasParent = this.canvas.parentElement;

      if (!canvasParent) {
        throw new Error(`Canvas has no parent!!`);
      }

      const newWidth = canvasParent.clientWidth;
      const newHeight = canvasParent.clientHeight;

      let didResize = false;

      if (this.canvas.width !== newWidth) {
        this.canvas.width = newWidth;
        didResize = true;
      }

      if (this.canvas.height !== newHeight) {
        this.canvas.height = newHeight;
        didResize = true;
      }

      if (didResize) {
        this.onResized();
        return true;
      }

      return false;
    };

    this.resizeObserver = new ResizeObserver(onResized);
    const canvasParent = this.canvas.parentElement;

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
    this._modelControls = modelControls;
    this.render();
  }

  destroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    this.cleanupEvents();
    // TODO
  }

  protected abstract onResized(): void;

  protected abstract render(): void;

  protected get width() {
    return this.canvas.width;
  }

  protected get height() {
    return this.canvas.height;
  }

  protected get modelControls(): Readonly<ModelControls> {
    return this._modelControls;
  }
}
