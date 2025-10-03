import { FaAngleDown, FaGift } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import type { MainHeaderProps } from "../../types";
import useStore from "../../../store/store";

export default function MainHeader({
  firstName,
  question,
  points,
  initial,
  user,
}: MainHeaderProps) {
  const page = useLocation();
  const { toggleNotificationOpen, notificationOpen } = useStore();

  return (
    <nav className="px-4 sm:px-10 py-2 bg-white sticky top-0 shadow shadow-[#0000000e] min-h-15 w-full z-2 flex items-center">
      <div className="self-center flex items-center justify-between">
        {page.pathname === "/user" ? (
          <div>
            <h3 className="font-bold text-sm sm:text-base">
              Welcome back {firstName} 👋
            </h3>
            <p className="text-xs sm:text-base hidden md:block">{question}</p>
          </div>
        ) : page.pathname === "/user/my-waste" ? (
          <h3 className="font-bold text-sm sm:text-base">My Waste</h3>
        ) : page.pathname === "/user/wallet&rewards" ? (
          <h3 className="font-bold text-sm sm:text-base">Wallet & Rewards</h3>
        ) : (
          ""
        )}
        <div className="lg:flex items-center gap-5 hidden">
          <div className="flex items-center space-x-3 bg-[#FFEFDA] rounded-xl px-3 py-1">
            <span className="bg-white p-2 rounded-full">
              <FaGift size={15} className="text-[#FB8C00]" />
            </span>
            <p className="text-black">
              {points} <span className="text-[#847E7E]">Points</span>
            </p>
          </div>
          <div>
            <Link to={"/user/profile"} className="flex items-center space-x-2">
              <p className="text-xl border border-green-600 rounded-full px-2.5 bg-[#FFEFDA] text-black pb-1">
                {initial}
              </p>
              <p className="flex items-center gap-1">
                {user}{" "}
                <span className="text-gray-600">
                  <FaAngleDown />
                </span>
              </p>
            </Link>
          </div>
          <button
            onClick={() => {
              toggleNotificationOpen();
              console.log(notificationOpen);
            }}
            className={` cursor-pointer`}
          >
            <IoMdNotificationsOutline size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
}
