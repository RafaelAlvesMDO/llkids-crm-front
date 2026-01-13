import React from "react";

import { PlusIcon } from "@heroicons/react/24/outline";

const AddCustomerButton: React.FC = () => {
  return (
    <button className="flex items-center bg-secondary-500 hover:bg-secondary-hover rounded-lg p-3 
    text-white font-bold shadow-md space-x-1 cursor-pointer">
        <PlusIcon className="h-5 w-5 font-bold" />
        <span>Cliente</span>
    </button>
  );
};

export default AddCustomerButton;
