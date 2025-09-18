import { assets } from "../../assets/assets";

const Partners = () => {
  return (
    <div className="py-2 md:py-5 px-5 md:px-10 flex flex-col items-center justify-center gap-3">
      <h2 className="text-green-600 text-xl md:text-2xl text-center font-semibold">Our Partners</h2>
      <div className="w-full overflow-x-hidden">
        <div className="flex items-center justify-around gap-2 scroll">
          {Array(10).fill(0).map((_, i) => (
            <img src={assets.uba} key={i}  className="w-12 sm:w-15 md:w-20 lg:w-24 object-fit" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
