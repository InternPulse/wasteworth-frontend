import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const ForWhom = () => {
  return (
    <section className="p-3 sm:p-5 my-10">
      <h2 className="text-green-600 font-semibold sm:text-lg md:text-2xl text-center mb-5 md:mb-10">
        Who We Help
      </h2>
      <div className="grid grid-cols-1 gap-5 max-w-5xl mx-auto md:grid-cols-2">
        {[
          [
            assets.clearSpace,
            "Clear your space, earn rewards.",
            "Easily post your waste and let recyclers come to you. No stress, no dumping.",
            "Join as Disposers",
          ],
          [
            assets.findVal,
            "Find valuable recyclables faster",
            "Browse waste listings nearby, contact disposers, and grow your recycling business",
            "Join as recycler",
          ],
        ].map((feature, idx) => (
          <div
            key={`core-feature-${idx}`}
            className="w-19/20 md:w-full mx-auto text-center shadow-xl rounded-lg"
          >
            <div className="rounded-t-md flex items-center justify-center overflow-hidden">
              <img
                src={feature[0]}
                className="object-cover rounded-t-lg h-full w-full aspect-5/3 md:aspect-4/3"
              />
            </div>
            <div className="flex flex-col items-center py-2 sm: py-5 md:py-8 px-5 gap-1 md:gap-4 bg-white rounded-b-lg sm:rounded-b-xl">
              <h2 className="text-[#222222] font-semibold text-[0.7rem] sm:text-base md:text-2xl">
                {feature[1]}
              </h2>
              <p className="text-gray-700 text-[0.6rem] sm:text-sm md:text-base sm:mb-2">
                {feature[2]}
              </p>
              <Link
                to={`/sign-up`}
                className={`border border-green-600 flex justify-center items-center px-3 md:px-5 py-2 text-xs sm:text-sm md:text-base text-green-600 font-semibold rounded-md cursor-pointer mt-2 sm:mt-5`}
              >
                {feature[3]}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForWhom;
