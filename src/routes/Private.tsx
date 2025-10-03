import type { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

const Private: FC<{
  children: ReactNode;
  isAuthenticated: string | null;
}> = ({ children, isAuthenticated }) => {
  if (typeof isAuthenticated === "string" && isAuthenticated !== "") {
    try {
      if (JSON.parse(isAuthenticated) !== true) {
        return <Navigate to={"/login"} />;
      }
    } catch (e) {
      console.error("Failed to parse isAuthenticated as JSON:", e);
      return <Navigate to={"/login"} />;
    }
  } else {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
};

export default Private;
