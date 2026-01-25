import React from "react";
import {
  HomeIcon,
  PencilSquareIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import { useNavigate } from "react-router-dom";

import LLKidsLogo from "../../assets/llkids-logo.png";

const SideBar: React.FC = () => {

  const navigate = useNavigate();

  return (
    <aside className="w-20 bg-primary-300 text-white p-4">
      <img
        src={LLKidsLogo}
        alt="CompanyLogo"
        className="flex flex-col items-center justify-center w-12 h-12 mb-4"
      />
      <ul className="flex flex-col items-center justify-center space-y-8">
        <li>
          <HomeIcon onClick={() => 
          navigate("/")} 
          className="h-10 w-10 hover:text-neutral-500 transition cursor-pointer" />
        </li>
        <li>
          <PencilSquareIcon 
          onClick={() => navigate("/child_register")}
          className="h-10 w-10 hover:text-neutral-500 transition cursor-pointer" />
        </li>
        <li>
          <DocumentTextIcon className="h-10 w-10 hover:text-neutral-500 transition cursor-pointer" />
        </li>
        <li>
          <CurrencyDollarIcon className="h-10 w-10 hover:text-neutral-500 transition cursor-pointer" />
        </li>
        <li>
          <QuestionMarkCircleIcon className="h-10 w-10 hover:text-neutral-500 transition cursor-pointer" />
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
