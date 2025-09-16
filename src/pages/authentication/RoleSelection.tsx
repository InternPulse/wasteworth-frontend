import { Link } from "react-router-dom";

const RoleSelection = () => {
  return (
    <div className="min-h-[90vh] bg-white flex items-center justify-center p-1">
      <div className="-mt-20 flex flex-col items-center gap-15">
        <div className="space-y-2">
          <h2 className="text-green-600 text-6xl text-center">Welcome!</h2>
          <p className="text-gray-700 sm:text-lg text-center tracking-wider">
            Choose your role and start turning waste into value
          </p>
        </div>
        <div className="flex gap-4 sm:gap-6 items-center justify-center">
          <Link
            to="/:disposer/register"
            className="border border-green-700 px-10 py-2 rounded-lg cursor-pointer font-semibold md:text-xl text-green-600"
          >
            Disposer
          </Link>
          <Link
            to="/:recycler/register"
            className="border border-green-700 px-10 py-2 rounded-lg cursor-pointer font-semibold md:text-xl text-green-600"
          >
            Recycler
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
