import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuDot } from "react-icons/lu";

interface TListing {
    id: number;
    imageSrc: string;
    title: string;
    quantity_kg: number;
    address: string;
    timePosted: string;
}

export default function ListingCard() {

  const Listing: TListing[] = [
  {
    "id": 1,
    "imageSrc": assets.collect3,
    "title": "PET Sacks - 5Kg",
    "quantity_kg": 5,
    "address": "45 Ajose St, Lekki",
    "timePosted": "2 hours ago"
  },
  {
    "id": 2,
    "imageSrc": assets.collect3,
    "title": "Mixed Cardboard - 200Kg",
    "quantity_kg": 200,
    "address": "12 Ikoyi Link Rd",
    "timePosted": "5 hours ago"
  },
  {
    "id": 3,
    "imageSrc": assets.collect3,
    "title": "HDPE Plastic Drums - 50Kg",
    "quantity_kg": 50,
    "address": "Ikeja Ind. Estate",
    "timePosted": "1 day ago"
  }
  ]
  
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Listing.map((item: TListing) => (
            <div key={item.id} className="border border-gray-200 rounded-md overflow-hidden">
              <img src={item.imageSrc} alt="waste" className="w-full h-50 rounded-t-md"/>
              <div className="p-3 space-y-2">
                  <h2 className="font-semibold text-[16px]">{item.title}</h2>
                  <div className="flex items-center gap-1 text-sm">
                      <MdOutlineLocationOn className="text-gray-500"/>
                      <p>{item.address}</p>
                      <LuDot className="text-gray-500"/>
                      <p>{item.timePosted}</p>
                  </div>
                    <Link
                        to='#'
                        className='flex items-center justify-center bg-[#006837] rounded-md py-1 text-white'
                    >
                        Check Details
                  </Link>
              </div>
            </div>
        ))}
    </div>
  )
}
