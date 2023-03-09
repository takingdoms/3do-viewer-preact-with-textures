import { FunctionComponent, h } from 'preact';
import { TextureMapping } from "../../lib/texture-mapping";

type TextureListProps = {
  textures: TextureMapping;
  setTextures?: (t: TextureMapping) => void;
};

const TextureList: FunctionComponent<TextureListProps> = ({
  textures,
  setTextures,
}) => {
  return (
    <div class="flex flex-col space-y-2">
      {Object.entries(textures).map(([key, value], index) => {
        let isOk = value !== null;

        if (value !== null && value.type === 'html') {
          isOk = value.image.complete && value.image.naturalWidth !== 0;
        }

        const msg = isOk ? 'OK' : 'ERROR';

        return (
          <div
            key={index}
            class={'flex items-center group'
              + (isOk ? ' text-green-600 hover:text-green-500' : ' text-red-600 hover:text-red-500')}
          >
            <div class="break-all">{key}</div>

            <div
              class="grow border-b border-dashed border-gray-600 group-hover:border-gray-500 mx-1
                text-transparent text-center"
              style={{ minWidth: '24px', marginBottom: '6px' }}
            >
              -
            </div>

            {value?.type === 'html' && isOk ? (
              <a href={value.image.src} target="_blank" rel="noreferrer">{msg}</a>
            ) : (
              <div>{msg}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TextureList;
