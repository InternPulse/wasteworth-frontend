import Referral from "../../components/dashboards/recycler/Referral";
import MainCard from "../../components/my-offers/MainCard";
import OfferList from "../../components/my-offers/OfferList";

export default function MyOffers() {
  return (
    <div className="space-y-5">
      <MainCard />
      <Referral />
      <OfferList />
    </div>
  );
}
