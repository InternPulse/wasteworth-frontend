import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="relative overflow-hidden grid lg:grid-cols-2 h-[80vh] md:h-[90vh] -gap-5">
      <div className="sm:px-15 flex flex-col items-center sm:items-start gap-5 justify-center">
      <h1 className="text-6xl md:text-7xl text-center sm:text-left text-white lg:text-gray-800 font-bold leading-[5.5rem] mb-[1rem]">
        Turn Your Waste <br /> Into Worth
      </h1>
      <p className="text-gray-200 lg:text-gray-700 text-center sm:text-left text-lg max-w-md">
        A reward-driven recycling app that makes waste disposal simple,
        transparent, and profitable.
      </p>
      <div className="flex gap-5 justify-center sm:justify-start">
        <Link
          to="start"
          className="bg-green-700 hover:bg-green-600 transition duration-300 ease flex justify-center items-center px-4 py-2 text-white font-semibold rounded-md cursor-pointer"
        >
          Get Started
        </Link>
        <Link
          to=":recycler/register"
          className="bg-white border-2 border-green-700 flex justify-center items-center px-4 py-2 text-green-700 font-semibold rounded-md cursor-pointer"
        >
          Join as Recycler
        </Link>
      </div>
    </div>
    <div className="absolute lg:relative -z-2 lg:z-1 w-full h-full border brightness-25 lg:brightness-100">
      <img src={assets.bin2} className="object-cover scale-105 h-full w-full" />
    </div>
    </div>
  );
};

export default Hero;
