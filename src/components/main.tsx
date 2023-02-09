import { FunctionComponent, h } from 'preact';
import { useState, useRef, useMemo, useEffect } from "preact/hooks";
import CanvasWrapper from "./canvas-wrapper";
import Controls from "./controls";
import { DEFAULT_MODEL_CONTROLS } from "../lib/types";
import { Engine } from "../lib/engines/engine";
import { UiDebugEngine } from "../lib/engines/ui-debug-engine";
import { Object3doTree } from "@takingdoms/lib-3do";
import { WebglEngine, WebglEngineShaderSources } from "../lib/engines/webgl-engine";

const CONTENT_WIDTH = '1600px';

const Main: FunctionComponent<{
  engineName: 'webgl' | 'ui-debug';
  shaders: WebglEngineShaderSources;
  object3doTree: Object3doTree;
}> = ({ engineName, shaders, object3doTree }) => {
  console.log('Re-rendering App');

  const [expandContent, setExpandContent] = useState(false);
  const [modelControls, setModelControls] = useState(DEFAULT_MODEL_CONTROLS);
  const [engine, setEngine] = useState<Engine>();

  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    console.log('Creating the Engine');

    let engine: Engine;

    if (engineName === 'webgl') {
      engine = new WebglEngine(
        {
          mode: 'continuous',
          canvas: canvas,
          modelControls: DEFAULT_MODEL_CONTROLS,
          listener: { onModelControlsChanged: setModelControls },
        },
        shaders,
        object3doTree,
      );
    } else {
      engine = new UiDebugEngine({
        mode: 'static',
        canvas: canvas,
        modelControls: DEFAULT_MODEL_CONTROLS,
        listener: { onModelControlsChanged: setModelControls },
      });
    }

    setEngine(engine);

    return () => {
      engine.destroy();
      setEngine(undefined);
    };
  }, [canvasRef]);

  const canvasPanel = useMemo(() => (
    <div class="h-full flex flex-col">
      <div class="px-6 py-4 text-center bg-blue-600 text-white">
        Canvas
      </div>

      <div class="grow p-6">
        <CanvasWrapper canvasRef={canvasRef} />
      </div>
    </div>
  ), [canvasRef]);

  const controlPanel = useMemo(() => (
    <div class="h-full flex flex-col">
      <div class="px-6 py-4 text-center bg-cyan-600 text-white">
        Controls
      </div>

      <div class="grow max-h-full overflow-auto">
        <Controls
          modelControls={modelControls}
          setModelControls={(modelControls) => {
            setModelControls(modelControls);
            if (engine) {
              engine.setModelControls(modelControls);
            }
          }}
        />
      </div>
    </div>
  ), [engine, modelControls]);

  return (
    <div class="flex justify-center items-stretch min-h-screen bg-gray-900">
      <div
        class="grow flex bg-gray-800"
        style={{ "max-width": expandContent ? '100%' : CONTENT_WIDTH }}
      >
        <div class="bg-red-500 grow">
          {canvasPanel}
        </div>
        <div class="bg-green-500 hidden lg:block">
          {controlPanel}
        </div>
      </div>
    </div>
  );
};

export default Main;
