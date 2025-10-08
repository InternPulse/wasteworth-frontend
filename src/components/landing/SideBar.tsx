import { assets } from "@/assets/assets";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";

const SideBar = ({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: (value: boolean) => void;
  sidebarOpen: boolean;
}) => {
  return (
    <div
      className={`z-100 inset-0 bg-black/50 ${
        sidebarOpen ? "fixed" : "hidden"
      }`}
    >
      <div className="w-64 h-full relative bg-white font-semibold flex flex-col">
        <div className="flex items-center justify-between h-15 px-4 py-2 border-b border-[#F6F5F5]">
          <Link to="/" className="flex h-13 items-center justify-center">
            <img
              src={assets.logo1}
              alt=""
              className="w-15 h-10 md:h-13 object-cover md:w-17"
            />
          </Link>
          <div className="p-1.5 rounded text-gray-600 shadow shadow-[#eee] bg-white">
            <IoMdCloseCircleOutline
              onClick={() => setSidebarOpen(false)}
              size={16}
            />
          </div>
        </div>
        <ul className="flex flex-col gap-2 mt-5 w-9/10 mx-auto">
          {[
            ["Home", "/"],
            ["About Us", "about"],
            ["Contact", "contact"],
            ["FAQs", "faqs"],
          ].map((tab) => {
            return (
              <NavLink
                to={tab[1]}
                key={tab[0]}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `
                ${
                  isActive
                    ? "text-[#006837] cursor-pointer border border-[#3B9561] bg-[#f5f5f5] rounded-[6px]"
                    : "cursor-pointer"
                }
              text-[16px] text-[#847C7C] font-normal py-2 h-10 flex items-center px-4
              `
                }
              >
                {tab[0]}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
