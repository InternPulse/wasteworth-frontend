import axios from "axios";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setRole("recycler");
    e.preventDefault();
    const data = { email, password, confirm_password, role };
    console.log('Posting...');
    

    axios
      .post(
        "https://wasteworth-backend-django.onrender.com/api/v1/users/signup/",
        data
      )
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={"mt-2 w-full flex flex-col gap-2"}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-thin text-gray-800 text-xs mb-1">
          Email
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
          className="font-thin text-gray-800 text-xs mb-1"
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
      <div className="flex flex-col gap-1">
        <label
          htmlFor="password2"
          className="font-thin text-gray-800 text-xs mb-1"
        >
          Confirm Password
        </label>
        <input
          className={inputStyle}
          id="password2"
          type="password"
          placeholder="Confirm your password"
          value={confirm_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <p className="text-xs">
        <span className="text-green-600">
          <Link to={""}>Terms</Link>
        </span>{" "}
        and{" "}
        <span className="text-green-600">
          <Link to={""}>Conditions</Link>
        </span>
      </p>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="mt-2 w-full py-3 text-xs rounded-full font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
        >
          Create account
        </button>
      </div>
    </form>
  );
};
export default Form;
const inputStyle =
  "border-black/20 border rounded-md p-2.5 text-sm text-gray-700 placeholder-gray-400 text-semibold focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200";
