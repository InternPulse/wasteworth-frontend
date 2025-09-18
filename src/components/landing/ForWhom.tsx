import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const ForWhom = () => {
  return (
    <div className="p-3 sm:p-5 my-2">
      <h2 className="text-green-600 font-semibold sm:text-lg md:text-2xl text-center mb-2 sm:mb-5 md:mb-10">
        For Whom
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-5 md:gap-8">
        {[
          [
            assets.dispose,
            "Clear your space, earn rewards.",
            "Easily post your waste and let recyclers come to you. No stress, no dumping.",
            "Join as Disposers",
            "disposer",
          ],
          [
            assets.dispose,
            "Find valuable recyclables faster",
            "Browse waste listings nearby, contact disposers, and grow your recycling business",
            "Join as recycler",
            "recycler",
          ],
        ].map((feature, idx) => (
          <div key={`core-feature-${idx}`} className="grid text-center">
            <div className="rounded-md flex items-center justify-center">
              <img src={feature[0]} className="w-full" />
            </div>
            <div className="flex flex-col items-center p-2 md:p-5 gap-1 md:gap-4 bg-white rounded-b-lg sm:rounded-b-xl">
              <h2 className="text-[#222222] font-semibold text-[0.7rem] sm:text-base md:text-2xl">
                {feature[1]}
              </h2>
              <p className="text-gray-700 text-[0.6rem] sm:text-sm md:text-base mb-2">
                {feature[2]}
              </p>
              <Link
                to={`/auth/:${feature[4] as string}`}
                className={`mt-auto bg-gray-100/80 border border-green-700 flex justify-center items-center px-2 md:px-5 py-1 md:py-2 text-xs sm:text-sm md:text-base text-green-700 font-semibold rounded-md cursor-pointer `}
              >
                {feature[3]}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForWhom;
