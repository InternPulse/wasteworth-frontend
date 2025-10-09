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
  const { toggleNotificationOpen } = useStore();

  return (
    <nav className="px-4 sm:px-10 py-2 bg-white sticky top-0 shadow shadow-[#0000000e] min-h-15 w-full z-2 flex items-center">
      <div className="w-full self-center flex items-center justify-between">
        {page.pathname === "/user" ? (
          <div>
            <h3 className="font-bold text-sm sm:text-base">
              Hi {firstName} 👋
            </h3>
            <p className="text-xs sm:text-base hidden md:block">{question}</p>
          </div>
        ) : page.pathname === "/user/my-waste" ? (
          <h3 className="font-bold">My Waste</h3>
        ) : page.pathname === "/user/marketplace" ? (
          <h3 className="font-bold">Market Place</h3>
        ) : page.pathname === "/user/offers" ? (
          <h3 className="font-bold text-base">Offers</h3>
        ) : page.pathname === "/user/wallet&rewards" ? (
          <h3 className="font-bold">Wallet & Rewards</h3>
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
            }}
            className={` cursor-pointer relative`}
          >
            <IoMdNotificationsOutline className="text-gray-600 size-7" />
            <p className="absolute bg-red-700 text-white top-0 right-0 text-[0.53rem] h-3 w-3 flex items-center justify-center font-semi-bold rounded-full">
              0
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
}
