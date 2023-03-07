import { FunctionComponent, h } from 'preact';
import { ModelControls } from "../../../lib/types";
import ColorControl from "../../ui/ColorControl";

const SolidColorOptions: FunctionComponent<{
  modelControls: ModelControls;
  setModelControls: (m: ModelControls) => void;
}> = ({
  modelControls,
  setModelControls,
}) => {
  return (
    <div class="space-y-4">

      <div>
        <label class="flex items-center">
          <input
            type="checkbox"
            checked={modelControls.enableLightingSolidColor}
            onChange={(ev) => {
              setModelControls({
                ...modelControls,
                enableLightingSolidColor: ev.currentTarget.checked,
              });
            }}
          />
          <span class="pl-1">Enable Lighting</span>
        </label>
      </div>

      <div>
        <div class="">
          Solid Color
        </div>

        <ColorControl
          color={modelControls.solidColor}
          setColor={(solidColor) => setModelControls({ ...modelControls, solidColor })}
        />
      </div>

    </div>
  );
}

export default SolidColorOptions;
