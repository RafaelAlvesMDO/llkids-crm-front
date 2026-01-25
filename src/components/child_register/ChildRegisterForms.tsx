import React, { useState } from "react";

import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

type Responsible = {
  name: string;
  phone: string;
};

const ChildRegisterForms: React.FC = () => {
  const [child_name, setChildName] = useState("");

  const [responsibles, setResponsibles] = useState<Responsible[]>([
    { name: "", phone: "" },
  ]);

  const [loading, setLoading] = useState(false);

  /* ===============================
     RESPONSIBLES HANDLERS
  =============================== */

  const addResponsible = () => {
    setResponsibles([...responsibles, { name: "", phone: "" }]);
  };

  const removeResponsible = (index: number) => {
    setResponsibles(responsibles.filter((_, i) => i !== index));
  };

  const updateResponsible = (
    index: number,
    field: "name" | "phone",
    value: string
  ) => {
    const updated = [...responsibles];
    updated[index][field] = value;
    setResponsibles(updated);
  };

  /* ===============================
     SUBMIT
  =============================== */

  const handleRegister = async () => {
    if (
      !child_name ||
      responsibles.some(
        (responsible) => !responsible.name || !responsible.phone
      )
    ) {
      alert("Preencha todos os campos");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8000/api/child_register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            child_name,
            responsibles,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        if (data.errors) {
          const firstError = Object.values(data.errors)[0];
          alert(firstError as string);
        } else {
          alert(data.message || "Erro ao registrar");
        }
      }
    } catch (error) {
      console.error(error);
      alert("Erro na conexão com o servidor");
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     RENDER
  =============================== */

  return (
    <div className="flex items-center justify-center">
      <div className="bg-neutral-100 rounded-2xl shadow-2xl p-6 w-[50%]">
        <h2 className="font-bold text-3xl text-center mb-8">
          Cadastro de Criança
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* CHILD NAME */}
          <div className="col-span-2">
            <p className="text-sm font-semibold pb-1">
              Nome e Sobrenome da Criança
            </p>
            <input
              type="text"
              placeholder="Nome e Sobrenome"
              value={child_name}
              onChange={(e) => setChildName(e.target.value)}
              className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm"
            />
          </div>

          {/* RESPONSIBLES */}
          {responsibles.map((responsible, index) => (
            <div
              key={index}
              className="col-span-2 grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold pb-1">
                  Nome do Responsável {index + 1}
                </p>
                <input
                  type="text"
                  placeholder="Nome e Sobrenome"
                  value={responsible.name}
                  onChange={(e) =>
                    updateResponsible(index, "name", e.target.value)
                  }
                  className="w-full border-2 border-gray-300 p-2 rounded-lg"
                />
              </div>

              <div>
                <p className="text-sm font-semibold pb-1">Telefone</p>
                <input
                  type="text"
                  placeholder="82933334444"
                  value={responsible.phone}
                  onChange={(e) =>
                    updateResponsible(index, "phone", e.target.value)
                  }
                  className="w-full border-2 border-gray-300 p-2 rounded-lg"
                />
              </div>

              {responsibles.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeResponsible(index)}
                  className="w-fit flex items-start justify-start col-span-2 text-white hover:text-neutral-200 
                  bg-red-500 hover:bg-red-600 text-sm text-left rounded-xl py-1 px-2 cursor-pointer">
                    <XMarkIcon className="h-5 w-5 font-bold" />
                    <span>Remover responsável</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* ADD RESPONSIBLE */}
        <button
          type="button"
          onClick={addResponsible}
          className="flex items-center justify-center mt-6 text-white hover:text-neutral-200 font-semibold 
          bg-primary-500 hover:bg-primary-700 rounded-xl p-2 cursor-pointer">
          <PlusIcon className="h-5 w-5 font-bold" />
          <span>Adicionar outro responsável</span>
        </button>

        {/* SUBMIT */}
        <div className="mt-8">
          <button
            disabled={loading}
            onClick={handleRegister}
            className="w-full bg-secondary-500 hover:bg-secondary-hover 
            rounded-full p-3 text-white font-bold shadow-md cursor-pointer"
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildRegisterForms;
