import React from "react";
import SideBar from "../components/home/SideBar";
import NavBar from "../components/home/NavBar";
import ChildRegisterForms from "../components/child_register/ChildRegisterForms";
import ChildRegisterButton from "../components/child_register/ChildRegisterButton";
import ChildSearchButton from "../components/child_register/ChildSearchButton";
import SearchChildCard from "../components/child_register/SearchChildCard";

const ChildRegister: React.FC = () => {
  return (
    <>
      <div className="flex h-screen bg-neutral-200">
        <SideBar />

        <div className="flex flex-col flex-1">
          <NavBar />

          <main className="flex-1 p-6 overflow-auto space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <ChildRegisterButton />
              <ChildSearchButton />
            </div>
            <ChildRegisterForms />
            <SearchChildCard />
          </main>
        </div>
      </div>
    </>
  );
};

export default ChildRegister;
