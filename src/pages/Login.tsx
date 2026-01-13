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
