import MainCard from "../../components/dashboards/recycler/MainCard";
import Referral from "../../components/dashboards/recycler/Referral";
import RecentListing from "../../components/dashboards/recycler/RecentListing";
import RecentOffers from "../../components/dashboards/recycler/RecentOffers";
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
  const mainCard: CardProps[] = [
    {
      bgColor: "blue",
      title: "Active Listings Near You",
      icon: <FaLocationDot size={15} className="text-[#5094F0]" />,
      kilo: 0,
    },
    {
      bgColor: "blue",
      title: "Total Waste Collected",
      icon: <FaShoppingCart size={15} className="text-[#00A256]" />,
      kilo: 0,
    },
    {
      bgColor: "red",
      title: "Total Points Earned",
      icon: <FaGift size={15} className="text-[#FB8C00]" />,
      kilo: 0,
    },
  ];
  const { data } = useFetch(`${BASE_URL}/api/v1/users/user-dashboard/`);
  console.log(data);
  return (
    <div className="min-h-screen space-y-5">
      <MainCard details={mainCard} />
      <Referral />
      <RecentListing />
      <RecentOffers />
    </div>
  );
}
