import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/SignUp/Signup";
import Landing from "./pages/home/Landing";
import About from "./components/landing/About";
import ContactUs from "./components/landing/ContactUs";
import ComingSoon from "./pages/ComingSoon";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import OtpVerification from "./pages/authentication/OtpVerification";
import AuthLayout from "./layout/AuthLayout";
import Private from "./routes/Private";
import DashboardLayout from "./layout/DashboardLayout";
import useStore from "../store/store";
import TermsAndConditions from "./components/landing/TermsAndConditions";
import Privacy from "./components/landing/Privacy";
import VerifyEmail from "./pages/authentication/VerifyEmail";
import FAQs from "./components/landing/FAQs";

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
          <Route path="faqs" element={<FAQs />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        {/* Authentication */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="sign-up" element={<Signup />} />
          <Route path="verify-email" element={<VerifyEmail />} />
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
