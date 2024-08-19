import React from "react";

interface CardApprocheProps {
  label?: string;
  description?: string;
  imageSrc?: string;
  competences?: string[];
}

export const CardCertification: React.FC<CardApprocheProps> = ({
  label = "Premium",
  description = "",
  imageSrc,
  competences = [],
}) => {
  return (
    <div className="flex  items-center justify-center">
      <div className="relative h-[500px] w-[300px] transform cursor-pointer rounded-2xl bg-gradient-to-b from-gray-700 via-gray-800 to-slate-800 shadow-[0_-5px_25px_rgba(255,255,255,0.5)] transition-transform hover:scale-105">
        <img src={imageSrc} alt={label} className="mt-4  w-full p-6 " />
        <p className="font-poppins flex-col justify-end px-8 pt-4 text-center text-lg text-slate-300">
          {description}
        </p>
        <div className="px-8 pt-4 text-slate-300">
          <ul className="list-disc pl-5">
            {competences.map((competence, index) => (
              <li key={index} className="text-sm">
                {competence}
              </li>
            ))}
          </ul>
        </div>
        <span className="absolute -left-2 -top-2 flex h-36 w-36 items-center justify-center overflow-hidden ">
          <div className="absolute flex h-10 w-[150%] -translate-y-2 rotate-[-45deg] items-center justify-center bg-gradient-to-r from-violet-600 via-violet-500 to-violet-900 font-semibold uppercase tracking-wider text-white shadow-md ">
            {label}
          </div>
        </span>
      </div>
    </div>
  );
};
