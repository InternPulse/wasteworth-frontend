import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Landing from "./pages/home/Landing";
import About from "./components/home/About";
import RoleSelection from "./pages/authentication/RoleSelection";
import ComingSoon from "./pages/ComingSoon";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import OtpVerification from "./pages/authentication/OtpVerification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/start" element={<RoleSelection />} />
        <Route path=":role/register" element={<Signup />} />

        <Route path="/disposer" element={<div>User</div>}></Route>
        <Route path="/recycler" element={<div>Recycler</div>}></Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
