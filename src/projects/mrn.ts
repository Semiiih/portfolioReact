import logo from "@/assets/logo.png";
import logoSnowpact from "@/assets/main-logo.png";
import logoMSW from "@/assets/logoMSW.png";
import logoMRH from "@/assets/logoMRH.jpg";
import logoNext from "@/assets/next.png";
import logoJS from "@/assets/js.png";
import logoTailwind from "@/assets/TailwindCSS.png";
import logoReact from "@/assets/react.png";
import logoNpm from "@/assets/npm.png";
import logoYarn from "@/assets/yarn.png";
import logoStorybook from "@/assets/storybook.png";
import projectsIllustration1 from "@/assets/projects-illustration1.gif";
import signaleoGithub from "@/assets/signaleoGithub.png";
import snowpactGithub from "@/assets/snowpactGithub.png";
import snowpactSlack from "@/assets/snowpactSlack.png";
import signaleoFigma from "@/assets/signaleoFigma.png";
import signaleoSlack from "@/assets/signaleoSlack.png";

const images = {
  signaleoGithub,
  snowpactGithub,
  snowpactSlack,
  signaleoFigma,
  signaleoSlack,
};

export const projectsData = [
  {
    title: "Signaleo",
    type: "entreprise",
    logo: logo,
    description:
      "Application pour contribuer au bien être de sa ville en signalant les incidents",
    link: "https://signaleo.co/",
    details: [
      {
        description: `Application mobile pour faciliter la gestion des incidents dans les villes pour les citoyens et pour les mairies`,
        public: `Mairies / Citoyens`,
        duree: `10 Déc 2023 - 2024`,
      },
    ],
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
        description1: `Chaque membre de l'équipe travaille sur des branches spécifiques pour assurer des tests sans perturbation du code principal. Les revues de code et les fusions sont effectuées régulièrement.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Les versions majeures du projet sont étiquetées pour assurer un historique clair et permettre des retours en arrière si nécessaire.`,
        icon: projectsIllustration1,
      },
    ],
    figmaFeatures: [
      {
        title: "Figma",
        subtitle: "Charte graphique du projet",
        description2: `Un design sur Figma a été réalisé pour se calquer dessus pour les couleurs, polices, design des composants ect..
          Il était donc impératif de bien s'appuyer sur les modèles`,
      },
      {
        description1: `Une palette de couleurs soigneusement sélectionnée pour refléter l'identité de la marque. Chaque teinte a été choisie pour maintenir une cohérence visuelle et faciliter la reconnaissance par les utilisateurs.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des polices adaptées pour une lecture optimale et une expérience utilisateur améliorée.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des composants interactifs et des icônes ont été créés pour assurer une utilisation intuitive et une esthétique moderne. `,
        icon: projectsIllustration1,
      },
    ],
    slackFeatures: [
      {
        title: "Slack",
        subtitle: "Communication sur Slack",
        description2: `On communique sur Slack en cas de besoin et surtout pour suivre l'avancement du projet ainsi que des tâches`,
      },
      {
        description1: `Chaque aspect du projet dispose de son propre canal, permettant une organisation structurée et la séparation des discussions importantes.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des notifications régulières nous informent des mises à jour et rappels de réunions, assurant une synchronisation de l'équipe.`,
        icon: projectsIllustration1,
      },
    ],
    imageGithub: images.signaleoGithub,
    imageFigma: images.signaleoFigma,
    imageSlack: images.signaleoSlack,
  },
  {
    title: "Snowpact",
    type: "entreprise",
    logo: logoSnowpact,
    description: "Agence agile du web et du mobile",
    link: "https://signaleo.co/",
    details: [
      {
        description: `Application mobile pour faciliter la gestion des incidents dans les villes pour les citoyens et pour les mairies`,
        public: `Citoyens`,
        duree: `06 Fév 2022 - 2024`,
      },
    ],
    technologies: [
      { name: "Next.js", logo: logoNext },
      { name: "JavaScript", logo: logoJS },
      { name: "Tailwind CSS", logo: logoTailwind },
      { name: "React", logo: logoReact },
      { name: "Npm", logo: logoNpm },
      { name: "Yarn", logo: logoYarn },
      { name: "Storybook", logo: logoStorybook },
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
        description1: `Chaque membre de l'équipe travaille sur des branches spécifiques pour assurer des tests sans perturbation du code principal. Les revues de code et les fusions sont effectuées régulièrement.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Les versions majeures du projet sont étiquetées pour assurer un historique clair et permettre des retours en arrière si nécessaire.`,
        icon: projectsIllustration1,
      },
    ],
    figmaFeatures: [
      {
        title: "Figma",
        subtitle: "Charte graphique du projet",
        description2: `Un design sur Figma a été réalisé pour se calquer dessus pour les couleurs, polices, design des composants ect..
          Il était donc impératif de bien s'appuyer sur les modèles`,
      },
      {
        description1: `Une palette de couleurs soigneusement sélectionnée pour refléter l'identité de la marque. Chaque teinte a été choisie pour maintenir une cohérence visuelle et faciliter la reconnaissance par les utilisateurs.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des polices adaptées pour une lecture optimale et une expérience utilisateur améliorée.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des composants interactifs et des icônes ont été créés pour assurer une utilisation intuitive et une esthétique moderne. `,
        icon: projectsIllustration1,
      },
    ],
    slackFeatures: [
      {
        title: "Slack",
        subtitle: "Communication sur Slack",
        description2: `On communique sur Slack en cas de besoin et surtout pour suivre l'avancement du projet ainsi que des tâches`,
      },
      {
        description1: `Chaque aspect du projet dispose de son propre canal, permettant une organisation structurée et la séparation des discussions importantes.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des notifications régulières nous informent des mises à jour et rappels de réunions, assurant une synchronisation de l'équipe.`,
        icon: projectsIllustration1,
      },
    ],
    imageGithub: images.snowpactGithub,
    imageFigma: images.signaleoFigma,
    imageSlack: images.snowpactSlack,
  },
  {
    title: "MySocialWorker",
    type: "entreprise",
    logo: logoMSW,
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
    image: images.snowpactSlack,
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
