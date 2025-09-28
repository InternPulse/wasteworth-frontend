import { Route, Routes, useParams } from "react-router-dom";
import Sidebar from "../components/dashboards/Sidebar";
import WalletAndRewards from "../pages/wallet&reward/WalletAndRewards";
import Marketplace from "../pages/marketPlace/MarketPlace";
import Recycler from "../pages/dashboard/Recycler";
import Disposer from "../pages/dashboard/Disposer";
import CollectorProfile from "../pages/collectorProfile/CollectorProfile";
import MyOffers from "../pages/my-offers/My-Offers";
import MyWaste from "../pages/myWaste/MyWaste";
import DisposerProfile from "../pages/disposerProfile/DisposerProfile";

export default function DashboardLayout() {
    const { userRole } = useParams();

  
    const renderDashboardContent = () => {
        if (userRole === 'recycler') {
            return (
                <Routes>
                    <Route index element={<Recycler />} />
                    <Route path='marketplace' element={<Marketplace />} />
                    <Route path="offers" element={<MyOffers />} />
                    <Route path='wallet&rewards' element={<WalletAndRewards />} />
                    <Route path='notifications' element={<div className="p-5">Your Notification is Empty</div>} />
                    <Route path='my-profile' element={<CollectorProfile />} />
                </Routes>
            );
        } else if (userRole === 'disposer') {
            return (
                <Routes>
                    <Route index element={<Disposer />} />
                    <Route path="my-waste" element={<MyWaste />} />
                    <Route path='wallet&rewards' element={<div className="p-5">Your wallet is Empty</div>} />
                     <Route path='my-profile' element={<DisposerProfile />} />
                    <Route path='notifications' element={<div className="p-5">Your Notification is Empty</div>} />
                </Routes>
            );
        }
        return null;
    };

    return (
        <div className='flex w-full min-h-screen bg-[#F5F5F5]'>
            <Sidebar />
            <div className='grow h-full lg:h-full lg:pl-60'>
                <div className="">
                    {renderDashboardContent()}
                </div>
            </div>
        </div>
    );
}