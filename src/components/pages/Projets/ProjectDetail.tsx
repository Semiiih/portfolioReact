import { useLocation } from "react-router-dom";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { projectsData } from "@/projects/mrn";
import FancyText from "@carefully-coded/react-text-gradient";
import { ProjetRole } from "@/components/organisms/ProjetRole/ProjetRole";
import { HeroScroll } from "@/components/atoms/HeroScroll/HeroScroll";
import { ProjetRoleCenter } from "@/components/organisms/ProjetRoleCenter/ProjetRoleCenter";
import { ProjectScreenshotsPage } from "@/components/organisms/ProjectScreenshotsPage";
import { MesMissions2images } from "@/components/organisms/MesMissions2images/MesMissions2images";
import { HeaderProjectDetails } from "@/components/organisms/HeaderProjectDetails/HeaderProjectDetails";

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
      <div className="flex flex-col items-center overflow-hidden bg-slate-800 px-4 pt-20 font-bold text-white sm:px-6 lg:px-8">
        <HeaderProjectDetails project={project} />

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

        {project.webScreenshots && project.webScreenshots.length > 0 && (
          <ProjectScreenshotsPage project={project} />
        )}

        <div className="flex flex-row gap-20 pt-32 text-center ">
          <div className="flex-1 text-center">
            <p className="mb-4 pb-2 text-[50px] md:mx-24">
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
              <MesMissions2images
                description={project.mesMissions2images}
                imageAvant={project.imageAvant}
                imageApres={project.imageApres}
                showLabels={project.showLabels}
              />
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};
