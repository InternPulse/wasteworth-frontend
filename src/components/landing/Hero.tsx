import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import Button from "../../utils/Button";
import ButtonOutline from "../../utils/ButtonOutline";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 h-[calc(100vh-60px)] gap-5">
      <div className="sm:px-15 flex flex-col items-center sm:items-start gap-5 justify-center w-full">
        <h1 className="text-6xl md:text-7xl text-center sm:text-left text-white lg:text-gray-800 font-bold leading-[5.5rem] mb-[1rem]">
          Turn Your Waste <br /> Into Worth
        </h1>
        <p className="text-gray-200 lg:text-gray-700 text-center sm:text-left text-lg max-w-md">
          A reward-driven recycling app that makes waste disposal simple,
          transparent, and profitable.
        </p>
        <div className="flex gap-5 justify-center sm:justify-start">
          <Link to="auth">
            <Button text="Get Started" />
          </Link>
          <Link to="auth/:recycler">
            <ButtonOutline text="Join as Recycler" />
          </Link>
        </div>
      </div>
      <div className="absolute lg:static h-[calc(100vh-60px)] flex items-center justify-center -z-2 lg:z-1 w-full   brightness-60 lg:brightness-100">
        <img
          src={assets.hero}
          className="object-cover scale-100 h-full w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
