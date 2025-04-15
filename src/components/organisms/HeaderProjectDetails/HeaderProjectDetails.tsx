import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import { Colaboration } from "@/components/atoms/Colaboration";

interface HeaderProjectDetailsProps {
  project: any;
}

export const HeaderProjectDetails: React.FC<HeaderProjectDetailsProps> = ({
  project,
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 text-center sm:gap-7">
        <h1 className="text-3xl sm:text-[50px]">
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
          className="w-24 animate-wiggle rounded-full animate-duration-[2000ms] animate-fill-backwards animate-infinite animate-ease-linear sm:w-32"
        />
      </div>

      {/* Résumé du projet */}
      <p className="max-w-3xl pb-12 pt-6 text-center sm:pb-20">
        {typeof project.details === "string"
          ? project.details
          : project.description}
      </p>

      <div className="w-full max-w-4xl text-center">
        <p className="mb-4 border-b-2 pb-2 text-xl sm:text-[25px]">
          Description
        </p>
        <p className="px-4">
          <FancyText
            gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
            animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
            animateDuration={1000}
          >
            {typeof project.details === "string"
              ? project.details
              : project.details[0]?.description}
          </FancyText>
        </p>
      </div>

      {/* Durée et public cible */}
      <div className="flex w-full max-w-4xl flex-col gap-8 pt-12 text-center sm:flex-row sm:gap-20 sm:pt-20">
        <div className="flex-1 text-center">
          <p className="mx-auto mb-4 max-w-xs border-b-2 pb-2 text-xl sm:text-[25px]">
            Durée de la mission
          </p>
          <p>
            <FancyText
              gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
              animateDuration={1000}
            >
              {typeof project.details === "string"
                ? project.details
                : project.details[0]?.duree}
            </FancyText>
          </p>
        </div>
        <div className="flex-1 text-center">
          <p className="mx-auto mb-4 max-w-xs border-b-2 pb-2 text-xl sm:text-[25px]">
            Public ciblé
          </p>
          <p>
            <FancyText
              gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
              animateDuration={1000}
            >
              {typeof project.details === "string"
                ? project.details
                : project.details[0]?.public}
            </FancyText>
          </p>
        </div>
      </div>

      {/* Technologies  */}
      <div className="flex flex-row gap-20 pt-32 text-center ">
        <div className="flex-1 text-center">
          <p className="mx-24 mb-4 border-b-2 pb-2 text-[25px]">Technologies</p>
          <div className="flex justify-center gap-8">
            {project.technologies.map((tech: any) => (
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

      {/* l'équipe  */}
      {project.teamMembers && project.teamMembers.length > 0 && (
        <div>
          <p className="mx-24 mb-4 border-b-2 pb-2 pt-20 text-center text-[25px]">
            Les membres du projet
          </p>
          <Colaboration people={project.teamMembers} />
        </div>
      )}
    </>
  );
};
