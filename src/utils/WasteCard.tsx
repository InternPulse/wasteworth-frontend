import { assets } from "@/assets/assets";
import type { TListing } from "@/components/dashboards/recycler/ListingCard";
import type { Listing } from "@/pages/marketPlace/MarketPlace";
import { MapPin } from "lucide-react";

const getStatusClass = (status: string) => {
  switch (status) {
    case "completed":
      return "text-green-700";
    case "accepted":
      return "text-blue-700";
    case "pending":
      return "text-gray-500";
    default:
      return "text-red-700";
  }
};

const WasteCard = ({
  item,
  checkDetails = () => {},
}: {
  item: TListing;
  checkDetails?: (listing: Listing) => void;
}) => {
  console.log(checkDetails);

  return (
    <div
      key={item.id}
      className="border border-gray-200 rounded-md overflow-hidden"
    >
      <img
        src={item.image_url ?? assets.collect3}
        alt="waste"
        className="w-full h-50 rounded-t-md"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">
          {item.title} {item.quantity}pcs
        </h3>
        <div
          className="flex items-center space-x-2 text-sm text-gray-600 mb-3 overflow-x-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <MapPin className="w-4 h-4" />
          <span>{item.pickup_location.toString()}</span>
          <span>•</span>
          <p className="text-xs inline">
            Posted on{" "}
            {new Date(item.created_at).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3 pl-5">
          <p className={`${getStatusClass(item.status)} font-semibold inline`}>
            {item.status}
          </p>
          <span>•</span>
          <span>{item.waste_type}</span>
        </div>
        <button className="w-full bg-[#006837] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-900">
          Check Details
        </button>
      </div>
    </div>
  );
};

export default WasteCard;
