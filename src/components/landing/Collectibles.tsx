import { assets } from "../../assets/assets";

const Collectibles = () => {
  return (
    <section className="mt-10">
      <h2 className="text-green-600 font-semibold text-lg md:text-2xl text-center mb-5 md:mb-10">
        Collectibles
      </h2>
      <ul className="grid grid-cols-2 gap-2 sm:gap-5 p-3 sm:p-5 md:p-8 lg:p-10 mx-auto md:grid-cols-3">
        <li className="h-full w-full">
          <img src={assets.collect1} className="w-full h-full object-cover" />
        </li>
        <li className="h-full w-full">
          <img src={assets.collect2} className="w-full h-full object-cover" />
        </li>
        <li className="h-full w-full">
          <img src={assets.collect3} className="w-full h-full object-cover" />
        </li>
        <li className="h-full w-full">
          <img src={assets.collect4} className="w-full h-full object-cover" />
        </li>
        <li className="h-full w-full">
          <img src={assets.collect5} className="w-full h-full object-cover" />
        </li>
        <li className="h-full w-full">
          <img src={assets.collect6} className="w-full h-full object-cover" />
        </li>
      </ul>
    </section>
  );
};

export default Collectibles;
