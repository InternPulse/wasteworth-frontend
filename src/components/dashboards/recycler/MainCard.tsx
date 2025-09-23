import { FaLocationDot } from "react-icons/fa6";
import { FaGift, FaShoppingCart } from "react-icons/fa";
import Card from "./Card";


export default function MainCard() {
  return (
        <div className="grid grid-cols-3 gap-3 bg-white rounded-md p-5">
                <Card
                bgColor="blue"
                title="Active Listings Near You"
                icon={<FaLocationDot size={15} className="text-{#5094F0}"/>}
                kilo={200}
                />
                <Card
                bgColor="blue"
                title="Total Waste Collected"
                icon={<FaShoppingCart size={15} className="text-[#00A256]"/>}
                kilo={5000}
                />
                <Card
                bgColor={"red"}
                title="Total Points Earned"
                icon={<FaGift size={15} className="text-[#FB8C00]"/>}
                kilo={25}
                />
        </div>
  )
}
