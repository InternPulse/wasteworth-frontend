import type { ReactNode } from "react";

interface cardType {
  bgColor: string;
  title: string;
  kilo: ReactNode | number | string;
  icon: ReactNode;
}
export default function Card({ bgColor, title, kilo, icon }: cardType) {
  const bgClasses: { [key: string]: string } = {
    red: "bg-[#bb600030]",
    blue: "bg-[#0088ff30]",
    green: "bg-[#00bb0030]",
  };

  const selectedClass = bgClasses[bgColor];

  return (
    <div className={`p-5 rounded-md ${selectedClass}`}>
      <div className="space-y-3">
        <div className="flex items justify-between">
          <h5 className="text-[16px] font-semibold">{title}</h5>
          <p className="bg-white rounded-full p-2">{icon}</p>
        </div>
        <h2 className="text-[24px] font-bold">{kilo}</h2>
      </div>
    </div>
  );
}
