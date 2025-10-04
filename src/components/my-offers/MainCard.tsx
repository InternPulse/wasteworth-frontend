import { FaLocationDot, FaDiagramSuccessor } from "react-icons/fa6";
import Card from "../../utils/Card";

export default function MainCard() {
  return (
    <div className="grid grid-cols-1 gap-3 bg-white rounded-md p-5 md:grid-cols-2 lg:grid-cols-3">
      <Card
        bgColor="blue"
        title="Total Acceoted Offers"
        icon={<FaLocationDot size={15} className="text-[#5094F0]" />}
        kilo={0}
      />
      <Card
        bgColor="blue"
        title="Total Completed Offers"
        icon={<FaDiagramSuccessor size={15} className="text-[#00A256]" />}
        kilo={0}
      />
      <Card
        bgColor={"red"}
        title="Total Cancelled Offers"
        icon={<FaDiagramSuccessor size={15} className="text-[#FB8C00]" />}
        kilo={0}
      />
    </div>
  );
}
