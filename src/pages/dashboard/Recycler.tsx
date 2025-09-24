import MainCard from "../../components/dashboards/recycler/MainCard";
import Referral from "../../components/dashboards/recycler/Referral";
import RecentListing from "../../components/dashboards/recycler/RecentListing";
import MainHeader from "../../components/dashboards/MainHeader";


export default function Recycler() {
  return (
      <div className="w-full">
        <MainHeader />
        <div className="min-h-screen p-5 space-y-5 w-full">
            <MainCard />
            <Referral />
            <RecentListing />           
        </div>
    </div>
  )
}
