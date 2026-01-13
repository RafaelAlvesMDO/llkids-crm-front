import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForms: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Armazena token no localStorage
        localStorage.setItem("access_token", data.access_token);
        alert("Login realizado com sucesso!");
        // Redireciona para dashboard ou home
        navigate("/home");
      } else {
        alert(data.message || "Credenciais inválidas");
      }
    } catch (error) {
      console.error(error);
      alert("Erro na conexão com o servidor");
    } finally {
      setLoading(false);
    }
  };
  
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-3 rounded-lg shadow-sm"
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
              focus:outline-none p-3 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* BOTTOM - BUTTON AND FORGOT PASSWORD */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <button
          onClick={handleLogin}
          disabled={loading} 
          className="w-full bg-secondary-500 hover:bg-secondary-hover rounded-full p-3 
          text-white font-bold shadow-md cursor-pointer">
            {loading ? "Entrando..." : "Entrar"}
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
