import { MdClose } from "react-icons/md";
import useStore from "../../../store";
const SideBar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const { sidebarOpen, setSidebarOpen } = useStore();
  return (
    <div className={`inset-0 bg-black/50 ${sidebarOpen ? "fixed" : "hidden"} `}>
      <div className="w-64 h-full relative pt-8 px-3 bg-white font-semibold">
        <MdClose
          onClick={() => setSidebarOpen(false)}
          size={25}
          className="absolute right-5 top-4 cursor-pointer "
        />
        <ul className="flex flex-col gap-3 mt-5">
          {["Home", "About Us", "Contact", "FAQs"].map((tab) => {
            return (
              <li
                onClick={() => {
                  setActiveTab(tab.toLowerCase());
                  setSidebarOpen(false);
                }}
                key={tab}
                className={`${
                  activeTab === tab.toLowerCase()
                    ? "text-green-700 cursor-pointer"
                    : "cursor-pointer"
                }
              text-2xl
              `}
              >
                {tab}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
