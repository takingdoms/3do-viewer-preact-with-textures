import { Object3do, Object3doTree } from "@takingdoms/lib-3do";
import { FunctionComponent, h } from 'preact';
import { useState } from "preact/hooks";
import Styles from './object-tree.module.css';

type ObjectTreeProps = {
  object3doTree: Object3doTree;
};

const ObjectTree: FunctionComponent<ObjectTreeProps> = ({
  object3doTree,
}) => {
  return (
    <div class="text-sm">
      {object3doTree.rootNodes.map((node, index) => (
        <SubTree key={index} node={node} />
      ))}
    </div>
  );
};

const INDENT = '1.50rem';
const ROW_HEIGHT = '34px';
const SPACING_Y = '0.50rem';

const SubTree: FunctionComponent<{ node: Object3do }> = ({
  node,
}) => {
  const [showChildren, setShowChildren] = useState(true);

  return (
    <div class={Styles.Root + ' w-full overflow-hidden'}>
      <div
        style={{ height: ROW_HEIGHT }}
        class={Styles.NameWrapper + ' flex py-1 bg-cyan-900 box-border'}
      >
        <div class="min-w-0 flex items-center grow">
          <div class="truncate px-2" title={node.name}>
            {node.name}
          </div>
        </div>

        <div class="flex">
          <div class="flex items-center px-1">•</div>
          <div class="flex items-center px-1">•</div>
          {node.children.length > 0 && (
            <div
              onClick={() => setShowChildren(!showChildren)}
              class="flex items-center px-1 cursor-pointer"
            >
              {showChildren ? '▲' : '▼'}
            </div>
          )}
        </div>
      </div>

      {node.children.length > 0 && (
        <div class={showChildren ? 'block' : 'hidden'}>
          {node.children.map((subNode, index) => (
            <div key={index} class="flex">
              <div
                class={Styles.LeftBorder}
                style={{
                  marginLeft: `calc(${INDENT} / 2)`,
                  height: index === node.children.length - 1
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
                <SubTree node={subNode} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ObjectTree;
