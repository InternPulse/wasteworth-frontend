import { useEffect } from "react";
import MainCard from "../../components/dashboards/disposer/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";
import axios from "axios";
import useStore from "../../../store/store";

export default function Disposer() {
  const { tokens } = useStore();
  useEffect(() => {
    async () => {
      await axios.get(
        "https://wasteworth-backend-django.onrender.com/api/v1/users/user-dashboard/",
        {
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
          },
        }
      );
    };
  }, []);
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
