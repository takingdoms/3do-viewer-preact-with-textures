import { FunctionComponent, h } from 'preact';
import { ModelControls } from "../../../lib/types";

const RegularOptions: FunctionComponent<{
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

export default RegularOptions;
