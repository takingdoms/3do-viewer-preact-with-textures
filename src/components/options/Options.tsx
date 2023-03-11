import { FunctionComponent, h, Fragment } from 'preact';
import { useMemo } from "preact/hooks";
import { TakLogoColorsDefinitions } from "../../lib/logo-colors";
import { ModelControls } from "../../lib/types/model-controls";
import { UserSettings } from "../../lib/types/user-settings";
import OptionsControls from "./OptionsControls";
import OptionsMisc from "./OptionsMisc";
import OptionsUser from "./OptionsUser";
import RegularOptions from "./view-modes/RegularOptions";
import SolidColorOptions from "./view-modes/SolidColorOptions";
import WireframeOptions from "./view-modes/WireframeOptions";

type OptionsProps = {
  modelControls: ModelControls;
  setModelControls: (m: ModelControls) => void;
  userSettings: UserSettings;
  setUserSettings: (s: UserSettings) => void;
  logoDefs: TakLogoColorsDefinitions;
};

const Options: FunctionComponent<OptionsProps> = ({
  modelControls,
  setModelControls,
  userSettings,
  setUserSettings,
  logoDefs,
}) => {
  const controls = useMemo(() => (
    <OptionsControls modelControls={modelControls} setModelControls={setModelControls} />
  ), [modelControls, setModelControls]);

  const user = useMemo(() => (
    <OptionsUser userSettings={userSettings} setUserSettings={setUserSettings} />
  ), [userSettings, setUserSettings]);

  const viewModeOptions = useMemo(() => {
    const viewMode = modelControls.viewMode;

    const sub
      = viewMode === 'regular'
        ? <RegularOptions modelControls={modelControls} setModelControls={setModelControls} logoDefs={logoDefs} />
      : viewMode === 'solid_color'
        ? <SolidColorOptions modelControls={modelControls} setModelControls={setModelControls} />
      : viewMode === 'wireframe'
        ? <WireframeOptions modelControls={modelControls} setModelControls={setModelControls} />
      : null;

    return (<>
      <div class="text-center font-bold border-b border-gray-700 mb-2 pb-1 mt-6">View Mode Settings</div>
      {sub}
    </>);
  }, [modelControls, setModelControls]);

  return (
    <div class="max-h-full overflow-auto px-6">
      <div class="text-center font-bold border-b border-gray-700 mb-2 pb-1">Controls</div>
      {controls}

      {viewModeOptions}

      <div class="text-center font-bold border-b border-gray-700 mb-2 pb-1 mt-6">User Settings</div>
      {user}

      <div class="text-center font-bold border-b border-gray-700 mb-2 pb-1 mt-6">Misc.</div>
      <OptionsMisc modelControls={modelControls} setModelControls={setModelControls} />
    </div>
  );
};

export default Options;
