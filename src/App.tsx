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
import ChildRegister from "./pages/ChildRegister";

const titles: Record<string, string> = {
  "/": "Página Inicial",
  "/login": "Login",
  "/register": "Cadastro",
  "/child_register": "Cadastro - Criança"
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
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/child_register" element={<ChildRegister />} />
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
