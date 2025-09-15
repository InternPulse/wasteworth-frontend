import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center text-white">
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Welcome to Waste Worth</h1>

        <div className="space-x-5 text-white text-center">
          <Link
            to="login"
            className="bg-green-600 px-5 py-1 rounded-md text-xl font-bold"
          >
            Login
          </Link>
          <Link
            to="register"
            className="bg-green-600 px-5 py-1 rounded-md text-xl font-bold"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
