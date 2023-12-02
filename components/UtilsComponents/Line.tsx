const Line = ({
  marginBottom
}: {
  marginBottom: number;
}) => {
  return (
    <span
      className={`block w-full h-[1px] bg-mainElementsColor ${
        marginBottom && `mb-[${marginBottom}px]`
      }`}
    ></span>
  );
};

export default Line;
