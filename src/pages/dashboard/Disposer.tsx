import MainCard from "../../components/dashboards/disposer/MainCard";
import RecentPost from "../../components/dashboards/disposer/RecentPost";
import Referral from "../../components/dashboards/disposer/Referral";
import { useFetch } from "@/hooks/useFetch";

const BASE_URL: string = import.meta.env.VITE_BASE_URL1;
export default function Disposer() {
  const [_, setData] = useState([]);
  const fetch = async () => {
    console.log("fetching...");
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/users/user-dashboard/`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("tokens") ?? "").access
          }`,
        },
      });
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
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
