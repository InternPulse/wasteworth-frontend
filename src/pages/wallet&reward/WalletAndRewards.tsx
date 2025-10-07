import QuickActions from "@/components/Wallet$Reward/QuickActions";
import RecentTransactions from "@/components/Wallet$Reward/RecentTransactions";
import { FaGift } from "react-icons/fa";
import type { CardProps } from "../dashboard/Recycler";
import MainCard from "@/components/dashboards/recycler/MainCard";
import Referral from "@/components/dashboards/recycler/Referral";
import { useFetch } from "@/hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const BASE_URL: string = import.meta.env.VITE_BASE_URL1;
const WalletAndRewards = () => {
  const navigate = useNavigate();
  const { data, error } = useFetch(`${BASE_URL}/api/v1/wallet/balance/`);
  console.log(data?.wallet);

  const mainCard: CardProps[] = [
    {
      bgColor: "blue",
      title: "Eco points",
      icon: (
        <img
          className="w-3 h-3"
          src="/public/marketplace/images/number-of-listings.png"
          alt="number of listings icon"
        />
      ),
      kilo: data?.wallet?.points,
    },
    {
      bgColor: "green",
      title: "Airtime Tokens",
      icon: (
        <img
          className="w-3 h-3"
          src="/public/marketplace/images/total-offers.png"
          alt="total offers icon"
        />
      ),
      kilo: 0,
    },
    {
      bgColor: "red",
      title: "Wallet Balance",
      icon: <FaGift size={15} className="text-[#FB8C00]" />,
      kilo: data?.wallet?.balance,
    },
  ];
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

  if (!data)
    return (
      <div className="font-semibold text-lg w-full text-center">Loading...</div>
    );
  return (
    <div className="space-y-5">
      <MainCard details={mainCard} />
      <Referral />
      <QuickActions />
      <RecentTransactions />
    </div>
  );
};

export default WalletAndRewards;
