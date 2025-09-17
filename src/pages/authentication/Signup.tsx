import { Link } from "react-router-dom";
import Form from "../../components/authentication/SignupForm";
import { FaGoogle } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid sm:grid-cols-2 max-w-4xl rounded-lg w-full p-4 sm:p-4">
        {/* Image */}
        <div className="hidden sm:flex items-center justify-center h-full sm:rounded-l-lg overflow-hidden">
          <img
            src={assets.dispose}
            className="scale-105 h-full w-full object-cover object-right"
          />
        </div>
        {/* Auth */}
        <div className="bg-white p-5 py-8 rounded-lg sm:rounded-l-none h130 flex flex-col items-center justify-center">
          <h2 className="font-semibold text-2xl text-gray-800 mb-1">
            Create your Account
          </h2>
          <p className="text-xs font-semibold text-gray-700">
            Already have an account?{" "}
            <span className="text-green-700 cursor-pointer">
              <Link to={`/login`}>Login here</Link>
            </span>
          </p>
          <button className="px-6 py-1 flex items-center cursor-pointer rounded-lg font-semibold my-2 gap-2 text-xs border border-gray-200">
            <FaGoogle />
            <span>Sign up with Google</span>
          </button>
          <div className="flex gap-2 items-center text-gray-500 text-xs w-8/10">
            <hr className="w-full text-gray-200 " />
            or
            <hr className="w-full text-gray-200" />
          </div>
          {/* form */}
          <div className="w-full">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
