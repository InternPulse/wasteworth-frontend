import { type FC, type ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Private: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  if (isAuthenticated === null) return null; // Optionally show a spinner here

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default Private;
