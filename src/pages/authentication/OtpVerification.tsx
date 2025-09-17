import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useStore from "../../../store/store";
import { MdArrowBack } from "react-icons/md";

const OtpVerification = () => {
  const { email } = useStore();
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <Link
        to={"/"}
        className="absolute right-2 text-xs top-5 text-green-600 font-semibold flex items-center gap-1"
      >
        <MdArrowBack size={15} /> <span>back to home</span>
      </Link>
      {/* Auth */}
      <div className="w-9/10 max-w-sm bg-white px-4 py-10 rounded-xl sm:rounded-l-none flex flex-col items-center justify-center">
        <h2 className="font-semibold text-2xl text-gray-800 mb-1">
          OTP Verification
        </h2>
        <p className="text-xs  text-gray-600 text-center">
          We've sent a 6-digit code to{" "}
          <span className="font-semibold">{email}</span>. Enter it below to
          verify your account
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-1 w-full mt-5"
        >
          <div className="flex flex-col w-9/10 mx-auto">
            <input
              className={
                "border border-gray-200 text-sm rounded-lg p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500  transition-all duration-200"
              }
              id="otp"
              type="number"
              placeholder="Enter OTP"
              required
            />
            <Link to={""} className="text-xs my-2 text-green-60">
              Resend OTP
            </Link>
          </div>
          <button
            type="submit"
            className="mx-auto mt-4 w-40 h-9 text-xs rounded-lg  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
          >
            Verify
          </button>
        </form>
        <div className="flex w-full text-xs px-1 py-5 justify-between items-center"></div>
      </div>
    </div>
  );
};

export default OtpVerification;
