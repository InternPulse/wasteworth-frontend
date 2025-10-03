import { Link } from "react-router-dom";
import type { DesktopProps } from "../../../types";
import { assets } from "../../../assets/assets";
import { useLogout } from "../../../mutationOptions/UseLogout";

export default function Desktop({
  links,
  isActive,
  activeClass,
  inactiveClass,
}: DesktopProps) {
  const { logout, isPending } = useLogout();

  return (
    <div className="hidden lg:flex bg-[#FFFFFF] min-h-screen fixed w-60 flex-col justify-between pb-5">
      <ul className="flex flex-col mt-5 text-[16px] px-4 space-y-3 font-semibold">
        <img
          src={assets.greenLogo}
          alt="waste_worth"
          width={100}
          className="px-4"
        />
        {links.map((link, index) => {
          // Get the icon component from the link data
          const Icon = link.icon;
          return (
            <Link
              key={index}
              to={link.to}
              className={`flex items-center py-3 px-2 space-x-4 rounded-md ${
                isActive(link.to) ? activeClass : inactiveClass
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </ul>
      <div className="w-8/10 mx-auto space-y-5">
        <div>
          <Link to={"/verify-email"}>
            <button className="border block text-white rounded-full py-2 px-2 w-full main-bg text-sm font-semibold cursor-pointer">
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
  );
}
