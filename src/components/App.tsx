import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import { localStorageUserService } from "../lib/services/user-service";
import { loadDefaultModelControls, ModelControls, UserSettings } from "../lib/types";
import FileChooser from "./loader/FileChooser";
import Loader from "./loader/Loader";

const App = () => {
  const [dataSource, setDataSource] = useState<File | string>(); // string = url

  const [userService] = useState(localStorageUserService);
  const [defaultUserSettings, setDefaultUserSettings] = useState<UserSettings>();
  const [defaultModelControls, setDefaultModelControls] = useState<ModelControls>();

  useEffect(() => {
    const userSettings = userService.load();

    setDefaultUserSettings(userSettings);
    setDefaultModelControls(loadDefaultModelControls(userSettings));
  }, [userService]);

  if (defaultUserSettings === undefined || defaultModelControls === undefined) {
    return 'Loading...';
  }

  if (dataSource === undefined) {
    return (
      <FileChooser onSubmit={setDataSource} />
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
