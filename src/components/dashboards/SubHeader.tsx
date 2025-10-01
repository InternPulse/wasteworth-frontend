import { FaAngleDown, FaGift } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import type { SubHeaderProps } from "../../types";


export default function SubHeader({ title, points, initial, user }: SubHeaderProps) {

  return (
    <nav className="px-10 py-4 bg-white fixed w-full">
        <div className="flex items-center space-x-[45%]">
            <div>
                  <h2>{title}</h2>
            </div>
            <div className="lg:flex items-center gap-5 hidden">
                <div className="flex items-center space-x-3 bg-[#FFEFDA] rounded-xl px-3 py-1">
                    <span className="bg-white p-2 rounded-full"><FaGift size={15} className="text-[#FB8C00]"/></span>
                    <p className="text-black">{points} <span className="text-[#847E7E]">Points</span></p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-xl border border-green-600 rounded-full px-2.5 bg-[#FFEFDA] text-black pb-1">
                          {initial}     
                    </p>
                    <p className=" font-bold">{user}</p>
                    <Link to='/disposer/my-profile'>
                        <FaAngleDown />
                    </Link>
                </div>
                <Link to='notifications'>
                    <IoMdNotificationsOutline size={25}/>
                </Link>
            </div>
        </div>
    </nav>
  )
}
