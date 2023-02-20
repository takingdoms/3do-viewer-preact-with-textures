import { FunctionComponent, h } from 'preact';
import { useState, useRef, useMemo, useEffect } from "preact/hooks";
import CanvasWrapper from "./canvas/CanvasWrapper";
import Controls from "./controls/Controls";
import { DEFAULT_MODEL_CONTROLS } from "../lib/types";
import { Engine, EngineListener } from "../lib/engines/engine";
import { UiDebugEngine } from "../lib/engines/ui-debug-engine";
import { Object3doTree } from "@takingdoms/lib-3do";
import { WebglEngine, WebglEngineShaderSources } from "../lib/engines/webgl-engine";
import ObjectList from "./object-list/ObjectList";

const CONTENT_WIDTH = '1600px';

type SidebarTab = 'controls' | 'tree';

const Main: FunctionComponent<{
  engineName: 'webgl' | 'ui-debug';
  shaders: WebglEngineShaderSources;
  object3doTree: Object3doTree;
}> = ({ engineName, shaders, object3doTree }) => {
  console.log('Re-rendering App');

  const [expandContent, setExpandContent] = useState(false);
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>('tree');
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

    const engineListener: EngineListener = {
      onModelControlsChanged: setModelControls,
    };

    let engine: Engine;

    if (engineName === 'webgl') {
      engine = new WebglEngine(
        {
          mode: 'continuous',
          canvas: canvas,
          modelControls: DEFAULT_MODEL_CONTROLS,
          listener: engineListener,
        },
        shaders,
        object3doTree,
      );
    } else {
      engine = new UiDebugEngine({
        mode: 'static',
        canvas: canvas,
        modelControls: DEFAULT_MODEL_CONTROLS,
        listener: engineListener,
      });
    }

    setEngine(engine);

    return () => {
      engine.destroy();
      setEngine(undefined);
    };
  }, [canvasRef]);

  const canvasWrapper = useMemo(() => (
    <CanvasWrapper canvasRef={canvasRef} />
  ), [canvasRef]);

  const canvasPanel = useMemo(() => (
    <div class="h-full flex flex-col">
      <div class="flex text-white border-b border-gray-700">
        <div class="grow px-4 py-4 text-center">
          Canvas
        </div>
        <div
          class="px-4 py-4 cursor-pointer hover:bg-blue-700 font-mono"
          onClick={() => setExpandContent(!expandContent)}
        >
          {expandContent ? '>[ ]<' : '<[ ]>'}
        </div>
      </div>

      <div class="grow p-6">
        {canvasWrapper}
      </div>
    </div>
  ), [canvasWrapper, expandContent]);

  const controlPanel = useMemo(() => (
    <Controls
      modelControls={modelControls}
      setModelControls={(modelControls) => {
        setModelControls(modelControls);
        if (engine) {
          engine.setModelControls(modelControls);
        }
      }}
    />
  ), [engine, modelControls]);

  const objectsPanel = useMemo(() => {
    return (
      <ObjectList object3doTree={object3doTree} />
    );
  }, [object3doTree]);

  const sidebar = useMemo(() => {
    return (
      <div class="h-full flex flex-col">
        <div class="flex text-white border-b border-gray-700">
          {['controls', 'tree'].map((tab, index, arr) => {
            const isSelected = tab === sidebarTab;

            const seletedCss = isSelected
              ? 'font-bold'
              : 'cursor-pointer text-gray-400 hover:text-white';

            const borderCss = index !== arr.length - 1
              ? 'border-r border-gray-700'
              : '';

            return (
              <div
                key={index}
                class={`grow basis-0 px-2 py-4 text-center ${seletedCss} ${borderCss}`}
                onClick={() => {
                  if (!isSelected) {
                    setSidebarTab(tab as SidebarTab);
                  }
                }}
              >
                {tab === 'controls' ? 'Controls' : 'Objects'}
              </div>
            )
          })}
        </div>

        <div
          class="grow max-h-full overflow-hidden px-6 py-6"
          style={{ width: 300, overflowX: 'auto' }}
        >
          {sidebarTab === 'controls' ? controlPanel : objectsPanel}
        </div>
      </div>
    );
  }, [sidebarTab, controlPanel]);

  return (
    <div class="flex justify-center items-stretch h-screen overflow-hidden bg-gray-900">
      <div
        class={'grow flex bg-gray-800 border '
          + (expandContent ? 'border-gray-800' : 'border-gray-700')}
        style={{ "max-width": expandContent ? '100%' : CONTENT_WIDTH }}
      >
        <div class="grow">
          {canvasPanel}
        </div>

        <div class="hidden lg:block border-l border-gray-700">
          {sidebar}
        </div>
      </div>
    </div>
  );
};

export default Main;
