import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Insight = () => {
  return (
    <section className="mt-10">
      <div className="p-3 max-w-5xl mx-auto s:p-5">
        <h2 className="text-green-600 font-semibold text-md mb-5 sm:text-lg md:text-2xl text-center sm:mb-10">
          Together, We’re Building Cleaner Nigeria
        </h2>
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col p-2 justify-left gap-5 text-xl space-y-5 mb-3 md:mb-0 sm:px-5">
            <div className="space-y-1">
              <h2 className="text-green-600 font-semibold">1,200+</h2>
              <p className="text-xs">Pickups Completed</p>
            </div>
            <div className=" space-y-1">
              <h2 className="text-green-600  font-semibold">50,000+ kg</h2>
              <p className="text-xs">Plastics Recycled</p>
            </div>
            <div className=" space-y-1">
              <h2 className="text-green-600 sm:text-left font-semibold">
                2,500+
              </h2>
              <p className="text-xs  sm:text-left">Households Engaged</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={assets.bin} alt="" />
          </div>
        </div>
      </div>
      <div className="flex mx-3 py-10 sm:p-10 md:p-20 bg-[#d7ff522a] justify-center items-center md:mx-10">
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
              className="border border-green-600 font-medium text-green-600 rounded-lg text-xs sm:text-sm md:text-base px-3 sm:px-5 md:px-6 py-2 cursor-pointer"
            >
              Sign Up as Recycler
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
