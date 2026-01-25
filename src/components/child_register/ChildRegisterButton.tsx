import React from "react";

import { PlusIcon } from "@heroicons/react/24/outline";

const ChildRegisterButton: React.FC = () => {
  return (
    <button className="flex items-center bg-primary-500 hover:bg-primary-hover rounded-lg p-3 
    text-white hover:text-neutral-200 font-bold shadow-md space-x-1 cursor-pointer">
        <PlusIcon className="h-5 w-5 font-bold" />
        <span>Novo Cadastro</span>
    </button>
  );
};

export default ChildRegisterButton;
