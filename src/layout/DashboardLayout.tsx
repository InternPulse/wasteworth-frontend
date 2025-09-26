import { useState } from "react";
import { assets } from "../assets/assets";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Dashboard from "../pages/Dashboard/Dashboard";
import MarketPlace from "../pages/marketPlace/MarketPlace";
import Notification from "../pages/notifications/Notification";
import MyProfile from "../pages/collectorProfile/CollectorProfile";
import MyLisiting from "../pages/myListing/MyLisiting";
import WalletAndRewards from "../pages/wallet&reward/WalletAndRewards";
import CollectorProfile from "../pages/collectorProfile/CollectorProfile";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean | null>(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="h-screen overflow-hidden">
      {/* NavBar */}
      <nav className="h-15 fixed top-0 left-0 right-0 flex items-center justify-between bg-gray-100 px-[1.5rem] sm:px-[2rem] md:px-[5rem]">
        {/* Logo */}
        <div className="flex items-center justify-center h-14">
          <img src={assets.logo} alt="" className="w-15 scale-115" />
        </div>

        <button className="hidden bg-green-700 hover:bg-green-600 transition duration-300 ease md:flex justify-center items-center px-4 py-2 text-white font-semibold rounded-md cursor-pointer hover:shadow-md shadow-gray-400/50">
          Logout
        </button>
        <div className="md:hidden">
          {sidebarOpen ? (
            ""
          ) : (
            <FaBars onClick={() => setSidebarOpen(true)} size={20} />
          )}
        </div>
      </nav>
      <div className="relative grid sm:grid-cols-[256px_1fr] mt-15 h-[calc(100vh-60px)] overflow-hidden ">
        <aside
          className={`w-64 ${
            sidebarOpen ? "fixed" : "hidden md:block"
          }  top-15 left-0 border-r-2 border-gray-200 h-full pt-8 sm:pt-2 px-3 bg-white font-semibold`}
        >
          <MdClose
            size={25}
            onClick={() => setSidebarOpen(false)}
            className="absolute md:hidden right-5 top-4 cursor-pointer "
          />
          <ul className="flex flex-col gap-3 mt-5">
            {[
              "Dashboard",
              "Marketplace",
              "Notification",
              "Collector Profile",
              "Disposer Profile",
              "My Listing",
              "Wallet",
            ].map((tab) => {
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(`${tab.toLowerCase()}`);
                    setSidebarOpen(false);
                  }}
                  className={`
                ${
                  activeTab === tab?.toLowerCase()
                    ? "text-white cursor-pointer bg-green-700"
                    : "cursor-pointer"
                }
              text-2xl rounded-lg p-2 text-center bg-gray-100/50 shadow
              `}
                >
                  {tab}
                </button>
              );
            })}
          </ul>
        </aside>
        {/* Content */}
        <div className="w-full h-full overflow-y-scroll ">
          {activeTab === "dashboard" ? (
            <Dashboard />
          ) : activeTab === "marketplace" ? (
            <MarketPlace />
          ) : activeTab === "notification" ? (
            <Notification />
          ) : activeTab === "collector profile" ? (
            <CollectorProfile />
          ) : activeTab === "my listing" ? (
            <MyLisiting />
          ) : activeTab === "wallet" ? (
            <WalletAndRewards />
          ) : activeTab === "disposer profile" ? (
            <MyProfile />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
