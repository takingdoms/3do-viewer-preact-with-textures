import { FunctionComponent, h } from 'preact';
import { ModelControls } from "../../../lib/types";
import ColorControl from "../../ui/ColorControl";

const WireframeOptions: FunctionComponent<{
  modelControls: ModelControls;
  setModelControls: (m: ModelControls) => void;
}> = ({
  modelControls,
  setModelControls,
}) => {
  return (
    <div class="space-y-4">
      <div>
        <div class="text-center">
          Wireframe Color
        </div>

        <ColorControl
          color={modelControls.wireframeColor}
          setColor={(wireframeColor) => setModelControls({ ...modelControls, wireframeColor })}
        />
      </div>
    </div>
  );
}

export default WireframeOptions;
