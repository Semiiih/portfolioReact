import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { ProjectCard } from "@/components/atoms/ProjectCard/ProjectCard";
import logo from "@/assets/logo.png";
import logoMSW from "@/assets/logoMSW.png";
import logoMRH from "@/assets/logoMRH.jpg";

export const Projets = () => {
  const projects = [
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

  return (
    <PublicLayout>
      <main className="mx-auto max-w-screen-xl">
        <div className="mb-10 h-[200px] w-full place-content-center rounded-xl border-2 bg-violet-400 bg-opacity-20">
          <p className="text-center text-[30px] text-white ">
            Les missions que j'ai réalisés :
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
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
