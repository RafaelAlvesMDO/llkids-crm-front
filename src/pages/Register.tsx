import RegisterLogo from "../components/register/RegisterLogo";
import RegisterForms from "../components/register/RegisterForms";

import React from "react";

const Register: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-center bg-neutral-100">
        <div className="flex flex-col items-stretch gap-4 w-full max-w-2xl">
          <RegisterLogo />
          <RegisterForms />
        </div>
      </div>
    </>
  );
};

export default Register;
