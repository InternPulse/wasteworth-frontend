import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { FaCheck } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Step3 = ({
  passwordProp,
  confirmProp,
  submit,
  error,
}: {
  next: (r: string) => void;
  passwordProp: { password: string; setPassword: (password: string) => void };
  confirmProp: {
    confirm_password: string;
    setConfirmPassword: (email: string) => void;
  };
  submit: () => void;
  error: { [key: string]: string };
}) => {

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const passwordValue = watch("password");
  const { password, setPassword } = passwordProp;
  const { confirm_password, setConfirmPassword } = confirmProp;
  return (
    <div className="w-full h-full sm:grid grid-cols-[39%_58%] m:grid-cols-[28%_70%] items-center justify-between gap-4">
      <div className="hidden sm:flex items-center justify-center h-full w-full sm:rounded-lg overflow-hidden flex">
        <img src={assets.step3} className="h-full object-fit w-full" />
      </div>
      <div className="flex items-center justify-center w-9/10 mx-auto sm:w-full h-full">
        <div className="flex flex-col gap-4 w-sm">
          <div className="bg-white rounded-lg p-2 text-xs flex justify-around items-center w-full">
            <div className="rounded h-4 w-4 border border-gray-300 flex items-center justify-center bg-green-700">
              <FaCheck className={`text-white/90 size-2.5`} />
            </div>
            <hr className="w-15 border border-gray-200 outline-none" />
            <div className="rounded h-4 w-4 border border-gray-300 flex items-center justify-center bg-green-700">
              <FaCheck className={`text-white/90 size-2.5`} />
            </div>
            <span className="h-2 w-2 my-auto rounded-full bg-gray-200" />
            <div className="flex-col">
              <p className="text-gray-700 text-[0.6rem]">STEP 3</p>
              <p className="font-medium text-[0.7rem]">Password</p>
            </div>
            <hr className="w-15 border border-gray-200 outline-none" />
            <span className="h-2 w-2 my-auto rounded-full bg-gray-200" />
          </div>
          <div className="bg-white flex flex-col gap-2 rounded-lg p-5">
            <h2 className="font-semibold text-gray-800">Create password</h2>
            <p className="text-xs text-red-800">{error.message}</p>
            <form onSubmit={handleSubmit(submit)} className="space-y-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-[#5D5D5D] text-[14px] sm:text-base font-semibold mb-1"
                >
                  Password
                </label>
                <input
                  className={inputStyle}
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    validate: {
                      hasNumber: (value) =>
                        /[0-9]/.test(value) ||
                        "Password must contain at least one number",
                      hasSpecialChar: (value) =>
                        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                        "Password must contain at least one special character",
                      hasUpperCase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must contain at least one uppercase letter",
                    },
                  })}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message as string}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="confirm_password"
                  className="text-[#5D5D5D] text-[14px] sm:text-base font-semibold mb-1"
                >
                  Confirm passowrd
                </label>
                <input
                  className={inputStyle}
                  id="confirm_password"
                  type="password"
                  {...register("confirm_password", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === passwordValue || "Passwords do not match",
                  })}
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                />
                {errors.confirm_password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirm_password.message as string}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center w-full py-2 sm:text-[18px] rounded-lg font-semibold text-white bg-[#006837] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none cursor-pointer relative"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-4 border-white border-t-transparent border-b-transparent rounded-full animate-spin"></div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
          </div>

          <p className="text-sm text-gray-600 text-center">
            Got an account?{" "}
            <Link to={"/login"} className="text-green-800 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3;
const inputStyle =
  "border-gray-200 border rounded-lg p-3 text-sm placeholder-[#8E8E8E22] placeholder-[#8E8E8E99] font-semibold focus:outline-none focus:ring-2 focus:ring-green-600  transition-all duration-200";
