import { useState } from "react";
import { AiOutlineFileMarkdown } from "react-icons/ai";
import { FaCheck, FaMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoleSelection = () => {
  const [role, setRole] = useState<"recycler" | "disposer" | "">("");

  return (
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center">
      <div className="rounded-lg shadow sm:rounded-xl w-9/10 sm:w-lg  p-5 sm:py-15 bg-white text-black space-y-2">
        <h2 className="font-semibold sm:text-2xl mb-2 sm:mb-4 text-center">
          How will you like to use WasteWorth?
        </h2>
        <p className="text-xs max-w-sm mx-auto sm:text-sm text-center text-gray-700">
          Choose the path that fits you best. Don't worry - you can always
          switch later
        </p>
        <div className="flex flex-col gap-3 mt-8">
          <label
            htmlFor="disposer"
            className={`sm:w-sm sm:mx-auto flex justify-between items-center rounded-lg p-2 px-3 ${
              role === "disposer" ? "bg-green-100" : "bg-gray-100"
            } `}
          >
            <span className="text-sm text-gray-600">Disposers</span>
            <input
              onChange={() => setRole("disposer")}
              type="radio"
              name="role"
              id="disposer"
              className="hidden"
            />
            <div
              className={`rounded-full h-4 w-4 border-2 border-gray-300 flex items-center justify-center ${
                role === "disposer" ? "border-none bg-green-700" : ""
              }`}
            >
              <FaCheck className={`text-white/90 size-2.5`} />
            </div>
          </label>
          <label
            htmlFor="recycler"
            className={`sm:w-sm sm:mx-auto flex justify-between items-center rounded-lg p-2 px-3 ${
              role === "recycler" ? "bg-green-100" : "bg-gray-100"
            } `}
          >
            <span className="text-sm text-gray-600">Recyclers</span>
            <input
              onChange={() => setRole("recycler")}
              type="radio"
              name="role"
              id="recycler"
              className="hidden"
            />
            <div
              className={`rounded-full h-4 w-4 border-2 border-gray-300 flex items-center justify-center ${
                role === "recycler" ? "border-none bg-green-700" : ""
              }`}
            >
              <FaCheck className={`text-white/90 size-2.5`} />
            </div>
          </label>
        </div>
        <div className="w-full flex flex-col gap-3 items-center justify-center">
          <button
            disabled={!role}
            className="mt-5 w-35 h-9 text-xs rounded-lg  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
          >
            <Link
              to={`/:${role}/register`}
              className={`${
                !role
                  ? "pointer-events-none absolute w-full h-full top-1/4 left-0 right-0"
                  : ""
              }`}
            >
              Continue
            </Link>
          </button>
          <p className="text-xs font-semibold text-gray-800">
            Already have an account?{" "}
            <span className="text-green-600">
              <Link to={`/login`}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
