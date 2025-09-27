import type { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

const Private: FC<{
  children: ReactNode;
  isAuthenticated: string | null;
}> = ({ children, isAuthenticated }) => {
  if (isAuthenticated !== "true") {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
};

export default Private;
