import { useLocation, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { sidebarData } from "../data/sidebarData";
import Desktop from "./sidebar/Desktop";
import Mobile from "./sidebar/Mobile";
import type { IconType } from "react-icons/lib";

// Define the shape of the data in your sidebarData
interface LinkType {
  to: string;
  label: string;
  icon: IconType;
}

export default function Sidebar() {
  const location = useLocation();
  const { userRole } = useParams<{ userRole: string }>();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const activeClass = "border border-[#006837] rounded-md text-[#006837]";
  const inactiveClass = "text-gray-600  hover:text-[#006837]";

  // Get the specific links for the current user role
  const currentLinks: LinkType[] =
    sidebarData[userRole?.slice(1, 100) as keyof typeof sidebarData] || [];

  return (
    <div className="lg:min-h-screen" style={{ zIndex: 999 }}>
      {/* The mobile menu toggle button, visible only on small screens. */}
      <div className="lg:hidden fixed top-3 right-3 z-50">
        <FaBars
          onClick={() => setShowMobileMenu(true)}
          className="w-8 h-8 cursor-pointer text-[#006837]"
        />
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
