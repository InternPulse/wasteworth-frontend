import MainCard from "../../components/dashboards/disposer/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";
import { useFetch } from "@/hooks/useFetch";

const BASE_URL: string = import.meta.env.VITE_BASE_URL1;
export default function Disposer() {
  const { data } = useFetch(BASE_URL);
  console.log(data);

  return (
    <div className="w-full">
      <div className="space-y-5">
        <MainCard />
        <Referral />
        <RecentPost />
      </div>
    </div>
  );
}
