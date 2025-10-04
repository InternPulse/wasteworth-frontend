import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { Tdata } from "../../../types";
import { useState } from "react";
import Modal from "./Modal";
import PostForm from "./PostForm";

export default function RecentPost({ posts }: { posts: Tdata[] | undefined }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* let post: Tdata[] = [
    {
      id: "WW-001",
      quantity_kg: 150,
      date: "2024-09-15",
      location: "Lagos Island, Nigeria",
      price: 25000,
      status: "Accepted",
    },
    {
      id: "WW-002",
      quantity_kg: 50,
      date: "2024-09-16",
      location: "Abuja FCT, Nigeria",
      price: 8500,
      status: "Pending",
    },
    {
      id: "WW-003",
      quantity_kg: 300,
      date: "2024-09-17",
      location: "Port Harcourt, Nigeria",
      price: 48000,
      status: "Pending",
    },
    {
      id: "WW-004",
      quantity_kg: 10,
      date: "2024-09-18",
      location: "Kano, Nigeria",
      price: 1200,
      status: "Accepted",
    },
    {
      id: "WW-005",
      quantity_kg: 85,
      date: "2024-09-19",
      location: "Ibadan, Nigeria",
      price: 14500,
      status: "Completed",
    },
    {
      id: "WW-006",
      quantity_kg: 420,
      date: "2024-09-20",
      location: "Enugu, Nigeria",
      price: 65000,
      status: "Completed",
    },
  ]; */

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="bg-white py-5 px-2 rounded-md sm:px-5">
      <div className="space-y-7">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Recent Posts</h2>
          <button
            onClick={() => toggleModal()}
            className="bg-[#3B9561] rounded-md py-2 px-5 text-white hover:cursor-pointer"
          >
            Post Waste
          </button>
          <Modal isOpen={isModalOpen} onClose={toggleModal}>
            <PostForm />
          </Modal>
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
              {(posts &&
                posts.length > 0 &&
                posts.map((item: Tdata) => (
                  <tr key={item.id} className="text-[14px]">
                    <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell ">
                      {item.id}
                    </td>
                    <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell">
                      {item.quantity_kg} kg
                    </td>
                    <td className="px-4 border border-gray-200 py-2">
                      {item.date}
                    </td>
                    <td className="px-4 border border-gray-200 py-2 hidden md:table-cell">
                      {item.location}
                    </td>
                    <td className="px-4 border border-gray-200 py-2">
                      {item.price}
                    </td>
                    <td className="px-4 border border-gray-200 py-2 flex items-center justify-between gap-2">
                      <span className={` ${getStatusClass(item.status)}`}>
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
