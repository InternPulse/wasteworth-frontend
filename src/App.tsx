import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Landing from "./pages/home/Landing";
import About from "./components/home/About";
import RoleSelection from "./pages/authentication/RoleSelection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="start" element={<RoleSelection />} />
          <Route path=":role/login" element={<Login />} />
          <Route path=":role/register" element={<Signup />} />
        <Route path="*" element={<div>Not Found</div>} />
        </Route>

        <Route path="/user" element={<div>User</div>}>
        
        </Route>
        <Route path="/recycler" element={<div>Recycler</div>}>
        
        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
