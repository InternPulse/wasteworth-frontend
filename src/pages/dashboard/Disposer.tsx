import MainCard from "../../components/dashboards/disposer/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";

export default function Disposer() {
  return (
    <div className="w-full">
      <div className="min-h-screen p-2 space-y-5 w-full px-2 sm:px-5 pb-10">
        <MainCard />
        <Referral />
        <RecentPost />
      </div>
    </div>
  );
}
