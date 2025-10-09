import MainCard from "../../utils/MainCard";
import Referral from "../../components/dashboards/recycler/Referral";
import RecentListing from "../../components/dashboards/recycler/RecentListing";
/* import RecentOffers from "../../components/dashboards/recycler/RecentOffers"; */
import { FaLocationDot } from "react-icons/fa6";
import { FaGift, FaShoppingCart } from "react-icons/fa";
import type { ReactNode } from "react";
import { useFetch } from "@/hooks/useFetch";

export interface CardProps {
  bgColor: string;
  title: string;
  icon: ReactNode;
  kilo: number | string;
}
const BASE_URL: string = import.meta.env.VITE_BASE_URL1;
export default function Recycler() {
  const { data, loading, error} = useFetch(
    `${BASE_URL}/api/v1/users/recycler-dashboard/`
  );

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">
          Error loading dashboard: {error.message || 'Something went wrong'}
        </div>
      </div>
    );
  }

  const mainCard = {
    a: {
      title: "Active Listings Near You",
      icon: <FaLocationDot size={15} className="text-[#5094F0]" />,
      kilo: 0,
    },
    b: {
      title: "Total Waste Collected",
      icon: <FaShoppingCart size={15} className="text-[#00A256]" />,
      kilo: data?.stats?.total_kg_collected,
    },
    c: {
      title: "Total Points Earned",
      icon: <FaGift size={15} className="text-[#FB8C00]" />,
      kilo: data?.stats?.total_points,
    },
  };
  return (
    <div className="min-h-screen space-y-5">
      <MainCard loading={loading} details={mainCard} />
      <Referral />
      <RecentListing data={data?.stats?.recent_posts} />
      {/* <RecentOffers /> */}
    </div>
  );
}
