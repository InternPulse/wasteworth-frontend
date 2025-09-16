import { FaHome } from "react-icons/fa";
import { assets } from "../../assets/assets";

const CoreFeatures = () => {
  return (
    <div className="p-5 my-2">
      <h2 className="text-green-600 font-semibold sm:text-lg md:text-2xl text-center mb-5 md:mb-10">
        Core Features
      </h2>
      <div className="grid grid-cols-3 gap-2 md:gap-5">
        {[
          [
            <FaHome />,
            "Schedule Pickups",
            "Request and track waste collections easily",
          ],
          [
            <FaHome />,
            "Schedule Pickups",
            "Request and track waste collections easily",
          ],
          [
            <FaHome />,
            "Schedule Pickups",
            "Request and track waste collections easily",
          ],
        ].map((feature, idx) => (
          <div
            key={`core-feature-${idx}`}
            className="p-2 md:p-5 grid gap-2 md:gap-5 rounded-md bg-white text-center"
          >
            <div className="rounded-md flex items-center justify-center">
              <img src={assets.dispose} alt="" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span>{feature[0]}</span>
              <h2 className="text-green-600 sm:text-lg md:text-xl font-semibold">{feature[1]}</h2>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base">{feature[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
