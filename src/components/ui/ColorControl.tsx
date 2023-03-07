import { ReadonlyVec4 } from "gl-matrix";
import { FunctionComponent, h } from 'preact';
import { useEffect, useMemo, useState } from "preact/hooks";
import SliderControl from "./SliderControl";

const ColorControl: FunctionComponent<{
  color: ReadonlyVec4;
  setColor: (c: ReadonlyVec4) => void;
}> = ({ color, setColor }) => {
  const [isCustom, setIsCustom] = useState(false);

  let currentOption = 'custom';

  if (!isCustom) {
    if (color[0] === 1 && color[1] === 1 && color[2] === 1 && color[3] === 1) {
      currentOption = 'white';
    }
    else if (color[0] === 1 && color[1] === 0 && color[2] === 0 && color[3] === 1) {
      currentOption = 'red';
    }
    else if (color[0] === 0 && color[1] === 1 && color[2] === 0 && color[3] === 1) {
      currentOption = 'green';
    }
    else if (color[0] === 0 && color[1] === 0 && color[2] === 1 && color[3] === 1) {
      currentOption = 'blue';
    }
  }

  const custom = useMemo(() => {
    if (!isCustom) {
      return null;
    }

    return (
      <div class="self-stretch space-y-2">
        <SliderControl
          id="red"
          label="Red"
          min={0}
          max={255}
          value={Math.floor(color[0] * 255)}
          setValue={(value) => {
            const newColor = value / 255;
            setColor([newColor, color[1], color[2], color[3]]);
          }}
        />
        <SliderControl
          id="green"
          label="Green"
          min={0}
          max={255}
          value={Math.floor(color[1] * 255)}
          setValue={(value) => {
            const newColor = value / 255;
            setColor([color[0], newColor, color[2], color[3]]);
          }}
        />
        <SliderControl
          id="blue"
          label="Blue"
          min={0}
          max={255}
          value={Math.floor(color[2] * 255)}
          setValue={(value) => {
            const newColor = value / 255;
            setColor([color[0], color[1], newColor, color[3]]);
          }}
        />
      </div>
    );
  }, [isCustom, color, setColor]);

  return (
    <div class="flex flex-col items-center">
      <select
        value={currentOption}
        onChange={(ev) => {
          const option = ev.currentTarget.value;

          if (option === 'custom') {
            setIsCustom(true);
            return;
          }

          setIsCustom(false);

          const color: ReadonlyVec4
            = option === 'red' ? [1, 0, 0, 1]
            : option === 'green' ? [0, 1, 0, 1]
            : option === 'blue' ? [0, 0, 1, 1]
            : [1, 1, 1, 1,]; // white

          setColor(color);
        }}
      >
        <option value="custom">(Custom)</option>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      {custom}
    </div>
  );
};

export default ColorControl;
