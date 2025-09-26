import Cards from "@/components/Wallet$Reward/Cards";
import InviteCard from "@/components/Wallet$Reward/InviteCard";
import QuickActions from "@/components/Wallet$Reward/QuickActions";
import RecentTransactions from "@/components/Wallet$Reward/RecentTransactions";

const WalletAndRewards = () => {
  return (
  <div className="p-4 overflow-hidden">
    {/* Top Cards */}
    <div className="">
 <Cards />
    </div>
    {/* Invite Card */}
    <div className="py-4">
      <InviteCard />
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
