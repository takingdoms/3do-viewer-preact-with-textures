import { ComponentChildren, FunctionComponent, h } from 'preact';
import { useState } from "preact/hooks";

const Spoiler: FunctionComponent<{
  title: string;
  children: ComponentChildren;
  showByDefault?: boolean;
}> = ({ title, children, showByDefault }) => {
  const [show, setShow] = useState(showByDefault ?? false);

  const content = show ? (
    <div>{children}</div>
  ) : null;

  const showHide = (
    <button
      onClick={() => setShow(!show)}
    >
      {show ? '[Hide]' : '[Show]'}
    </button>
  );

  return (
    <div>
      <div class="flex justify-between">
        {title}
        {showHide}
      </div>

      {content}
    </div>
  );
};

export default Spoiler;
