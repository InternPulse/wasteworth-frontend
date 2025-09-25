import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div
      className={`h-[calc(100vh-60px)] bg-[#2E7D32] flex items-center justify-center`}
    >
      <div className="grid md:grid-cols-2 rounded-lg items-center w-9/10 h-17/20">
        <div className="md:rounded-l-lg bg-white h-full w-full flex items-center justify-center">
          <div className="w-lg p-8">
            <div className="">
              <h3 className="text-[#B48F00] font-bold mb-2">
                RECYCLE. EARN. LEVEL UP.
              </h3>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-white md:text-gray-800 lg:leading-[2.5rem] mb-3 lg:mb-5 text-center sm:text-left">
                Your Waste. Tour Rewards. <br /> Our Future.
              </h2>
              <p className="text-gray-300 text-center sm:text-left md:text-gray-600 mb-8 sm:mb-5 lg:mb-8 text-sm lg:text-base max-w-lg">
                With WasteWorth, every item you recycle is tracked, rewarded,
                and celebrated. Earn cash, unlock gamified incentives, and help
                protect the planet
              </p>
            </div>
            <Link to={"/login"}>
              <button className="bg-green-700 text-white px-6 xl:px-8 py-2 xl:py-3 rounded-lg font-semibold ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <img
          src={assets.hero}
          className="h-full w-full object-cover md:rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
