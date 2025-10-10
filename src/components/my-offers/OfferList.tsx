import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { Tdata } from "../../types";
import { useMemo } from "react";

export default function OfferList() {
  const data: Tdata = [];
  
  
const locationToDisplay = useMemo(() => {
        const location = data.pickup_location;
        if (typeof location === 'string') {
            return location;
        }
        if (location && typeof location === 'object' && location.address) {
            return location.address;
        }
        if (location && typeof location === 'object' && location.city) {
            return location.city;
        }
        return 'N/A';
}, [data.pickup_location]);
  
  
  return (
    <section className="bg-white py-5 px-2 rounded-md sm:px-5">
      <div className="space-y-7">
        <div className="flex items-center justify-left">
          <h2 className="font-semibold">My Offers List</h2>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-300">
          <table className="table-auto w-full border-collapse ">
            <thead>
              <tr className="bg-[#FAFAFA] text-[14px]">
                <th className="border border-gray-300 text-left px-4 py-2 hidden lg:table-cell">
                  OFFER ID
                </th>
                <th className="border border-gray-300 text-left px-4 py-2 hidden lg:table-cell">
                  WASTE QUANTITY
                </th>
                <th className="border border-gray-300 text-left px-4 py-2">
                  DATE
                </th>
                <th className="border border-gray-300 text-left px-4 py-2 hidden md:table-cell">
                  LOCATION
                </th>
                <th className="border border-gray-300 text-left px-4 py-2">
                  ESTIMATED PRICE
                </th>
                <th className="border border-gray-300 text-left px-4 py-2">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              {(data &&
                data.length &&
                data.map((item: Tdata) => (
                  <tr key={item.id} className="text-[14px]">
                    <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell ">
                      {item.id}
                    </td>
                    <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell">
                      {item.quantity} kg
                    </td>
                    <td className="px-4 border border-gray-200 py-2">
                      {item.created_at}
                    </td>
                    <td className="px-4 border border-gray-200 py-2 hidden md:table-cell">
                      {locationToDisplay}
                    </td>
                    <td className="px-4 border border-gray-200 py-2">
                      {item.reward_estimate}
                    </td>
                    <td className="px-4 border border-gray-200 py-2 flex items-center justify-between gap-2">
                      <span
                        className={` ${
                          item.status === "Sent"
                            ? "text-blue-700"
                            : "text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                      <Link to="#">
                        <FaArrowRight className="text-gray-400" />
                      </Link>
                    </td>
                  </tr>
                ))) || (
                <tr>
                  <td colSpan={3} height={120}>
                    <h3 className="text-xl font-bold text-center">
                      No data here yet.
                    </h3>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {data && data.length > 0 && (
            <div className="flex items-center justify-center py-3">
              <button className="border border-gray-300 rounded-md py-1 px-4">
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
