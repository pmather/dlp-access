import { FC } from "react";

type Props = {
  index: number;
  multiplier: number;
  startIndex: number;
  handleClick: (group: number) => void;
};

export const Controls: FC<Props> = ({
  index,
  multiplier,
  startIndex,
  handleClick,
}) => {
  return (
    <button
      aria-label={`Slide group ${index}`}
      onClick={() => handleClick(index)}
      type="button"
      disabled={startIndex === (index - 1) * multiplier ? true : false}
      aria-controls="slide-row"
    >
      <span
        className={
          startIndex === (index - 1) * multiplier ? "dot dot-active" : "dot"
        }
      ></span>
    </button>
  );
};
