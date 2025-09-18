import { assets } from "../../assets/assets";

const Collectibles = () => {
  return (
    <div>
      <h2 className="text-green-600 font-semibold sm:text-lg md:text-2xl text-center">
        Collectibles
      </h2>
      <div className="grid grid-cols-3 gap-2 sm:gap-5 p-3 sm:p-5 md:p-8 lg:p-10">
        <div className="h-full w-full">
          <img src={assets.collect1} alt="" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect2} alt="" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect3} alt="" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect4} alt="" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect5} alt="" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collectibles;
