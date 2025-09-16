import { Link, useParams } from "react-router-dom";
import Form from "../../components/authentication/Form";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const { role } = useParams();
  return (
    <div className="min-h-screen md:py-8 md:px-15">
      <div className="grid sm:grid-cols-2 rounded-lg w-full p-5">
        <div className="hidden border sm:flex items-center justify-center h-full sm:rounded-l-lg">
          me
        </div>
        <div className="bg-white border p-5 rounded-lg sm:rounded-l-none h-120 flex flex-col items-center">
          <h2 className="font-bold text-2xl">Create your Account</h2>
          <p className="text-xs font-semibold text-gray-700">
            Already have an account?{" "}
            <span className="text-green-700 cursor-pointer">
              <Link to={`/${role}/login`}>Login here</Link>
            </span>
          </p>
          <button className="px-6 py-1 flex items-center cursor-pointer rounded-lg font-semibold my-2 gap-2 text-xs border border-gray-200">
            <FaGoogle />
            <span>Sign up with Google</span>
          </button>
          <div className="flex gap-2 items-center text-gray-500 text-xs w-8/10">
            <hr className="w-full text-gray-200 " />
            or
            <hr className="w-full text-gray-200" />
          </div>
          {/* form */}
          <div className="w-full">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
