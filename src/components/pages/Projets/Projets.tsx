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
import FancyText from "@carefully-coded/react-text-gradient";

import projets from "@/assets/projets.svg";
import textAdventure from "@/assets/textAdventure.jpeg";
import video from "@/assets/programmer2.gif";
import projectsIllustration1 from "@/assets/projects-illustration1.gif";
import projectsIllustration2 from "@/assets/projects-illustration2.gif";
import projectsIllustration3 from "@/assets/projects-illustration3.gif";

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
      <main className="">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-10 sm:pt-60 lg:px-8 lg:pt-10">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="bg text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  <FancyText
                    gradient={{
                      from: "#e3e3e0",
                      to: "#bfbfbf",
                      type: "linear",
                    }}
                    animateTo={{ from: "#A25CFC", to: "#e3e3e0" }}
                    animateDuration={2000}
                  >
                    <p>Les missions que j'ai réalisées :</p>
                  </FancyText>
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                  Au fil de mon parcours, tant à l'école qu'en entreprise, j'ai
                  eu l'opportunité de travailler sur divers projets qui m'ont
                  permis de développer mes compétences et d'appliquer mes
                  connaissances dans des contextes réels.
                </p>
                <div className="flex flex-row">
                  <img
                    src={video}
                    alt="GIF transparent"
                    className="mt-6 w-full max-w-[100px]"
                  />
                  <img
                    src={projectsIllustration1}
                    alt="GIF transparent"
                    className="mt-6 w-full max-w-[100px]"
                  />
                  <img
                    src={projectsIllustration2}
                    alt="GIF transparent"
                    className="mt-6 w-full max-w-[100px]"
                  />
                  <img
                    src={projectsIllustration3}
                    alt="GIF transparent"
                    className="mt-6 w-full max-w-[100px]"
                  />
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 ">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://media.istockphoto.com/id/1411195926/fr/photo/chef-de-projet-travaillant-sur-ordinateur-portable-et-mettant-%C3%A0-jour-la-planification-de.jpg?b=1&s=612x612&w=0&k=20&c=KqlkDF8M6VVdcdHFaWjQA8fVdrnkvgPToQH0NRpTlww="
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-fuchsia-50"
                    />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-fuchsia-50"
                    />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/7439134/pexels-photo-7439134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-fuchsia-50"
                    />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/12899015/pexels-photo-12899015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-fuchsia-50"
                    />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-fuchsia-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto mb-10 flex w-full max-w-screen-xl flex-row place-content-center rounded-xl  bg-slate-800 p-6">
          <div className="flex flex-1 flex-col self-center text-center ">
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
        </div> */}
        <div className="bg mx-auto flex flex-col gap-4 bg-slate-800 p-20  ">
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
