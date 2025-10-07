import { FaLocationDot, FaDiagramSuccessor } from "react-icons/fa6";
import Card from "../../utils/Card";

export default function MainCard({
  details,
}: {
  details: { a: number; b: number; c: number };
}) {
  return (
    <div className="grid grid-cols-1 gap-3 bg-white rounded-md p-5 md:grid-cols-2 lg:grid-cols-3">
      <Card
        bgColor="blue"
        title="Total Pending Offers"
        icon={<FaLocationDot size={15} className="text-[#5094F0]" />}
        kilo={details.a ?? 0}
      />
      <Card
        bgColor="green"
        title="Total Completed Offers"
        icon={<FaDiagramSuccessor size={15} className="text-[#00A256]" />}
        kilo={details.b ?? 0}
      />
      <Card
        bgColor={"red"}
        title="Total Cancelled Offers"
        icon={<FaDiagramSuccessor size={15} className="text-[#FB8C00]" />}
        kilo={details.c ?? 0}
      />
    </div>
  );
}
