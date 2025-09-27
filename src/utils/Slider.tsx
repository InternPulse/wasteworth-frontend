import { assets } from "../assets/assets";

const Slider = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className=" w-full flex gap-2 lg:gap-5 xl:gap-10 items-center p-1 bg-green-700 scroll">
        <div className="w-15 md:size-12 lg:size-15 xl:size-20 flex items-center justify-center bg-white">
          <img src={assets.logo} alt="logo" />
        </div>
        <p className="text-gray-100 text-[0.6rem] lg:text-[1rem] xl:text-[1.5rem] font-semibold">
          WasteWorth; Making recycling simple, rewarding, and impactful for
          everyone.
        </p>
        <div className="w-1/10"></div>
      </div>
    </div>
  );
};

export default Slider;
