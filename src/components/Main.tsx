import { Object3do, Object3doTree } from "@takingdoms/lib-3do";
import { Fragment, FunctionComponent, h } from 'preact';
import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { Engine, EngineConfig, EngineListener } from "../lib/engines/engine";
import { UiDebugEngine } from "../lib/engines/ui-debug-engine";
import { WebglEngine, WebglEngineShaderSources } from "../lib/engines/webgl-engine";
import { ObjectState } from "../lib/object-state";
import { localStorageUserService } from "../lib/services/user-service";
import { TextureMapping } from "../lib/texture-mapping";
import { DEFAULT_MODEL_CONTROLS, DEFAULT_USER_SETTINGS, UserSettings } from "../lib/types";
import CanvasWrapper from "./canvas/CanvasWrapper";
import ObjectList from "./object-list/ObjectList";
import Options from "./options/Options";
import TextureManager from "./textures/TextureManager";

const CONTENT_WIDTH = '1600px';

type SidebarTab = 'options' | 'objects' | 'textures';
const SIDEBAR_TABS = ['options', 'objects', 'textures'] as const;

export type ObjectStateMap = Map<Object3do, ObjectState>;

const Main: FunctionComponent<{
  engineName: 'webgl' | 'ui-debug';
  shaders: WebglEngineShaderSources;
  object3doTree: Object3doTree;
  regularTextures: TextureMapping;
  defaultObjStateMap: ObjectStateMap;
}> = ({ engineName, shaders, object3doTree, regularTextures, defaultObjStateMap }) => {
  console.log('Re-rendering App');

  const [expandContent, setExpandContent] = useState(false);
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>('options');
  const [modelControls, setModelControls] = useState(DEFAULT_MODEL_CONTROLS);
  const [objStateMap, setObjStateMap] = useState<ObjectStateMap>(defaultObjStateMap);
  const [engine, setEngine] = useState<Engine>();

  const [userService] = useState(localStorageUserService);
  const [userSettings, _setUserSettings] = useState(userService.load() ?? DEFAULT_USER_SETTINGS);
  const setUserSettings = useCallback((newUserSettings: UserSettings) => {
    _setUserSettings(newUserSettings);
    userService.save(newUserSettings);
  }, [userService]);

  const [customTextures, setCustomTextures] = useState<TextureMapping>({});

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

    const engineConfig: EngineConfig = {
      mode: 'static',
      canvas: canvas,
      modelControls: DEFAULT_MODEL_CONTROLS,
      listener: engineListener,
      textureMapping: { ...regularTextures },
      objStateMap: defaultObjStateMap,
    };

    const engine = engineName === 'webgl'
      ? new WebglEngine(engineConfig, shaders, object3doTree)
      : new UiDebugEngine(engineConfig);

    setEngine(engine);

    return () => {
      console.log(`Destroying engine. This should probably not be happening normally.`);
      engine.destroy();
      setEngine(undefined);
    };
    // \/ important: all dependencies should come from non-stateful values: AKA never change
  }, [canvasRef, shaders, defaultObjStateMap, engineName, object3doTree, regularTextures]);

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

  const optionsPanel = useMemo(() => (
    <Options
      modelControls={modelControls}
      setModelControls={(newModelControls) => {
        setModelControls(newModelControls);

        if (engine) {
          engine.setModelControls(newModelControls);
        }
      }}
      userSettings={userSettings}
      setUserSettings={setUserSettings}
    />
  ), [engine, modelControls, userSettings, setUserSettings]);

  const objectsPanel = useMemo(() => {
    return (
      <ObjectList
        object3doTree={object3doTree}
        objStateMap={objStateMap}
        setObjStateMap={(newObjStateMap) => {
          setObjStateMap(newObjStateMap);

          if (engine) {
            engine.setObjectStateMap(newObjStateMap);
          }
        }}
      />
    );
  }, [engine, object3doTree, objStateMap]);

  const texturesPanel = useMemo(() => {
    return (
      <TextureManager
        regularTextures={regularTextures}
        customTextures={customTextures}
        setCustomTextures={(newCustomTextures) => {
          if (engine) {
            engine.setTextureMapping({ ...regularTextures, ...newCustomTextures });
          }

          setCustomTextures(newCustomTextures);
        }}
      />
    );
  }, [engine, customTextures, regularTextures]);

  const sidebar = useMemo(() => {
    return (
      <div class="h-full flex flex-col">
        <div class="flex text-white border-b border-gray-700">
          {SIDEBAR_TABS.map((tab, index, arr) => {
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
                {tab === 'options' ? 'Options'
                  : tab === 'objects' ? 'Objects'
                  : 'Textures'}
              </div>
            )
          })}
        </div>

        <div
          class="grow max-h-full overflow-hidden py-6"
          style={{ width: userSettings.sidebarWidth, overflowX: 'auto' }}
        >
          {sidebarTab === 'options' ? optionsPanel
            : sidebarTab === 'objects' ? objectsPanel
            : texturesPanel}
        </div>
      </div>
    );
  }, [sidebarTab, optionsPanel, userSettings, objectsPanel, texturesPanel]);

  return (
    <div class="flex justify-center items-stretch h-screen overflow-hidden bg-gray-900">
      <div
        class={'grow flex bg-gray-800 border'
          + (expandContent ? ' border-gray-800' : ' border-gray-700')
          + (userSettings.sidebarPosition === 'left' ? '' : ' flex-row-reverse')}
        style={{ "max-width": expandContent ? '100%' : CONTENT_WIDTH }}
      >
        <div
          class={'hidden lg:block border-gray-700'
            + (userSettings.sidebarPosition === 'left' ? ' border-r' : ' border-l')}
        >
          {sidebar}
        </div>
        <div class="grow">
          {canvasPanel}
        </div>
      </div>
    </div>
  );
};

export default Main;