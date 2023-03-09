import { Primitive3do } from "@takingdoms/lib-3do";
import { FunctionComponent, h } from 'preact';

const cellCss = 'px-1.5 py-1 align-top text-left';
const thCss = `${cellCss} whitespace-nowrap`;
const tdCss = `${cellCss} break-all`;

const PrimitivesTable: FunctionComponent<{
  primitives: Primitive3do[];
}> = ({ primitives }) => {
  return (
    <table class="w-full overflow-hidden">
      <thead>
        <tr>
          <th class={thCss}>#</th>
          <th class={thCss} title="Vertex Indices">V.Indices</th>
          <th class={thCss}>Texture</th>
        </tr>
      </thead>
      <tbody>
        {primitives.map((primitive, index) => {
          return (
            <tr key={index}>
              <td class={tdCss}>{index}</td>
              <td class={tdCss}>[{primitive.vertexIndices.join(', ')}]</td>
              <td class={`${tdCss}`}>{primitive.textureName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PrimitivesTable;
