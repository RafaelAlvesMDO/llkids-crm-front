import React from "react";
import { Link } from "react-router-dom";


const RegisterForms: React.FC = () => {
  return (
    <div>
      {/* Card */}
      <div className="bg-neutral-100 rounded-2xl shadow-2xl p-6 w-full">
        {/* TITLE */}
        <h2 className="font-bold text-3xl text-center mb-8">Cadastro</h2>

        {/* INPUTS */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-semibold pb-1">Nome Completo</p>
            <input
              type="text"
              placeholder="Nome Completo"
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Número de Telefone</p>
            <input
              type="text"
              placeholder="82933334444"
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Email</p>
            <input
              type="text"
              placeholder="Email"
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Senha</p>
            <input
              type="password"
              placeholder="Senha"
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Confirmar Senha</p>
            <input
              type="password"
              placeholder="Senha"
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Tipo</p>
            <select
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione o cargo
              </option>
              <option value="employee">Funcionário</option>
              <option value="owner">Dono</option>
              <option value="dev">Desenvolvedor</option>
            </select>
          </div>
          <div className="col-span-2 flex justify-center">
            <div className="w-1/2">
              <p className="text-sm font-semibold pb-1">Token</p>
              <input
                type="text"
                placeholder="Token"
                className="w-full border-2 border-gray-300 focus:border-primary-500
                focus:outline-none p-2 rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM - BUTTON AND FORGOT PASSWORD */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <button
            className="w-full bg-secondary-500 hover:bg-secondary-hover rounded-full p-3 
          text-white font-bold shadow-md">
            Cadastrar
          </button>
          <Link
            to="/login"
            className="font-semibold text-sm hover:text-secondary-hover">
            Já tenho uma Conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForms;
