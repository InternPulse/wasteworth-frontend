import Referral from "../../components/dashboards/disposer/Referral";
import MainCard from "../../components/my-offers/MainCard";
import WasteListing from "../../components/myWaste/WasteListing";

export default function MyWaste() {
  return (
    <div className="space-y-5">
      <MainCard details={{ a: 0, b: 0, c: 0 }} />
      <Referral />
      <WasteListing />
    </div>
  );
}
