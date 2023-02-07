import { Object3doTree, Parse3do } from "@takingdoms/lib-3do";
import { h } from 'preact';
import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import Main from "./main";

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

async function loadShaders(): Promise<{ vsSource: string; fsSource: string; }> {
  return {
    vsSource: await fetch('/assets/shaders/default.vs').then((res) => res.text()),
    fsSource: await fetch('/assets/shaders/default.fs').then((res) => res.text()),
  };
}

const Loader: FunctionComponent<{
  dataSource: File | string; // string = url
}> = ({ dataSource }) => {
  const [result, setResult] = useState<Object3doTree>();
  const [shaders, setShaders] = useState<{ vsSource: string; fsSource: string; }>();
  const [error, setError] = useState<any>();

  // TODO move this up in the component tree since shaders can be loaded BEFORE the user selects a
  // dataSource
  useEffect(() => {
    loadShaders()
      .then(setShaders);
  }, []);

  useEffect(() => {
    loadModel(dataSource)
      .then(setResult)
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

  if (result === undefined || shaders === undefined) {
    return (
      <div class="min-w-screen min-h-screen flex justify-center items-center text-3xl bg-black">
        <span class="text-gray-400">Loading</span>&nbsp;
        {/* <span class="font-bold underline">{url}</span> */}
      </div>
    );
  }

  return (
    <Main
      object3doTree={result}
      shaders={shaders}
      engineName="webgl"
    />
  );
}

export default Loader;
