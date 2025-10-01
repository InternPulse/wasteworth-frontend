import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useStore from "../../../store/store";

const OtpVerification = () => {
  const { email, otp, setOtp } = useStore();
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOtp(otp);
    navigate("/create-new-password");
  };
  return (
    <div className="my-auto w-9/10 h-75 max-w-sm bg-white px-4 rounded-2xl flex flex-col items-center justify-center">
      <h2 className="font-semibold text-2xl text-gray-800 mb-1">
        OTP Verification
      </h2>
      <p className="text-xs text-gray-600 text-center">
        We've sent a 6-digit code to{" "}
        <span className="font-semibold">{email}</span>. Enter it below to verify
        your account
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1 w-full mt-5">
        <div className="flex flex-col w-9/10 mx-auto">
          <input
            className={
              "border border-gray-200 text-sm rounded-lg p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500  transition-all duration-200"
            }
            id="otp"
            type="number"
            placeholder="Enter OTP"
            value={otp || ""}
            onChange={(e) => setOtp(String(e.target.value))}
            required
          />
          <Link to={""} className="text-xs font-semibold mt-2 text-green-700">
            Resend OTP
          </Link>
        </div>
        <button
          type="submit"
          className="mx-auto mt-4 w-full py-3 text-xs rounded-full  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default OtpVerification;
