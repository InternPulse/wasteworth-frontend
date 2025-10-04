import QuickActions from "@/components/Wallet$Reward/QuickActions";
import RecentTransactions from "@/components/Wallet$Reward/RecentTransactions";
import { FaGift } from "react-icons/fa";
import type { CardProps } from "../dashboard/Recycler";
import MainCard from "@/components/dashboards/recycler/MainCard";
import Referral from "@/components/dashboards/recycler/Referral";

const WalletAndRewards = () => {
  const mainCard: CardProps[] = [
    {
      bgColor: "red",
      title: "Eco points",
      icon: (
        <img
          className="w-3 h-3"
          src="/public/marketplace/images/number-of-listings.png"
          alt="number of listings icon"
        />
      ),
      kilo: 0,
    },
    {
      bgColor: "blue",
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
      kilo: "Coming soon",
    },
  ];
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
