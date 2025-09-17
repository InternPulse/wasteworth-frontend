import Hero from "../../components/landing/Hero";
import CoreFeatures from "../../components/landing/CoreFeatures";
import ForWhom from "../../components/landing/ForWhom";
import Slider from "../../utils/Slider";
import Collectibles from "../../components/landing/Collectibles";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Hero />
      <div className="bg-gray-100">
        <CoreFeatures />
        <Slider />
        <ForWhom />
        <Collectibles />
        <div className="flex items-center justify-center relative">
          <div className="absolute top-0 bg-cover bg-center brightness-70 w-full h-full bg-[url('src/assets/bin2.png')] "></div>
          <div className="flex flex-col z-1 p-5">
            <div className="flex items-center w-1/2 ml-auto justify-center">
              <img src={assets.logo} className=" object-cover scale-140" />
            </div>
            <div className=" space-y-2">
              <p className="text-white text-xs font-semibold">
                Be part of the change; Join the WasteWorth movement
              </p>
              <Link to="/auth">
                <button className="bg-green-700 hover:bg-green-600 transition duration-300 ease flex justify-center items-center text-xs px-4 py-1 sm:py-2 text-white font-semibold rounded-md cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
