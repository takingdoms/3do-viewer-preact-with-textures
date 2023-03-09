import { FunctionComponent, h } from 'preact';
import { TakLogoColorsDefinitions } from "../../../lib/logo-colors";
import { ModelControls } from "../../../lib/types";

const RegularOptions: FunctionComponent<{
  modelControls: ModelControls;
  setModelControls: (m: ModelControls) => void;
  logoDefs: TakLogoColorsDefinitions;
}> = ({
  modelControls,
  setModelControls,
  logoDefs,
}) => {
  return (
    <div class="space-y-4">

      <div>
        <div>Team Color</div>
        <div
          class="flex flex-wrap -m-1 p-1"
          // style={{ background: '#333', border: '1px solid #222' }}
        >
          {logoDefs.idxList.map((idx) => (
            <div key={idx} class="m-1">
              <LogoButton
                htmlColor={logoDefs.idxToHtmlColor(idx)}
                isSelected={modelControls.logoColorIdx === idx}
                onSelect={() => setModelControls({ ...modelControls, logoColorIdx: idx })}
              />
            </div>
          ))}
        </div>
      </div>

      <div class="space-y-2">
        <div>
          <div>Texture Filter (Min.)</div>
          <select
            value={modelControls.textureFilterMin}
            onChange={(ev) => {
              const value = ev.currentTarget.value as 'linear' | 'nearest';
              setModelControls({ ...modelControls, textureFilterMin: value });
            }}
          >
            <option value="nearest">Nearest</option>
            <option value="linear">Linear</option>
          </select>
        </div>

        <div>
          <div>Texture Filter (Mag.)</div>
          <select
            value={modelControls.textureFilterMag}
            onChange={(ev) => {
              const value = ev.currentTarget.value as 'linear' | 'nearest';
              setModelControls({ ...modelControls, textureFilterMag: value });
            }}
          >
            <option value="nearest">Nearest</option>
            <option value="linear">Linear</option>
          </select>
        </div>
      </div>

      <div>
        <label class="flex items-center">
          <input
            type="checkbox"
            checked={modelControls.enableLightingRegular}
            onChange={(ev) => {
              setModelControls({
                ...modelControls,
                enableLightingRegular: ev.currentTarget.checked,
              });
            }}
          />
          <span class="pl-1">Enable Lighting</span>
        </label>
      </div>

    </div>
  );
}

const LogoButton: FunctionComponent<{
  htmlColor: string;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ htmlColor, isSelected, onSelect }) => {
  return (
    <button
      class="w-8 h-8 border border-2 p-1 rounded-full flex justify-center items-center"
      style={{ borderColor: htmlColor }}
      onClick={() => {
        if (!isSelected)
          onSelect();
      }}
    >
      <span
        class="w-full h-full rounded-full leading-none"
        style={{ backgroundColor: isSelected ? htmlColor : '' }}
      />
    </button>
  );
};

export default RegularOptions;
