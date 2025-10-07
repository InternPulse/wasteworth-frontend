import Referral from "../../components/dashboards/disposer/Referral";
import MainCard from "../../components/my-offers/MainCard";
import WasteListing from "../../components/myWaste/WasteListing";
import { useFetch } from "@/hooks/useFetch";
import { Link } from "react-router-dom";
const BASE_URL: string = import.meta.env.VITE_BASE_URL2;

export default function MyWaste() {
  const { data, error, loading } = useFetch(`${BASE_URL}/api/v1/listings`);
  const a = data?.data.reduce(
    (count: any, item: any) => (item.status === "pending" ? count + 1 : count),
    0
  );
  const b = data?.data.reduce(
    (count: any, item: any) =>
      item.status === "completed" ? count + 1 : count,
    0
  );
  const c = data?.data.reduce(
    (count: any, item: any) =>
      item.status === "cancelled" ? count + 1 : count,
    0
  );

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
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-5">
      <MainCard details={{ a: a, b: b, c: c }} />
      <Referral />
      <WasteListing data={data?.data} />
    </div>
  );
}
