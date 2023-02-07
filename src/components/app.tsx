import { h } from 'preact';
import { useState } from "preact/hooks";
import FileChooser from "./file-chooser";
import Loader from "./loader";

const App = () => {
  const [dataSource, setDataSource] = useState<File | string>(); // string = url

  if (dataSource === undefined) {
    return (
      <FileChooser onSubmit={setDataSource} />
    );
  }

  return (
    <Loader dataSource={dataSource} />
  );
};

export default App;
