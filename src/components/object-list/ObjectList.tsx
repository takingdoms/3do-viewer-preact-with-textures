import { Object3do, Object3doTree } from "@takingdoms/lib-3do";
import { FunctionComponent, h, Fragment } from 'preact';
import { useMemo, useState } from "preact/hooks";
import { Utils } from "../../lib/utils";
import { ObjectStateMap } from "../Main";
import ObjectListTree from "./ObjectListTree";
import ObjectSideControls from "./ObjectSideControls";

const ObjectList: FunctionComponent<{
  object3doTree: Object3doTree;
  objStateMap: ObjectStateMap; // TODO: in the future, maybe combine the stateMap WITH The Tree... HELL YEAH and it should be called Stateful3doObjectTree and StatefulObject3do. now JUST DO IT
  setObjStateMap: (newObjectStateMap: ObjectStateMap) => void;
}> = ({
  object3doTree,
  objStateMap,
  setObjStateMap,
}) => {
  const [nodeStack, setNodeStack] = useState<Object3do[]>([]);

  const currentParent: Object3do | null = nodeStack.length === 0
    ? null // (aka root)
    : nodeStack[nodeStack.length - 1]!; // top of the stack

  const currentChildren: Object3do[] = currentParent === null
    ? object3doTree.rootNodes
    : currentParent.children;

  const currentObjState = currentParent && objStateMap.get(currentParent);

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
          <Fragment key={index}>
            <div
              onClick={() => setNodeStack(nodeStack.slice(0, index + 1))}
              class={index === nodeStack.length - 1 ? selCss : unselCss}
            >
              {node.name}
            </div>
            {index < nodeStack.length - 1 && sep}
          </Fragment>
        ))}
      </div>
    );
  }, [nodeStack, currentParent]);

  const currentParentInfo = useMemo(() => (
    <div
      class={'flex py-1 bg-cyan-900 border border-yellow-500 text-sm'}
    >
      <div class="min-w-0 grow px-1 pl-2">
        {currentParent === null
          ? <span class="italic">(ROOT)</span>
          : (currentParent.name ?? <span class="text-gray-300">{'<empty name>'}</span>)}
      </div>

      {currentObjState && (
        <ObjectSideControls
          state={currentObjState}
          setState={(newObjState) => {
            const newMap = Utils.createUpdatedMap(objStateMap, currentParent, newObjState);
            setObjStateMap(newMap);
          }}
        />
      )}
    </div>
  ), [currentParent, currentObjState, objStateMap, setObjStateMap]);

  return (
    <div class="flex flex-col h-full overflow-hidden">
      <div className="px-6">
        <div class="mb-4">
          {pathing}
        </div>

        <div class="mb-2">Current:</div>

        {currentParentInfo}

        <ul>
          {currentParent?.primitives.map((primitive, idx) => (
            <li key={idx}>
              {primitive.textureName}
            </li>
          ))}
        </ul>

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
          objStateMap={objStateMap}
          setObjStateMap={setObjStateMap}
        />
      </div>
    </div>
  );
};

export default ObjectList;
