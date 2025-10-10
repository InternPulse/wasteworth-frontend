import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import EmptyDiv from "@/utils/EmptyDiv";
import DivLoader from "@/utils/DivLoader";

export interface TListing {
  created_at: string;
  id: number;
  image_url: string;
  pickup_location: { lat: string; lng: string } | string;
  quantity: number;
  reward_estimate: string;
  status: string;
  title: string;
  waste_type: string;
}
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

export default function ListingCard({
  data,
  loading,
}: {
  data: TListing[];
  loading: boolean;
}) {
  console.log(data);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {(loading && <DivLoader />) ||
        (data &&
          data.map((item: TListing) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <img
                src={item.image_url ?? assets.collect3}
                alt="waste"
                className="w-full h-50 rounded-t-md"
              />
              <div className="p-3 space-y-2">
                <h2 className="font-semibold text-[16px]">{item.title}</h2>
                <div className="flex items-center gap-1 text-sm">
                  <MdOutlineLocationOn className="text-gray-500" />
                  <p>
                    {item.pickup_location?.toString() ?? item.pickup_location}
                  </p>
                  -
                  <p className={`font-semibold ${getStatusClass(item.status)}`}>
                    {item.status}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <p className="text-xs text-gray-700">
                    {new Date(item.created_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <LuDot className="text-gray-500 font-bold" />
                  <p className="text-gray-700 text-xs">
                    {" "}
                    {item.quantity}pcs of{" "}
                    <span className="font-semibold text-green-600">
                      {item.waste_type}
                    </span>
                  </p>
                </div>

                <Link
                  to="#"
                  className="flex items-center justify-center bg-[#006837] rounded-md py-1 text-white"
                >
                  Check Details
                </Link>
              </div>
            </div>
          ))) || <EmptyDiv />}
    </div>
  );
}
