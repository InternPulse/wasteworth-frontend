import { useLocation } from "react-router-dom";
import { useState } from "react";
import { sidebarData } from "../data/sidebarData";
import Desktop from "./sidebar/Desktop";
import Mobile from "./sidebar/Mobile";
import type { IconType } from "react-icons/lib";
import useStore from "../../../store/store";
import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";

// Define the shape of the data in your sidebarData
interface LinkType {
  to: string;
  label: string;
  icon: IconType;
}

export default function Sidebar() {
  const location = useLocation();
  const { user, notifications, toggleNotificationOpen } = useStore();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const activeClass = "border border-[#006837] rounded-md text-[#006837]";
  const inactiveClass = "text-gray-600  hover:text-[#006837]";

  // Get the specific links for the current user role
  const currentLinks: LinkType[] =
    sidebarData[user?.role as keyof typeof sidebarData] || [];

  return (
    <div className="lg:min-h-screen" style={{ zIndex: 999 }}>
      {/* The mobile menu toggle button, visible only on small screens. */}
      <div className="lg:hidden fixed top-3 right-3 z-50 flex items-center gap-4">
        <button
          onClick={() => {
            toggleNotificationOpen();
          }}
          className={` cursor-pointer relative`}
        >
          <IoMdNotificationsOutline className="text-gray-600 size-6" />
          <p className="absolute bg-red-700 text-white top-0 right-0 text-[0.53rem] h-3 w-3 flex items-center justify-center font-semi-bold rounded-full">
            {notifications?.notifications.filter((n) => !n.is_read).length ?? 0}
          </p>
        </button>
        <div className="p-1.5 rounded text-gray-600 shadow shadow-[#eee] bg-white">
          <IoMdMenu onClick={() => setShowMobileMenu(true)} size={16} />
        </div>
      </div>

      {/* The desktop sidebar, only visible on large screens. */}
      <div className="hidden lg:block">
        <Desktop
          links={currentLinks}
          isActive={isActive}
          activeClass={activeClass}
          inactiveClass={inactiveClass}
        />
      </div>

      {/* The mobile sidebar, conditionally rendered based on state. */}
      {showMobileMenu && (
        <Mobile
          links={currentLinks}
          isActive={isActive}
          setShowMobileMenu={setShowMobileMenu}
          activeClass={activeClass}
          inactiveClass={inactiveClass}
        />
      )}
    </div>
  );
}
