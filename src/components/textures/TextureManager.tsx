import { FunctionComponent, h } from 'preact';
import { useCallback, useState } from "preact/hooks";
import { IoUtils } from "../../lib/io-utils";
import { TextureMapping } from "../../lib/texture-mapping";
import TextureList from "./TextureList";

type TextureManagerProps = {
  regularTextures: TextureMapping;
  customTextures: TextureMapping;
  setCustomTextures: (t: TextureMapping) => void;
};

const validFormats = ['image/png', 'image/gif', 'image/jpeg'];

const TextureManager: FunctionComponent<TextureManagerProps> = ({
  regularTextures,
  customTextures,
  setCustomTextures,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const loadFiles = useCallback(async (files: FileList) => {
    const newMapping: TextureMapping = {};

    for (const file of files) {
      if (!validFormats.includes(file.type)) {
        continue;
      }

      const updateMapping = (image: HTMLImageElement) => {
        const fileBasename = file.name
          .replace(/^.*[\\\/]/, '')   // get filename (remove parent directories)
          .replace(/\.[^/.]+$/, '');  // get basename (remove extension)

        newMapping[fileBasename] = { type: 'html', image };
      };

      await IoUtils.loadDataUrl(file)
        .then(IoUtils.createImageFromDataUrl)
        .then(updateMapping)
        .catch(console.error);
    }

    setCustomTextures({
      ...customTextures,
      ...newMapping,
    });
  }, [customTextures, setCustomTextures]);

  const fileInput = (
    <input
      type="file"
      multiple={true}
      accept={validFormats.join(', ')}
      disabled={isLoading}
      onChange={(ev) => {
        if (isLoading) {
          ev.currentTarget.value = '';
          return;
        }

        const files = ev.currentTarget.files;

        if (files !== null) {
          setIsLoading(true);

          loadFiles(files).finally(() => {
            setIsLoading(false);
          });
        }

        ev.currentTarget.value = '';
      }}
    />
  );

  return (
    <div class="flex flex-col max-h-full overflow-hidden">

      <div class="text-center font-bold mb-2">Custom Textures</div>
      <div class="grow overflow-auto px-6">
        <TextureList textures={customTextures} setTextures={setCustomTextures} />
      </div>
      <div className="px-6 mt-2">{fileInput}</div>
      <div class="mb-6" />

      <div class="text-center font-bold mb-2">TAK Textures</div>
      <div class="grow overflow-auto px-6">
        <TextureList textures={regularTextures} />
      </div>

    </div>
  );
};

export default TextureManager;
