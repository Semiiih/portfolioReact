import React from "react";
import { HoverButton } from "../ButtonHover/ButtonHover";
import { useNavigate } from "react-router-dom";
import FancyText from "@carefully-coded/react-text-gradient";

export const ProjectCard = ({ logo, title, description, project }: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/project-detail", { state: { projectTitle: project.title } });
  };

  return (
    <div className="flex animate-fade flex-col items-center justify-between rounded-lg border border-white p-4 shadow-lg transition-transform hover:scale-105 sm:flex-row sm:items-center sm:justify-start sm:space-x-4">
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt={`${title} logo`}
          className="h-20 w-20 rounded-xl bg-white transition-transform hover:scale-110"
        />
        <h3 className="w-80 pl-20 text-xl font-bold text-white">
          <FancyText
            gradient={{
              from: "#e3e3e0",
              to: "#bfbfbf",
              type: "linear",
            }}
            animateTo={{ from: "#A25CFC", to: "#e3e3e0" }}
            animateDuration={2000}
          >
            {title}
          </FancyText>
        </h3>
      </div>

      <p className="mt-4 flex-1 pl-10 text-center text-slate-400 sm:text-left">
        <FancyText
          gradient={{
            from: "#e3e3e0",
            to: "#bfbfbf",
            type: "linear",
          }}
          animateTo={{ from: "#FFFF", to: "#e3e3e0" }}
          animateDuration={2000}
        >
          {description}
        </FancyText>
      </p>

      <HoverButton onClick={handleClick} className="flex " />
    </div>
  );
};
