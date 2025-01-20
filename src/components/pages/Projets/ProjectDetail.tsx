import { useLocation } from "react-router-dom";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { projectsData } from "@/projects/mrn";
import FancyText from "@carefully-coded/react-text-gradient";
import { Ecard } from "@/components/atoms/Ecard/index";
import { ProjetRole } from "@/components/organisms/ProjetRole/ProjetRole";
import { HeroScroll } from "@/components/atoms/HeroScroll/HeroScroll";
import { ProjetRoleCenter } from "@/components/organisms/ProjetRoleCenter/ProjetRoleCenter";

export const ProjectDetail = () => {
  const location = useLocation();
  const selectedProjectTitle = location.state?.projectTitle;

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
              Duré de la mission
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
        {/* <Ecard /> */}
        <div className="flex flex-col items-center gap-7 text-center text-[50px] ">
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
                    image={project.imageAdnCron}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};
