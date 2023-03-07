import { FunctionComponent, h } from 'preact';
import { ModelControls } from "../../../lib/types";

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
        {/* TODO change solid color */}
      </div>

    </div>
  );
}

export default SolidColorOptions;
