import { FaShoppingCart } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { GiWallet } from "react-icons/gi";



export const sidebarData = {
  recycler: [
    { to: "/recycler", label: "Dashboard", icon: MdDashboard },
    { to: "/recycler/marketplace", label: "Marketplace", icon: CiShop },
    { to: "/recycler/offers", label: "Offers", icon: FaShoppingCart },
    { to: "/recycler/wallet&rewards", label: "Wallet & Rewards", icon: GiWallet },
  ],
  disposer: [
    { to: "/disposer", label: "Dashboard", icon: MdDashboard },
    { to: "/disposer/my-waste", label: "My Waste", icon: FaShoppingCart },
    { to: "/disposer/wallet&rewards", label: "Wallet & Rewards", icon: GiWallet },
  ]
};
