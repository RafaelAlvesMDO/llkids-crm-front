import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const ChildSearchButton: React.FC = () => {
  return (
    <button className="flex items-center bg-secondary-500 hover:bg-secondary-hover rounded-lg p-3 
    text-white hover:text-neutral-200 font-bold shadow-md space-x-1 cursor-pointer">
        <MagnifyingGlassIcon className="h-5 w-5 font-bold" />
        <span>Buscar Cadastro</span>
    </button>
  );
};

export default ChildSearchButton;
