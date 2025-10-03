import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const AboutBanner = () => {
  return (
    <div
      className={`min-h-[500px] min-h-[calc(100vh-70px)] bg-[#2E7D32] flex items-center justify-center mt-3 sm:mt-0 py-2 md:py-8 lg:py-15`}
    >
      <div className="grid md:grid-cols-2 grid-rows-2 sm:grid-rows-1 rounded sm:rounded-lg items-center w-11/12 max-w-7xl h-full py-4 overflow-hidden">
        <div className="md:rounded-l-lg self-start w-full h-full border flex sm:items-center justify-center order-2 md:order-1">
          <div className="flex items-center w-full md:h-full p-3 sm:p-8 bg-white rounded-b">
            <div className="space-y-5">
              <div className="">
                <h3 className="text-[14px] sm:text-base text-[#B48F00] font-bold mb-1 sm:mb-2">
                  OVER 10,000 PLASTICS RECYCLED
                </h3>
                <h2 className="font-bold  lg:text-3xl xl:text-3xl text-[#2a2a2a] lg:leading-[2.5rem] mb-3 lg:mb-5">
                  Connecting Communities to <br className="hidden sm:block" />{" "}
                  responsible waste management
                </h2>
                <p className="text-[#464545] mb-2 sm:mb-5 lg:mb-8 text-[16px] leading-[32px] sm:leading-base lg:text-base max-w-lg">
                  With WasteWorth, every item you recycle is tracked, rewarded,
                  and celebrated. Earn cash, unlock gamified incentives, and
                  help protect the planet
                </p>
              </div>
              <Link to={"/login"} className="w-full flex justify-start">
                <button className="min-w-[173px] bg-green-700 text-white px-6 xl:px-8 py-2 xl:py-3 rounded-[6px] sm:rounded-lg font-semibold">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <img
          src={assets.about}
          className="h-full w-full object-cover rounded-t md:rounded-lg md:rounded-l-none order-1"
        />
      </div>
    </div>
  );
};

export default AboutBanner;
