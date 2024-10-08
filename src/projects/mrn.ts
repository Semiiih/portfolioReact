import logo from "@/assets/logo.png";
import logoMSW from "@/assets/logoMSW.png";
import logoMRH from "@/assets/logoMRH.jpg";
import logoNext from "@/assets/next.png";
import logoJS from "@/assets/js.png";
import logoTailwind from "@/assets/TailwindCSS.png";
import logoReact from "@/assets/react.png";
import logoNpm from "@/assets/npm.png";
import projectsIllustration1 from "@/assets/projects-illustration1.gif";

export const projectsData = [
  {
    type: "entreprise",
    logo: logo,
    title: "Signaleo",
    description: "faire une descriptionProject One.",
    link: "https://signaleo.co/",
    details:
      "Application pour contribuer au bien être de sa ville en signalant les incidents",
    technologies: [
      { name: "Next.js", logo: logoNext },
      { name: "JavaScript", logo: logoJS },
      { name: "Tailwind CSS", logo: logoTailwind },
      { name: "React", logo: logoReact },
      { name: "Npm", logo: logoNpm },
    ],
    patrimoineInformatique: "Patrimoine informatique",
    githubFeatures: [
      {
        title: "Github",
        subtitle: "Codes sur Github pour la sauvegarde des données",
        description2:
          "Les différentes parties du projets sont splités en plusieurs repo sur Github",
      },
      {
        name: "Push to deploy.",
        description1:
          "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: projectsIllustration1,
      },
      {
        name: "SSL certificates.",
        description1:
          "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: projectsIllustration1,
      },
      {
        name: "Database backups.",
        description1:
          "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: projectsIllustration1,
      },
    ],
  },
  {
    type: "entreprise",
    logo: logoMSW,
    title: "MySocialWorker",
    description: "faire une descriptionProject Two.",
    link: "https://example.com/project-two",
    details: "Detailed description of MySocialWorker.",
    technologies: [
      { name: "Next.js", logo: logoNext },
      { name: "JavaScript", logo: logoJS },
    ],
    githubFeatures: [
      {
        name: "Push to deploy.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: projectsIllustration1,
      },
      {
        name: "SSL certificates.",
        description:
          "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: projectsIllustration1,
      },
      {
        name: "Database backups.",
        description:
          "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: projectsIllustration1,
      },
    ],
  },
  {
    type: "ecole",
    logo: logoMRH,
    title: "Project Ecole 1",
    description: "faire une description.",
    link: "https://example.com/school-project-one",
    details: "Detailed description of .",
    technologies: [
      { name: "Next.js", logo: logoNext },
      { name: "JavaScript", logo: logoJS },
    ],
  },
];
