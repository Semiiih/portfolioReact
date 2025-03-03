import { useState } from "react";
import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { ProjectCard } from "@/components/atoms/ProjectCard/ProjectCard";
import logo from "@/assets/logo.png";
import logoMSW from "@/assets/logoMSW.png";
import logoMRH from "@/assets/logoMRH.jpg";
import logoADN from "@/assets/logoADN.webp";
import joTickets from "@/assets/joTickets.webp";
import les4Fantastiques from "@/assets/Les4Fantastiques.png";
import billetterie from "@/assets/billetterie.png";
import mercedess_concess from "@/assets/mercedess_concess.png";
import gestEPI from "@/assets/gestEPi.webp";
import gestionEntretiens from "@/assets/gestionEntretiens.webp";
import logoSnowpact from "@/assets/main-logo.png";
import logoHelioFitness from "@/assets/logoHelioFitness.png";
import grid1 from "@/assets/grid1.png";
import grid2 from "@/assets/grid2.png";
import grid3 from "@/assets/grid3.png";
import grid4 from "@/assets/grid4.png";
import FancyText from "@carefully-coded/react-text-gradient";

import textAdventure from "@/assets/textAdventure.jpeg";
import video from "@/assets/programmer2.gif";
import projectsIllustration1 from "@/assets/projects-illustration1.gif";
import projectsIllustration2 from "@/assets/projects-illustration2.gif";
import projectsIllustration3 from "@/assets/projects-illustration3.gif";

import { SwitchButton } from "@/components/atoms/ProjectCard/switchButton";
import { useLocation } from "react-router-dom";
import { projectsData } from "@/projects/mrn";

export const Projets = () => {
  const [isEcole, setIsEcole] = useState(false);

  const location = useLocation();
  const selectedProjectTitle = location.state?.projectTitle;
  const project = projectsData.find(
    (proj) => proj.title === selectedProjectTitle,
  );
  const projetsEntreprise = [
    {
      logo: logo,
      title: "Signaleo",
      description:
        "Application pour contribuer au bien être de sa ville en signalant les incidents",
      link: "https://example.com/project-one",
    },
    {
      logo: logoADN,
      title: "ADN",
      description:
        "Site français au service du stream d'animation et anime en vostfr et vf",
      link: "https://example.com/project-three",
    },
    {
      logo: logoSnowpact,
      title: "Snowpact",
      description: "Agence agile du web et du mobile",
      link: "https://example.com/project-three",
    },
    {
      logo: logoHelioFitness,
      title: "HelioFitness",
      description: "Centre de santé par le sport & l'alimentation",
      link: "https://example.com/project-two",
    },
    {
      logo: logoMRH,
      title: "Mon Resto'Halal",
      description: "Application qui référence les restaurant halal en France",
      link: "https://example.com/project-three",
    },
    {
      logo: logoMSW,
      title: "MySocialWorker",
      description:
        "Plateforme de mise en relation entre particuliers et professionnels facilitant la délégation des démarches administratives",
      link: "https://example.com/project-two",
    },
    // {
    //   logo: logoEvolios,
    //   title: "Evolios",
    //   description: "Faire une description.",
    //   link: "https://example.com/project-three",
    // },
  ];

  const projetsEcole = [
    {
      logo: textAdventure,
      title: "Text Adventure",
      description: "Un jeu d'aventure, résolvez des énigmes captivantes ",
      link: "https://example.com/school-project-one",
    },
    {
      logo: les4Fantastiques,
      title: "Les4Fantastiques",
      description:
        "site qui reference les personnages et les séries de l'univers de Marvel",
      link: "https://example.com/school-project-two",
    },
    {
      logo: gestionEntretiens,
      title: "Gestion Entretiens",
      description:
        "Développement d'une API pour la gestion des avions et des techniciens de la base aérienne d’Istres",
      link: "https://example.com/school-project-three",
    },
    {
      logo: gestEPI,
      title: "GestEPI",
      description:
        "Une gestion efficace des EPI pour garantir la sécurité de vos cordistes",
      link: "https://example.com/school-project-three",
    },
    {
      logo: joTickets,
      title: "JO Tickets",
      description:
        "Plateforme de billetterie pour les Jeux Olympiques, achat et de gestion des billets pour assister aux événements.",
      link: "https://example.com/school-project-three",
    },
    {
      logo: billetterie,
      title: "Billetterie",
      description: "Achat de billet pour se balader dans la ville de Fukuoka",
      link: "https://example.com/school-project-three",
    },
    {
      logo: mercedess_concess,
      title: "Mercedess_concess",
      description: "site vitrine pour vendre des mercedess",
      link: "https://example.com/school-project-three",
    },
  ];

  const logos = [grid1, grid2, grid3, grid4];

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
                    <p>Les projets que j'ai réalisées :</p>
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

        <div className="bg mx-auto flex flex-col gap-10 bg-slate-800 p-20 lg:gap-4  ">
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
