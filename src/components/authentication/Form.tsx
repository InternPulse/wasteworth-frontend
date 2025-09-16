import type { FormEvent } from "react";

interface formDataProps {
  get: (arg: string) => any;
}

const Form = () => {
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

    const fetchData = async () => {
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
    };
    fetchData();
  };

  return (
    <form onSubmit={handleSubmit} className={formStyle}>
      <input
        className={inputStyle}
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <input
        className={inputStyle}
        type="password"
        placeholder="Password"
        name="password"
        required
      />
      <input
        className={inputStyle}
        type="password"
        placeholder="Confirm password"
        name="password2"
        required
      />
      {/* <select name="role" id="role">
        <option value="FARMER">Farmer</option>
        <option value="OPERATOR">Operator</option>
      </select> */}
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
  " border border-gray-200 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200";
const buttonStyle =
  "mt-4 py-3 px-6 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500";
const formStyle = "mt-5 w-full flex flex-col gap-6";
