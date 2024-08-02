import React from "react";

export const ProjectCard = ({ logo, title, description, link }: any) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border border-violet-900 bg-gradient-to-b from-violet-400 via-violet-500 to-violet-600 p-4 shadow-lg">
      <img src={logo} alt={`${title} logo`} className="mb-0 h-20 w-20" />
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <button
        className="rounded-full bg-[#804bd5] px-4 py-2 text-white hover:bg-[#541dac]"
        onClick={() => window.open(link, "_blank")}
      >
        Voir en détails
      </button>
    </div>
  );
};
