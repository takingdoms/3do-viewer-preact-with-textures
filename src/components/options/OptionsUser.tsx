import { FunctionComponent, h } from 'preact';
import { UserSettings } from "../../lib/types/user-settings";

const OptionsUser: FunctionComponent<{
  userSettings: UserSettings;
  setUserSettings: (s: UserSettings) => void;
}> = ({
  userSettings,
  setUserSettings,
}) => {
  return (
    <div class="space-y-4">
      <div class="flex flex-col items-stretch">
        <label for="sidebarPosition">Sidebar Position</label>
        <select
          id="sidebarPosition"
          value={userSettings.sidebarPosition}
          onChange={(ev) => {
            const sidebarPosition = ev.currentTarget.value === 'left' ? 'left' : 'right';
            setUserSettings({ ...userSettings, sidebarPosition });
          }}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
    </div>
  );
}

export default OptionsUser;
