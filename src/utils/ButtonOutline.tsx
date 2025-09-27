const ButtonOutline = ({
  text,
  size = "base",
}: {
  text: string;
  size?: string;
}) => {
  return (
    <button
      className={`xl:text-lg bg-white border-2 border-green-700 flex justify-center items-center px-4 xl:px-6 py-2 lg:py-3 text-green-700 font-semibold rounded-md cursor-pointer text-${size}`}
    >
      {text}
    </button>
  );
};

export default ButtonOutline;
