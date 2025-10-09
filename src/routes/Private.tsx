import { type FC, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useStore from "../../store/store";

const Private: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useStore();

  if (isLoggedIn === undefined)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );

  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
};

export default Private;
