import { FaGift } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import type { MainHeaderProps } from "../../types";

export default function MainHeader({
  firstName,
  question,
  points,
  initial,
  user,
  role,
}: MainHeaderProps) {
  const activeClass = "text-green-700";
  const inActiveClass = "text-gray-500";

  return (
    <nav className="px-10 py-2 bg-white fixed min-h-15 w-full">
      <div className="self-center flex items-center space-x-[40%]">
        <div>
          <h3 className="font-bold text-sm sm:text-base">
            Welcome back {firstName} 👋
          </h3>
          <p className="text-xs sm:text-base">{question}</p>
        </div>
        <div className="lg:flex items-center gap-5 hidden">
          <div className="flex items-center space-x-3 bg-[#FFEFDA] rounded-xl px-3 py-1">
            <span className="bg-white p-2 rounded-full">
              <FaGift size={15} className="text-[#FB8C00]" />
            </span>
            <p className="text-black">
              {points} <span className="text-[#847E7E]">Points</span>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <p className="text-xl border border-green-600 rounded-full px-2.5 bg-[#FFEFDA] text-black pb-1">
              {initial}
            </p>
            <p className=" font-bold">{user}</p>
          </div>
          <Link
            to={`/${role}/notifications`}
            className={`active ? ${activeClass} : ${inActiveClass}`}
          >
            <IoMdNotificationsOutline size={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
