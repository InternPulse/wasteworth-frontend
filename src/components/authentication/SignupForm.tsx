import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

interface formDataProps {
  get: (arg: string) => any;
}

const Form = () => {
  const navigate = useNavigate();
  const { role } = useParams();
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
        <label htmlFor="email" className="font-semibold text-gray-800 text-sm">
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
        <label
          htmlFor="password"
          className="font-semibold text-gray-800 text-sm"
        >
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
      <div className="flex flex-col gap-1">
        <label
          htmlFor="password2"
          className="font-semibold text-gray-800 text-sm"
        >
          Confirm Password
        </label>
        <input
          className={inputStyle}
          id="password2"
          type="password"
          placeholder="Confirm your password"
          name="password"
          required
        />
      </div>
      <select name="role" id="role" className={inputStyle}>
        {role ? (
          <option value={role.slice(1, role.length).toUpperCase()}>
            {role.slice(1, role.length).toUpperCase()}
          </option>
        ) : (
          <>
            <option value="FARMER">Farmer</option>
            <option value="RECYCLER">Recycler</option>
          </>
        )}
      </select>
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
          className="mt-2 w-35 h-9 text-xs rounded-lg  font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
        >
          Create account
        </button>
      </div>
    </form>
  );
};
export default Form;
const inputStyle =
  "bg-gray-100 text-sm rounded-lg p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500  transition-all duration-200";
