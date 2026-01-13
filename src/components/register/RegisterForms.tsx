import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForms: React.FC = () => {
  // Estados para cada campo
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Função para enviar o formulário
  const handleRegister = async () => {
    // Validação mínima no front
    if (
      !name ||
      !phoneNumber ||
      !email ||
      !password ||
      !passwordConfirmation ||
      !token
    ) {
      alert("Preencha todos os campos");
      return;
    }

    if (password !== passwordConfirmation) {
      alert("As senhas não conferem");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone_number: phoneNumber,
          email,
          password,
          password_confirmation: passwordConfirmation,
          registration_token: token,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/login")
      } else {
        if (data.errors) {
          // Validações do Laravel
          const firstError = Object.values(data.errors)[0];
          alert(firstError);
        } else {
          alert(data.message || "Erro ao registrar");
        }
      }
    } catch (error) {
      alert("Erro na conexão com o servidor");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Número de Telefone</p>
            <input
              type="text"
              placeholder="82933334444"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Email</p>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Senha</p>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Confirmar Senha</p>
            <input
              type="password"
              placeholder="Senha"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-semibold pb-1">Token</p>
            <input
              type="password"
              placeholder="Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* BOTTOM - BUTTON AND FORGOT PASSWORD */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <button
            disabled={loading}
            onClick={handleRegister}
            className="w-full bg-secondary-500 hover:bg-secondary-hover rounded-full p-3 
          text-white font-bold shadow-md">
            Cadastrar
          </button>
          <Link
            to="/login"
            className="font-semibold text-sm hover:text-secondary-hover"
          >
            Já tenho uma Conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForms;
