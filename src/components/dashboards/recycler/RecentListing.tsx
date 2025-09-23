import { FaHouse } from "react-icons/fa6";
import Button from "../../../utils/Button";


export default function RecentListing() {
  return (
    <section className="bg-white p-5 rounded-md">
        <div className="space-y-5 pb-20">
            <div className="flex items-center justify-between">
                  <h2 className="font-semibold">Recent Listings</h2>
                  <button className="border border-gray-300 rounded-md py-1 px-4">view all</button>
            </div>
            <div className="p-5 border border-gray-200 rounded-md w-1/4">
                <FaHouse size={210}/>
                <h2>PET Sacks - 5Kg</h2>
                <div className="flex items-center gap-2">
                    <p>Address</p>
                    <p>Time</p>
                </div>
                <Button text="Check Details" />
            </div>
        </div>
    </section>
  )
}
