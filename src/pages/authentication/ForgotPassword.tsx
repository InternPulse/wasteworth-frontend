import type { FormEvent } from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import useStore from "../../../store/store";
import Loader from "@/utils/Loader";
import useForgotPassword from "@/components/authentication/useForgotPassword";

const ForgotPassword = () => {
   const { email, setEmail } = useStore();
 const { handleForgotPassword, loading } = useForgotPassword();

  const submitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Posting...");
    await handleForgotPassword({ email });
  };

  return (
    <div className="my-auto h-80 w-9/10 max-w-sm bg-white px-4 py-15 rounded-2xl flex flex-col items-center justify-center">
      <h2 className="font-semibold text-2xl text-gray-800 mb-1">
        Forgot your password?
      </h2>
      <p className="text-xs text-gray-700 text-center">
        Don't worry, enter your email or phone number and we'll send you a rest
        code.
      </p>
      <form onSubmit={submitEmail} className="flex flex-col gap-1 w-full mt-5">
        <label htmlFor="email" className="text-gray-800 text-xs mb-1">
          Email
        </label>
        <input
          className={
            "border-black/20 border rounded-md p-2.5 text-sm text-gray-600 placeholder-gray-400 text-semibold focus:outline-none focus:ring-2 focus:ring-green-600  transition-all duration-200"
          }
          id="email"
          type="email"
          placeholder="Enter your email address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="mt-4 w-full py-3 text-xs rounded-full  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
        >
          {loading ? <Loader /> : "Submit"}
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
  );
};

export default ForgotPassword;
