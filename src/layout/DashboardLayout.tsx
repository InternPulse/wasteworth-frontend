import Notification from "../pages/notifications/Notification";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/dashboards/Sidebar";
import MyLisiting from "../pages/myListing/MyLisiting";
import WalletAndRewards from "../pages/wallet&reward/WalletAndRewards";
import Recycler from "../pages/dashboard/Recycler";
import Disposer from "../pages/dashboard/Disposer";
import MainHeader from "@/components/dashboards/MainHeader";
import MarketplaceDashboard from "../pages/marketPlace/MarketPlace";
import useStore from "../../store/store";
import PaymentLayout from "./PaymentLayout";
import MyProfile from "@/pages/disposerProfile/MyProfile";

export default function DashboardLayout() {
  const { user } = useStore();

  setTimeout(() => {
    localStorage.setItem("loggedIn", "false");
  }, 36000000);

  const renderDashboardContent = () => {
    if (user.role === "recycler") {
      return (
        <Routes>
          <Route index element={<Recycler />} />
          <Route path="marketplace" element={<MarketplaceDashboard />} />
          <Route path="offers" element={<Notification />} />
          <Route path="wallet&rewards" element={<WalletAndRewards />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="payment" element={<PaymentLayout />} />
        </Routes>
      );
    } else if (user.role === "disposer") {
      return (
        <Routes>
          <Route index element={<Disposer />} />
          <Route path="my-waste" element={<MyLisiting />} />
          <Route path="wallet&rewards" element={<WalletAndRewards />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="payment" element={<PaymentLayout />} />
        </Routes>
      );
    }
    return null;
  };

  return (
    <div className="grid lg:grid-cols-[240px_1fr] w-full min-h-screen bg-[#F5F5F5]">
      <Sidebar />
      <div className="relative grow w-full h-full lg:h-full max-w-screen ">
        <MainHeader
          firstName={user?.name?.split(" ")[0] ?? ""}
          question="ready to recycle today?"
          points={25}
          initial={user?.name?.slice(0, 1) ?? ""}
          user={user?.name ?? ""}
        />
        <div className="mt-17">{renderDashboardContent()}</div>
      </div>
    </div>
  );
}
