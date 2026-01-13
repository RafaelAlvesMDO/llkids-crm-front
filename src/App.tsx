import { useEffect } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const titles: Record<string, string> = {
  "/": "Home",
  "/login": "Login",
  "/register": "Register",
  // More Routes Here
};

const DynamicTitle: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "Home";
  }, [location]);

  return null;
};

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

const App: React.FC = () => {
  return (
    <Router>
      <DynamicTitle />
      <AppRoutes />
    </Router>
  );
};

export default App;
