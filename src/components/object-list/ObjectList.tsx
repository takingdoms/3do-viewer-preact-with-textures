import { Object3doTree } from "@takingdoms/lib-3do";
import { FunctionComponent, h, Fragment } from 'preact';
import { useMemo, useState } from "preact/hooks";
import ObjectListTree from "./ObjectListTree";
import ObjectListLinear from "./ObjectTreeLinear";

type ObjectListProps = {
  object3doTree: Object3doTree;
};

const ObjectList: FunctionComponent<ObjectListProps> = ({
  object3doTree,
}) => {
  const [mode, setMode] = useState<'tree' | 'linear'>('linear');

  const treeView = useMemo(() => (
    <>
      {object3doTree.rootNodes.map((node, index) => (
        <ObjectListTree key={index} node={node} />
      ))}
    </>
  ), [object3doTree]);

  const linearView = useMemo(() => (
    <ObjectListLinear rootNodes={object3doTree.rootNodes} />
  ), [object3doTree]);

  return (
    <div class="flex flex-col h-full overflow-hidden">
      <div class="flex space-x-4 pb-2 mb-2 border-b border-gray-700 text-sm">
        <span>Mode:</span>
        {['tree', 'linear'].map((next) => {
          const isSelected = next === mode;
          const selectedCss = isSelected
            ? 'font-bold'
            : 'cursor-pointer text-gray-400 hover:text-white';

          return (
            <div
              class={`${selectedCss}`}
              onClick={() => setMode(next as 'tree' | 'linear')}
            >
              {next === 'tree' ? 'Tree' : 'Linear'}
            </div>
          );
        })}
      </div>
      <div class="grow overflow-auto py-2 pr-4">
        {mode === 'tree' ? treeView : linearView}
      </div>
    </div>
  );
};

export default ObjectList;
