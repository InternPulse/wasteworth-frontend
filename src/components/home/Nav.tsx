import { FaBars } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Nav = ({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: (value: boolean) => void;
  sidebarOpen: boolean;
}) => {
  return (
    <nav className=" h-15 fixed top-0 left-0 right-0 flex items-center justify-between bg-gray-100 px-[1.5rem] sm:px-[2rem] md:px-[5rem]">
      <div className="flex items-center justify-center h-14">
        <img src={assets.logo} alt="" className="w-15 scale-115" />
      </div>
      <ul className="hidden sm:flex items-center gap-6 md:gap-10 justify-around font-semibold">
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
              text-sm md:text-base
              `}
            >
              {tab[0]}
            </NavLink>
          );
        })}
      </ul>
      <NavLink to='start' className="hidden bg-green-700 hover:bg-green-600 transition duration-300 ease sm:flex justify-center items-center px-4 py-2 text-white font-semibold rounded-md cursor-pointer hover:shadow-md shadow-gray-400/50">
        Get Started
      </NavLink>
      <div className="sm:hidden">
        {sidebarOpen ? (
          ""
        ) : (
          <FaBars onClick={() => setSidebarOpen(true)} size={20} />
        )}
      </div>
    </nav>
  );
};

export default Nav;
