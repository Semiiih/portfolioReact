import { Card } from "flowbite-react";
import homeMain from "@/assets/home-main.svg";

export const Cards = () => {
  return (
    <Card
      className="flex max-w-sm flex-col-reverse shadow-2xl shadow-white"
      renderImage={() => <img src={homeMain} />}
    >
      <div className="flex flex-row">
        <p className="border-4 border-violet-500 bg-violet-100 text-center text-[60px] font-bold text-[#455A63] ">
          Je suis{" "}
          <span className="text-[60px] text-violet-500 ">
            Semih{" "}
            <span
              className="animate-wave ml-4 inline-block self-center text-5xl"
              role="img"
              aria-labelledby="wave"
            >
              👋🏻
            </span>
          </span>{" "}
        </p>
      </div>
    </Card>
  );
};
