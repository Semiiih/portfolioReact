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
import { SwitchButton } from "@/components/atoms/ProjectCard/switchButton";

export const Projets = () => {
  const [isEcole, setIsEcole] = useState(false);

  const projetsEntreprise = [
    {
      logo: logo,
      title: "Signaleo",
      description: "A brief description of Project One.",
      link: "https://example.com/project-one",
    },
    {
      logo: logoMSW,
      title: "MySocialWorker",
      description: "A brief description of Project Two.",
      link: "https://example.com/project-two",
    },
    {
      logo: logoMRH,
      title: "Mon Resto'Halal",
      description: "A brief description of Project Three.",
      link: "https://example.com/project-three",
    },
  ];

  const projetsEcole = [
    {
      logo: logo,
      title: "Project Ecole 1",
      description: "A brief description of School Project One.",
      link: "https://example.com/school-project-one",
    },
    {
      logo: logoMSW,
      title: "Project Ecole 2",
      description: "A brief description of School Project Two.",
      link: "https://example.com/school-project-two",
    },
    {
      logo: logoMRH,
      title: "Project Ecole 3",
      description: "A brief description of School Project Three.",
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
          <div className="flex flex-1 flex-col text-center">
            <p className="mb-6 text-center text-[30px] text-white">
              Les missions que j'ai réalisées :
            </p>
            <p className="mb-6 text-center text-[30px] text-gray-300">
              Les missions que j'ai réalisées : Les missions que j'ai réalisées
              Les missions que j'ai réalisées : Les missions que j'ai
              réaliséesLes missions que j'ai réalisées : Les missions que j'ai
              réaliséesLes missions que j'ai réalisées : Les missions que j'ai
              réalisées
            </p>
          </div>
          <div className="mx-auto grid max-w-screen-md flex-1 grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-white p-4 shadow-lg"
              >
                <img src={logo} alt={`Logo ${index + 1}`} className="" />
              </div>
            ))}
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
              link={project.link}
            />
          ))}
        </div>
      </main>
    </PublicLayout>
  );
};
