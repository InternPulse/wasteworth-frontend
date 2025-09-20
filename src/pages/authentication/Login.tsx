import { Link } from "react-router-dom";
import Form from "../../components/authentication/LoginForm";
import { assets } from "../../assets/assets";

const Login = () => {
  return (
    <div className="grid place-items-center w-full p-4">
      <div className="shadow sm:shadow-none bg-white rounded-lg flex flex-col items-center justify-center w-9/10 max-w-lg md:w-lg p-5 sm:p-8 gap-1 sm:gap-3">
        <div className="w-full">
          <h2 className="font-bold text-[18px] text-gray-800">Welcome Back!</h2>
        </div>
        <button className="w-full sm:h-[54px] px-6 py-2 flex items-center justify-center cursor-pointer rounded-lg sm:rounded-xl my-2 gap-2 text-[12px] sm:text-[18px] text-gray-500 border border-gray-200">
          <img src={assets.google} className="size-5 md:size-base" />
          <span>Sign in with Google</span>
        </button>
        <div className="flex gap-2 items-center justify-between text-gray-500 text-xs w-full">
          <hr className="flex-1 text-gray-200 " />
          <span className="text-[14px] sm:text-base">Or continue with</span>
          <hr className="flex-1 text-gray-200" />
        </div>
        {/* form */}
        <div className="w-full space-y-2">
          <Form />
          <p className="text-[14px] sm:text-base text-[#5D5D5D] font-semibold">
            Are you a new user?{" "}
            <span>
              <Link to={"/auth"} className="text-[#006837]">
                Create an account
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
