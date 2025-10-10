import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { CiMail } from "react-icons/ci";

const Step1 = ({ next }: { next: (r: string) => void }) => {
  return (
    <div className="w-full sm:mt-10 h-full sm:grid grid-cols-[39%_58%] md:flex items-center gap-4">
      <div className="hidden sm:w-60 md:w-85 rounded-lg sm:flex items-center h-full overflow-hidden flex">
        <img
          src={assets.step1}
          className="h-full w-full object-contain no-repeat rounded-lg"
        />
      </div>
      <div className="flex items-center justify-center w-9/10 mx-auto sm:w-full h-full">
        <div className="flex flex-col gap-4 w-sm">
          <div className="bg-white rounded-lg p-2 text-xs flex justify-around items-center w-full">
            <span className="h-2 w-2 my-auto rounded-full bg-gray-200" />
            <div className="flex-col">
              <p className="text-gray-700">STEP 1</p>
              <p className="font-medium">Create an account</p>
            </div>
            <hr className="w-15 border border-gray-200 outline-none" />
            <span className="h-2 w-2 my-auto rounded-full bg-gray-200" />
            <hr className="w-15 border border-gray-200 outline-none" />
            <span className="h-2 w-2 my-auto rounded-full bg-gray-200" />
            <hr className="w-15 border border-gray-200 outline-none" />
            <span className="h-2 w-2 my-auto rounded-full bg-gray-200" />
          </div>
          <div className="bg-white flex flex-col gap-2 rounded-lg p-5">
            <h2 className="font-semibold text-lg text-gray-800">
              Create your Account
            </h2>
            <p className="text-sm  text-gray-700">
              Join us in building a cleaner future.
            </p>
            <button
              onClick={() => next("step-2")}
              className="mt-2 cursor-pointer w-full rounded-lg border border-gray-300 flex gap-1 p-2 items-center justify-center text-gray-300 font-semibold"
            >
              <CiMail className="text-gray-600 size-5" />
              <span>Email address</span>
            </button>
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

export default Step1;
