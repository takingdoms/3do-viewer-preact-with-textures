import { Object3do, Object3doTree, Parse3do } from "@takingdoms/lib-3do";
import { h } from 'preact';
import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { WebglEngineShaderSources } from "../../lib/engines/webgl-engine";
import { TextureMapping } from "../../lib/texture-mapping";
import Main from "../Main";

async function loadShaders(): Promise<WebglEngineShaderSources> {
  return {
    normal: {
      fsSource: await fetch('/assets/shaders/normal.fs').then((res) => res.text()),
      vsSource: await fetch('/assets/shaders/normal.vs').then((res) => res.text()),
    },
    solid: {
      fsSource: await fetch('/assets/shaders/solid_color.fs').then((res) => res.text()),
      vsSource: await fetch('/assets/shaders/solid_color.vs').then((res) => res.text()),
    },
    wireframe: {
      fsSource: await fetch('/assets/shaders/wireframe.fs').then((res) => res.text()),
      vsSource: await fetch('/assets/shaders/wireframe.vs').then((res) => res.text()),
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

async function loadTextures(tree: Object3doTree): Promise<TextureMapping> {
  const textureNames = new Set<string>();

  const loadNext = (node: Object3do) => {
    for (const primitive of node.primitives) {
      textureNames.add(primitive.textureName);
    }

    for (const child of node.children) {
      loadNext(child);
    }
  };

  for (const rootNode of tree.rootNodes) {
    loadNext(rootNode);
  }

  const result: TextureMapping = {};

  for (let textureName of textureNames) {
    textureName = textureName.trim();

    if (textureName === '') {
      result[textureName] = null;
      continue;
    }

    const image = new Image();
    image.src = `/assets/custom/pngs/${textureName}.png`;

    result[textureName] = { type: 'html', image };
  }

  return result;
}

const Loader: FunctionComponent<{
  dataSource: File | string; // string = url
}> = ({ dataSource }) => {
  const [result, setResult] = useState<Object3doTree>();
  const [shaders, setShaders] = useState<WebglEngineShaderSources>();
  const [textures, setTextures] = useState<TextureMapping>();
  const [error, setError] = useState<any>();

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
        return loadTextures(res);
      })
      .then(setTextures)
      .catch(setError);
  }, [dataSource]);

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
    />
  );
}

export default Loader;
