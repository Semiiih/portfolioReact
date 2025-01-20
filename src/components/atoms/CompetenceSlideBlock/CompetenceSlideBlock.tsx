import logoNext from "@/assets/next.png";
import logoJS from "@/assets/js.png";
import logoTailwind from "@/assets/TailwindCSS.png";
import logoReact from "@/assets/react.png";
import logoNpm from "@/assets/npm.png";
import logoHTML from "@/assets/html.png";
import logoCSS from "@/assets/css.png";
import logoYarn from "@/assets/yarn.png";
import logoStorybook from "@/assets/storybook.png";
import FancyText from "@carefully-coded/react-text-gradient";

const competences = [
  { src: logoNext, name: "Next.js" },
  { src: logoReact, name: "React" },
  { src: logoJS, name: "JavaScript" },
  { src: logoTailwind, name: "Tailwind CSS" },
  { src: logoNpm, name: "npm" },
  { src: logoHTML, name: "HTML" },
  { src: logoCSS, name: "CSS" },
  { src: logoYarn, name: "Yarn" },
  { src: logoStorybook, name: "Storybook" },
];

export const CompetenceSlideBlock = () => {
  return (
    <div className="relative m-auto w-2/3 overflow-hidden bg-transparent py-20 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {competences.map((logo, index) => (
          <div
            className="slide group relative flex w-[125px] flex-col items-center justify-center"
            key={index}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-[70px] w-[70px] rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-[20px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <FancyText
                gradient={{ from: "#e3e3e0", to: "#bfbfbf", type: "linear" }}
                animateTo={{ from: "#e3e3e0", to: "#e3e3e0" }}
                animateDuration={2000}
              >
                {logo.name}
              </FancyText>
            </span>
          </div>
        ))}
        {competences.map((logo, index) => (
          <div
            className="slide group relative flex w-[125px] flex-col items-center justify-center"
            key={index + competences.length}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-[70px] w-[70px] rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-[20px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <FancyText
                gradient={{ from: "#e3e3e0", to: "#bfbfbf", type: "linear" }}
                animateTo={{ from: "#e3e3e0", to: "#e3e3e0" }}
                animateDuration={2000}
              >
                {logo.name}
              </FancyText>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
