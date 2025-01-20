import flowbite from "flowbite-react/tailwind";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbite.plugin(), require("tailwindcss-animated")],
// };

import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "./src/ToggleSwitch.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        rotBGimg: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      animation: {
        rotBGimg: "rotBGimg 3s linear infinite",
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwindcss-animated")],
};
