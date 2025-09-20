import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Landing from "./pages/home/Landing";
import About from "./components/landing/About";
import ContactUs from "./components/landing/ContactUs";
import RoleSelection from "./pages/authentication/RoleSelection";
import ComingSoon from "./pages/ComingSoon";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import OtpVerification from "./pages/authentication/OtpVerification";
import AuthLayout from "./layout/AuthLayout";
import Private from "./routes/Private";
import DashboardLayout from "./layout/DashboardLayout";
import useStore from "../store/store";
import TermsAndConditions from "./components/landing/TermsAndConditions";
import Privacy from "./components/landing/Privacy";

function App() {
  const { isLoggedIn } = useStore();
  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        {/* Authentication */}
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<RoleSelection />} />
          <Route path=":role" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="otp-verification" element={<OtpVerification />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <Private isAuthenticated={isLoggedIn}>
              <DashboardLayout />
            </Private>
          }
        ></Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
