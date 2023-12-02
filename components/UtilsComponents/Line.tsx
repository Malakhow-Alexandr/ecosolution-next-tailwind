const Line = ({ classNames }: { classNames: string }) => {
  return (
    <span
      className={`block w-full h-[1px] bg-mainElementsColor ${
        classNames ? `${classNames}` : ""
      }`}
    ></span>
  );
};

export default Line;
