import { Engine, EngineConfig, EngineListener } from "./engine";
import { ModelControls } from "../types";

export class UiDebugEngine extends Engine {
  private ctx: CanvasRenderingContext2D;
  private renderCount = 0;

  constructor(config: EngineConfig) {
    super(config);

    const ctx = config.canvas.getContext('2d');

    if (ctx === null) {
      window.alert('Canvas not supported in this browser.');
      throw new Error(`Failed to create context`);
    }

    this.ctx = ctx;
    this.setupEvents();
  }

  protected onResized(): void {
    this.render();
  }

  protected render(): void {
    const { modelControls } = this.getConfig();

    console.log(`Rendering next 🖼️ (#${this.renderCount})`);
    const startTime = performance.now();

    const viewWidth = this.width;
    const viewHeight = this.height;

    // this.ctx.clearRect(0, 0, viewWidth, viewHeight); // redundant with the fillRect below \/

    this.ctx.fillStyle = `rgb(4, 16, 22)`;
    this.ctx.fillRect(0, 0, viewWidth, viewHeight);

    this.ctx.strokeStyle = `rgb(0, 0, 200)`;
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(0, viewHeight / 2);
    this.ctx.lineTo(viewWidth, viewHeight / 2);
    this.ctx.stroke();
    this.ctx.moveTo(viewWidth / 2, 0);
    this.ctx.lineTo(viewWidth / 2, viewHeight);
    this.ctx.stroke();

    const textLines = [
      `renderCount: ${this.renderCount}`,
      `viewWidth: ${viewWidth}`,
      `viewHeight: ${viewHeight}`,
      `zoom: ${modelControls.zoom}`,
      `rotationX: ${modelControls.rotationX}`,
      `rotationY: ${modelControls.rotationY}`,
      `rotationZ: ${modelControls.rotationZ}`,
      `translationX: ${modelControls.translationX}`,
      `translationY: ${modelControls.translationY}`,
      `viewMode: ${modelControls.viewMode}`,
    ];

    const textSize = 18;
    const textPadding = 4;
    const showDebugRects = false;

    this.ctx.textAlign = 'left';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'white';
    this.ctx.font = `${textSize}px monospace`;

    this.ctx.strokeStyle = 'red';

    const largestLineWidth = this.ctx.measureText(
      // \/ only works when using a monospaced font!!!
      textLines.reduce((l1, l2) => l1.length > l2.length ? l1 : l2)
    ).width;

    const totalWidth = largestLineWidth;
    const totalHeight = (textSize * textLines.length) + (textLines.length * textPadding * 2);

    for (let i = 0; i < textLines.length; i++) {
      const lineHeight = textSize + textPadding * 2;

      if (showDebugRects) {
        this.ctx.strokeRect(
          viewWidth / 2 - totalWidth / 2,
          viewHeight / 2 - totalHeight / 2 + i * (lineHeight),
          totalWidth,
          textSize + textPadding * 2,
        );
      }

      this.ctx.fillText(
        textLines[i],
        viewWidth / 2 - totalWidth / 2,
        (viewHeight / 2) - (totalHeight / 2) + (i * lineHeight + lineHeight / 2),
      );
    }

    const endTime = performance.now();
    const delta = endTime - startTime;
    console.log(`Finished rendering 🖼️ in ${delta}ms`);
    this.renderCount++;
  }
}
