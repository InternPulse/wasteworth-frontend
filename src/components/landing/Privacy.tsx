import { privacy } from "../../data/Privacy";

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100/50">
      <div className="flex-1 space-y-4 lg:max-w-6xl py-5 md:py-12 p-4">
        <div className="bg-white rounded-lg py-5">
          <h1
            id="privacy-policy"
            className="text-xl sm:text-xl xl:text-2xl text-center text-green-600 font-semibold mb-3 xl:mb-4"
          >
            Privacy
          </h1>
          <p className="mb-6 text-gray-800 font-normal text-sm sm:text-base w-9/10 mx-auto text-center">
            Your privacy matters to us. This policy explains how WasteWorth
            collects, uses, and protects your information
          </p>
        </div>
        <ol className="list-decimal list-inside grid grid-ols-2 gap-2 md:gap-5">
          {privacy.map((item, i) => (
            <li
              key={i}
              className={`bg-white rounded-lg p-5 font-semibold xl:font-bold text-[1rem]  sm:text-lg text-xl text-green-600 ${
                i === privacy.length - 1 && i % 2 === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <h2 className="inline ">{item.topic}</h2>

              <ul className="list-disc list-inside font-normal text-gray-800 text-sm mt-2">
                {item.li.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-sm">
                {item.p}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default TermsAndConditions;
