import { useState } from "react";
import { ContainerScroll } from "./container-scroll-animation";
import LinearSignaleo from "@/assets/LinearSignaleo.png";
import FancyText from "@carefully-coded/react-text-gradient";

interface HeroScrollProps {
  image?: any;
}

export function HeroScroll({ image }: HeroScrollProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-violet-500 dark:text-white">
              Association des tâches avec l'utilisation de <br />
              <span className="mt-1 text-4xl font-bold leading-none text-white md:text-[6rem]">
                <FancyText
                  gradient={{ from: "#FFFF", to: "#808080", type: "linear" }}
                  animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
                  animateDuration={1000}
                >
                  Linear
                </FancyText>
              </span>
            </h1>
          </>
        }
      >
        <img
          src={image}
          alt="hero"
          height="720"
          width="1400"
          className="mx-auto h-full cursor-pointer rounded-2xl object-cover object-left-top"
          draggable="false"
          onClick={openModal}
        />
      </ContainerScroll>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative rounded-lg bg-white shadow-lg">
            <button
              className="absolute right-2 top-2 rounded-full bg-gray-200 p-2 text-black"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={image}
              alt="hero enlarged"
              className="rounded-lg object-cover"
              style={{ maxHeight: "80vh", maxWidth: "80vw" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
