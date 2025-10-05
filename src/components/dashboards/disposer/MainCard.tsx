import { FaGift, FaShoppingCart } from "react-icons/fa";
import Card from "../../../utils/Card";
import { CiShop } from "react-icons/ci";

export default function MainCard({
  details,
}: {
  details: { a?: number; b?: number; c?: number };
}) {
  return (
    <div className="grid grid-cols-1 gap-3 bg-white rounded-md p-5 md:grid-cols-2 lg:grid-cols-3">
      <Card
        bgColor="blue"
        title="Total Waste Posted"
        icon={<CiShop size={15} className="text-[#5094F0] fill-[#5094F0]" />}
        kilo={details.a ?? 0}
      />
      <Card
        bgColor="green"
        title="Total Completed Listing"
        icon={<FaShoppingCart size={15} className="text-[#00A256]" />}
        kilo={details.b ?? 0}
      />
      <Card
        bgColor={"red"}
        title="Badges Earned"
        icon={<FaGift size={15} className="text-[#FB8C00]" />}
        kilo={0}
      />
    </div>
  );
}
