import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "../../store/store";

const BASE_URL = "https://wasteworth-backend-django.onrender.com/api/v1";

const useLogout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { tokens, setUser, setTokens, setIsLoggedIn } = useStore();
  const navigate = useNavigate();

  const logout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);

    try {
      if (tokens?.refresh_token) {
        await axios.post(`${BASE_URL}/users/logout/`, {
          refresh_token: tokens.refresh_token,
        });
      }
      setUser(null);
      setTokens(null);
      setIsLoggedIn(false);

      localStorage.removeItem("auth-storage");
      localStorage.removeItem("loggedIn");

      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return { logout, isLoggingOut };
};

export default useLogout;
