import { Link } from "react-router-dom";
import ListingCard from "./ListingCard";

export default function RecentListing() {

  return (
    <section className="bg-white py-5 px-5 rounded-md">
      <div className="space-y-7">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Recent Listings</h2>
          <button className="border border-gray-300 rounded-md py-1 px-4">
            <Link to={"/user/marketplace"}>view all</Link>
          </button>
        </div>
        <div className="">
          <ListingCard />
        </div>
      </div>
    </section>
  );
}
