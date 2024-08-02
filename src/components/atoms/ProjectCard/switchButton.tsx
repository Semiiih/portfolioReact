import React, { useState } from "react";

export const SwitchButton = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="m-10 box-border flex items-center justify-center p-0 text-white">
      <label className="relative inline-block h-10 w-36">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          className="hidden"
        />
        <span
          className={`duration-400 absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-3xl bg-gray-800 transition-all ${
            checked ? "bg-purple-600" : ""
          }`}
        >
          <span
            className={`duration-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform select-none font-semibold transition-all ${
              checked ? "left-2/5" : ""
            }`}
          >
            Play
          </span>
          <span
            className={`duration-400 absolute h-9 w-9 rounded-full bg-white transition-all ${
              checked
                ? "rotate-360 outline-6 left-9 transform shadow-none outline outline-white/40"
                : "left-0.5"
            }`}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
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
