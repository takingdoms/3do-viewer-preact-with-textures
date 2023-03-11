import { FunctionComponent, h } from 'preact';
import { useMemo, useState } from "preact/hooks";
import { UserService } from "../../lib/services/user-service";
import { UserSettings } from "../../lib/types/user-settings";
import Spoiler from "../ui/Spoiler";

const SAMPLES: Array<{ path: string; name: string }> = [
  'aradrag.3do',
  'tardrag.3do',
  'verdrag.3do',
  'zondrag.3do',
  'creaeri.3do',
  'aralode.3do',
  'araking.3do',
  'cresage.3do',
  'tarnecro.3do',
  'vermage.3do',
  'zonhunt.3do',
].map((name) => ({
  name,
  path: 'assets/3do-samples/' + name,
}));

const ISSUES_URL = 'https://github.com/takingdoms/3do-viewer-preact/issues';

const submitButtonCss = 'border border-gray-700 px-2 py-0.5 hover:text-yellow-500 '
  + 'focus:text-yellow-500';

const anchorCss = 'text-sky-500 hover:text-sky-700 focus:text-sky-700 hover:underline focus:underline';

const FileChooser: FunctionComponent<{
  onSubmit: (dataSource: File | string) => void;
  defaultUserSettings: UserSettings;
  setDefaultUserSettings: (userSettings: UserSettings) => void;
}> = ({ onSubmit, defaultUserSettings, setDefaultUserSettings }) => {
  const controlsInfo = useMemo(() => (
    <div class="text-sm">
      <h3 class="text-base font-bold">Controls:</h3>
      <p><u>Left mouse button:</u> hold and drag to rotate the model.</p>
      <p><u>Middle mouse button:</u> hold and drag to move the model.</p>
      <p><u>Mouse wheel:</u> zoom in or out.</p>
    </div>
  ), []);

  const miscInfo = useMemo(() => (
    <div class="text-sm">
      <h3 class="text-base font-bold">About:</h3>
      {/* <p>Nothing is uploaded anywhere, everything is done locally on the browser.</p> */}
      <p>Submit suggestions or problems at: <a class={anchorCss} href={ISSUES_URL} target="_blank">{ISSUES_URL}</a></p>
      <p>...or message spagg#2962 on Discord.</p>
    </div>
  ), []);

  const option1 = useMemo(() => (
    <form
      class="px-4 py-2 border border-4 border-gray-600 rounded h-full"
      onSubmit={(ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        const file = formData.get('file') as File;

        if (file && file.size && file.name) {
          onSubmit(file);
        }
      }}
    >
      <div class="text-3xl text-center mb-4">Option 1</div>
      <div class="text-xl text-gray-400 mb-2">Load your own file</div>
      <div className="flex items-stretch space-x-2">
        <input name="file" type="file" class="grow border border-gray-700" />
        <button class={submitButtonCss} type="submit">GO</button>
      </div>
    </form>
  ), [onSubmit]);

  const option2 = useMemo(() => (
    <form
      class="px-4 py-2 border border-4 border-gray-600 rounded h-full"
      onSubmit={(ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        const sample = formData.get('sample')?.toString().trim();

        if (sample) {
          onSubmit(sample);
        }
      }}
    >
      <div class="text-3xl text-center mb-4">Option 2</div>
      <div class="text-xl text-gray-400 mb-2">Pick a sample file</div>
      <div className="flex items-stretch space-x-2">
        <select name="sample" class="grow border border-gray-700">
          <option value=""></option>
          {SAMPLES.map((sample, idx) => (
            <option value={sample.path} key={idx}>{sample.name}</option>
          ))}
        </select>
        <button class={submitButtonCss} type="submit">GO</button>
      </div>
    </form>
  ), [onSubmit]);

  const advanced = useMemo(() => (
    <Spoiler title="Advanced">
      <div class="space-y-2">
        <div>
          <label class="flex items-center">
            <input
              type="checkbox"
              checked={defaultUserSettings.preserveDrawingBuffer}
              onChange={(ev) => {
                setDefaultUserSettings({
                  ...defaultUserSettings,
                  preserveDrawingBuffer: ev.currentTarget.checked,
                });
              }}
            />
            <span class="font-bold ml-2">WebGL / Preserve Drawing Buffer</span>
          </label>
          <span class="text-gray-300 text-sm">
            {`Disable this only if the model rendering is lagging (might not even change anything).
            Disabling this will also disable the "Save Model Image" button and the ability to
            "Right click > Save Image As"`}
          </span>
        </div>
      </div>
    </Spoiler>
  ), [defaultUserSettings, setDefaultUserSettings]);

  return (
    <div class="min-w-screen min-h-screen bg-gray-800 flex flex-col justify-center items-center">
      <div
        style={{ maxWidth: 800 }}
        class="container flex justify-center items-stretch
          flex-col-reverse md:flex-col"
      >
        <div class="flex flex-wrap items-stretch">
          <div class="flex-1 p-4" style={{ minWidth: 300 }}>{controlsInfo}</div>
          <div class="flex-1 p-4" style={{ minWidth: 300 }}>{miscInfo}</div>
        </div>

        <div class="flex flex-wrap items-stretch">
          <div class="flex-1 p-4">{option1}</div>
          <div class="flex-1 p-4">{option2}</div>
        </div>

        <div class="mt-8 self-center">
          {advanced}
        </div>
      </div>
    </div>
  );
};

export default FileChooser;
