import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="flex h-16 items-center justify-between bg-neutral-100 shadow p-4">
      <h1 className="text-xl font-bold">Clientes</h1>
      {/* PROFILE - IMAGE */}
      <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-500 border-1 border-neutral-600">
        <img
          src="/avatar.png"
          alt="PFP"
          className="flex items-center justify-center w-full h-full object-cover"
        />
      </div>
    </nav>
  );
};

export default NavBar;
