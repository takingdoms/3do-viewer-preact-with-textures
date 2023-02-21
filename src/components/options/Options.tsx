import { FunctionComponent, h } from 'preact';
import { useMemo } from "preact/hooks";
import { ModelControls, UserSettings } from "../../lib/types";
import OptionsControls from "./OptionsControls";
import OptionsUser from "./OptionsUser";

type OptionsProps = {
  modelControls: ModelControls;
  setModelControls: (m: ModelControls) => void;
  userSettings: UserSettings;
  setUserSettings: (s: UserSettings) => void;
};

const Options: FunctionComponent<OptionsProps> = ({
  modelControls,
  setModelControls,
  userSettings,
  setUserSettings,
}) => {
  const controls = useMemo(() => (
    <OptionsControls modelControls={modelControls} setModelControls={setModelControls} />
  ), [modelControls, setModelControls]);

  const user = useMemo(() => (
    <OptionsUser userSettings={userSettings} setUserSettings={setUserSettings} />
  ), [userSettings, setUserSettings]);

  return (
    <div class="max-h-full overflow-auto px-6">
      <div class="text-center font-bold mb-1">Controls</div>
      {controls}

      <div class="text-center font-bold mt-6 mb-1">User Settings</div>
      {user}
    </div>
  );
};

export default Options;
