
const Hero = () => {
  return (
    <div className="mb-2 sm:px-15 flex flex-col items-center sm:items-start gap-5 justify-center h-[80vh]">
      <h1 className="text-6xl md:text-7xl text-center sm:text-left text-gray-800 font-bold leading-[5.5rem] mb-[1rem]">
        Turn Your Waste <br /> Into Worth
      </h1>
      <p className="text-gray-700 text-center sm:text-left text-lg max-w-md">
        A reward-driven recycling app that makes waste disposal simple,
        transparent, and profitable.
      </p>
      <div className="flex gap-5 justify-center sm:justify-start">
        <button className="bg-green-700 hover:bg-green-600 transition duration-300 ease flex justify-center items-center px-4 py-2 text-white font-semibold rounded-md cursor-pointer glowing-button">
          Get Started
        </button>
        <button className="bg-white border-2 border-green-700 flex justify-center items-center px-4 py-2 text-green-700 font-semibold rounded-md cursor-pointer">
          Join as Recycler
        </button>
      </div>
    </div>
  );
};

export default Hero;
