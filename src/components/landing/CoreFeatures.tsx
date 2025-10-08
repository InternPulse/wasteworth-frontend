import { assets } from "../../assets/assets";
import { CiDeliveryTruck, CiWallet } from "react-icons/ci";
import { HiOutlineChartBar } from "react-icons/hi";

const CoreFeatures = () => {
  return (
    <section className="mt-10 px-3 md:px-10">
      <h2 className="text-green-600 font-semibold text-lg md:text-xl text-center mb-5">
        Core Features
      </h2>
      <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {[
          [
            <HiOutlineChartBar />,
            "Schedule Pickups",
            "Request and track waste collection easily.",
            assets.schedulePickup,
          ],
          [
            <CiWallet />,
            "Earn Rewards",
            "Request and track waste collections easily",
            assets.earnRewards,
          ],
          [
            <CiDeliveryTruck />,
            "Impact Dashboard",
            "See your contribution to the environment",
            assets.impactDashboard,
          ],
        ].map((feature, idx) => (
          <div
            key={`core-feature-${idx}`}
            className="w-19/20 md:w-full mx-auto text-center shadow-xl rounded-lg"
          >
            <div className="rounded-md flex items-center justify-center">
              <img
                src={feature[3] as string}
                className="object-cover rounded-t-lg h-full w-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-5 py-5 bg-white rounded-b-lg">
              <span className="text-2xl text-green-600">{feature[0]}</span>
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
    </section>
  );
};

export default CoreFeatures;
