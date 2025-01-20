import logo from "@/assets/logo.png";
import logoSnowpact from "@/assets/main-logo.png";
import logoMSW from "@/assets/logoMSW.png";
import logoMRH from "@/assets/logoMRH.jpg";
import logoADN from "@/assets/logoADN.webp";
import adnRepo from "@/assets/adnRepo.png";
import adnCron from "@/assets/adnCron.png";
import adnLinear from "@/assets/adnLinear.png";
import LinearSignaleo from "@/assets/LinearSignaleo.png";
import adnSlack from "@/assets/adnSlack.png";
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
  adnRepo,
  adnSlack,
  LinearSignaleo,
  adnLinear,
  adnCron,
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
    imageLinear: images.LinearSignaleo,
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
    title: "ADN",
    type: "entreprise",
    logo: logoADN,
    description: "Animation Digital Network",
    link: "https://signaleo.co/",
    details: [
      {
        description: `Site français au service du stream d'animation et anime en vostfr et vf`,
        public: `Citoyens`,
        duree: `10 Sept 2024 - 10 Oct 2024`,
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
        title: "GitLab",
        subtitle: "Codes sur GitLab pour la sauvegarde des données",
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
    mesMissions: [
      {
        title: "CRON",
        subtitle: "Command Run On Time",
        description2: `Un cron en informatique est un outil utilisé pour automatiser l'exécution de tâches répétitives à des intervalles de temps définis`,
      },
      {
        description1: `Ma mission était de :<br /><br />
        - Automatisation efficace de la mise à jour des données (comme mise à jour des abonnés, des épisodes).<br />
        - Code plus clair, modulaire et évolutif grâce à la migration du PHP vers du Typescript .<br />
        - Meilleure fiabilité grâce à l'ajout de tests garantissant le bon fonctionnement du CRON.`,
        icon: projectsIllustration1,
        codeSnippet: `// Test: Suppression des abonnés existants et insertion des nouveaux
        it('should delete all previous subscribers and insert new active subscriptions', async () => {
          // Définition des dates de début et de fin de l'abonnement
          const startDate = dayjs().subtract(1, 'month').toDate();
          const endDate = dayjs().add(1, 'month').toDate();

          // Création et insertion d'un abonné existant
          const existingSubscriber = subscribersFactory();
          await testDbManager.persistSubscribers(existingSubscriber);

          // Définition des abonnements actifs
          const activeSubscriptions: Order[] = [
            {
              userId: 123,
              subscriptionId: 2,
              startDate: startDate,
              endDate: endDate,
              price: 10,
              method: 'credit_card',
              paymentDate: new Date(),
              validated: true,
              ip: '127.0.0.1',
              stripeInvoiceId: 'invoice_123',
            },
            {
              userId: 124,
              subscriptionId: 3,
              startDate: startDate,
              endDate: endDate,
              price: 10,
              method: 'credit_card',
              paymentDate: new Date(),
              validated: true,
              ip: '127.0.0.1',
              stripeInvoiceId: 'invoice_124',
            },
          ];

          // Persistance des nouveaux abonnements
          for (const sub of activeSubscriptions) {
            await testDbManager.persistOrder(sub);
          }

          // Mise à jour des abonnés
          await subscriberRepository.updateSubscribers();

          // Vérification de l'insertion des nouveaux abonnements
          const subscribers = await testDbManager
            .getConnectionManager()
            .query('SELECT * FROM adn_subscribers');

          expect(subscribers).toHaveLength(2);
          expect(subscribers).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ user_id: 123, subscription_id: 2, end: expect.any(Date) }),
              expect.objectContaining({ user_id: 124, subscription_id: 3, end: expect.any(Date) }),
            ]),
          );
        });`,
        codeSnippet2: `
        "event_rule": {
          "schedule": "cron(0 3 * * *)",
          "retry": 3
        },
        
        // 0 3 * * *   -->   à 03h00  tout les jours 
        `,
      },
    ],
    imageGithub: images.adnRepo,
    imageSlack: images.adnSlack,
    imageLinear: images.adnLinear,
    imageAdnCron: images.adnCron,
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
