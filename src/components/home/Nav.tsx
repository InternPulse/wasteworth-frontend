import { FaBars } from "react-icons/fa";
import useStore from "..//../../store";

const Nav = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const { sidebarOpen, setSidebarOpen } = useStore();
  return (
    <nav className=" flex items-center justify-between p-4 bg-gray-100 px-[1.5rem] sm:px-[2rem] md:px-[5rem]">
      <div className="flex items-center justify-center">Logo</div>
      <ul className="hidden sm:flex items-center gap-6 md:gap-10 justify-around font-semibold">
        {["Home", "About Us", "Contact", "FAQs"].map((tab) => {
          return (
            <li
              onClick={() => setActiveTab(tab.toLowerCase())}
              key={tab}
              className={`${
                activeTab === tab.toLowerCase()
                  ? "text-green-700 cursor-pointer"
                  : "cursor-pointer"
              }
              text-sm md:text-base
              `}
            >
              {tab}
            </li>
          );
        })}
      </ul>
      <button className="hidden bg-green-700 hover:bg-green-600 transition duration-300 ease sm:flex justify-center items-center px-4 py-2 text-white font-semibold rounded-md cursor-pointer hover:shadow-md shadow-gray-400/50">
        Get Started
      </button>
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
