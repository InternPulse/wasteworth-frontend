const ButtonOutline = ({
  text,
  size = "base",
}: {
  text: string;
  size?: string;
}) => {
  return (
    <button
      className={`bg-white border-2 border-green-700 flex justify-center items-center px-4 py-2 text-green-700 font-semibold rounded-md cursor-pointer text-${size}`}
    >
      {text}
    </button>
  );
};

export default ButtonOutline;
