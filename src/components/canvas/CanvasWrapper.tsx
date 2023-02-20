import { FunctionComponent, h } from 'preact';
import { MutableRef } from "preact/hooks";

type CanvasWrapperProps = {
  canvasRef: MutableRef<HTMLCanvasElement | undefined>;
};

const CanvasWrapper: FunctionComponent<CanvasWrapperProps> = ({ canvasRef }) => {
  console.log('Re-rendering CanvasWrapper');

  const canvas = (
    // don't touch this div \/ because the engine listen to resize events on it
    <div class="absolute inset-0">
      <canvas ref={canvasRef as MutableRef<HTMLCanvasElement>} />
    </div>
  );

  return (
    <div class="w-full h-full max-w-full max-h-full relative">
      {canvas}
    </div>
  );
};

export default CanvasWrapper;
