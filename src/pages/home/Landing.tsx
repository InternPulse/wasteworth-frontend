import { useState } from "react";
import Nav from "../../components/home/Nav";
import SideBar from "../../components/home/SideBar";
import Hero from "../../components/home/Hero";
import About from "../../components/home/About";

const Landing = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="h-screen overflow-hidden">
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* main */}
      <div
        className="overflow-y-scroll h-[92vh] pb-5"
        style={{ scrollbarWidth: "thin" }}
      >
        {activeTab === "home" ? (
          <Hero />
        ) : activeTab === "about us" ? (
          <About />
        ) : activeTab === "contact" ? (
          ""
        ) : activeTab === "faqs" ? (
          ""
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Landing;
