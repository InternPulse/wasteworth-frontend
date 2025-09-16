import { FaHome } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const ForWhom = () => {
  return (
    <div className="p-5 my-2">
      <h2 className="text-green-600 font-semibold sm:text-lg md:text-2xl text-center mb-5 md:mb-10">
        For Whom
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-5 md:gap-8">
        {[
          [
            <FaHome />,
            "Clear your space, earn rewards.",
            "Easily post your waste and let recyclers come to you. No stress, no dumping.",
            "Join as Disposers",
            "disposer",
          ],
          [
            <FaHome />,
            "Find Valuable recyclables faster",
            "Browse waste listings nearby, contact disposers, and grow your recycling business",
            "Join as recycler",
            "recycler",
          ],
        ].map((feature, idx) => (
          <div
            key={`core-feature-${idx}`}
            className="p-2 md:p-5 md:py-8 grid gap-2 sm:gap-5  rounded-md bg-white text-center"
          >
            <div className="rounded-md flex items-center justify-center">
              <img src={assets.dispose} alt="" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-green-600">{feature[0]}</span>
              <h2 className="text-gray-900 font-semibold text-sm sm:text-base md:text-2xl">
                {feature[1]}
              </h2>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2">
                {feature[2]}
              </p>
              <Link
                to={`/:${feature[4] as string}/register`}
                className={`mt-auto bg-white border border-green-700 flex justify-center items-center px-2 md:px-4 py-1 md:py-2 text-sm md:text-base text-green-700 font-semibold rounded-md cursor-pointer `}
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
