import React from "react";

interface CardApprocheProps {
  label?: string;
  description?: string;
  imageSrc?: string;
}

export const CardApproche: React.FC<CardApprocheProps> = ({
  label = "Premium",
  description = "description",
  imageSrc,
}) => {
  return (
    <div className="flex  items-center justify-center">
      <div className="relative h-[500px] w-[300px] transform cursor-pointer rounded-2xl bg-gradient-to-b from-gray-700  via-gray-800 to-slate-800 shadow-lg transition-transform hover:scale-110">
        <img src={imageSrc} alt={label} className="mt-4 h-1/2 w-full p-6 " />
        <p className="font-poppins flex-col justify-end px-8 pt-4 text-center text-lg text-white">
          {description}
        </p>
        <span className="absolute -left-2 -top-2 flex h-36 w-36 items-center justify-center overflow-hidden">
          <div className="absolute flex h-10 w-[150%] -translate-y-2 rotate-[-45deg] items-center justify-center bg-gradient-to-r from-violet-600 via-violet-500 to-violet-900 font-semibold uppercase tracking-wider text-white shadow-md">
            {label}
          </div>
        </span>
      </div>
    </div>
  );
};
