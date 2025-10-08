import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainCard from "../../utils/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";
import { useFetch } from "@/hooks/useFetch";
import { Link } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";

const BASE_URL: string = import.meta.env.VITE_BASE_URL1;

const Disposer = () => {
  const navigate = useNavigate();
  const {
    data: res,
    loading,
    error,
  } = useFetch(`${BASE_URL}/api/v1/users/user-dashboard/`);
  const data = res?.stats;
  useEffect(() => {
    if (error?.status === 401 || error?.message?.includes("401")) {
      localStorage.removeItem("loggedIn");
      navigate("/login");
    }
  }, [error, navigate]);

  if (error && error.status !== 401) {
    <div className="text-red-400 text-5xl font-bold">
      Error: {JSON.stringify(error.status)} <br />
      <Link to={"/login"} className="text-green-400 text-lg font-normal">
        Back to login
      </Link>
    </div>;
  }

  const cardDetails = {
    a: {
      title: "Total Waste Posted",
      icon: <CiShop size={15} className="text-[#5094F0]" />,
      kilo: data?.total_listings,
    },
    b: {
      title: "Total Completed Listing",
      icon: <FaShoppingCart size={15} className="text-[#5094F0]" />,
      kilo: data?.sold_listings,
    },
    c: {
      title: "Bagdes Earned",
      icon: <FaGift size={15} className="text-[#5094F0]" />,
      kilo: 0,
    },
  };
  return (
    <div className="w-full">
      <div className="space-y-5">
        <MainCard loading={loading} details={cardDetails} />
        <Referral />
        <RecentPost loading={loading} posts={data?.recent_listings} />
      </div>
    </div>
  );
};
export default Disposer;
