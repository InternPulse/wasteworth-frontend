import { Link } from "react-router-dom";
import { FaAngleDown, FaGift, FaTimes } from "react-icons/fa";
import type { MobileProps } from "../../../types";
import { assets } from "../../../assets/assets";

export default function Mobile({
  links,
  isActive,
  setShowMobileMenu,
  activeClass,
  inactiveClass,
}: MobileProps) {
  const { user } = useStore();
  return (
    <div className="fixed inset-0 z-999 min-h-screen backdrop-blur-md ">
      <div className="bg-[#FFFFFF] min-h-screen fixed px-4 w-64 border-r border-gray-300 z-50">
        {/* Close button */}
        <div className="flex justify-end px-4 pt-1">
          <FaTimes
            className="w-8 h-8 cursor-pointer text-[#006837]"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        <img
          src={assets.greenLogo}
          alt="waste_worth"
          width={100}
          className="px-4"
        />

        <ul className="flex flex-col mt-5 text-[14px] px-4 space-y-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                to={link.to}
                className={`flex items-center py-3 px-2 space-x-4 rounded-md ${
                  isActive(link.to) ? activeClass : inactiveClass
                }`}
                onClick={() => setShowMobileMenu(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </ul>

        <div className=" gap-5 lg:hidden mt-10 space-y-3 px-6">
          <div className="flex items-center space-x-3 bg-[#FFEFDA] rounded-md px-3 py-1">
            <span className="bg-white p-2 rounded-full">
              <FaGift size={15} className="text-[#FB8C00]" />
            </span>
            <p className="text-black">
              25 <span className="text-[#847E7E]">Points</span>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-xl border border-green-600 rounded-full px-2.5 bg-[#FFEFDA] text-black pb-1">
              G
            </p>
            <p className=" font-bold">User name</p>
            <Link to="my-profile">
              <FaAngleDown />
            </Link>
          </div>
        </div>
        <button className="text-red-600 font-semibold px-8 hover:cursor-pointer mt-5">
          Logout
        </button>
      </div>
    </div>
  );
}
