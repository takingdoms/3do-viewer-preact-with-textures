import { FunctionComponent, h } from 'preact';
import { MutableRef, useCallback, useEffect, useMemo, useState } from "preact/hooks";
import { IoUtils } from "../../lib/io-utils";
import { ModelControls } from "../../lib/types/model-controls";
import { UserSettings } from "../../lib/types/user-settings";

const OptionsMisc: FunctionComponent<{
  modelControls: ModelControls;
  setModelControls: (m: ModelControls) => void;
  canvasRef: MutableRef<HTMLCanvasElement | undefined>;
  enableSaveImageButton: boolean;
}> = ({
  modelControls,
  setModelControls,
  enableSaveImageButton,
  canvasRef,
}) => {
  const [canvasBg, setCanvasBg] = useState(getInitialBg(modelControls.canvasBackground));

  const onChangeCanvasBg = useCallback((value: string) => {
    setCanvasBg(value);

    if (value !== 'custom') {
      setModelControls({ ...modelControls, canvasBackground: value });
    }
  }, [modelControls, setModelControls]);

  const customBgFile = useMemo(() => {
    if (canvasBg !== 'custom') {
      return null;
    }

    return (
      <input
        type="file"
        multiple={false}
        onChange={(ev) => {
          const files = ev.currentTarget.files;

          if (files === null || files.length === 0) {
            ev.currentTarget.value = '';
            return;
          }

          const file = files[0]!;

          IoUtils.loadDataUrl(file).then((dataUrl) => {
            const imageUrl = `url(${dataUrl})`;
            setModelControls({ ...modelControls, canvasBackground: imageUrl });
          });
        }}
      />
    );
  }, [canvasBg, modelControls, setModelControls]);

  const selectBgSize = useMemo(() => {
    if (canvasBg !== 'custom') {
      return null;
    }

    return (
      <div>
        <div>Background Size</div>
        <select
          class="w-full"
          value={modelControls.canvasBackgroundSize}
          onChange={(ev) => {
            setModelControls({ ...modelControls, canvasBackgroundSize: ev.currentTarget.value as any })
          }}
        >
          <option value="auto">Auto</option>
          <option value="cover">Cover</option>
          <option value="contain">Contain</option>
        </select>
      </div>
    );
  }, [canvasBg, modelControls]);

  const selectBgRepeat = useMemo(() => {
    if (canvasBg !== 'custom' || modelControls.canvasBackgroundSize === 'cover') {
      return null;
    }

    return (
      <div>
        <div>Background Repeat</div>
        <select
          class="w-full"
          value={modelControls.canvasBackgroundRepeat}
          onChange={(ev) => {
            setModelControls({ ...modelControls, canvasBackgroundRepeat: ev.currentTarget.value as any })
          }}
        >
          <option value="repeat">On</option>
          <option value="no-repeat">Off</option>
        </select>
      </div>
    );
  }, [canvasBg, modelControls]);

  const saveCanvasImage = useCallback(() => {
    const canvas = canvasRef.current;

    if (canvas === undefined) {
      return;
    }

    const dataURL = canvas.toDataURL();
    const downloadLink = document.createElement('a');
    const timestamp = new Date().getTime();

    downloadLink.href = dataURL;
    downloadLink.download = `3do-${timestamp}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }, [canvasRef]);

  const saveImageButton = useMemo(() => {
    if (!enableSaveImageButton) {
      return null;
    }

    return (
      <div class="text-center">
        <button
          class="text-white hover:text-yellow-500 focus:text-yellow-500"
          onClick={saveCanvasImage}
        >
          Save Model Image
        </button>
      </div>
    );
  }, [enableSaveImageButton, saveCanvasImage]);

  return (
    <div class="space-y-4">
      {saveImageButton}

      <div>
        Canvas Background
        <select
          class="w-full"
          value={canvasBg}
          onChange={(ev) => onChangeCanvasBg(ev.currentTarget.value)}
        >
          <option value="transparent">Transparent</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="custom">(Custom Image)</option>
        </select>

        <div class="mt-0.5">
          {customBgFile}
        </div>
      </div>

      {selectBgSize}

      {selectBgRepeat}
    </div>
  );
}

export default OptionsMisc;

function getInitialBg(canvasBg: string): string {
  if (canvasBg === 'black' || canvasBg === 'white' || canvasBg === 'transparent') {
    return canvasBg;
  }

  return 'custom';
}
