import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainCard from "../../components/dashboards/disposer/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";
import { useFetch } from "@/hooks/useFetch";
import { Link } from "react-router-dom";

const BASE_URL: string = import.meta.env.VITE_BASE_URL1;

const Disposer = () => {
  const navigate = useNavigate();
  const { data, error } = useFetch(`${BASE_URL}/api/v1/users/user-dashboard/`);

  useEffect(() => {
    if (error?.status === 401 || error?.message?.includes("401")) {
      localStorage.removeItem("loggedIn");
      navigate("/login");
    }
  }, [error, navigate]);

  if (error && error.status !== 401) {
    <div className="text-red-400 text-5xl font-bold">
      Error: {JSON.stringify(error.status)} <br />
      <Link to={"/login"} className="text-green-400 text-lg font-normal">
        Back to login
      </Link>
    </div>;
  }

  if (!data)
    return (
      <div className="font-semibold text-lg w-full text-center">Loading...</div>
    );

  return (
    <div className="w-full">
      <div className="space-y-5">
        <MainCard
          details={{ a: data?.total_listings, b: data?.sold_listings }}
        />
        <Referral />
        <RecentPost posts={data?.recent_listings} />
      </div>
    </div>
  );
};
export default Disposer;
