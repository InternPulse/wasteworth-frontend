import MainCard from "../../components/dashboards/disposer/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";

export default function Disposer() {
  return (
    <div className="w-full">
      <div className="space-y-5">
        <MainCard />
        <Referral />
        <RecentPost />
      </div>
    </div>
  );
}
