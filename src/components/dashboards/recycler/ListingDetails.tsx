import { assets } from "@/assets/assets";
import type { TListing } from "@/types";
import { LuDot } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";


export default function ListingDetails({
  item
}: {
  item: TListing;
}) {


return (
    <section>
        <div>
            <div className="space-y-3">
                <img src={item.image_url || assets.collect3} alt="waste_img" className="w-full h-full rounded-t-md md:h-80"/>
                <h2 className="font-semibold text-[16px]">Waste Bottle</h2>
                <div className="flex items-center border-b pb-1">
                    <div className="flex items-center gap-1 text-sm">
                        <MdOutlineLocationOn className="text-gray-500" />
                        <p>
                            {item.pickup_location?.toString() ?? item.pickup_location}
                        
                        </p>
                    </div>
                     <LuDot className="text-gray-500 font-bold" />
                    <div className="flex items-center gap-1 text-sm">
                        <p className="text-xs text-gray-700">
                            {new Date(item.created_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                            })}
                        
                        </p>
                        <p className="text-gray-700 text-xs hidden">
                            {" "}
                            {item.quantity}pcs of{" "} 
                            <span className="font-semibold text-green-600">
                            {item.waste_type} 
                            </span>
                        </p>
                    </div>
                </div>
                <div className="space-y-5">
                    <h2 className="font-semibold text-[16px]">Details</h2>
                    {/* <div className="flex items-center justify-between">
                          <p>Posted by</p>
                          <p className="font-bold">John</p>
                    </div> */}
                    <div className="flex items-center justify-between">
                          <p>Listing price</p>
                          <p className="font-bold">{item.reward_estimate}</p>
                      </div>
                      {/* <div className="flex items-center justify-between">
                          <p>Contact Details</p>
                          <p className="font-bold">(John)</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p>Preferred Contact</p>
                          <p className="font-bold">John</p>
                      </div> */}
                      <div className="flex items-center justify-between">
                          <p>Availability</p>
                          <p className="font-bold">{item.status}</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p>Pickup Point</p>
                          <p className="font-bold"> {item.pickup_location?.toString() ?? item.pickup_location}</p>
                      </div>
                      
                </div>
            </div>
        </div>
    </section>
  )
}
