import { Route, Routes, useParams } from "react-router-dom";
import Sidebar from "../components/dashboards/Sidebar";
import MyLisiting from "../pages/myListing/MyLisiting";
import WalletAndRewards from "../pages/wallet&reward/WalletAndRewards";
import Marketplace from "../pages/marketPlace/MarketPlace";
import Notification from "../pages/notifications/Notification";
import Recycler from "../pages/dashboard/Recycler";
import Disposer from "../pages/dashboard/Disposer";
import MainHeader from "@/components/dashboards/MainHeader";

export default function DashboardLayout() {
  const { userRole } = useParams();

  const renderDashboardContent = () => {
    if (userRole === "recycler") {
      return (
        <Routes>
          <Route index element={<Recycler />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="offers" element={<Notification />} />
          <Route path="wallet&rewards" element={<WalletAndRewards />} />
          <Route path="community" element={<WalletAndRewards />} />
          <Route
            path="notifications"
            element={<div className="p-5">Your Notification is Empty</div>}
          />
        </Routes>
      );
    } else if (userRole === "disposer") {
      return (
        <Routes>
          <Route index element={<Disposer />} />
          <Route path="my-waste" element={<MyLisiting />} />
          <Route path="wallet&rewards" element={<WalletAndRewards />} />
          <Route
            path="notifications"
            element={<div className="p-5">Your Notification is Empty</div>}
          />
        </Routes>
      );
    }
    return null;
  };

  return (
    <div className="grid lg:grid-cols-[240px_1fr] w-full min-h-screen bg-[#F5F5F5]">
      <Sidebar />
      <div className="grow w-full h-full lg:h-full">
        <MainHeader
          firstName="Coley"
          question="ready to recycle today?"
          points={25}
          initial="C"
          user="Colleta Intern"
          role={userRole || ""}
        />
        <div className="mt-17">{renderDashboardContent()}</div>
      </div>
    </div>
  );
}
