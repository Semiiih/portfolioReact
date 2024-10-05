// import React from "react";

export const HoverButton = ({ onClick }: any) => {
  return (
    <>
      <button
        onClick={onClick}
        className="group relative h-12 w-36 cursor-pointer overflow-hidden rounded-full border-none bg-gradient-to-t from-slate-600 via-slate-700 to-violet-800 text-white shadow-lg outline-none"
      >
        <span className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform text-xs uppercase tracking-wider transition-all duration-500 group-hover:-top-full">
          Voir en détail
        </span>
        <span className="absolute left-0 top-[150%] w-full -translate-y-1/2 transform text-xs uppercase tracking-wider transition-all duration-500 group-hover:top-1/2">
          clique ici
        </span>
      </button>
    </>
  );
};
