import { Route, Routes, useParams } from "react-router-dom";
import Sidebar from "../components/dashboards/Sidebar";
import MyLisiting from "../pages/myListing/MyLisiting";
import WalletAndRewards from "../pages/wallet&reward/WalletAndRewards";
import MyProfile from "../pages/collectorProfile/CollectorProfile";
import Marketplace from "../pages/marketPlace/MarketPlace";
import Notification from "../pages/notifications/Notification";
import Recycler from "../pages/dashboard/Recycler";
import Disposer from "../pages/dashboard/Disposer";

export default function DashboardLayout() {
    const { userRole } = useParams();

  
    const renderDashboardContent = () => {
        if (userRole === 'recycler') {
            return (
                <Routes>
                    <Route index element={<Recycler />} />
                    <Route path='marketplace' element={<Marketplace />} />
                    <Route path="offers" element={<Notification />} />
                    <Route path='wallet&rewards' element={<MyProfile />} />
                    <Route path='community' element={<WalletAndRewards />} />
                </Routes>
            );
        } else if (userRole === 'disposer') {
            return (
                <Routes>
                    <Route index element={<Disposer />} />
                    <Route path="my-waste" element={<MyLisiting />} />
                    <Route path='wallet&rewards' element={<MyProfile />} />
                    <Route path='community' element={<WalletAndRewards />} />
                </Routes>
            );
        }
        return null;
    };

    return (
        <div className='flex w-screen min-h-screen bg-[#F5F5F5] overflow-hidden'>
            <Sidebar />
            <div className='grow h-full lg:h-full lg:pl-60'>
                <div className="">
                    {renderDashboardContent()}
                </div>
            </div>
        </div>
    );
}