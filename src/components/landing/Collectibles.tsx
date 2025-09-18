import { assets } from "../../assets/assets";

const Collectibles = () => {
  return (
    <div>
      <h2 className="text-green-600 font-semibold sm:text-lg md:text-2xl text-center">
        Collectibles
      </h2>
      <div className="grid grid-cols-3 gap-2 sm:gap-5 p-3 sm:p-5 md:p-8 lg:p-10 max-w-3xl mx-auto">
        <div className="h-full w-full">
          <img src={assets.collect1} className="w-full h-full object-cover" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect2} className="w-full h-full object-cover" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect3} className="w-full h-full object-cover" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect4} className="w-full h-full object-cover" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect5} className="w-full h-full object-cover" />
        </div>
        <div className="h-full w-full">
          <img src={assets.collect6} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Collectibles;
