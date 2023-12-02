import React, { FC } from "react";

interface VerticalLineProps {
  height: number;
  marginBottom?: number;
}

const VerticalLine: FC<VerticalLineProps> = ({
  height,
  marginBottom
}) => {
  return (
    <span
      className={`block w-[1px] bg-mainElementsColor ${
        height && `h-[${height}px]`
      } ${marginBottom ? `mb-[${marginBottom}px] ` : ""}`}
    ></span>
  );
};

export default VerticalLine;
