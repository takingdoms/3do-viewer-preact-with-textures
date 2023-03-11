import { Object3do, Object3doTree, Parse3do } from "@takingdoms/lib-3do";
import { FunctionComponent,h  } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { WebglEngineShaderSources } from "../../lib/engines/webgl-engine";
import { defaultLogoColorsDefinitions, TakLogoColorsDefinitions, TakLogoIndex } from "../../lib/logo-colors";
import { UserService } from "../../lib/services/user-service";
import { TextureMapping } from "../../lib/texture-mapping";
import { ModelControls } from "../../lib/types/model-controls";
import { UserSettings } from "../../lib/types/user-settings";
import { ViewMode } from "../../lib/types/view";
import { Utils } from "../../lib/utils";
import Main, { ObjectStateMap } from "../Main";

const Loader: FunctionComponent<{
  dataSource: File | string; // string = url
  userService: UserService;
  defaultUserSettings: UserSettings;
  defaultModelControls: ModelControls;
}> = ({ dataSource, userService, defaultUserSettings, defaultModelControls }) => {
  const [result, setResult] = useState<Object3doTree>();
  const [shaders, setShaders] = useState<WebglEngineShaderSources>();
  const [textures, setTextures] = useState<TextureMapping>();
  const [error, setError] = useState<any>();

  const logoDefs = defaultLogoColorsDefinitions;

  // TODO move this up in the component tree since shaders can be loaded BEFORE the user selects a
  // dataSource
  useEffect(() => {
    loadShaders()
      .then(setShaders);
  }, []);

  useEffect(() => {
    loadModel(dataSource)
      .then((res) => {
        setResult(res);
        return loadTextures(res, logoDefs, 'assets/custom/pngs/', 'png');
      })
      .then(setTextures)
      .catch(setError);
  }, [dataSource, logoDefs]);

  if (error !== undefined) {
    return (
      <div
        class="min-w-screen min-h-screen flex flex-col justify-center items-center text-3xl
          bg-black"
      >
        <div class="text-red-300">Error!</div>
        <div class="text-red-600">(TODO)</div>
        <div class="text-red-600">{JSON.stringify(error)}</div>
      </div>
    );
  }

  if (result === undefined || shaders === undefined || textures === undefined) {
    let message = 'Loading...';

    if (result && shaders) {
      message = 'Loading textures...';
    }

    return (
      <div class="min-w-screen min-h-screen flex justify-center items-center text-3xl bg-black">
        <span class="text-gray-400">
          {message}
        </span>
      </div>
    );
  }

  return (
    <Main
      engineName="webgl"
      object3doTree={result}
      shaders={shaders}
      regularTextures={textures}
      defaultObjStateMap={createStateMap(result)}
      logoDefs={logoDefs}
      userService={userService}
      defaultUserSettings={defaultUserSettings}
      defaultModelControls={{
        ...defaultModelControls,
        viewMode: getDefaultViewMode(textures) ?? defaultModelControls.viewMode,
        logoColorIdx: getDefaultLogoColor(dataSource) ?? defaultModelControls.logoColorIdx,
      }}
    />
  );
}

export default Loader;

function createStateMap(object3doTree: Object3doTree): ObjectStateMap {
  const result: ObjectStateMap = new Map();

  const next = (node: Object3do) => {
    result.set(node, {
      highlight: false,
      hide: false,
    });

    for (const child of node.children) {
      next(child);
    }
  };

  for (const rootChild of object3doTree.rootNodes) {
    next(rootChild);
  }

  return result;
}

async function loadShaders(): Promise<WebglEngineShaderSources> {
  return {
    regular: {
      fsSource: await fetch('assets/shaders/regular.fs').then((res) => res.text()),
      vsSource: await fetch('assets/shaders/regular.vs').then((res) => res.text()),
    },
    solid: {
      fsSource: await fetch('assets/shaders/solid_color.fs').then((res) => res.text()),
      vsSource: await fetch('assets/shaders/solid_color.vs').then((res) => res.text()),
    },
    wireframe: {
      fsSource: await fetch('assets/shaders/wireframe.fs').then((res) => res.text()),
      vsSource: await fetch('assets/shaders/wireframe.vs').then((res) => res.text()),
    },
  };
}

async function loadModel(dataSource: File | string): Promise<Object3doTree> {
  let data: ArrayBuffer;

  if (typeof dataSource === 'string') {
    const response = await fetch(dataSource);
    data = await response.arrayBuffer();
  }
  else {
    data = await dataSource.arrayBuffer();
  }

  const view = new DataView(data);
  return Parse3do.fromBuffer(view);
}

async function loadTextures(
  tree: Object3doTree,
  logoDefs: TakLogoColorsDefinitions,
  basePath: string,
  fileExtension: string,
): Promise<TextureMapping> {
  const textureNames = new Set<string>();

  const loadNext = (node: Object3do) => {
    for (const primitive of node.primitives) {
      const textureName = primitive.textureName;

      if (Utils.validateTextureName(textureName)) {
        textureNames.add(textureName);
      }
    }

    for (const child of node.children) {
      loadNext(child);
    }
  };

  for (const rootNode of tree.rootNodes) {
    loadNext(rootNode);
  }

  const result: TextureMapping = {};

  await Promise.all(Array.from(textureNames).map((textureName) => {
    return new Promise<void>((resolve, reject) => {
      textureName = textureName.trim();

      if (textureName === '') {
        result[textureName] = null;
        resolve();
        return;
      }

      const usesLogo = logoDefs.textureKeyUsesLogo(textureName);

      if (!usesLogo) {
        const textureFilePath = `${textureName}.${fileExtension}`;

        const image = new Image();
        image.src = basePath + textureFilePath;

        image.onerror = () => {
          console.error(`Failed to load image at: ${image.src}`);
          result[textureName] = null;
          resolve();
        };

        image.onload = () => {
          result[textureName] = { type: 'html', image };
          resolve();
        };

        return;
      }

      Promise.all(logoDefs.idxList.map((nextIdx) => {
        return new Promise<void>((resolveInner, _rejectInner) => {
          const logoTextureName = logoDefs.idxToTextureKey(nextIdx, textureName);
          const textureFileName = logoDefs.idxToTextureFilename(nextIdx, textureName);
          const textureFilePath = `${textureFileName}.${fileExtension}`;

          const image = new Image();
          image.src = basePath + textureFilePath;

          image.onerror = () => {
            console.error(`Failed to load image at: ${image.src}`);
            result[logoTextureName] = null;
            resolveInner();
          };

          image.onload = () => {
            result[logoTextureName] = { type: 'html', image };
            resolveInner();
          };
        });
      })).then(() => resolve(), reject);
    });
  }));

  return result;
}

function getDefaultViewMode(textures: TextureMapping): ViewMode | undefined {
  const allTexturesFailed = Object.values(textures).every((value) => value === null);
  return allTexturesFailed ? 'wireframe' : undefined;
}

function getDefaultLogoColor(dataSource: File | string): TakLogoIndex | undefined {
  const fileName = typeof dataSource === 'string'
    ? dataSource.replace(/^.*[\\\/]/, '')
    : dataSource.name; // File type

  if (fileName.startsWith('ara')) return 3;
  if (fileName.startsWith('tar')) return 1;
  if (fileName.startsWith('ver')) return 0;
  if (fileName.startsWith('zon')) return 7;
  if (fileName.startsWith('cre')) return 6;

  return undefined;
}
