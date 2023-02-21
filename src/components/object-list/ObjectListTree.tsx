import { Object3do } from "@takingdoms/lib-3do";
import { FunctionComponent, h } from 'preact';
import { useState } from "preact/hooks";
import Styles from './ObjectListTree.module.css';

const INDENT = '1.50rem';
const ROW_HEIGHT = '34px';
const SPACING_Y = '0.50rem';

const ObjectListTree: FunctionComponent<{
  current: Object3do | null; // null = root
  nodes: Object3do[];
  onChangeNodeStack: (stack: Object3do[]) => void;
  nodeStack: Object3do[]; // used exclusively for the onChangeNodeStack callback
}> = ({
  current,
  nodes,
  onChangeNodeStack,
  nodeStack,
}) => {
  const [showChildren, setShowChildren] = useState(true);

  return (
    <div class={Styles.Root + ' w-full overflow-hidden text-sm'}>
      {current !== null && (
        <div
          style={{ height: ROW_HEIGHT }}
          class={Styles.NameWrapper + ' flex py-1 bg-cyan-900 box-border'}
        >
          <div
            class="min-w-0 flex items-center grow hover:text-yellow-400 cursor-pointer"
            onClick={() => onChangeNodeStack(nodeStack)}
          >
            <div class="truncate px-2" title={current.name}>
              {current.name ?? <span class="text-gray-300">{'<empty name>'}</span>}
            </div>
          </div>

          <div class="flex">
            <div class="flex items-center px-1">•</div>
            <div class="flex items-center px-1">•</div>
            {nodes.length > 0 && (
              <div
                onClick={() => setShowChildren(!showChildren)}
                class="flex items-center px-1 cursor-pointer"
              >
                {showChildren ? '▲' : '▼'}
              </div>
            )}
          </div>
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
