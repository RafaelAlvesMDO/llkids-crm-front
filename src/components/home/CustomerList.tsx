import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const CostumerList: React.FC = () => {
  return (
    <div className="bg-neutral-100 shadow border border-neutral-300">
      <ul
        className="grid grid-cols-11 text-neutral-700 border-b border-neutral-300 
        px-2 py-2 text-sm font-semibold">
        <li>ID</li>
        <li>Nome</li>
        <li>Responsável</li>
        <li>Telefone</li>
        <li>Form Pag.</li>
        <li>Valor</li>
        <li>Tempo</li>
        <li>Entrada</li>
        <li>Saída</li>
        <li>Status</li>
        <li>Cancelar</li>
      </ul>
      <div className="flex items-center justify-center text-neutral-700 bg-neutral-100 
      border-t border-neutral-300">
        <ChevronLeftIcon className="w-5 h-5 cursor-pointer hover:text-neutral-900"/>
        <span className="font-semibold">1</span>
        <ChevronRightIcon className="w-5 h-5 cursor-pointer hover:text-neutral-900"/>
      </div>
    </div>
  );
};

export default CostumerList;
