import { FunctionComponent, h } from 'preact';
import { useCallback, useEffect } from "preact/hooks";

const SAMPLES: Array<{ path: string; name: string }> = [
  'aradrag.3do', // 0
  'tardrag.3do', // 1
  'verdrag.3do', // 2
  'zondrag.3do', // 3
  'creaeri.3do', // 4
  'aralode.3do', // 5
].map((name) => ({
  name,
  path: '/assets/3do-samples/' + name,
}));

const FileChooser: FunctionComponent<{
  onSubmit: (dataSource: File | string) => void;
}> = ({ onSubmit }) => {
  useEffect(() => {
    onSubmit(SAMPLES[1]!.path);
  }, []);

  const option1 = (
    <form
      class="px-4 py-2 border border-4 border-gray-600 rounded"
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
        <button type="submit">Go</button>
      </div>
    </form>
  );

  const option2 = (
    <form
      class="px-4 py-2 border border-4 border-gray-600 rounded"
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
          {SAMPLES.map((sample) => (
            <option value={sample.path}>{sample.name}</option>
          ))}
        </select>
        <button type="submit">Go</button>
      </div>
    </form>
  );

  return (
    <div class="min-w-screen min-h-screen bg-gray-800 flex justify-center items-center text-white">
      <div class="flex flex-col space-y-6">
        {option1}
        {option2}
      </div>
    </div>
  );
};

export default FileChooser;
