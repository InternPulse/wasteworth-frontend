import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Insight = () => {
  return (
    <div className="pb-5">
      <div className="p-5 max-w-5xl mx-auto">
        <h2 className="text-green-600 font-semibold text-sm sm:text-lg md:text-2xl text-center sm:mb-10">
          Together, We’re Building Cleaner Nigeria
        </h2>
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col p-5 justify-center gap-8">
            <div className="space-y-1">
              <h2 className="text-green-700 text-center sm:text-left font-semibold md:text-lg md:text-xl">
                1,200+
              </h2>
              <p className="text-xs text-center sm:text-left">
                Pickups Completed
              </p>
            </div>
            <div className=" space-y-1">
              <h2 className="text-green-700 text-center sm:text-left font-semibold md:text-lg md:text-xl">
                50,000+ kg
              </h2>
              <p className="text-xs text-center sm:text-left">
                Plastics Recycled
              </p>
            </div>
            <div className=" space-y-1">
              <h2 className="text-green-700 text-center sm:text-left font-semibold md:text-lg md:text-xl">
                2,500+
              </h2>
              <p className="text-xs text-center sm:text-left">
                Households Engaged
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={assets.bin} alt="" />
          </div>
        </div>
      </div>
      <div className="flex max-w-5xl mx-auto py-10 sm:p-10 md:p-20 bg-[#d7ff522a] justify-center items-center">
        <div className="w-9/10">
          <h2 className="font-bold md:text-[24px] mb-8 text-center">
            Ready to turn your Waste into treasure?
          </h2>

          <div className="flex gap-5 items-center justify-center">
            <Link
              to={"/login"}
              className="bg-green-800 rounded-lg text-xs sm:text-sm md:text-base font-medium px-3 sm:px-5 md:px-6 py-2 text-white cursor-pointer"
            >
              Post Waste Now
            </Link>
            <Link
              to={"/sign-up"}
              className="border border-green-800 font-medium text-green-800 rounded-lg text-xs sm:text-sm md:text-base px-3 sm:px-5 md:px-6 py-2 cursor-pointer"
            >
              Sign Up as Recycler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insight;
