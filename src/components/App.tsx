import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import { localStorageUserService } from "../lib/services/user-service";
import { DEFAULT_MODEL_CONTROLS, ModelControls } from "../lib/types/model-controls";
import { UserSettings, DEFAULT_USER_SETTINGS } from "../lib/types/user-settings";
import FileChooser from "./loader/FileChooser";
import Loader from "./loader/Loader";

const App = () => {
  const [dataSource, setDataSource] = useState<File | string>(); // string = url

  const [userService] = useState(localStorageUserService);
  const [defaultUserSettings, setDefaultUserSettings] = useState<UserSettings>();
  const [defaultModelControls, setDefaultModelControls] = useState<ModelControls>();

  useEffect(() => {
    let userSettings: UserSettings;

    try {
      userSettings = userService.load() ?? DEFAULT_USER_SETTINGS;
    } catch (err) {
      console.error(err);
      userSettings = DEFAULT_USER_SETTINGS;
      userService.save(userSettings);
    }

    setDefaultUserSettings(userSettings);

    setDefaultModelControls({
      ...DEFAULT_MODEL_CONTROLS,
      textureFilterMin: userSettings.defaultTextureFilterMin,
      textureFilterMag: userSettings.defaultTextureFilterMag,
    });
  }, [userService]);

  if (defaultUserSettings === undefined || defaultModelControls === undefined) {
    return (
      <div class="min-h-screen flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  if (dataSource === undefined) {
    return (
      <FileChooser
        onSubmit={setDataSource}
        defaultUserSettings={defaultUserSettings}
        setDefaultUserSettings={(newUserSettings) => {
          setDefaultUserSettings(newUserSettings);
          userService.save(newUserSettings);
        }}
      />
    );
  }

  return (
    <Loader
      dataSource={dataSource}
      userService={userService}
      defaultUserSettings={defaultUserSettings}
      defaultModelControls={defaultModelControls}
    />
  );
};

export default App;
