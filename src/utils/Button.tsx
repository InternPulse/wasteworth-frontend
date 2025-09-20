const Button = ({ text }: { text: string }) => {
  return (
    <button className="xl:text-lg bg-green-700 hover:bg-green-600 transition duration-300 ease flex justify-center items-center px-6 xl:px-6 py-2 lg:py-3 text-white font-semibold rounded-md cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
