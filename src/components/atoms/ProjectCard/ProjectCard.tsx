import React from "react";
import { HoverButton } from "../ButtonHover/ButtonHover";
import { useNavigate } from "react-router-dom";
import video from "@/assets/MesMissions.mp4";

export const ProjectCard = ({ logo, title, description, project }: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/project-detail", { state: { projectTitle: project.title } });
  };

  return (
    <div className="flex flex-row items-center justify-between rounded-lg border border-white p-4 shadow-lg">
      <img
        src={logo}
        alt={`${title} logo`}
        className="mb-0 h-20 w-20 rounded-xl bg-white"
      />

      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="mb-4 text-slate-400">{description}</p>
      <HoverButton onClick={handleClick} />
    </div>
  );
};
