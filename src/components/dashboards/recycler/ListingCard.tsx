import { assets } from "../../../assets/assets";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import EmptyDiv from "@/utils/EmptyDiv";
import DivLoader from "@/utils/DivLoader";
import Modal from '../disposer/Modal'
import { useMemo, useState } from "react";
import ListingDetails from "./ListingDetails";
import type { TListing } from "@/types";


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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

   const handleDetailsClick = (id: string) => {
    setSelectedItemId(id);
    setIsModalOpen(true);
  };

  // Use useMemo to find the selected item efficiently
  const selectedItem = useMemo(() => {
    if (!data || !selectedItemId) {
      return null;
    }
    return data.find(item => item.id === selectedItemId) || null;
  }, [data, selectedItemId])


  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  
                <button
                  onClick={() => handleDetailsClick(item.id)}
                  className="flex items-center justify-center bg-[#006837] rounded-md py-1 text-white w-full hover:cursor-pointer"
                >
                  Check Details
                </button>
              </div>
            </div>
          ))) || <EmptyDiv />}
      
          {isModalOpen && selectedItem && (
        <Modal
          title="Listing Details"
          isOpen={isModalOpen}
          onClose={toggleModal}
        >
          <ListingDetails item={selectedItem} />
        </Modal>
      )}
    </div>
  );
}
