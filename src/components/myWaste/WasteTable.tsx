import type { Tdata } from "@/types";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMemo } from 'react';

const getStatusClass = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-green-700";
    case "Accepted":
      return "text-blue-700";
    case "Pending":
      return "text-gray-500";
    default:
      return "text-red-700";
  }
};

 

const WasteTable = ({ item }: { item: Tdata }) => {

  const locationToDisplay = useMemo(() => {
        const location = item.pickup_location;
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
    }, [item.pickup_location]);

  
  return (
    <tr key={item._id} className="text-[14px]">
      <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell">
        {item._id}
      </td>
      <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell">
        {item.quantity}
      </td>
      <td className="px-4 border border-gray-200 py-2"> {item.created_at}</td>
      <td className="px-4 border border-gray-200 py-2 hidden md:table-cell">
        {locationToDisplay}
      </td>
      <td className="px-4 border border-gray-200 py-2">
        {item.reward_estimate}
      </td>
      <td className="px-4 border border-gray-200 py-2 flex items-center justify-between gap-2">
        <span className={` ${getStatusClass(item.status)}`}>{item.status}</span>
        <Link to="#">
          <FaArrowRight className="text-gray-400" />
        </Link>
      </td>
    </tr>
  );
};

export default WasteTable;
