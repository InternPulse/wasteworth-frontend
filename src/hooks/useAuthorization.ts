import axios from "axios";
import useStore from "../../store/store";

const useAuthorization = () => {
  const { tokens } = useStore();
  const GET = async () => {
    try {
      await axios.get(
        "https://wasteworth-backend-django.onrender.com/api/v1/users/user-dashboard/",
        {
          headers: {
            Authorization: `Bearer ${tokens?.access}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return GET();
};

export default useAuthorization;
