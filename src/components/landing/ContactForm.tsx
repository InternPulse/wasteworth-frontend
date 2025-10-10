import { BASE_URL } from "@/layout/DashboardLayout";
import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
interface Data {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  heard_about: string;
}
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<Data>();
  const submit: SubmitHandler<Data> = async (data: Data) => {
    console.log(data);
    try {
      await axios.post(`${BASE_URL}/api/v1/contact/`, data);
      toast.success("Message delivered successfully");
    } catch (error) {
      toast.error("Error occurred!");
    }
  };
  return (
    <section className="bg-gray-200 my-5 p-5 rounded-md">
      <div>
        <div className="space-y-7">
          <div className="space-y-8">
            <h3 className="text-lg md:text-2xl text-green-600 font-bold">
              Get in touch
            </h3>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              You can reach us anytime.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col space-y-6"
          >
            <div className="w-full">
              <input
                className="appearance-none block w-full text-sm sm:text-base text-gray-700 border border-gray-500 rounded py-2 sm:py-3 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-600"
                id="first-name"
                {...register("first_name", {
                  required: "First name is required.",
                })}
                type="text"
                placeholder="First name"
              />
              <p className="font-medium text-xs text-red-600/70">
                {errors.first_name?.message}
              </p>
            </div>
            <div className="w-full">
              <input
                className="appearance-none block w-full text-sm sm:text-base text-gray-700 border border-gray-500 rounded py-2 sm:py-3 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-600"
                id="last-name"
                {...register("last_name", {
                  required: "Please enter your last name",
                })}
                type="text"
                placeholder="Last name"
              />
              <p className="font-medium text-xs text-red-600/70">
                {errors.last_name?.message}
              </p>
            </div>

            <div className="w-full ">
              <input
                className="appearance-none block w-full text-sm sm:text-base text-gray-700 border border-gray-500 rounded py-2 sm:py-3 px-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-600"
                id="email"
                {...register("email", {
                  required: "Email address is required.",
                })}
                placeholder="Email*"
              />
              <p className="font-medium text-xs text-red-600/70">
                {errors.email?.message}
              </p>
            </div>

            <div className="w-full ">
              <textarea
                className="appearance-none block w-full text-xs sm:text-sm text-gray-700 border border-gray-500 rounded py-3 px-2 sm:px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-green-600"
                id="message"
                {...register("message", {
                  required: "Message must be at least 10 characters long.",
                })}
                placeholder="Message*"
              />
              <p className="font-medium text-xs text-red-600/70">
                {errors.message?.message}
              </p>
            </div>

            <div className="w-full ">
              <input
                className="appearance-none block w-full text-xs sm:text-sm text-gray-700 border border-gray-500 rounded py-3 px-2 sm:px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-green-600"
                id="referral"
                {...register("heard_about", { required: "Min 1 character" })}
                type="text"
                placeholder="How did you hear about ?"
              />
              <p className="font-medium text-xs text-red-600/70">
                {errors.heard_about?.message}
              </p>
            </div>

            <button
              className="bg-green-800 text-sm md:text-base text-white px-6 py-2 w-full rounded-lg hover:bg-green-600 transition duration-300"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <ClipLoader loading={isLoading} /> : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
