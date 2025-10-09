import DropDown from "./DropDown";

const FAQs = () => {
  return (
    <div className="bg-gray-100/70 p-5 space-y-2">
      {/* Header */}
      <div className="flex flex-col gap-2 bg-white  rounded-lg p-4">
        <h2 className="text-[#3B9561] font-semibold text-xl text-center">
          Do you have Questions?
        </h2>
        <p className="text-center text-gray-800">
          We have answers (well, most of the times)
        </p>
      </div>
      <p className="rounded-lg p-4 bg-white text-center font-medium text-gray-700">
        Below you'll find answers to the most common questions you may have on
        WasteWorth.
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col px-2 py-4 bg-white rounded">
          <h2 className="text-[#3B9561] font-semibold w-9/10 mx-auto">
            Disposers
          </h2>
          <hr className="my-1 w-19/20 mx-auto text-gray-300" />
          {questions.map((question, i) => (
            <DropDown question={question} key={i} />
          ))}
        </div>
        <div className="flex flex-col px-2 py-4 bg-white rounded">
          <h2 className="text-[#3B9561] font-semibold w-9/10 mx-auto">
            Recyclers
          </h2>
          <hr className="my-1 w-19/20 mx-auto text-gray-300" />
          {questions.map((question, i) => (
            <DropDown question={question} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

const questions = [
  {
    question: "Who is WasteWorth",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nihil maxime. Ullam accusantium doloribus dolores quod minima earum tempora eos.",
  },
  {
    question: "Who is WasteWorth",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nihil maxime. Ullam accusantium doloribus dolores quod minima earum tempora eos.",
  },
  {
    question: "Who is WasteWorth",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nihil maxime. Ullam accusantium doloribus dolores quod minima earum tempora eos.",
  },
  {
    question: "Who is WasteWorth",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nihil maxime. Ullam accusantium doloribus dolores quod minima earum tempora eos.",
  },
];
/* Home
FAQs
Do you have Questions?
We have answers(well, most of the times)
Below you”ll find answers to the most common questions you may have on WasteWorth.
Disposers
Recyclers
Who is WasteWorth?
Who is WasteWorth?
Who is WasteWorth?
Who is WasteWorth?
Who is WasteWorth?
Who is WasteWorth?
Who is WasteWorth?
Who is WasteWorth?
Who is WasteWorth?
Who is WasteWorth? */
