import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface formDataProps {
  get: (arg: string) => any;
}

const Form = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData: formDataProps = new FormData(e.currentTarget);
    e.preventDefault();
    // You can access form data using formData.get('inputName');
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      password2: formData.get("password2"),
      role: formData.get("role"),
    };
    console.log(JSON.stringify(data));

    /* const fetchData = async () => {
      try {
        const response = await fetch(
          "https://agricon-django-backend.onrender.com/api/v1/auth/register/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        console.log(response);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }; */
    navigate("/user");
  };

  return (
    <form onSubmit={handleSubmit} className={"mt-2 w-full flex flex-col gap-2"}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-gray-800 text-xs mb-1">
          Email
        </label>
        <input
          className={inputStyle}
          id="email"
          type="email"
          placeholder="Enter your email address"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-gray-800 text-xs mb-1">
          Password
        </label>
        <input
          className={inputStyle}
          id="password"
          type="password"
          placeholder="Enter your password"
          name="password"
          required
        />
      </div>
      <div className="flex justify-between items-center text-xs my-1 px-1">
        <div className="flex gap-1">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Password</label>
        </div>
        <Link to={"/auth/forgot-password"} className="text-green-600">
          Forgot Password?
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="mt-2 w-full py-3 text-xs rounded-full  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
        >
          Login
        </button>
      </div>
    </form>
  );
};
export default Form;
const inputStyle =
  "border-black/20 border rounded-md p-2.5 text-sm text-gray-700 placeholder-gray-400 text-semibold focus:outline-none focus:ring-2 focus:ring-green-600  transition-all duration-200";
