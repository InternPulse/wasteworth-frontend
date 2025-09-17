import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/landing/Nav";
import SideBar from "../components/landing/SideBar";
import Footer from "../components/landing/Footer";
export default function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen overflow-hidden">
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className="mt-[60px] overflow-y-scroll h-[calc(100vh-60px)]"
        style={{ scrollbarWidth: "thin" }}
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
