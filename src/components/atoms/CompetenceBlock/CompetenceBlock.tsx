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

export const CompetenceBlock = () => {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6 sm:gap-10">
      {competences.map((competence, index) => (
        <div key={index} className="group relative flex flex-col items-center">
          <img
            src={competence.src}
            alt={`Logo ${competence.name}`}
            className="h-16 w-16 rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
          />
          <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1  text-[20px]  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <FancyText
              gradient={{ from: "#e3e3e0", to: "#bfbfbf", type: "linear" }}
              animateTo={{ from: "#e3e3e0", to: "#e3e3e0" }}
              animateDuration={2000}
            >
              {competence.name}
            </FancyText>
          </span>
        </div>
      ))}
    </div>
  );
};
