import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// interface Props {
//   onClose: () => void;
// }

const SearchChildCard: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center justify-center">
      <div className="bg-neutral-100 rounded-2xl shadow-2xl p-6 w-[75%]">
        <div className="flex justify-center items-center mb-6">
          <h2 className="font-bold text-3xl">Buscar Cadastro</h2>
          <button>
            <XMarkIcon className="h-6 w-6 text-neutral-600 hover:text-neutral-900" />
          </button>
        </div>

        <p className="text-sm font-semibold pb-1">
          Nome da Criança ou Responsável
        </p>
        <input
          type="text"
          placeholder="Digite para buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-2 border-gray-300 p-2 rounded-lg mb-6"
        />

        <button
          className="w-full bg-primary-500 hover:bg-primary-700 
          rounded-full p-3 text-white font-bold shadow-md"
        >
          Buscar
        </button>

        {/* RESULTADOS FUTUROS */}
        <div className="mt-6 text-neutral-500 text-sm">
          Nenhum resultado ainda.
        </div>
      </div>
    </div>
  );
};

export default SearchChildCard;


// import React, { useState } from "react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// interface Props {
//   onClose: () => void;
// }

// const SearchChildCard: React.FC<Props> = ({ onClose }) => {
//   const [search, setSearch] = useState("");

//   return (
//     <div className="flex items-center justify-center">
//       <div className="bg-neutral-100 rounded-2xl shadow-2xl p-6 w-[75%]">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="font-bold text-3xl">Buscar Cadastro</h2>
//           <button onClick={onClose}>
//             <XMarkIcon className="h-6 w-6 text-neutral-600 hover:text-neutral-900" />
//           </button>
//         </div>

//         <p className="text-sm font-semibold pb-1">
//           Nome da Criança ou Responsável
//         </p>
//         <input
//           type="text"
//           placeholder="Digite para buscar..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border-2 border-gray-300 p-2 rounded-lg mb-6"
//         />

//         <button
//           className="w-full bg-primary-500 hover:bg-primary-700 
//           rounded-full p-3 text-white font-bold shadow-md"
//         >
//           Buscar
//         </button>

//         {/* RESULTADOS FUTUROS */}
//         <div className="mt-6 text-neutral-500 text-sm">
//           Nenhum resultado ainda.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchChildCard;
