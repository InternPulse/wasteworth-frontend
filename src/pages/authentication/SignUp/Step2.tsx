import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { FaCheck } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Step2 = ({
  next,
  nameProp,
  emailProp,
  phoneProp,
}: {
  next: (r: string) => void;
  nameProp: { name: string; setName: (name: string) => void };
  emailProp: { email: string; setEmail: (email: string) => void };
  phoneProp: { phone: string; setPhone: (phone: string) => void };
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { name, setName } = nameProp;
  const { email, setEmail } = emailProp;
  const { phone, setPhone } = phoneProp;
  return (
    <div className="w-full h-full sm:grid grid-cols-[39%_58%] m:grid-cols-[28%_70%] items-center justify-between gap-4">
      <div className="hidden sm:flex items-center justify-center h-full w-full sm:rounded-lg overflow-hidden flex">
        <img src={assets.step2} className="h-full object-fit w-full" />
      </div>
      <div className="flex items-center justify-center w-9/10 mx-auto sm:w-full h-full">
        <div className="flex flex-col gap-4 w-sm">
          <div className="bg-white rounded-lg p-2 text-xs flex justify-around items-center w-full">
            <div className="rounded h-4 w-4 border border-gray-300 flex items-center justify-center bg-green-700">
              <FaCheck className={`text-white/90 size-2.5`} />
            </div>
            <hr className="w-15 border border-gray-200 outline-none" />
            <div className="flex-col">
              <p className="text-gray-700 text-[0.6rem]">STEP 2</p>
              <p className="font-medium text-[0.7rem]">Account information</p>
            </div>
            <hr className="w-15 border border-gray-200 outline-none" />
            <span className="h-2 w-2 my-auto rounded-full bg-gray-200" />
            <hr className="w-15 border border-gray-200 outline-none" />
            <span className="h-2 w-2 my-auto rounded-full bg-gray-200" />
          </div>
          <div className="bg-white flex flex-col gap-2 rounded-lg p-5">
            <h2 className="font-semibold text-gray-800">Set up your Account</h2>
            <form
              onSubmit={handleSubmit(() => next("step-3"))}
              className="space-y-2"
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="text-[#5D5D5D] text-[14px] sm:text-base font-semibold mb-1"
                >
                  Name
                </label>
                <input
                  className={inputStyle}
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your First & Last name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message as string}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-[#5D5D5D] text-[14px] sm:text-base font-semibold mb-1"
                >
                  Enter your email address
                </label>
                <input
                  className={inputStyle}
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message as string}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className="text-[#5D5D5D] text-[14px] sm:text-base font-semibold mb-1"
                >
                  Phone number
                </label>
                <input
                  className={inputStyle}
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2  w-full py-2 sm:text-[18px] rounded-lg font-semibold text-white bg-[#006837] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
              >
                Continue
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

export default Step2;
const inputStyle =
  "border-gray-200 border rounded-lg p-3 text-sm placeholder-[#8E8E8E22] placeholder-[#8E8E8E99] font-semibold focus:outline-none focus:ring-2 focus:ring-green-600  transition-all duration-200";
