import type { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

const Private: FC<{
  children: ReactNode;
  isAuthenticated: boolean;
}> = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/unauthorized"} />;
  }

  return <>{children}</>;
};

export default Private;
