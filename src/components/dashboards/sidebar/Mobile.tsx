import { Link } from "react-router-dom";
import { FaAngleDown, FaGift } from "react-icons/fa";
import type { MobileProps } from "../../../types";
import { assets } from "../../../assets/assets";
import useStore from "../../../../store/store";
import { useLogout } from "../../../mutationOptions/useLogout";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Mobile({
  links,
  isActive,
  setShowMobileMenu,
  activeClass,
  inactiveClass,
}: MobileProps) {
  const { logout, isPending } = useLogout();
  const { user } = useStore();

  return (
    <div className="lg:hidden fixed inset-0 z-999 min-h-screen bg-black/70 backdrop-blur-[1px]">
      <div className="bg-[#FFFFFF] min-h-screen fixed px-4 w-64 border-r border-gray-300 z-50">
        <div className="flex items-center justify-between h-15 px-4 py-2 border-b border-[#F6F5F5]">
          <img
            src={assets.greenLogo}
            alt=""
            className="size-13 object-cover md:w-17"
          />
          <div className="p-1.5 rounded text-gray-600 shadow shadow-[#eee] bg-white">
            <IoMdCloseCircleOutline
              onClick={() => setShowMobileMenu(false)}
              size={16}
            />
          </div>
        </div>

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
              0 <span className="text-[#847E7E]">Points</span>
            </p>
          </div>
          <div>
            <Link
              onClick={() => setShowMobileMenu(false)}
              to={"/user/profile"}
              className="flex items-center space-x-1"
            >
              <p className="text-xl border border-green-600 rounded-full px-2.5 bg-[#FFEFDA] text-black pb-1 font-semibold">
                {user?.name?.slice(0, 1)}
              </p>
              <p className="text-sm font-bold">{user?.name}</p>
              <FaAngleDown />
            </Link>
          </div>
          <div className="w-full mx-auto space-y-2">
            <div>
              <Link to={"/verify-email"}>
                <button className="border block text-white rounded-full py-2 px-2 w-full main-bg text-xs font-semibold cursor-pointer">
                  Verify email
                </button>{" "}
              </Link>
            </div>
            <button
              onClick={() => logout()}
              disabled={isPending}
              className="text-[#FF0000] font-medium px-4 hover:cursor-pointer"
            >
              {!isPending ? "Logout" : "Logging out..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
