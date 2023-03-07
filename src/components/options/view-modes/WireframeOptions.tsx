import { FunctionComponent, h } from 'preact';
import { ModelControls } from "../../../lib/types";

const WireframeOptions: FunctionComponent<{
  modelControls: ModelControls;
  setModelControls: (m: ModelControls) => void;
}> = ({
  modelControls,
  setModelControls,
}) => {
  return (
    <div class="space-y-4">
      {/* TODO change line color */}
    </div>
  );
}

export default WireframeOptions;
