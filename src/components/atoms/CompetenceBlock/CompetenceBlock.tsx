import logoNext from "@/assets/next.png";
import logoJS from "@/assets/js.png";
import logoTailwind from "@/assets/TailwindCSS.png";
import logoReact from "@/assets/react.png";
import logoNpm from "@/assets/npm.png";
import logoHTML from "@/assets/html.png";
import logoCSS from "@/assets/css.png";
import logoYarn from "@/assets/yarn.png";
import logoStorybook from "@/assets/storybook.png";

export const CompetenceBlock = () => {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6 sm:gap-10">
      <img
        src={logoNext}
        alt="logo Next.js"
        className="h-16 w-16 rounded-xl sm:h-20 sm:w-20"
      />
      <img
        src={logoReact}
        alt="logo React"
        className="h-16 w-16 rounded-xl sm:h-20 sm:w-20"
      />
      <img
        src={logoJS}
        alt="logo JavaScript"
        className="h-16 w-16 rounded-xl sm:h-20 sm:w-20"
      />
      <img
        src={logoTailwind}
        alt="logo Tailwind CSS"
        className="h-16 w-16 rounded-xl sm:h-20 sm:w-20"
      />
      <img
        src={logoNpm}
        alt="logo npm"
        className="h-16 w-16 rounded-xl sm:h-20 sm:w-20"
      />
      <img
        src={logoHTML}
        alt="logo HTML"
        className="h-16 w-16 rounded-xl sm:h-20 sm:w-20"
      />
      <img
        src={logoCSS}
        alt="logo CSS"
        className="h-16 w-16 rounded-xl sm:h-20 sm:w-20"
      />
      <img
        src={logoYarn}
        alt="logo Yarn"
        className="h-16 w-16 rounded-xl sm:h-20 sm:w-20"
      />
      <img
        src={logoStorybook}
        alt="logo Storybook"
        className="h-16 w-16 rounded-xl sm:h-20 sm:w-20"
      />
    </div>
  );
};
