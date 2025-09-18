import Hero from "../../components/landing/Hero";
import CoreFeatures from "../../components/landing/CoreFeatures";
import ForWhom from "../../components/landing/ForWhom";
import Slider from "../../utils/Slider";
import Collectibles from "../../components/landing/Collectibles";
import { assets } from "../../assets/assets";
import Partners from "../../components/landing/Partners";

const Landing = () => {
  return (
    <>
      <Hero />
      <div className="bg-gray-100">
        <Partners />
        <CoreFeatures />
        <ForWhom />
        <Slider />
        <Collectibles />
        {/* <div className="px-5 max-w-4xl mx-auto">
          <h2 className="text-green-600 font-semibold sm:text-lg md:text-2xl text-center mb-10">
            Together, We’re Building Cleaner Nigeria
          </h2>
          <div className="grid grid-cols-2">
            <div className="flex flex-col p-5 justify-center">
              <div className="">
                <h2 className="text-green-600 font-semibold sm:text-lg md:text-2xl text-center">1.200+</h2>
                <p>Pickups Completed</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={assets.bin} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Landing;
