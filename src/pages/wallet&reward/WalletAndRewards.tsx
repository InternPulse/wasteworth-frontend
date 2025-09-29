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
      kilo: 400,
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
      kilo: 6,
    },
    {
      bgColor: "red",
      title: "Wallet Balance",
      icon: <FaGift size={15} className="text-[#FB8C00]" />,
      kilo: "Coming soon",
    },
  ];
  return (
    <div className="w-19/20 mx-auto sm:p-4 sm:w-full overflow-hidden">
      {/* Top Cards */}
      <div className="">
        <MainCard details={mainCard} />
      </div>
      {/* Invite Card */}
      <div className="py-4">
        <Referral />
      </div>
      {/* Quick Actions */}
      <div>
        <QuickActions />
      </div>
      {/* Recent Transactions */}
      <div className="py-4">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default WalletAndRewards;
