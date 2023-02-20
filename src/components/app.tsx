import { h } from 'preact';
import { useState } from "preact/hooks";
import FileChooser from "./loader/FileChooser";
import Loader from "./loader/Loader";

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
