import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/home/Nav";
import SideBar from "../components/home/SideBar";
export default function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen overflow-hidden">
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="mt-[60px] overflow-y-scroll h-[calc(100vh-60px)]" style={{scrollbarWidth: 'thin'}}>
        <Outlet />
      </div>
    </div>
  );
}
