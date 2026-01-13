import React from "react";

import LLKidsLogo from "../../assets/llkids-logo.png";

const RegisterLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* LOGO */}
      <img
        src={LLKidsLogo}
        alt="Logo da empresa"
        className="w-30 h-30 object-contain bg-transparent"
      />
    </div>
  );
};

export default RegisterLogo;
