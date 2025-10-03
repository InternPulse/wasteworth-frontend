import { useState } from "react";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useLogout = () => {
  const [isLoggingOut, setLoading] = useState(false);
  const { tokens } = useStore();
  const navigate = useNavigate();

  const logout = async () => {
    console.log("logging out...");
    setLoading(true);
    try {
      const res = await axios.post(
        "https://wasteworth-backend-django.onrender.com/api/v1/users/logout/",
        { refresh_token: tokens.refresh_token }
      );
      localStorage.setItem("loggedIn", "false");
      localStorage.clear();
      console.log(res);

      navigate("/login");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  return { logout, isLoggingOut };
};
export default useLogout;
