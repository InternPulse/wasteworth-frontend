import Referral from "../../components/dashboards/disposer/Referral";
import SubHeader from "../../components/dashboards/SubHeader";
import MainCard from "../../components/my-offers/MainCard";
import WasteListing from "../../components/myWaste/WasteListing";


export default function MyWaste() {
  return (
    <div className="w-full">
            <SubHeader 
                title="My Profile"
                points={25}
                initial="C"
                user="Colleta Intern"
          />
            <div className="min-h-screen p-2 space-y-5 w-full pt-22 px-2 sm:px-5 pb-10">
                <MainCard />
                <Referral />
                <WasteListing />
            </div>
      </div>
  )
}

