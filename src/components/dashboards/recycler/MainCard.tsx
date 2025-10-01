import Card from "../../../utils/Card";
import type { CardProps } from "@/pages/dashboard/Recycler";

export default function MainCard({ details }: { details: CardProps[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 bg-white rounded-md p-5 md:grid-cols-2 lg:grid-cols-3">
      {details.map((card: CardProps) => (
        <Card
          bgColor={card.bgColor}
          title={card.title}
          icon={card.icon}
          kilo={card.kilo}
        />
      ))}
    </div>
  );
}
