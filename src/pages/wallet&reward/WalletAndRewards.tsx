import QuickActions from "@/components/Wallet$Reward/QuickActions";
import RecentTransactions from "@/components/Wallet$Reward/RecentTransactions";
import { FaCoins, FaWallet } from "react-icons/fa";
import MainCard from "@/utils/MainCard";
import Referral from "@/components/dashboards/recycler/Referral";
import { useFetch } from "@/hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GiToken } from "react-icons/gi";
const BASE_URL: string = import.meta.env.VITE_BASE_URL1;
const WalletAndRewards = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    `${BASE_URL}/api/v1/wallet/balance/`
  );

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
      title: "Eco Points",
      icon: <GiToken size={15} className="text-[#5094F0]" />,
      kilo: data?.wallet?.points,
    },
    b: {
      title: "Airtime Tokens",
      icon: <FaCoins size={15} className="text-[#5094F0]" />,
      kilo: 0,
    },
    c: {
      title: "Wallet Balance",
      icon: <FaWallet size={15} className="text-[#5094F0]" />,
      kilo: data?.wallet?.balance,
    },
  };
  console.log(loading);

  return (
    <div className="space-y-5">
      <MainCard loading={loading} details={cardDetails} />
      <Referral />
      <QuickActions />
      <RecentTransactions loading={loading} />
    </div>
  );
};

export default WalletAndRewards;
