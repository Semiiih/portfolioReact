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
import logoPython from "@/assets/logoPython.webp";
import logoSQLite from "@/assets/SQLite.webp";
import logoDjangoNoir from "@/assets/DjangoNoir.webp";
import php from "@/assets/PHP.svg";
import typeScript from "@/assets/typeScript.svg";
import java from "@/assets/java.png";

const competences = [
  { src: logoNext, name: "Next.js" },
  { src: logoReact, name: "React" },
  { src: logoJS, name: "JavaScript" },
  { src: logoTailwind, name: "Tailwind CSS" },
  { src: typeScript, name: "TypeScript" },
  { src: java, name: "Java" },
  { src: logoNpm, name: "npm" },
  { src: logoHTML, name: "HTML" },
  { src: logoCSS, name: "CSS" },
  { src: php, name: "PHP" },
  { src: logoPython, name: "Python" },
  { src: logoYarn, name: "Yarn" },
  { src: logoStorybook, name: "Storybook" },
  { src: logoSQLite, name: "SQLite" },
  { src: logoDjangoNoir, name: "Django" },
];

export const CompetenceSlideBlock = () => {
  return (
    <div className="relative m-auto w-full overflow-hidden  bg-transparent py-20 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] after:content-[''] lg:w-2/3">
      <div className="flex w-[calc(350px*10)] animate-infinite-slider">
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
