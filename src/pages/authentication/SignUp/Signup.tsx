import { useState } from "react";
import RoleSelection from "./RoleSelection";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [tab, setTab] = useState("role");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<"recycler" | "disposer" | "">("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    message: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = { name, email, password, confirm_password, phone, role };

    try {
      const res = await axios.post(
        "https://wasteworth-backend-django.onrender.com/api/v1/users/signup/",
        data
      );
      const resData = await res.data;
      resData.success && navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors(JSON.parse(error.request.response).error);
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="w-full h-full my-auto sm:h-9/10 bg-gray-100 flex items-center justify-center p-[1px]">
      {tab === "role" ? (
        <RoleSelection
          next={setTab}
          roles={{
            role,
            setRole: (r: string) => setRole(r as "recycler" | "disposer" | ""),
          }}
        />
      ) : tab === "step-1" ? (
        <Step1 next={setTab} />
      ) : tab === "step-2" ? (
        <Step2
          next={setTab}
          nameProp={{ name, setName }}
          emailProp={{ email, setEmail }}
          phoneProp={{ phone, setPhone }}
        />
      ) : tab === "step-3" ? (
        <Step3
          next={setTab}
          passwordProp={{ password, setPassword }}
          confirmProp={{ confirm_password, setConfirmPassword }}
          submit={handleSubmit}
          error={errors}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Signup;
