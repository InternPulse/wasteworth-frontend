import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
const SideBar = ({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: (value: boolean) => void;
  sidebarOpen: boolean;
}) => {
  return (
    <div
      onClick={() => setSidebarOpen(false)}
      className={`z-100 inset-0 bg-black/50 ${sidebarOpen ? "fixed" : "hidden"} `}
    >
      <div className="w-64 h-full relative pt-8 px-3 bg-white font-semibold">
        <MdClose
          size={25}
          className="absolute right-5 top-4 cursor-pointer "
        />
        <ul className="flex flex-col gap-3 mt-5">
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
                className={({ isActive }) =>
                  `
                ${
                  isActive
                    ? "text-white cursor-pointer bg-green-700"
                    : "cursor-pointer"
                }
              text-2xl rounded-lg p-2 text-center bg-gray-100/50 shadow
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
