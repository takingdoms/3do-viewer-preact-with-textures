import { Object3do, Object3doTree } from "@takingdoms/lib-3do";
import { FunctionComponent, h, Fragment } from 'preact';
import { useMemo, useState } from "preact/hooks";
import ObjectListTree from "./ObjectListTree";

const ObjectList: FunctionComponent<{
  object3doTree: Object3doTree;
}> = ({
  object3doTree,
}) => {
  const [nodeStack, setNodeStack] = useState<Object3do[]>([]);

  const currentParent: Object3do | null = nodeStack.length === 0
    ? null // (aka root)
    : nodeStack[nodeStack.length - 1]; // top of the stack

  const currentChildren: Object3do[] = currentParent === null
    ? object3doTree.rootNodes
    : currentParent.children;

  console.log(currentParent);
  console.log(currentChildren.map((child) => child.name));

  const pathing = useMemo(() => {
    const sep = <div class="mx-1 text-pink-600">&raquo;</div>;
    const selCss = 'font-bold';
    const unselCss = 'cursor-pointer text-gray-400 hover:text-white';

    return (
      <div class="flex flex-wrap bg-gray-900 px-1 py-0.5">
        <div
          class={currentParent === null ? selCss : unselCss}
          onClick={() => setNodeStack([])}
        >
          <span class="italic">(ROOT)</span>
        </div>
        {currentParent !== null && sep}
        {nodeStack.map((node, index) => (
          <>
            <div
              key={index}
              onClick={() => setNodeStack(nodeStack.slice(0, index + 1))}
              class={index === nodeStack.length - 1 ? selCss : unselCss}
            >
              {node.name}
            </div>
            {index < nodeStack.length - 1 && sep}
          </>
        ))}
      </div>
    );
  }, [nodeStack, currentParent]);

  const currentParentInfo = useMemo(() => (
    <div
      class={'flex py-1 bg-cyan-900 border border-yellow-500 text-sm'}
    >
      <div class="min-w-0 grow px-2">
        {currentParent === null
          ? <span class="italic">(ROOT)</span>
          : (currentParent.name ?? <span class="text-gray-300">{'<empty name>'}</span>)}
      </div>

      <div class="flex px-1">
        <div class="flex items-center px-1">•</div>
        <div class="flex items-center px-1">•</div>
      </div>
    </div>
  ), [currentParent]);

  return (
    <div class="flex flex-col h-full overflow-hidden">
      <div className="px-6">
        <div class="mb-4">
          {pathing}
        </div>

        <div class="mb-2">Current:</div>

        {currentParentInfo}

        {currentChildren.length > 0 && (
          <div class="mt-4 mb-2">Children ({currentChildren.length}):</div>
        )}
      </div>

      {/* <ul class="grow overflow-auto list-disc pl-6 pr-4 text-sm"></ul> */}
      <div class="grow overflow-auto px-6">
        <ObjectListTree
          current={null}
          nodes={currentChildren}
          onChangeNodeStack={setNodeStack}
          nodeStack={nodeStack}
        />
      </div>
    </div>
  );
};

export default ObjectList;
