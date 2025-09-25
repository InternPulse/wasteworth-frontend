import { assets } from "../../assets/assets";

const Slider = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className=" w-full flex gap-2 lg:gap-5 xl:gap-10 items-center p-1 bg-white scroll">
        <div className="w-15 md:size-12 lg:size-15 xl:size-20 flex items-center justify-center rounded-full">
          <img src={assets.logo} alt="logo" className="rounded-full" />
        </div>
        <p className="text-gray-800 text-[0.5rem] lg:text-[1rem] xl:text-[1.5rem] font-semibold">
          “Now I don’t burn plastics at home. Recyclers come to me, and I even
          earn extra airtime.” – Mary, Lagos
        </p>
        <div className="w-1/10"></div>
      </div>
    </div>
  );
};

export default Slider;
