
import useForgotPassword from "@/components/authentication/useForgotPassword";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../../../store/store";
import Loader from "@/utils/Loader";

const CreateNewPassword = () => {
const [password, setPassword] = useState<string>("");
const [confirmPassword, setConfirmPassword] = useState<string>("");
const {email, otp}  = useStore()
const {handlePasswordReset, loading} = useForgotPassword();

const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    console.log("Passwords do not match");
    return;
  }

  if(otp == null) {
    console.log("Otp not available, please request or send the code first")
  }
  try {
    await handlePasswordReset({ email, otp: otp as string, newPassword: password, confirmPassword: password });
  } catch (error) {
    console.error("Error resetting password:", error);
  }
}

  return (
     <div className="my-auto h-80 w-9/10 max-w-sm bg-white px-4 py-15 rounded-2xl flex flex-col items-center justify-center">
      <h2 className="font-semibold text-xl text-gray-800 flex justify-start w-full mt-4">
        Create password
      </h2>
      <form onSubmit={submitForm} className="flex flex-col gap-1 w-full mt-5">
        <label htmlFor="password" className="text-gray-800 text-xs mb-1">
          Password
        </label>
        <input
          className={
            "border-black/20 border rounded-md p-2.5 text-sm text-gray-600 placeholder-gray-400 text-semibold focus:outline-none focus:ring-2 focus:ring-green-600  transition-all duration-200"
          }
          id="password"
          type="password"
          placeholder="Enter new password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirm-password" className="text-gray-800 text-xs mb-1">
          Confirm Password
        </label>
        <input
          className={
            "border-black/20 border rounded-md p-2.5 text-sm text-gray-600 placeholder-gray-400 text-semibold focus:outline-none focus:ring-2 focus:ring-green-600  transition-all duration-200"
          }
          id="confirm-password"
          type="password"
          placeholder="Confirm your password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="mt-4 w-full py-3 text-xs rounded-full  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
        >
          {loading ? <Loader /> : "Create new password"}
        </button>
      </form>
      <div className="flex w-full text-sm px-1 py-5 justify-between items-center">
        <Link to={"/login"} className="text-green-600">
          Remember password?
        </Link>
        <Link to={""} className="font-semibold">
          Resend code
        </Link>
      </div>
    </div>
  )
}

export default CreateNewPassword