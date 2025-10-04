import React from "react";

import LLKidsLogo from "../../assets/llkids-logo.png";
import LoginBackground from "../../assets/llkids-background.jpeg";

const LeftLayout: React.FC = () => {
  return (
    <>
      <div
        className="w-[40%] h-screen relative"
        style={{
          backgroundImage: `url(${LoginBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Efeito vidro cobrindo todo o fundo */}
        <div className="absolute inset-0 bg-primary-500/70 backdrop-blur-sm flex items-center justify-center">
          <img src={LLKidsLogo} alt="Logo" className="w-64 h-64" />
        </div>
      </div>
    </>
  );
};

export default LeftLayout;
