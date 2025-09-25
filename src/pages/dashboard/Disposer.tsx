import MainCard from "../../components/dashboards/disposer/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";
import MainHeader from "../../components/dashboards/MainHeader";

export default function Disposer () {
  return (
    <div className="w-full">
        <MainHeader 
            firstName="Coley"
            question="ready to dispose today?"
            points={25}
            initial="C"
            user="Colleta Intern"
      />
        <div className="min-h-screen p-2 space-y-5 w-full pt-22 px-2 sm:px-5 pb-10">
            <MainCard />
            <Referral />
            <RecentPost />                 
        </div>
    </div>
  )
}

