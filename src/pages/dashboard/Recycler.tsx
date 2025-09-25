import MainCard from "../../components/dashboards/recycler/MainCard";
import Referral from "../../components/dashboards/recycler/Referral";
import RecentListing from "../../components/dashboards/recycler/RecentListing";
import MainHeader from "../../components/dashboards/MainHeader";
import RecentOffers from "../../components/dashboards/recycler/RecentOffers";


export default function Recycler() {
  return (
      <div className="w-full">
        <MainHeader 
            firstName="Coley"
            question="ready to recycle today?"
            points={25}
            initial="C"
            user="Colleta Intern"
      />
        <div className="min-h-screen p-2 space-y-5 w-full pt-22 px-2 sm:px-5 pb-10">
            <MainCard />
            <Referral />
            <RecentListing /> 
            <RecentOffers />                    
        </div>
    </div>
  )
}
