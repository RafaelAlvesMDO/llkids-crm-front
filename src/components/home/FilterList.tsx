import React from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";

const FilterList: React.FC = () => {
  return (
    <div className="flex items-end justify-center bg-neutral-100 shadow p-2.5 rounded-lg space-x-2">
      <div>
        <p className="w-sm text-sm font-semibold pb-1">Pesquisar</p>
        <input
          type="text"
          placeholder="Procure por nome, Responsável, ID..."
          //   value={name}
          //   onChange={(e) => setName(e.target.value)}
          className="w-full border-2 border-gray-300 focus:border-primary-500 
              focus:outline-none p-2 rounded-lg shadow-sm text-sm"
        />
      </div>
      <div>
        <p className="w-sm text-sm font-semibold pb-1">Status</p>
        <select
          className="w-full border-2 border-gray-300 bg-white p-2 rounded-lg shadow-sm 
      focus:border-primary-500 focus:outline-none text-sm"
        >
          <option value="">Todos</option>
          <option value="active">Em Andamento</option>
          <option value="pending">Concluído</option>
          <option value="inactive">Cancelado</option>
        </select>
      </div>
      <button>
        <XMarkIcon className="w-10 h-10 font-bold text-red-500 hover:text-red-700 cursor-pointer"/>
      </button>
      <button
        className="flex items-center justify-center bg-secondary-500 hover:bg-secondary-hover 
      rounded-lg p-2.5 text-sm text-white font-bold shadow-md space-x-1 cursor-pointer">
        Pesquisar
      </button>
    </div>
  );
};

export default FilterList;
