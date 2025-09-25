import { termsAndConditions } from "../../data/termsAndCondidtions";

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100/50">
      <div className="flex-1 space-y-4 max-w-9/10 sm:max-w-17/20 lg:max-w-4xl xl:max-w-5xl py-5 sm:py-12 p-4">
        <div className="bg-white rounded-lg py-5">
          <h1 className="text-xl sm:text-xl xl:text-2xl text-center text-[#3B9561] font-semibold mb-3 xl:mb-4">
            Terms and Conditions
          </h1>
          <p className="mb-6 text-gray-800 font-normal text-sm sm:text-base w-9/10 mx-auto text-center">
            Welcome to WasteWorth. By using our platform, you agree to the terms
            below. Please read them carefully to understand your rights and
            responsibilities.
          </p>
        </div>
        <ol className="list-decimal list-inside grid grid-cols-2 gap-2 md:gap-5">
          {termsAndConditions.map((item, i) => (
            <li
              key={i}
              className="bg-white rounded-lg p-5 font-semibold xl:font-bold text-[1rem] sm:text-base sm:text-lg text-xl text-[#3B9561]"
            >
              <h2 className="inline ">{item.topic}</h2>
              <h3 className="font-semibold text-gray-800 my-2 text-sm sm:text-base md:text-lg">
                {item.h2}
              </h3>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base mt-2">
                {item.li2?.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
              <h3 className="font-semibold text-gray-800 my-2 text-sm sm:text-base md:text-lg">
                {item.h22}
              </h3>
              <ul className="list-disc list-inside font-normal text-gray-800 text-xs sm:text-sm md:text-base mt-2">
                {item.li.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
              <p className="mt-2 text-gray-800 font-normal text-xs sm:text-sm md:text-base">
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
