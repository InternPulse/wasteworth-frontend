import { Route, Routes } from "react-router-dom";
import Notification from "../pages/notifications/Notification";
import Sidebar from "../components/dashboards/Sidebar";
import WalletAndRewards from "../pages/wallet&reward/WalletAndRewards";
import Recycler from "../pages/dashboard/Recycler";
import Disposer from "../pages/dashboard/Disposer";
import MainHeader from "@/components/dashboards/MainHeader";
import MarketplaceDashboard from "../pages/marketPlace/MarketPlace";
import useStore from "../../store/store";
import PaymentLayout from "./PaymentLayout";
import MyWaste from "@/pages/myWaste/MyWaste";
import MyProfile from "@/pages/disposerProfile/MyProfile";
import MyOffers from "@/pages/my-offers/My-Offers";
import { useEffect } from "react";

export default function DashboardLayout() {
  const { user, notificationOpen, setIsLoggedIn } = useStore();

  // Automatically log out after 20 hours (72,000,000 ms)
  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      setIsLoggedIn(false);
      console.log("Session expired — user logged out automatically.");
    }, 72_000_000);

    return () => clearTimeout(logoutTimer);
  }, [setIsLoggedIn]);

  const renderDashboardContent = () => {
    if (user?.role === "recycler") {
      return (
        <Routes>
          <Route index element={<Recycler />} />
          <Route path="marketplace" element={<MarketplaceDashboard />} />
          <Route path="offers" element={<MyOffers />} />
          <Route path="wallet&rewards" element={<WalletAndRewards />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="payment" element={<PaymentLayout />} />
        </Routes>
      );
    } else if (user?.role === "disposer") {
      return (
        <Routes>
          <Route index element={<Disposer />} />
          <Route path="my-waste" element={<MyWaste />} />
          <Route path="wallet&rewards" element={<WalletAndRewards />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="payment" element={<PaymentLayout />} />
        </Routes>
      );
    }

    return null;
  };

  return (
    <div className="grid lg:grid-cols-[240px_1fr] w-full min-h-screen bg-[#F5F5F5]">
      <Sidebar />
      <div className="relative grow w-full h-full max-w-screen">
        <MainHeader
          firstName={user?.name?.split(" ")[0] ?? ""}
          question="ready to recycle today?"
          points={0}
          initial={user?.name?.slice(0, 1) ?? ""}
          user={user?.name ?? ""}
        />
        <div className="min-h-screen w-19/20 mx-auto sm:w-full pt-4 p-2 sm:p-4 pb-10">
          {renderDashboardContent()}
          {notificationOpen && <Notification />}
        </div>
      </div>
    </div>
  );
}
