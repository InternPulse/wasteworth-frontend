import { assets } from "../../assets/assets";

const AboutBanner = () => {
  return (
    <div className="bg-green-600 h-[calc(100%)] md:h-auto md:p-8 lg:p-15 xl:p-20 flex items-center justify-center relative">
      <div className="rounded-lg grid md:grid-cols-2 w-full">
        {/* text */}
        <div className="flex-1 z-1 md:z-0">
          <div className="flex items-center justify-center px-5 py-8 md:p-10 xl:p-20 md:bg-white md:rounded-l-lg h-full w-full">
            <div className="space-y-1 lg:space-y-3">
              <p className="text-yellow-500 md:text-yellow-600 font-semibold text-xs md:text-sm lg:text-base">
                OVER 10,000 PLASTICS RECYCLED
              </p>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-white md:text-gray-800 lg:leading-[2.5rem] mb-3 lg:mb-5 text-center sm:text-left">
                Connecting Communities to <br className="hidden sm:block" />{" "}
                responsible waste <br className="hidden sm:block" /> management
              </h2>
              <p className="text-gray-300 text-center sm:text-left md:text-gray-600 mb-8 sm:mb-5 lg:mb-8 text-sm lg:text-base max-w-lg">
                WasteWorth is a waste recycling application that simplifies
                collections of plastic waste, enables tracking and adds
                gamification incentives.
              </p>
              <div className="w-full flex justify-center sm:justify-start">
                <button className="bg-green-700 text-white px-6 xl:px-8 py-2 xl:py-3 rounded-lg font-semibold ">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 brightness-50 md:brightness-100 absolute h-full w-full top-0 left-0 md:static ">
          <img
            src={assets.hero}
            alt=""
            className="w-full h-full object-cover self-stretch-none md:rounded-r-lg aspect-[4/3]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
