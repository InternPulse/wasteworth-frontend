import { FaHome } from "react-icons/fa";
import { assets } from "../../assets/assets";

const CoreFeatures = () => {
  return (
    <div className="p-5 bg-gray-100">
      <h2 className="text-green-600 font-semibold text-center mb-5">
        Core Features
      </h2>
      <div className="grid grid-cols-3 gap-2">
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
        ].map((feature) => (
          <div className="p-2 grid gap-2 rounded-md bg-white text-center">
            <div className="rounded-md flex items-center justify-center">
              <img src={assets.dispose} alt="" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span>{feature[0]}</span>
              <h2 className="text-green-600 font-semibold">{feature[1]}</h2>
              <p className="text-gray-700 text-xs">{feature[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
