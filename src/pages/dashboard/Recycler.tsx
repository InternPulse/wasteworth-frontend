import React from "react";
import MainCard from "../../components/dashboards/recycler/MainCard";
import Referral from "../../components/dashboards/recycler/Referral";
import RecentListing from "../../components/dashboards/recycler/RecentListing";


export default function Recycler() {
  return (
    <React.Fragment>
        <div className="bg-[#F5F5F5] min-h-screen p-6 space-y-5">
            <MainCard />
            <Referral />
            <RecentListing />
        </div>
    </React.Fragment>
  )
}
