import { Link, useParams } from "react-router-dom";

const Login = () => {
  const { role } = useParams();
  return (
    <div className="min-h-screen bg-[#90ff75] md:py-8 md:px-15">
      <div className="grid sm:grid-cols-2 rounded-lg w-full p-5">
        <div className="hidden sm:flex items-center justify-center h-full sm:rounded-l-lg">
          me
        </div>
        <div className="bg-white p-5 rounded-lg sm:rounded-l-none h-120 flex flex-col items-center">
          <h2 className="font-semibold text-xl">Log in to your Account</h2>
          <p>
            Don't have an account?{" "}
            <span className="text-green-500 cursor-pointer">
              <Link to={`/${role}/register`}>Sign up here</Link>
            </span>
          </p>
          {/* form */}
          <div className="flex items-center justify-center w-full h-full text-4xl sm:text-5xl font-bold">
            Coming Soon!!!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
