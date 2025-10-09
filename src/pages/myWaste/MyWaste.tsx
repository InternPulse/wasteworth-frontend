import { FaDiagramSuccessor, FaLocationDot } from "react-icons/fa6";
import Referral from "../../components/dashboards/disposer/Referral";
import MainCard from "../../utils/MainCard";
import WasteListing from "../../components/myWaste/WasteListing";
import { useFetch } from "@/hooks/useFetch";
import { Link } from "react-router-dom";
const BASE_URL: string = import.meta.env.VITE_BASE_URL2;

export default function MyWaste() {
  const { data, error, loading } = useFetch(`${BASE_URL}/api/v1/listings`);

  const a = data?.data.reduce(
    (count: number, item: any) =>
      item.status === "pending" ? count + 1 : count,
    0
  );
  const b = data?.data.reduce(
    (count: number, item: any) =>
      item.status === "completed" ? count + 1 : count,
    0
  );
  const c = data?.data.reduce(
    (count: number, item: any) =>
      item.status === "cancelled" ? count + 1 : count,
    0
  );
  const cardDetails = {
    a: {
      title: "Total Pending Offers",
      icon: <FaLocationDot size={15} className="text-[#5094F0]" />,
      kilo: a,
    },
    b: {
      title: "Total Completed Offers",
      icon: <FaDiagramSuccessor size={15} className="text-[#5094F0]" />,
      kilo: b,
    },
    c: {
      title: "Total Cancelled Offers",
      icon: <FaDiagramSuccessor size={15} className="text-[#5094F0]" />,
      kilo: c,
    },
  };

  if (error) {
    return (
      <div className="text-red-400 text-5xl font-bold">
        Error: {JSON.stringify(error.status)} <br />
        <Link to={"/login"} className="text-green-400 text-lg font-normal">
          Back to login
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <MainCard loading={loading} details={cardDetails} />
      <Referral />
      <WasteListing loading={loading} data={data?.data} />
    </div>
  );
}
