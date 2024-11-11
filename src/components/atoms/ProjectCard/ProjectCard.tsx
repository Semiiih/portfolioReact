import React from "react";
import { HoverButton } from "../ButtonHover/ButtonHover";
import { useNavigate } from "react-router-dom";
import video from "@/assets/MesMissions.mp4";
import FancyText from "@carefully-coded/react-text-gradient";

export const ProjectCard = ({ logo, title, description, project }: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/project-detail", { state: { projectTitle: project.title } });
  };

  return (
    <div className="flex animate-fade flex-col items-center justify-between rounded-lg border border-white p-4 shadow-lg transition-transform animate-duration-1000 animate-fill-backwards animate-once animate-ease-in hover:scale-105 sm:flex-row">
      <img
        src={logo}
        alt={`${title} logo`}
        className="mb-0 h-20 w-20 rounded-xl bg-white transition-transform hover:scale-110"
      />

      <h3 className="mb-2 text-xl font-bold text-white">
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
      <p className="mb-4 text-slate-400">
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
      <HoverButton onClick={handleClick} />
    </div>
  );
};
