import { Object3do } from "@takingdoms/lib-3do";
import { FunctionComponent, h } from 'preact';
import { useState } from "preact/hooks";
import { Utils } from "../../lib/utils";
import { ObjectStateMap } from "../Main";
import Styles from './ObjectListTree.module.css';
import ObjectSideControls from "./ObjectSideControls";

const INDENT = '1.50rem';
const ROW_HEIGHT = '34px';
const SPACING_Y = '0.50rem';

const ObjectListTree: FunctionComponent<{
  current: Object3do | null; // null = root
  nodes: Object3do[];
  onChangeNodeStack: (stack: Object3do[]) => void;
  nodeStack: Object3do[]; // used exclusively for the onChangeNodeStack callback

  objStateMap: ObjectStateMap; // TODO: in the future, maybe combine the stateMap WITH The Tree... HELL YEAH and it should be called Stateful3doObjectTree and StatefulObject3do. now JUST DO IT
  setObjStateMap: (newObjectStateMap: ObjectStateMap) => void;
}> = ({
  current,
  nodes,
  onChangeNodeStack,
  nodeStack,
  objStateMap,
  setObjStateMap,
}) => {
  const [showChildren, setShowChildren] = useState(true);

  const hasChildren = nodes.length > 0;

  const objState = current && objStateMap.get(current);

  return (
    <div class={Styles.Root + ' w-full overflow-hidden text-sm'}>
      {current !== null && (
        <div
          style={{ height: ROW_HEIGHT }}
          class={Styles.NameWrapper + ' flex py-1 bg-cyan-900 box-border'}
        >
          <div
            onClick={hasChildren ? () => setShowChildren(!showChildren) : undefined}
            class={`flex items-center px-1 pl-2 ${hasChildren ? 'cursor-pointer hover:text-yellow-400' : 'invisible'}`}
          >
            {showChildren ? '▲' : '▼'}
          </div>

          <div
            class="min-w-0 flex items-center grow hover:text-yellow-400 cursor-pointer"
            onClick={() => onChangeNodeStack(nodeStack)}
          >
            <div class="truncate px-1" title={current.name}>
              {current.name ?? <span class="text-gray-300">{'<empty name>'}</span>}
            </div>
          </div>

          {objState && (
            <ObjectSideControls
              state={objState}
              setState={(newObjState) => {
                const newMap = Utils.createUpdatedMap(objStateMap, current, newObjState);
                setObjStateMap(newMap);
              }}
            />
          )}
        </div>
      )}

      {nodes.length > 0 && (
        <div class={showChildren ? 'block' : 'hidden'}>
          {nodes.map((subNode, index) => (
            <div key={index} class="flex">
              <div
                class={Styles.LeftBorder}
                style={{
                  marginLeft: `calc(${INDENT} / 2)`,
                  height: index === nodes.length - 1
                    ? `calc(${ROW_HEIGHT} / 2 + ${SPACING_Y})`
                    : 'auto',
                }}
              />

              <div
                class={Styles.MiddleBorder + ' self-start'}
                style={{
                  width: `calc(${INDENT} / 2)`,
                  height: `calc(${ROW_HEIGHT} / 2 + ${SPACING_Y})`,
                }}
              />

              <div
                class="grow max-w-full overflow-hidden"
                style={{ paddingTop: SPACING_Y }}
              >
                <ObjectListTree
                  current={subNode}
                  nodes={subNode.children}
                  onChangeNodeStack={onChangeNodeStack}
                  nodeStack={[...nodeStack, subNode]}
                  objStateMap={objStateMap}
                  setObjStateMap={setObjStateMap}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ObjectListTree;
