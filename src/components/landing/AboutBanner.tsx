import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const AboutBanner = () => {
  return (
    <div className="h-[75vh] sm:h-full bg-green-700 py-4 px-4 sm:px-10 grid grid-rows-[160px_1fr] sm:grid-rows-1 sm:grid-cols-[60%_40%]">
      {/* Text Section */}
      <div className="shadow-lg bg-white p-2 sm:p-6 md:p-10  sm:rounded-l-lg sm:rounded-r-none flex items-center justify-center sm:scale-y-95 order-last sm:order-none">
        <div>
          <p className="text-gray-600 text-xs sm:text-sm mb-2 uppercase tracking-wide">
            Over 10,000 plastics recycled
          </p>
          <h1 className="text-xl sm:text-4xl lg:text-[3.3rem] font-bold text-gray-800 leading-tight mb-4 text-center sm:text-left">
            Connecting Communities to responsible waste management
          </h1>
          <p className="text-gray-700 text-sm sm:text-base mb-6 text-center sm:text-left font-medium">
            WasteWorth is a waste recycling application that simplifies
            collection of plastic waste, enables tracking, and adds gamification
            incentives.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="bg-green-700 hover:bg-green-600 transition-colors duration-300 ease-in-out px-6 py-3 text-white font-semibold rounded-md cursor-pointer">
              <Link to="/auth">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="flex items-center justify-center bg-green-800 rounded-t sm:rounded-r-lg md:rounded-t-none overflow-hidden sm:p-2 md:p-4 h-40 sm:h-auto sm:scale-y-95 order-first sm:order-none">
        <img
          src={assets.dispose}
          alt="WasteWorth recycling illustration"
          className="w-full h-full object-cover object-top sm:object-contain "
        />
      </div>
    </div>
  );
};

export default AboutBanner;
