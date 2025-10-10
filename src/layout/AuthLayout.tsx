import { assets } from "../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthLayout = () => {
  const back = useNavigate();
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="w-full h-15 px-2 flex items-center border-b-2 border-gray-200 overflow-hidden">
        <Link to={"/"}>
          <img src={assets.logo} className="object-cover h-18" />
        </Link>
      </div>
      {/* Content */}
      <div className="flex pt-20 sm:pt-0 h-[calc(90%-60px)] sm:h-[calc(100vh-60px)] w-full justify-center sm:p-5 relative overflow-hidden">
        <button
          onClick={() => back(-1)}
          className="absolute left-4 sm:left-2 md:left-4 text-xs top-3 text-gray-500 flex items-center gap-1 z-2"
        >
          <FaArrowCircleLeft size={20} />
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
