import { FunctionComponent, h } from 'preact';
import { ModelControls, VIEW_MODES } from "../../lib/types";
import SliderControl from "./SliderControl";

type ControlsProps = {
  modelControls: ModelControls;
  setModelControls: (m: ModelControls) => void;
};

const Controls: FunctionComponent<ControlsProps> = ({
  modelControls,
  setModelControls,
}) => {
  return (
    <div class="max-h-full overflow-auto pr-6 space-y-4">
      <SliderControl
        id="zoom"
        label="Zoom"
        max={1000}
        value={modelControls.zoom}
        setValue={(zoom) => setModelControls({ ...modelControls, zoom })}
      />
      <SliderControl
        id="rotationX"
        label="Rotation X"
        max={360}
        value={modelControls.rotationX}
        setValue={(rotationX) =>  setModelControls({ ...modelControls, rotationX })}
      />
      <SliderControl
        id="rotationY"
        label="Rotation Y"
        max={360}
        value={modelControls.rotationY}
        setValue={(rotationY) => setModelControls({ ...modelControls, rotationY })}
      />
      <SliderControl
        id="rotationZ"
        label="Rotation Z"
        max={360}
        value={modelControls.rotationZ}
        setValue={(rotationZ) => setModelControls({ ...modelControls, rotationZ })}
      />
      <SliderControl
        id="panX"
        label="Pan X"
        value={modelControls.translationX}
        setValue={(translationX) => setModelControls({ ...modelControls, translationX })}
      />
      <SliderControl
        id="panY"
        label="Pan Y"
        value={modelControls.translationY}
        setValue={(translationY) => setModelControls({ ...modelControls, translationY })}
      />
      <div class="flex flex-col items-stretch">
        <label for="viewMode">View Mode</label>
        <select
          id="viewMode"
          value={modelControls.viewMode}
          onChange={(ev) => {
            const viewMode = VIEW_MODES.find((vm) => vm === ev.currentTarget.value);
            if (viewMode) {
              setModelControls({ ...modelControls, viewMode });
            }
          }}
        >
          <option value="normal">Normal</option>
          <option value="solid_color">Solid Color</option>
          <option value="wireframe">Wireframe</option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
