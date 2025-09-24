import { FaEye } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";


export const sidebarData = {
  recycler: [
    { to: "/recycler", label: "Dashboard", icon: FaEye },
    { to: "/recycler/marketplace", label: "Marketplace", icon: HiOutlineChatAlt2 },
    { to: "/recycler/offers", label: "Offers", icon: HiOutlineChatAlt2 },
    { to: "/recycler/wallet&rewards", label: "Wallet & Rewards", icon: HiOutlineChatAlt2 },
    { to: "/", label: "Logout", icon: FaArrowAltCircleLeft },
  ],
  disposer: [
    { to: "/disposer", label: "Dashboard", icon: FaEye },
    { to: "/disposer/my-waste", label: "My Waste", icon: HiOutlineChatAlt2 },
    { to: "/disposer/wallet&rewards", label: "Wallet & Rewards", icon: HiOutlineChatAlt2 },
    { to: "/", label: "Logout", icon: FaArrowAltCircleLeft },
  ]
};
