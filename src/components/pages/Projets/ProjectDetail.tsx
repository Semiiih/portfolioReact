import React from "react";
import { useLocation } from "react-router-dom";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { projectsData } from "@/projects/mrn";
import FancyText from "@carefully-coded/react-text-gradient";
import { Ecard } from "@/components/atoms/Ecard/index";
import video from "@/assets/MesMissions.mp4";

export const ProjectDetail = () => {
  const location = useLocation();
  const selectedProjectTitle = location.state?.projectTitle;

  // Trouver le projet correspondant dans les données JSON
  const project = projectsData.find(
    (proj) => proj.title === selectedProjectTitle,
  );

  if (!project) {
    return <div>Aucun projet sélectionné</div>;
  }

  return (
    <PublicLayout>
      <div className="flex flex-col items-center bg-slate-800 pt-20 text-white ">
        <div className="flex flex-col items-center gap-7 text-center text-[50px]">
          <h1>
            <FancyText
              gradient={{ from: "#FFFF", to: "#808080", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
              animateDuration={1000}
            >
              {project.title}
            </FancyText>
          </h1>
          <img
            src={project.logo}
            alt={project.title}
            className="w-32 animate-wiggle rounded-full animate-duration-[2000ms] animate-fill-backwards animate-infinite animate-ease-linear"
          />
        </div>
        <p className="pb-20 pt-6">{project.details}</p>
        {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
          Visit Project
        </a> */}
        <div className="text-center">
          <p className="mb-4 border-b-2 pb-2 text-[25px] ">Description</p>
          <p>
            <FancyText
              gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
              animateDuration={1000}
            >
              {project.details}
            </FancyText>
          </p>
        </div>
        <div className="flex flex-row gap-20 pt-20 text-center">
          <div className="flex-1text-center">
            <p className="mx-24 mb-4 border-b-2 pb-2 text-[25px]">
              Duré de la mission
            </p>
            <p>
              <FancyText
                gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
                animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
                animateDuration={1000}
              >
                {project.details}
              </FancyText>{" "}
            </p>
          </div>
          <div className="flex-1 text-center">
            <p className=" mx-24 mb-4 border-b-2 pb-2 text-[25px]">
              Public ciblé
            </p>
            <p>
              <FancyText
                gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
                animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
                animateDuration={1000}
              >
                {project.details}
              </FancyText>{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-20 pt-32 text-center">
          <div className="flex-1 text-center">
            <p className="mx-24 mb-4 border-b-2 pb-2 text-[25px]">
              Technologies
            </p>
            <div className="flex justify-center gap-8">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative flex flex-col items-center"
                >
                  <img src={tech.logo} alt={tech.name} className="h-12 w-12" />
                  <p className="mt-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Ecard />
        <div className="flex flex-col items-center gap-7 text-center text-[50px]">
          <h1>
            <FancyText
              gradient={{ from: "#FFFF", to: "#808080", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
              animateDuration={1000}
            >
              {project.patrimoineInformatique}
            </FancyText>
          </h1>
        </div>
      </div>
    </PublicLayout>
  );
};
