import Referral from "../../components/dashboards/recycler/Referral";
import MainCard from "../../utils/MainCard";
// import OfferList from "../../components/my-offers/OfferList";
import { CiShop } from "react-icons/ci";
import { FaGift, FaShoppingCart } from "react-icons/fa";

export default function MyOffers() {
  const cardDetails = {
    a: {
      title: "Total Waste Posted",
      icon: <CiShop size={15} className="text-[#5094F0]" />,
      kilo: "",
    },
    b: {
      title: "Total Completed Listing",
      icon: <FaShoppingCart size={15} className="text-[#5094F0]" />,
      kilo: "",
    },
    c: {
      title: "Bagdes Earned",
      icon: <FaGift size={15} className="text-[#5094F0]" />,
      kilo: "",
    },
  };
  return (
    <div className="space-y-5">
      <MainCard loading details={cardDetails} />
      <Referral />
      {/* <OfferList /> */}
    </div>
  );
}
