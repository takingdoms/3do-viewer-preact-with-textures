import { FunctionComponent, h } from 'preact';

const SliderControl: FunctionComponent<{
  id: string;
  label: string;
  min?: number;
  max?: number;
  value: number;
  setValue: (value: number) => void;
}> = ({ id, label, min, max, value, setValue }) => {
  // console.log(`Re-rendering SliderControl (${id})`);

  return (
    <div>
      <div>
        <label for={id}>{label}</label>
      </div>
      <div class="flex items-center space-x-2">
        <input
          type="number"
          style={{ width: '80px' }}
          value={value}
          onChange={(ev) => {
            setValue(+ev.currentTarget.value);
          }}
        />
        <input
          class="grow"
          type="range"
          min={min}
          max={max}
          style={{ width: '120px' }}
          value={value}
          onChange={(ev) => {
            setValue(+ev.currentTarget.value || 0);
          }}
        />
      </div>
    </div>
  );
};

export default SliderControl;
