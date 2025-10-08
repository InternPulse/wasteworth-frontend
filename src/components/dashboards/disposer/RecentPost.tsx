import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { Tdata } from "../../../types";
import { useState } from "react";
import Modal from "./Modal";
import PostForm from "./PostForm";
import EmptyTable from "@/utils/EmptyTable";
import TableLoader from "@/utils/TableLoader";

export default function RecentPost({
  loading,
  posts,
}: {
  loading: boolean;
  posts: Tdata[] | undefined;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              {(loading && <TableLoader />) ||
                (posts &&
                  posts.length > 0 &&
                  posts.map((item: Tdata) => (
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
                        {item.pickup_location}
                      </td>
                      <td className="px-4 border border-gray-200 py-2">
                        {item.reward_estimate}
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
                  ))) || <EmptyTable />}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
