import axios from "axios";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useStore from "../../../store/store";
import { PacmanLoader } from "react-spinners";

const Form = () => {
  const { setUser, setTokens, setIsLoggedIn } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can access form data using formData.get('inputName');
    const data = {
      email,
      password,
    };
    console.log("Logging in...");

    setIsLoading(true);
    axios
      .post(
        "https://wasteworth-backend-django.onrender.com/api/v1/users/login/",
        data
      )
      .then((response) => {
        console.log("Form submitted successfully:", response);
        response.data.success && setIsLoggedIn(true);
        setUser(response.data.user);
        setTokens(response.data.tokens);
        navigate(`/:${response.data.user.role}`);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error submitting form:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={"mt-2 w-full flex flex-col gap-2"}>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-[#5D5D5D] text-[14px] sm:text-base font-semibold mb-1"
        >
          Email address
        </label>
        <input
          className={inputStyle}
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center text-xs my-1 px-1">
        <Link
          to={"/forgot-password"}
          className="text-[14px] sm:text-base font-semibold text-[#006837]"
        >
          Forgot Password?
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="mt-2 sm:h-[54px] w-full py-2 sm:text-[18px] rounded-lg sm:rounded-xl font-semibold text-white bg-[#006837] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative flex justify-center items-center"
        >
          {isLoading ? (
            <PacmanLoader color={"#36d7b7"} loading={isLoading} size={8} />
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
};
export default Form;
const inputStyle =
  "border-gray-200 border sm:h-[54px] rounded-lg sm:rounded-xl p-3 text-sm text-[#4E4E4E] placeholder-[#8E8E8E99] font-semibold focus:outline-none focus:ring-2 focus:ring-green-600  transition-all duration-200";
