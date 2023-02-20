import { Object3do } from "@takingdoms/lib-3do";
import { FunctionComponent, h, Fragment } from 'preact';
import { useMemo, useState } from "preact/hooks";

const ObjectListLinear: FunctionComponent<{
  rootNodes: Object3do[];
}> = ({
  rootNodes,
}) => {
  const [nodeStack, setNodeStack] = useState<Object3do[]>([]);

  const currentParent: Object3do | null = nodeStack.length === 0
    ? null // (aka root)
    : nodeStack[nodeStack.length - 1]; // top of the stack

  const currentChildren: Object3do[] = currentParent === null
    ? rootNodes
    : currentParent.children;

  const pathing = useMemo(() => {
    const sep = <div class="mx-1 text-pink-600">{'/'}</div>;
    const selCss = 'font-bold';
    const unselCss = 'cursor-pointer text-gray-400 hover:text-white';

    return (
      <div class="flex flex-wrap text-xs bg-gray-900 p-0.5">
        <div
          class={currentParent === null ? selCss : unselCss}
          onClick={() => setNodeStack([])}
        >
          ROOT
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

  return (
    <div class="flex flex-col h-full overflow-hidden">
      <div class="mb-4">
        {pathing}
      </div>

      <div class="mb-2">Current:</div>

      <div
        class={'flex py-1 bg-cyan-900 border border-cyan-600 text-sm'}
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

      {currentChildren.length > 0 && (
        <div class="mt-4 mb-2">Children:</div>
      )}

      <ul class="grow overflow-auto list-disc pl-6 pr-4 text-sm">
        {currentChildren.map((child, index) => (
          <li
            key={index}
            class="py-1 break-words hover:text-yellow-400 cursor-pointer"
            onClick={() => setNodeStack([...nodeStack, child])}
          >
            {child.name ?? <span class="text-gray-300">{'<empty name>'}</span>}
            <span class="ml-1 text-gray-500">
              ({child.children.length})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectListLinear;
