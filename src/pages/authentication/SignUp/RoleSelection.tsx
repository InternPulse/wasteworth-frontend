import { FaCheck } from "react-icons/fa";

const RoleSelection = ({
  next,
  roles,
}: {
  next: (s: string) => void;
  roles: { role: string; setRole: (r: string) => void };
}) => {
  const role = roles.role;
  const setRole = roles.setRole;

  return (
    <div className="my-auto h-90 rounded-xl sm:rounded-xl w-9/10 sm:w-md sm:py-15 bg-white text-black flex flex-col justify-center space-y-2">
      <h2 className="font-semibold sm:text-xl mb-2 sm:mb-4 w-9/10 mx-auto">
        Choose your role
      </h2>
      <label
        htmlFor="disposer"
        className={`w-9/10 mx-auto flex justify-between items-center rounded-lg p-3 px-4 ${
          role === "disposer" ? "bg-green-100" : "border border-gray-100"
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
          className={`rounded-full h-4 w-4 border border-gray-300 flex items-center justify-center ${
            role === "disposer" ? "border-none bg-green-700" : ""
          }`}
        >
          <FaCheck
            className={`text-white/90 size-2.5 ${
              role === "disposer" ? "block" : "hidden"
            }`}
          />
        </div>
      </label>
      <label
        htmlFor="recycler"
        className={`w-9/10 mx-auto flex justify-between items-center rounded-lg p-3 px-4 ${
          role === "recycler" ? "bg-green-100" : "border border-gray-100"
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
          className={`rounded-full h-4 w-4 border border-gray-300 flex items-center justify-center ${
            role === "recycler" ? "border-none bg-green-700" : ""
          }`}
        >
          <FaCheck
            className={`text-white/90 size-2.5 ${
              role === "recycler" ? "block" : "hidden"
            }`}
          />
        </div>
      </label>
      <button
        onClick={() => next("step-1")}
        disabled={!role}
        className="mt-5 w-9/10 mx-auto h-9 text-xs rounded-lg  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
      >
        Continue
      </button>
    </div>
  );
};

export default RoleSelection;
