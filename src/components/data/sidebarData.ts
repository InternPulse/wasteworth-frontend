import { FaShoppingCart } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { GiWallet } from "react-icons/gi";

export const sidebarData = {
  recycler: [
    { to: "/user", label: "Dashboard", icon: MdDashboard },
    { to: "/user/marketplace", label: "Marketplace", icon: CiShop },
    { to: "/user/offers", label: "Offers", icon: FaShoppingCart },
    {
      to: "/user/wallet&rewards",
      label: "Wallet & Rewards",
      icon: GiWallet,
    },
  ],
  disposer: [
    { to: "/user", label: "Dashboard", icon: MdDashboard },
    { to: "/user/my-waste", label: "My Waste", icon: FaShoppingCart },
    {
      to: "/user/wallet&rewards",
      label: "Wallet & Rewards",
      icon: GiWallet,
    },
  ],
};
