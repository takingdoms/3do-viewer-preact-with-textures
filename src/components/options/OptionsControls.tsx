import { FunctionComponent, h } from 'preact';
import { ModelControls } from "../../lib/types/model-controls";
import { VIEW_MODES } from "../../lib/types/view";
import SliderControl from "../ui/SliderControl";

const OptionsControls: FunctionComponent<{
  modelControls: ModelControls;
  setModelControls: (m: ModelControls) => void;
}> = ({
  modelControls,
  setModelControls,
}) => {
  return (
    <div class="space-y-4">
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
        min={-180}
        max={180}
        value={modelControls.rotationX}
        setValue={(rotationX) =>  setModelControls({ ...modelControls, rotationX })}
      />
      <SliderControl
        id="rotationY"
        label="Rotation Y"
        min={-180}
        max={180}
        value={modelControls.rotationY}
        setValue={(rotationY) => setModelControls({ ...modelControls, rotationY })}
      />
      <SliderControl
        id="rotationZ"
        label="Rotation Z"
        min={-180}
        max={180}
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
          <option value="regular">Regular</option>
          <option value="solid_color">Solid Color</option>
          <option value="wireframe">Wireframe</option>
        </select>
      </div>
      <div>
        <label
          class="flex items-center space-x-2"
          title="This is a temporary, band-aid solution to fix issues with Z-Fighting"
        >
          <input
            type="checkbox"
            checked={modelControls.enableFaceCulling}
            onChange={(ev) => {
              setModelControls({ ...modelControls, enableFaceCulling: ev.currentTarget.checked });
            }}
          />

          <span>Enable face-culling</span>
        </label>
      </div>
    </div>
  );
}

export default OptionsControls;
