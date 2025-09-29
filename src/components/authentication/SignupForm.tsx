import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import useStore from "../../../store/store";

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

const Form = () => {
  const { setEmail } = useStore();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const password = watch("password", "");

  const role = useParams().role?.slice(1, 100);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log({ ...data, role });

    try {
      const response = await axios.post(
        "https://wasteworth-backend-django.onrender.com/api/v1/users/signup/",
        { ...data, role }
      );
      console.log("Form submitted successfully:", response.data);
      setEmail(data.email);
      if (response.data.success) {
        navigate("/auth/verify-email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"mt-2 w-full flex flex-col gap-2"}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-thin text-gray-800 text-xs mb-1">
          Email
        </label>
        <input
          className={inputStyle}
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="text-red-600 text-xs">{errors.email.message}</p>
        )}
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
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: {
              hasUppercase: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain at least one uppercase letter",
              hasLowercase: (value) =>
                /[a-z]/.test(value) ||
                "Password must contain at least one lowercase letter",
              hasNumber: (value) =>
                /\d/.test(value) || "Password must contain at least one number",
              hasSymbol: (value) =>
                /[!@#$%^&*(-)_.,]/.test(value) ||
                "Password must contain at least one symbol",
            },
          })}
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-600 text-xs">{errors.password.message}</p>
        )}
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
          {...register("confirm_password", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          placeholder="Confirm your password"
        />
        {errors.confirm_password && (
          <p className="text-red-600 text-xs">
            {errors.confirm_password.message}
          </p>
        )}
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
          className="mt-2 w-full py-3 text-xs rounded-full font-semibold text-white bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative flex justify-center items-center"
        >
          {isSubmitting ? (
            <PacmanLoader color={"#36d7b7"} loading={isSubmitting} size={8} />
          ) : (
            "Create account"
          )}
        </button>
      </div>
    </form>
  );
};
export default Form;
const inputStyle =
  "border-black/20 border rounded-md p-2.5 text-sm text-gray-700 placeholder-gray-400 text-semibold focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200";
