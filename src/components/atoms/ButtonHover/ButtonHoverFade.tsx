// import React from "react";

export const HoverButtonFade = () => {
  return (
    <>
      <button className="before:content[''] after:content[''] group relative h-16 w-64 origin-left overflow-hidden rounded-lg border bg-[#541dac] p-3 text-left text-base font-bold text-gray-50 underline  underline-offset-2 duration-500 before:absolute before:right-1 before:top-1 before:z-10 before:h-12 before:w-12 before:rounded-full before:bg-violet-500 before:blur-lg before:duration-500 after:absolute after:right-8  after:top-3  after:z-10 after:h-20 after:w-20 after:rounded-full after:bg-rose-300 after:blur-lg after:duration-500 hover:border-rose-300 hover:text-rose-300 hover:underline  hover:decoration-2 hover:underline-offset-4 hover:duration-500 hover:before:-bottom-8 hover:before:right-12  hover:before:blur hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] hover:after:-right-8 group-hover:before:duration-500 group-hover:after:duration-500">
        Voir
      </button>
    </>
  );
};
