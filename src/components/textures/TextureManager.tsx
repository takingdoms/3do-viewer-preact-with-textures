import { FunctionComponent, h, Fragment } from 'preact';
import { TextureMapping } from "../../lib/texture-mapping";
import TextureList from "./TextureList";

type TextureManagerProps = {
  regularTextures: TextureMapping;
  customTextures: TextureMapping;
  setCustomTextures: (t: TextureMapping) => void;
};

const TextureManager: FunctionComponent<TextureManagerProps> = ({
  regularTextures,
  customTextures,
  setCustomTextures,
}) => {
  const hasCustomTextures = Object.keys(customTextures).length > 0;

  return (
    <div class="flex flex-col max-h-full overflow-hidden">
      {hasCustomTextures && (<>
        <div class="text-center font-bold mb-2">Custom Textures</div>
        <div class="grow overflow-auto px-6">
          <TextureList textures={customTextures} setTextures={setCustomTextures} />
        </div>
        <div class="mb-4" />
      </>)}

      <div class="text-center font-bold mb-2">TAK Textures</div>
      <div class="grow overflow-auto px-6">
        <TextureList textures={regularTextures} />
      </div>
    </div>
  );
};

export default TextureManager;
