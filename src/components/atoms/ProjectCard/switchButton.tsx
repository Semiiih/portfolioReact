import React, { useState } from "react";

export const SwitchButton = ({ onToggle }: any) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    onToggle(); // Appel de la fonction onToggle passée en prop
  };

  return (
    <div className="m-10 box-border flex items-center justify-center p-0 text-white">
      <label className="relative inline-block h-10 w-36 ">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          className="hidden "
        />
        <span
          className={`absolute inset-0 cursor-pointer rounded-3xl bg-gray-800 transition-colors duration-500 ${
            checked
              ? "bg-gradient-to-t from-violet-700 via-violet-900 to-slate-600"
              : "bg-gradient-to-t from-slate-600 via-slate-700 to-violet-800"
          }`}
        >
          <span
            className={`absolute inset-y-0 left-1/2 flex transform items-center justify-center pl-4 transition-transform duration-500 ${
              checked ? "-translate-x-10" : "-translate-x-1/2"
            }`}
          >
            {checked ? "Ecole" : "Entreprise"}
          </span>
          <span
            className={`absolute left-0.5 top-0.5 h-9 w-9 transform rounded-full bg-gradient-to-t from-white via-slate-300 to-slate-400 transition-transform duration-500   ${
              checked ? "translate-x-28" : ""
            }`}
          >
            <span className="absolute inset-0 flex items-center justify-center ">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 18V6l8 6-8 6Z"
                ></path>
              </svg>
            </span>
          </span>
        </span>
      </label>
    </div>
  );
};
