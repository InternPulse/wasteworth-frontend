import { assets } from "../../assets/assets";
import { CiDeliveryTruck, CiWallet } from "react-icons/ci";
import { HiOutlineChartBar } from "react-icons/hi";

const CoreFeatures = () => {
  return (
    <div className="p-2 sm:p-5 my-2">
      <h2 className="text-green-600 font-semibold text-lg md:text-xl text-center mb-5 md:mb-5">
        Core Features
      </h2>
      <div className="grid sm:grid-cols-3 gap-5 sm:gap-2 md:gap-5 max-w-5xl mx-auto">
        {[
          [
            <HiOutlineChartBar />,
            "Schedule Pickups",
            "Request and track waste collections easily",
            assets.schedulePickup
          ],
          [
            <CiWallet />,
            "Earn Rewards",
            "Request and track waste collections easily",
            assets.earnRewards
          ],
          [
            <CiDeliveryTruck />,
            "Impact Dashboard",
            "See your contribution to the environment",
            assets.impactDashboard
          ],
        ].map((feature, idx) => (
          <div key={`core-feature-${idx}`} className="grid w-9/10 sm:w-full mx-auto text-center aspect-4/4 sm:aspect-none rounded-lg">
            <div className="rounded-md flex items-center justify-center">
              <img
                src={feature[3] as string}
                className="object-cover rounded-t-lg h-full w-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center p-2 md:p-5 md:gap-4 bg-white rounded-b-lg sm:rounded-b-xl">
              <span className="text-sm text-green-600">{feature[0]}</span>
              <h2 className="text-md md:text-xl font-semibold text-[#222222]">
                {feature[1]}
              </h2>
              <p className="text-black text-[0.7rem] sm:text-sm md:text-base">
                {feature[2]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
