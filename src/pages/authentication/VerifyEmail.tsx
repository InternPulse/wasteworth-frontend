import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useStore from "../../../store/store";
import { useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";

const VerifyEmail = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<{ email_or_phone: string; otp: number }>();
  const { email } = useStore();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<{
    email_or_phone: string;
    otp: number;
  }> = (data: { email_or_phone: string; otp: number }) => {
    console.log(data);

    axios
      .post(
        "https://wasteworth-backend-django.onrender.com/api/v1/otp/verify/?action=signup",
        data
      )
      .then((response) => {
        console.log("OTP verified successfully:", response.data);
        if (response.data.success) {
          navigate("/auth/login");
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
      });
  };
  return (
    <div className="my-auto w-9/10 h-75 max-w-sm bg-white px-4 rounded-2xl flex flex-col items-center justify-center">
      <h2 className="font-semibold text-2xl text-gray-800 mb-1">
        Verify Email
      </h2>
      <p className="text-xs text-gray-600 text-center">
        We've sent a 6-digit code to{" "}
        <span className="font-semibold">{email}</span>. Enter it below to verify
        your account
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-1 w-full mt-5"
      >
        <div className="flex flex-col w-9/10 mx-auto">
          <input type="text" value={email} className="hidden" readOnly />
          <input
            className={
              "border border-gray-200 text-sm rounded-lg p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500  transition-all duration-200"
            }
            {...register("otp", { required: true, minLength: 6 })}
            value={otp}
            id="otp"
            {...register("otp", {
              required: true,
              minLength: {
                value: 6,
                message: "OTP must be at least 6 characters",
              },
            })}
            onChange={(e) => setOtp(e.target.value)}
            type="number"
            placeholder="Enter OTP"
          />
          {errors.otp && (
            <p className="text-red-600 text-xs mt-1">{errors.otp.message}</p>
          )}

          <Link to={""} className="text-xs font-semibold mt-2 text-green-700">
            Resend OTP
          </Link>
        </div>
        <button
          type="submit"
          className="mx-auto mt-4 w-full py-3 text-xs rounded-full  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
        >
          {isSubmitting ? "Verifying..." : "Verify"}
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
