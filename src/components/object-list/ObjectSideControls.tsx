import { FunctionComponent, h } from 'preact';
import { ObjectState } from "../../lib/object-state";

const ObjectSideControls: FunctionComponent<{
  state: ObjectState;
  setState: (newState: ObjectState) => void;
}> = ({ state, setState }) => {
  return (
    <div class="flex pr-1">
      <div
        class={'flex items-center px-1 cursor-pointer'
          + (state.highlight ? ' text-yellow-500' : '')}
        onClick={() => setState({ ...state, highlight: !state.highlight })}
      >H</div>
      <div
        class={'flex items-center px-1 cursor-pointer'
          + (state.hide ? '' : ' text-yellow-500')}
        onClick={() => setState({ ...state, hide: !state.hide })}
      >V</div>
    </div>
  );
};

export default ObjectSideControls;
