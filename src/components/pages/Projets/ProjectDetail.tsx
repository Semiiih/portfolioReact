import { useLocation } from "react-router-dom";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { projectsData } from "@/projects/mrn";
import FancyText from "@carefully-coded/react-text-gradient";
import { ProjetRole } from "@/components/organisms/ProjetRole/ProjetRole";
import { HeroScroll } from "@/components/atoms/HeroScroll/HeroScroll";
import { ProjetRoleCenter } from "@/components/organisms/ProjetRoleCenter/ProjetRoleCenter";
import { Colaboration } from "@/components/atoms/Colaboration";
import { useState } from "react";

export const ProjectDetail = () => {
  const location = useLocation();
  const selectedProjectTitle = location.state?.projectTitle;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projectsData.find(
    (proj) => proj.title === selectedProjectTitle,
  );

  if (!project) {
    return <div>Aucun projet sélectionné</div>;
  }

  return (
    <PublicLayout>
      <div className="flex flex-col items-center overflow-hidden bg-slate-800 pt-20 font-bold text-white">
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
        <p className="pb-20 pt-6">
          {typeof project.details === "string"
            ? project.details
            : project.description}
        </p>
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
              {typeof project.details === "string"
                ? project.details
                : project.details[0]?.description}
            </FancyText>
          </p>
        </div>
        <div className="flex flex-row gap-20 pt-20 text-center">
          <div className="flex-1text-center">
            <p className="mx-24 mb-4 border-b-2 pb-2 text-[25px]">
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
                {typeof project.details === "string"
                  ? project.details
                  : project.details[0]?.public}
              </FancyText>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-20 pt-32 text-center ">
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
        {project.teamMembers && project.teamMembers.length > 0 && (
          <div>
            <p className="mx-24 mb-4 border-b-2 pb-2 pt-20 text-center text-[25px]">
              Les membres du projet
            </p>
            <Colaboration people={project.teamMembers} />
          </div>
        )}
        {/* <Ecard /> */}
        <div className="flex flex-col items-center gap-7 pt-32 text-center text-[50px] ">
          <h1>
            <FancyText
              gradient={{ from: "#FFFF", to: "#808080", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
              animateDuration={1000}
            >
              {project.patrimoineInformatique}
            </FancyText>
          </h1>
          {project.githubFeatures && (
            <ProjetRole
              features={project.githubFeatures}
              imagePosition="right"
              image={project.imageGithub}
            />
          )}
          {project.figmaFeatures && (
            <ProjetRole
              features={project.figmaFeatures}
              imagePosition="left"
              image={project.imageFigma}
            />
          )}
          {project.slackFeatures && (
            <ProjetRole
              features={project.slackFeatures}
              imagePosition="right"
              image={project.imageSlack}
            />
          )}
        </div>
        {project.imageLinear && <HeroScroll image={project.imageLinear} />}
        <div className="flex flex-row gap-20 pt-32 text-center ">
          <div className="flex-1 text-center">
            <p className="mx-24 mb-4 pb-2 text-[50px]">
              <FancyText
                gradient={{ from: "#FFFF", to: "#808080", type: "linear" }}
                animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
                animateDuration={1000}
              >
                Mes missions
              </FancyText>
            </p>
            {project.mesMissions && (
              <div className="flex justify-center gap-8">
                {project.imageAdnCron && (
                  <ProjetRoleCenter
                    features={project.mesMissions}
                    image={project.imageAdnCron || project.logo}
                  />
                )}
              </div>
            )}
            {project.mesMissions2images && (
              <div className="flex flex-col items-center justify-center gap-8 px-10">
                {project.mesMissions2images && (
                  <div className="mt-8 max-w-4xl rounded-xl bg-slate-800/30 p-6 text-white">
                    <h3 className="mb-4 text-center text-xl font-semibold">
                      Évolution du projet
                    </h3>
                    <div
                      className="text-start text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: project.mesMissions2images,
                      }}
                    ></div>
                  </div>
                )}

                <div className="flex flex-col gap-8 pb-20 md:flex-row md:gap-12">
                  {project.imageAvant && (
                    <div className="relative flex flex-1 flex-col items-center">
                      <img
                        src={project.imageAvant}
                        alt="Version initiale"
                        className="h-auto max-w-full cursor-pointer rounded-lg shadow-lg transition-transform hover:scale-105"
                        onClick={() => setSelectedImage(project.imageAvant)}
                      />
                      {project.showLabels !== false && (
                        <span className="mt-10 rounded-md bg-violet-500 px-4 py-1 text-white">
                          Avant
                        </span>
                      )}
                    </div>
                  )}
                  {project.imageApres && (
                    <div className="relative  flex flex-1 flex-col items-center">
                      <img
                        src={project.imageApres}
                        alt="Version finale"
                        className="h-auto max-w-full cursor-pointer rounded-lg shadow-lg transition-transform hover:scale-105"
                        onClick={() => setSelectedImage(project.imageApres)}
                      />
                      {project.showLabels !== false && (
                        <span className="mt-10 rounded-md bg-violet-700 px-4 py-1 text-white">
                          Après
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {selectedImage && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                  >
                    <div className="relative max-h-[90vh] max-w-[90vw]">
                      <img
                        src={selectedImage}
                        alt="Image agrandie"
                        className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
                      />
                      <button
                        className="absolute -right-4 -top-4 rounded-full bg-violet-600 p-2 text-white transition-colors hover:bg-violet-800"
                        onClick={() => setSelectedImage(null)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};
