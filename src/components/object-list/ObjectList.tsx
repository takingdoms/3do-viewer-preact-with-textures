import { Object3do, Object3doTree } from "@takingdoms/lib-3do";
import { FunctionComponent, h, Fragment } from 'preact';
import { useMemo, useState } from "preact/hooks";
import { Utils } from "../../lib/utils";
import { ObjectStateMap } from "../Main";
import Spoiler from "../ui/Spoiler";
import ObjectListTree from "./ObjectListTree";
import ObjectSideControls from "./ObjectSideControls";
import PrimitivesTable from "./PrimitivesTable";

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

  const currentParentPositions = useMemo(() => {
    if (currentParent === null || currentParent.primitives.length === 0) {
      return null;
    }

    return (
      <div class="border border-dashed border-gray-500 px-2 py-1 mt-2 mb-1 text-sm text-gray-300">
        <Spoiler title="Vertices">
          <div class="border-t border-gray-700 mt-1 pt-1 text-xs">
            <span class="break-all">
              [{currentParent.vertices.map((v) => `[${v.x}, ${v.y}, ${v.z}]`).join(', ')}]
            </span>
          </div>
        </Spoiler>
      </div>
    );
  }, [currentParent]);

  const currentParentPrimitives = useMemo(() => {
    if (currentParent === null || currentParent.primitives.length === 0) {
      return null;
    }

    return (
      <div class="border border-dashed border-gray-500 px-2 py-1 mt-2 mb-1 text-sm text-gray-300">
        <Spoiler title="Primitives">
          <div class="border-t border-gray-700 mt-1 pt-1 text-xs">
            <PrimitivesTable primitives={currentParent.primitives} />
          </div>
        </Spoiler>
      </div>
    );
  }, [currentParent]);

  return (
    <div class="flex flex-col h-full overflow-hidden">
      <div className="px-6">
        <div class="mb-4">
          {pathing}
        </div>

        <div class="mb-2 font-bold">Current:</div>

        {currentParentInfo}
        <div class="pl-4">
          {currentParentPositions}
          {currentParentPrimitives}
        </div>

        {currentChildren.length > 0 && (
          <div class="mt-6 mb-2 font-bold flex justify-between">
            <span>Children:</span>
            <span>({currentChildren.length})</span>
          </div>
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
