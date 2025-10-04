import React from "react";

const LoginForms: React.FC = () => {
  return (
    <div className="w-[60%] h-screen flex items-center justify-center bg-neutral-100">
      {/* Card */}
      <div className="bg-neutral-100 rounded-2xl shadow-2xl p-10 w-full max-w-md">
        {/* TITLE */}
        <h2 className="font-bold text-3xl text-center mb-8">Login</h2>

        {/* INPUTS */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold pb-1">Email</p>
            <input
              type="text"
              placeholder="Email"
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-3 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Senha</p>
            <input
              type="password"
              placeholder="Senha"
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-3 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* BOTTOM - BUTTON AND FORGOT PASSWORD */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <button className="w-full bg-secondary-500 hover:bg-secondary-hover rounded-full p-3 text-white shadow-md">
            Entrar
          </button>
          <a
            href="#"
            className="font-semibold text-sm hover:text-secondary-hover"
          >
            Esqueceu a senha?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForms;
