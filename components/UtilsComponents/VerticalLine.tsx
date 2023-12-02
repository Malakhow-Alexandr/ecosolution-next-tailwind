import React, { FC } from "react";

interface VerticalLineProps {
  classNames?: string;
}

const VerticalLine: FC<VerticalLineProps> = ({
  classNames
}) => {
  return (
    <span
      className={`block w-[1px] bg-mainElementsColor ${
        classNames ? `${classNames}` : ""
      }`}
    ></span>
  );
};

export default VerticalLine;
