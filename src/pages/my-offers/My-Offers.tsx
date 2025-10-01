import Referral from "../../components/dashboards/recycler/Referral";
import SubHeader from "../../components/dashboards/SubHeader";
import MainCard from "../../components/my-offers/MainCard";
import OfferList from "../../components/my-offers/OfferList";


export default function MyOffers() {
  return (
     <div>
          <SubHeader
            title="My Offers"
            points={25}
            initial="G"
            user="Gogo Benson"
          />
          <div className="min-h-screen p-2 space-y-5 w-full pt-22 px-2 sm:px-5 pb-10">
              <MainCard />
              <Referral />
              <OfferList />
          </div>
        </div>
  )
}
