const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-green-700 hover:bg-green-600 transition duration-300 ease flex justify-center items-center px-4 py-2 text-white font-semibold rounded-md cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
