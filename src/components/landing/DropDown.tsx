import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const DropDown = ({
  question,
}: {
  question: { question: string; answer: string };
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="w-9/10 mx-auto py-2.5 flex justify-between items-center transition duration-500 ease">
        <p className="text-gray-800 text-md">{question.question}</p>
        <div className="border-1 border-gray-700 text-gray-700 font-bold rounded-full flex items-center justify-center p-1">
          {open ? <FaMinus size={8}/> : <FaPlus size={8}/>}
        </div>
      </div>
      {open && (
        <p className="w-9/10 mx-auto text-gray-800 text-sm">
          {question.answer}
        </p>
      )}
      <hr className="my-1 w-19/20 mx-auto text-gray-300" />
    </div>
  );
};

export default DropDown;
