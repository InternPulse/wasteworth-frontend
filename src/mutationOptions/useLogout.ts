import type { UserData } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const logoutUser = async () => {
  const userDataString = localStorage.getItem("userData");

  if (!userDataString) {
    console.warn("You are not authenticated");
    return; 
  }

  try {
    const userData: UserData = JSON.parse(userDataString);
    const refreshToken = userData.tokens?.refresh_token;

    if (refreshToken) {
      await axios.post(
        'https://wasteworth-backend-django.onrender.com/api/v1/users/logout/',
        { refresh_token: refreshToken }
      );
    } else {
      console.warn("Refresh token not found in user data.");
    }
  } catch (error) {
    console.error("You are not authenticated", error);
  }
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      // Clear all query cache data
      queryClient.clear();

      localStorage.removeItem("userData");
      localStorage.removeItem("loggedIn"); 
      localStorage.removeItem("tokens"); 


      navigate('/');
    },
    onError: (error) => {
      console.error("Logout API call failed:", error);

      queryClient.clear();

      localStorage.removeItem("userData");
      localStorage.removeItem("loggedIn"); 
      localStorage.removeItem("tokens"); 

      navigate('/');
    }
  });

  return { logout, isPending };
};


