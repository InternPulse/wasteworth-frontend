import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { Tdata } from "../../../types";

export default function RecentOffers() {
  let data: Tdata[] = [];
  /* data = [
    {
      id: "WW-001",
      quantity_kg: 150,
      date: "2024-09-15",
      location: "Lagos Island, Nigeria",
      price: 25000,
      status: "Cancelled",
    },
    {
      id: "WW-002",
      quantity_kg: 50,
      date: "2024-09-16",
      location: "Abuja FCT, Nigeria",
      price: 8500,
      status: "Sent",
    },
    {
      id: "WW-003",
      quantity_kg: 300,
      date: "2024-09-17",
      location: "Port Harcourt, Nigeria",
      price: 48000,
      status: "Cancelled",
    },
    {
      id: "WW-004",
      quantity_kg: 10,
      date: "2024-09-18",
      location: "Kano, Nigeria",
      price: 1200,
      status: "Sent",
    },
    {
      id: "WW-005",
      quantity_kg: 85,
      date: "2024-09-19",
      location: "Ibadan, Nigeria",
      price: 14500,
      status: "Cancelled",
    },
    {
      id: "WW-006",
      quantity_kg: 420,
      date: "2024-09-20",
      location: "Enugu, Nigeria",
      price: 65000,
      status: "Sent",
    },
  ]; */

  return (
    <section className="bg-white py-5 px-2 rounded-md sm:px-5">
      <div className="space-y-7">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Recent Offers</h2>
          <Link
            to="/user/offers"
            className="border border-gray-300 rounded-md py-1 px-4"
          >
            view all
          </Link>
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
                  TYPE
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
                data.length > 0 &&
                data.map((item: Tdata) => (
                  <tr key={item.id} className="text-[14px]">
                    <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell ">
                      {item.id}
                    </td>
                    <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell">
                      {item.quantity} kg
                    </td>
                    <td className="px-4 border border-gray-200 py-2">
                      {new Date(item.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 border border-gray-200 py-2 hidden md:table-cell">
                      {item.waste_type}
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
        </div>
      </div>
    </section>
  );
}
