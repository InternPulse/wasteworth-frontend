import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useStore from "../../../store/store";
import { MdArrowBack } from "react-icons/md";

const ForgotPassword = () => {
  const { email, setEmail } = useStore();
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/otp-verification");
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
      <div className="w-9/10 max-w-sm bg-white px-4 py-15 rounded-xl sm:rounded-l-none h130 flex flex-col items-center justify-center">
        <h2 className="font-semibold text-2xl text-gray-800 mb-1">
          Forgot your password?
        </h2>
        <p className="text-xs font-semibold text-gray-600 text-center">
          Don't worry, enter your email or phone number and we'll send you a
          reste code.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-1 w-full mt-5"
        >
          <label
            htmlFor="email"
            className="font-semibold text-gray-800 text-sm"
          >
            Email
          </label>
          <input
            className={
              "bg-gray-100 text-sm rounded-lg p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500  transition-all duration-200"
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
            className="mx-auto mt-4 w-35 h-9 text-xs rounded-lg  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
          >
            Submit
          </button>
        </form>
        <div className="flex w-full text-xs px-1 py-5 justify-between items-center">
          <Link to={"/login"} className="text-green-600">
            Remember password?
          </Link>
          <Link to={""} className="font-semibold">
            Resend code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
