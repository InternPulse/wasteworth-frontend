import { assets } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Nav = ({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: (value: boolean) => void;
  sidebarOpen: boolean;
}) => {
  const page = useLocation();
  return (
    <nav className="bg-white max-w-[2000px] mx-auto h-15 lg:h-18 shadow-xl shadow-black/1 fixed top-0 left-0 right-0 flex items-center justify-between bg-white px-[1.5rem] sm:px-[2rem] md:px-[3rem]">
      <div className="flex h-13 items-center justify-center">
        {page.pathname === "/" ? (
          <h2 className="font-bold text-[#222222] text-lg">Home</h2>
        ) : page.pathname === "/about" ? (
          <h2 className="font-bold text-[#222222] text-lg">About Us</h2>
        ) : page.pathname === "/contact" ? (
          <h2 className="font-bold text-[#222222] text-lg">Contact Us</h2>
        ) : (
          <img
            src={assets.logo1}
            alt=""
            className="w-15 h-10 md:h-13 object-cover md:w-17"
          />
        )}
      </div>
      <ul className="hidden sm:flex items-center gap-6 md:gap-10 justify-around">
        {[
          ["Home", "/"],
          ["About Us", "about"],
          ["Contact", "contact"],
          ["FAQs", "faqs"],
        ].map((tab) => {
          return (
            <NavLink
              to={tab[1]}
              key={tab[1]}
              className={({ isActive }) => `
                ${isActive ? "text-green-700 cursor-pointer" : "cursor-pointer"}
              text-sm md:text-base text-gray-700
              `}
            >
              {tab[0]}
            </NavLink>
          );
        })}
      </ul>
      <NavLink
        to="login"
        className="hidden border border-green-700 hover:bg-green-600 hover:text-white hover:border-none transition duration-300 ease sm:flex justify-center items-center px-5 py-2 text-sm text-green-700 font-semibold rounded-lg cursor-pointer hover:shadow-md shadow-gray-400/50"
      >
        Get Started
      </NavLink>

      {sidebarOpen ? (
        ""
      ) : (
        <div className="sm:hidden p-1.5 rounded text-gray-700 shadow bg-white">
          <IoMdMenu onClick={() => setSidebarOpen(true)} size={20} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
