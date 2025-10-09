import Card from "./Card";
import { ClipLoader } from "react-spinners";
import type { ReactNode } from "react";

export default function MainCard({
  details,
  loading,
}: {
  details: {
    a: { title: string; icon: ReactNode; kilo: any };
    b: { title: string; icon: ReactNode; kilo: any };
    c: { title: string; icon: ReactNode; kilo: any };
  };
  loading: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 bg-white rounded-md p-5 md:grid-cols-2 lg:grid-cols-3">
      <Card
        bgColor="blue"
        title={details.a.title}
        icon={details.a.icon}
        kilo={loading ? <ClipLoader size={20} color="blue" /> : details.a.kilo}
      />
      <Card
        bgColor="green"
        title={details.b.title}
        icon={details.b.icon}
        kilo={loading ? <ClipLoader size={20} color="green" /> : details.b.kilo}
      />
      <Card
        bgColor={"red"}
        title={details.c.title}
        icon={details.c.icon}
        kilo={loading ? <ClipLoader size={20} color="red" /> : details.c.kilo}
      />
    </div>
  );
}
