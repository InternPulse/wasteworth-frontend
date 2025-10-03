import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import useStore from "../../store/store";

const GetOTP = ({ purpose, onGet }: { purpose: string; onGet: () => void }) => {
  const { user } = useStore();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{ email_or_phone: string }>();

  const sendOtp: SubmitHandler<{ email_or_phone: string }> = async (data: {
    email_or_phone: string;
  }) => {
    console.log("Sending OTP...");
    try {
      await axios.post(
        "https://wasteworth-backend-django.onrender.com/api/v1/otp/send/",
        {
          ...data,
          purpose,
        }
      );
      onGet();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="my-auto w-9/10 h-75 max-w-sm bg-white px-4 rounded-2xl flex flex-col items-center justify-center">
      <h2 className="font-semibold text-2xl text-gray-800 mb-1">
        Verify Email
      </h2>
      <p className="text-xs text-gray-600 text-center">
        <span>
          Click Send to get a 6-digit code to{" "}
          <span className="font-semibold">{user.email}</span>.
        </span>
      </p>
      <form
        onSubmit={handleSubmit(sendOtp)}
        className="flex flex-col gap-1 w-full mt-5"
      >
        <div className="flex flex-col w-9/10 mx-auto">
          <input
            className={
              "border border-gray-200 text-sm rounded-lg p-2 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500  transition-all duration-200"
            }
            value={user.email}
            {...register("email_or_phone")}
            type="email"
            readOnly
          />
        </div>
        <button
          type="submit"
          className="mx-auto mt-4 w-full py-3 text-xs rounded-full  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
        >
          {isSubmitting ? "Sending otp..." : "Send OTP"}
        </button>
      </form>
    </div>
  );
};

export default GetOTP;
