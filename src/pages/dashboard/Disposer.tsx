import MainCard from "../../components/dashboards/disposer/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";
import { useFetch } from "@/hooks/useFetch";

export default function Disposer() {
  const { data } = useFetch(
    "https://wasteworth-backend-django.onrender.com/api/v1/users/user-dashboard/"
  );
  //console.log(data);

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
