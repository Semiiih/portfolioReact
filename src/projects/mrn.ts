import logo from "@/assets/logo.png";
import logoMSW from "@/assets/logoMSW.png";
import logoMRH from "@/assets/logoMRH.jpg";
import logoNext from "@/assets/next.png";
import logoJS from "@/assets/js.png";
import logoTailwind from "@/assets/TailwindCSS.png";
import logoReact from "@/assets/react.png";
import logoNpm from "@/assets/npm.png";
import textAdventure from "@/assets/textAdventure.jpeg";

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
