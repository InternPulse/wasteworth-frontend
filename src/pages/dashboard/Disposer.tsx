import MainCard from "../../components/dashboards/disposer/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";
import { useFetch } from "@/hooks/useFetch";

const BASE_URL: string = import.meta.env.VITE_BASE_URL1;
export default function Disposer() {
  const { data } = useFetch(`${BASE_URL}/api/v1/users/user-dashboard/`);
  console.log(data);

  return (
    <div className="w-full">
      <div className="space-y-5">
        <MainCard
          details={{ a: data?.sold_listings, b: data?.total_listings }}
        />
        <Referral />
        <RecentPost posts={data?.recent_posts} />
      </div>
    </div>
  );
}
