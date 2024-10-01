import React, { useState } from "react";
import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { ProjectCard } from "@/components/atoms/ProjectCard/ProjectCard";
import logo from "@/assets/logo.png";
import logoMSW from "@/assets/logoMSW.png";
import logoMRH from "@/assets/logoMRH.jpg";
import grid1 from "@/assets/grid1.png";
import grid2 from "@/assets/grid2.png";
import grid3 from "@/assets/grid3.png";
import grid4 from "@/assets/grid4.png";
import textAdventure from "@/assets/textAdventure.jpeg";
import video from "@/assets/MesMissions.mp4";

import { SwitchButton } from "@/components/atoms/ProjectCard/switchButton";

export const Projets = () => {
  const [isEcole, setIsEcole] = useState(false);

  const projetsEntreprise = [
    {
      logo: logo,
      title: "Signaleo",
      description: "Faire une description.",
      link: "https://example.com/project-one",
    },
    {
      logo: logoMSW,
      title: "MySocialWorker",
      description: "Faire une description.",
      link: "https://example.com/project-two",
    },
    {
      logo: logoMRH,
      title: "Mon Resto'Halal",
      description: "Faire une description.",
      link: "https://example.com/project-three",
    },
  ];

  const projetsEcole = [
    {
      logo: textAdventure,
      title: "Text Adventure ",
      description: "Faire une description.",
      link: "https://example.com/school-project-one",
    },
    {
      logo: logoMSW,
      title: "Project Ecole 2",
      description: "Faire une description.",
      link: "https://example.com/school-project-two",
    },
    {
      logo: logoMRH,
      title: "Project Ecole 3",
      description: "Faire une description.",
      link: "https://example.com/school-project-three",
    },
  ];

  const logos = [grid1, grid2, grid3, grid4]; // Array with logo images

  const handleSwitchChange = () => {
    setIsEcole(!isEcole);
  };

  const projectsToDisplay = isEcole ? projetsEcole : projetsEntreprise;

  return (
    <PublicLayout>
      <main className="bg-gray-300">
        <div className="mx-auto mb-10 flex w-full max-w-screen-xl flex-row place-content-center rounded-xl border-2 bg-slate-800 p-6">
          <div className="flex flex-1 flex-col self-center text-center">
            <p className="mb-6 text-center text-[30px] text-white">
              Les missions que j'ai réalisées :
            </p>
            <p className="mb-6 text-center text-[30px] text-gray-300">
              Au fil de mon parcours, tant à l'école qu'en entreprise, j'ai eu
              l'opportunité de travailler sur divers projets qui m'ont permis de
              développer mes compétences et d'appliquer mes connaissances dans
              des contextes réels.
            </p>
          </div>
          {/* <div className="mx-auto grid max-w-screen-md flex-1 grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-white p-4 shadow-lg"
              >
                <img src={logo} alt={`Logo ${index + 1}`} className="" />
              </div>
            ))}
          </div> */}
          <div className=" flex-1 ">
            <video
              src={video}
              loop
              autoPlay
              muted
              className="h-full max-w-full rounded-full"
            />
          </div>
        </div>
        <div className="bg mx-auto flex flex-col gap-4 bg-slate-800 p-20 ">
          <SwitchButton onToggle={handleSwitchChange} />
          {projectsToDisplay.map((project) => (
            <ProjectCard
              key={project.title}
              logo={project.logo}
              title={project.title}
              description={project.description}
              project={project}
            />
          ))}
        </div>
      </main>
    </PublicLayout>
  );
};
