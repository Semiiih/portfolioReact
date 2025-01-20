import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";

interface EcardProps {
  title?: string;
  subTitle?: string;
}

export const Ecard = ({ title, subTitle }: EcardProps) => {
  return (
    <div className="w-100 relative mx-auto mt-24 h-44 overflow-hidden rounded-e-3xl bg-transparent shadow-lg">
      <div className="absolute left-0 top-0 -ml-[50%] -mt-[70%] h-[700px] w-[540px] animate-rotBGimg rounded-[40%] bg-gradient-to-r from-purple-500 via-blue-600 to-violet-800 opacity-60"></div>
      <div className="absolute left-0 top-[210px] -ml-[50%] -mt-[70%] h-[700px] w-[540px] animate-rotBGimg rounded-[40%] bg-gradient-to-r from-purple-500 via-blue-600 to-violet-800 opacity-60"></div>
      <div className="absolute left-0 top-[420px] -ml-[50%] -mt-[70%] h-[700px] w-[540px] animate-rotBGimg rounded-[40%] bg-gradient-to-r from-purple-500 via-blue-600 to-violet-800 opacity-60"></div>

      <div className=" absolute inset-x-0 top-3 text-center text-xl font-semibold text-white">
        <FancyText
          gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
          animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
          animateDuration={1000}
        >
          {title}
        </FancyText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mx-auto mt-4 w-12 pb-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        <br />
        <div className="mt-0 text-lg font-light lowercase text-white">
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};
