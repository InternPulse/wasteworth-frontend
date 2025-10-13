import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { ClipLoader } from "react-spinners";
import { FaShoppingCart } from "react-icons/fa";


const BASE_URL: string = import.meta.env.VITE_BASE_URL2;

export default function WasteDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: posts, loading } = useFetch(`${BASE_URL}/api/v1/listings/${id}`);
  const post = posts?.data.listing;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <ClipLoader size={35} color="#06531e" />
      </div>
    );
  }
  
  if (!post) {
      return (
          <div className="flex items-center justify-center min-h-[80vh]">
              <p>No post found.</p>
          </div>
      );
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "completed": return "text-green-700";
      case "accepted":  return "text-blue-700";
      case "pending":   return "text-gray-500";
      default:        return "text-red-700";
    }
  };

  const postStatus = post?.status;


  const formattedDate = new Date(post.created_at).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const locationToDisplay =
    typeof post.pickup_location === 'string'
      ? post.pickup_location
      : post.pickup_location?.address || 'N/A';

  return (
    <section className="sm:px-5">
      <div className="space-y-7">
        <div className="md:flex items-center justify-between bg-white py-5 px-5 rounded-md sm:px-5 space-y-5 md:space-y-0">
          <div className="flex items-center space-x-2">
            <FaShoppingCart size={25} className="text-[#5a615e] border rounded-md p-1 mr-2" />
            <p className="font-semibold mr-1">#{id?.slice(0, 8)}...</p>
            <p className="font-bold">{postStatus.charAt(0).toUpperCase() + postStatus.slice(1)}</p>
          </div>
          <button className="text-center border border-gray-300 py-2 w-full md:w-1/5 rounded-md bg-gray-200">Cancel</button>
        </div>
        <div className="bg-white pb-5 px-3 rounded-md sm:px-5">
          <div className="py-5">
            <h2 className="font-bold">Waste Details</h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-300">
            
            {/* Table layout for large screens and up */}
            <table className="hidden lg:table table-auto w-full">
              <thead>
                <tr className="bg-[#FAFAFA] text-[14px]">
                  <th className="text-left px-4 py-2">Waste Id</th>
                  <th className="text-left px-4 py-2">Price/Kg</th>
                  <th className="text-left px-4 py-2">Listing Price</th>
                  <th className="text-left px-4 py-2">Location</th>
                  <th className="text-left px-4 py-2">Date Listed</th>
                  <th className="text-left px-4 py-2">Quantity</th>
                  <th className="text-left px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[14px] font-semibold">
                  <td className="px-4 py-2">{post.id.slice(0, 8)}...</td>
                  <td className="px-4 py-2">{post.reward_estimate}</td>
                  <td className="px-4 py-2">{post.reward_estimate}</td>
                  <td className="px-4 py-2">{locationToDisplay}</td>
                  <td className="px-4 py-2">{formattedDate}</td>
                  <td className="px-4 py-2 text-center">{post.quantity} kg</td>
                  <td className={`px-4 py-2 flex items-center justify-between gap-2 ${getStatusClass(post.status)}`}>
                    {post.status}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Flexbox layout for small and medium screens */}
            <div className="lg:hidden p-4 space-y-6 ">
                <div className="flex items-center justify-between space-y-2">
                    <p className="text-sm text-gray-500">Waste ID</p>
                    <p className="font-semibold">{post.id.slice(0, 8)}...</p>
                </div>
                <div className="pt-2 flex items-center justify-between space-y-2">
                    <p className="text-sm text-gray-500">Price/Kg</p>
                    <p className="font-semibold">{post.reward_estimate}</p>
                </div>
                <div className="pt-2 flex items-center justify-between space-y-2">
                    <p className="text-sm text-gray-500">Listing Price</p>
                    <p className="font-semibold">{post.reward_estimate}</p>
                </div>
                <div className="pt-2 flex items-center justify-between space-y-2">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{locationToDisplay}</p>
                </div>
                <div className="pt-2 flex items-center justify-between space-y-2">
                    <p className="text-sm text-gray-500">Date Listed</p>
                    <p className="font-semibold">{formattedDate}</p>
                </div>
                <div className="pt-2 flex items-center justify-between space-y-2">
                    <p className="text-sm text-gray-500">Quantity</p>
                    <p className="font-semibold">{post.quantity} kg</p>
                </div>
                <div className="pt-2 flex items-center justify-between space-y-2">
                    <p className="text-sm text-gray-500">Status</p>
                    <p className={`font-semibold ${getStatusClass(post.status)}`}>{post.status}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}