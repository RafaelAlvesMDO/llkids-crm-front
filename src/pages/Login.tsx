// import { useEffect } from "react";
// import LoginCard from "../components/Login/LoginCard";
// import AnimatedLogo from "../components/Login/AnimatedLogo";
import LeftLayout from "../components/login/LeftLayout";
import LoginForms from "../components/login/LoginForms";

import React from "react";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex">
        <LeftLayout />
        <LoginForms />
      </div>
    </>
  );
};

export default Login;
