import logo from "@/assets/logo.png";
import logoSnowpact from "@/assets/main-logo.png";
import logoMSW from "@/assets/logoMSW.png";
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
import php from "@/assets/PHP.svg";
import typeScript from "@/assets/typeScript.svg";
import logoYarn from "@/assets/yarn.png";
import logoSql from "@/assets/logoSql.svg";
import projectsIllustration1 from "@/assets/projects-illustration1.gif";
import signaleoGithub from "@/assets/signaleoGithub.png";
import snowpactGithub from "@/assets/snowpactGithub.png";
import snowpactSlack from "@/assets/snowpactSlack.png";
import signaleoFigma from "@/assets/signaleoFigma.png";
import signaleoSlack from "@/assets/signaleoSlack.png";
import textAdventure from "@/assets/textAdventure.jpeg";
import helioFitnessLogo from "@/assets/logoHelioFitness.png";
import logoPython from "@/assets/logoPython.webp";
import logoCss from "@/assets/css.png";
import logoHtml from "@/assets/html.png";
import logoJavaScript from "@/assets/JavaScript.webp";
import logoSQLite from "@/assets/SQLite.webp";
import logoDjangoNoir from "@/assets/DjangoNoir.webp";
import textAdventureRepo from "@/assets/textAdventureRepo.webp";
import textAdventureReadMe from "@/assets/textAdventureReadME.webp";
import textAdventurePlan from "@/assets/textAdventurePlan.webp";
import textAdventureExemple from "@/assets/textAdventureExemple.webp";
import les4Fantastiques from "@/assets/Les4Fantastiques.png";
import Les4FantastiquesRepo from "@/assets/Les4FantastiquesRepo.webp";
import Les4FantastiquesDiagramme from "@/assets/Les4FantastiquesDiagramme.webp";
import Les4FantastiquesLinear from "@/assets/Les4FantastiquesLinear.webp";
import Les4FantastiquescharteGraphique from "@/assets/Les4FantastiquescharteGraphique.webp";
import Les4fantastiquesRole from "@/assets/Les4fantastiquesRole.webp";
import logoWordPress from "@/assets/wordpress.png";
import logoO2Switch from "@/assets/o2switch.svg";
import joTickets from "@/assets/joTickets.webp";
import JoRepo from "@/assets/JoRepo.webp";
import SchemaJo from "@/assets/SchemaJO.webp";
import ReadMeJo from "@/assets/ReadMeJo.webp";
import JoRole from "@/assets/JoRole.webp";
import murat from "@/assets/team/murat.png";
import stephane from "@/assets/team/stephane.png";
import anthony from "@/assets/team/anthony.png";
import alexandre from "@/assets/team/alexandre.png";
import fahmi from "@/assets/team/fahmi.png";
import semih from "@/assets/team/semih.png";
import farid from "@/assets/team/farid.png";
import emir from "@/assets/team/emir.png";
import yasin from "@/assets/team/yasin.png";
import mohamed from "@/assets/team/mohammed.png";
import helioFitnessGitHub from "@/assets/helioFitnessGitHub.webp";
import helioFitnessFigma from "@/assets/helioFitnessFigma.webp";
import helioFitnessSlack from "@/assets/SlackHelioFitness.webp";
import HelioFitness_avant_audit from "@/assets/HelioFitness_avant_audit.webp";
import HelioFitness_apres_audit from "@/assets/HelioFitness_apres_audit.webp";
import snowpactFigma from "@/assets/snowpactFigma.webp";
import SnowpactAvant from "@/assets/Snowpact_avant.webp";
import SnowpactApres from "@/assets/Snowpact_apres.webp";
import signaleo1 from "@/assets/signaleo1.webp";
import signaleo2 from "@/assets/signaleo2.webp";
import gestEPI from "@/assets/gestEPI.webp";
import RepoGestiEPI from "@/assets/RepoGestiEPI.webp";
import diagrammeGestEPI from "@/assets/diagrammeGestEPI.webp";
import figmaGestEPI from "@/assets/figmaGestEPI.webp";

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
  textAdventure,
  textAdventureRepo,
  textAdventureReadMe,
  textAdventurePlan,
  textAdventureExemple,
  Les4FantastiquesRepo,
  Les4FantastiquesDiagramme,
  Les4FantastiquesLinear,
  Les4FantastiquescharteGraphique,
  Les4fantastiquesRole,
  JoRepo,
  SchemaJo,
  ReadMeJo,
  JoRole,
  helioFitnessGitHub,
  helioFitnessFigma,
  helioFitnessSlack,
  HelioFitness_avant_audit,
  HelioFitness_apres_audit,
  snowpactFigma,
  SnowpactAvant,
  SnowpactApres,
  signaleo1,
  signaleo2,
  RepoGestiEPI,
  diagrammeGestEPI,
  figmaGestEPI,
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
    teamMembers: [
      {
        id: 1,
        name: "Murat",
        designation: "Développeur Front / Mobile / Back",
        image: murat,
      },
      {
        id: 2,
        name: "Stephane",
        designation: "Développeur Back / DevOps",
        image: stephane,
      },
      {
        id: 3,
        name: "Mohamed",
        designation: "Business Analyst",
        image: mohamed,
      },
      {
        id: 4,
        name: "Yasin",
        designation: "Développeur Front",
        image: yasin,
      },
      {
        id: 5,
        name: "Emir",
        designation: "Apprenti développeur",
        image: emir,
      },
      {
        id: 6,
        name: "Farid",
        designation: "Développeur Front / Mobile / Back",
        image: farid,
      },
      {
        id: 7,
        name: "Semih",
        designation: "Apprenti développeur",
        image: semih,
      },
      {
        id: 8,
        name: "Fahmi",
        designation: "Développeur Front / Mobile / Back",
        image: fahmi,
      },
      {
        id: 9,
        name: "Alexandre",
        designation: "Développeur Back",
        image: alexandre,
      },
      {
        id: 10,
        name: "Anthony",
        designation: "Developpeur Junior ",
        image: anthony,
      },
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
    mesMissions2images: `En partant de la conception visuelle établie dans Figma, j'ai contribué activement au développement de Signaleo :
<ul style="list-style-type: disc; padding-left: 20px; margin-top: 10px;">
  <li style="margin-top: 10px;">J'ai développé des interfaces en respectant les maquettes Figma tout en optimisant leur implémentation technique pour garantir fluidité et réactivité.</li>
  <li style="margin-top: 10px;">J'ai mis en place une SEO complète, optimisant les balises méta, la structure du code et les temps de chargement</li>
  <li style="margin-top: 10px;">J'ai intégré et configuré des API externes pour récupérer automatiquement les informations des mairies</li>
  <li style="margin-top: 10px;">J'ai collaboré avec l'équipe pour créer une expérience de signalement fluide et intuitive, permettant aux citoyens de contribuer facilement à l'amélioration de leur cadre de vie.</li>
</ul>`,
    showLabels: false,
    imageAvant: images.signaleo1,
    imageApres: images.signaleo2,

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
        description: `Accompagne dans la conception, le développement et le déploiement de vos applications web et mobile.`,
        public: `Citoyens`,
        duree: `13 Fév 2025 - 10 mars 2025`,
      },
    ],
    technologies: [
      { name: "WordPress", logo: logoWordPress },
      { name: "o2switch", logo: logoO2Switch },
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
        subtitle: "Charte graphique Snowpact",
        description2: `Une conception soignée a été réalisée sur Figma pour définir l'identité visuelle complète du site Snowpact, servant de référence pour tout le développement.`,
      },
      {
        description1: `La palette de couleurs utilise principalement des tons bleu, créant une ambiance tech moderne et professionnelle.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des polices adaptées pour une lecture optimale et une expérience utilisateur améliorée.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des composants interactifs et des icônes ont été créés pour assurer une utilisation intuitive et une esthétique moderne.`,
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
    mesMissions2images: `En partant de la conception visuelle initiale,<br /><br />
    - J'ai développé et implémenté le design en respectant l'identité de la marque tout en optimisant l'expérience utilisateur. <br />
    - J'ai amélioré les performances SEO du site en optimisant la structure du code, les métadonnées et les temps de chargement. <br />
    - J'ai également porté une attention particulière à l'accessibilité, pour garantir une navigation fluide pour tous les utilisateurs.<br />
    - Enfin, j'ai appliqué les bonnes pratiques de développement web (responsive design, optimisation des images, code propre et maintenable) pour assurer la pérennité et l'évolutivité du projet.`,

    imageAvant: images.SnowpactAvant,
    imageApres: images.SnowpactApres,

    imageGithub: images.snowpactGithub,
    imageFigma: images.snowpactFigma,
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
      { name: "php", logo: php },
      { name: "SQL", logo: logoSql },
      { name: "React", logo: logoReact },
      { name: "TypeScript", logo: typeScript },
      { name: "Npm", logo: logoNpm },
      { name: "Yarn", logo: logoYarn },
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
    type: "entreprise",
    logo: helioFitnessLogo,
    title: "HelioFitness",
    description: "Helio Fitness est un centre de santé",
    link: "https://example.com/school-project-one",
    details: [
      {
        description: `Le site présente une interface élégante et intuitive, conçue pour mettre en valeur les différents services et programmes personnalisés offerts par le centre de santé`,
        public: `Citoyens`,
        duree: `13 Janvier 2025 - 12 Février 2025`,
      },
    ],
    technologies: [
      { name: "Next.js", logo: logoNext },
      { name: "JavaScript", logo: logoJS },
      { name: "TypeScript", logo: typeScript },
      { name: "Npm", logo: logoNpm },
      { name: "Yarn", logo: logoYarn },
    ],
    patrimoineInformatique: "Structure et Développement du Projet",
    githubFeatures: [
      {
        title: "GitLab",
        subtitle: "Gestion du Code Source",
        description2:
          "Le code est hébergé sur GitLab pour assurer la sauvegarde des données.",
      },
      {
        description1: `Nous créons des branches spécifiques pour chaque changement ou fonctionnalité, ce qui permet de travailler sans affecter le code principal et facilite les revues de code avant intégration.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Les versions majeures du projet sont étiquetées pour assurer un historique clair et permettre des retours en arrière si nécessaire.`,
        icon: projectsIllustration1,
      },
    ],
    figmaFeatures: [
      {
        title: "Representation visuelle des pages",
        subtitle: "Conception visuelle du site",
        description2: `Les maquettes du site Helio Fitness ont été présentées sous forme d'images imprimées illustrant clairement l'apparence attendue du site final, servant de référence visuelle tout au long du développement.`,
      },
      {
        description1: `Ces captures d'écran prévisionnelles montrent la structure envisagée pour le site, avec une palette de couleurs dominée par le violet et le blanc`,
        icon: projectsIllustration1,
      },
      {
        description1: `Chaque page imprimée représente une section distincte du site, comme "Le Studio" et "Le Crossfit".`,
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
    mesMissions2images: `En partant de la conception visuelle initiale,<br /><br />
       - J'ai développé et implémenté le design en respectant l'identité de la marque tout en optimisant l'expérience utilisateur. <br />
       - J'ai amélioré les performances SEO du site en optimisant la structure du code, les métadonnées et les temps de chargement. <br />
       - J'ai également porté une attention particulière à l'accessibilité, pour garantir une navigation fluide pour tous les utilisateurs.<br />
       - Enfin, j'ai appliqué les bonnes pratiques de développement web (responsive design, optimisation des images, code propre et maintenable) pour assurer la pérennité et l'évolutivité du projet.`,

    imageGithub: images.helioFitnessGitHub,
    imageFigma: images.helioFitnessFigma,
    imageSlack: images.helioFitnessSlack,
    imageAvant: images.HelioFitness_avant_audit,
    imageApres: images.HelioFitness_apres_audit,
  },
  //////////////////////////// ECOLE //////////////////////
  {
    type: "ecole",
    logo: textAdventure,
    title: "Text Adventure",
    description: "Un jeu d'aventure, résolvez des énigmes captivantes.",
    link: "https://example.com/school-project-one",
    details: [
      {
        description: `Jeu d'aventure textuel en Python où le joueur explore un lycée, interagit avec l’environnement et combat dans un système dynamique.`,
        public: `Utilisateur en local`,
        duree: `14 Mars 2024 - 04 Avril 2024`,
      },
    ],
    technologies: [{ name: "Python", logo: logoPython }],
    patrimoineInformatique: "Structure et Développement du Projet",
    githubFeatures: [
      {
        title: "GitLab",
        subtitle: "Gestion du Code Source",
        description2:
          "Le code est hébergé sur GitLab pour assurer la sauvegarde des données.",
      },
      {
        description1: `Je développe directement sur la branche principale tout en effectuant des tests pour garantir la stabilité du projet.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Les versions majeures du projet sont étiquetées pour assurer un historique clair et permettre des retours en arrière si nécessaire.`,
        icon: projectsIllustration1,
      },
    ],
    figmaFeatures: [
      {
        title: "ReadMe",
        subtitle: "Mise en situation",
        description2: `Le projet a été initialement structuré autour d’un fichier README détaillant les étapes à suivre. Celui-ci définissait le contexte du jeu, inspiré d’un manga, et les mécaniques de base à implémenter.`,
      },
      {
        description1: `J’ai suivi ces étapes méthodiquement pour développer les fonctionnalités et assurer la progression du projet. Le gameplay repose sur un jeu textuel où le joueur peut se déplacer dans un lycée fictif et interagir avec son environnement.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Le jeu intègre un système de gestion d’objets, incluant un smartphone comme objet clé et un inventaire permettant de stocker divers éléments collectés au fil du jeu.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Les actions possibles sont limitées à la saisie d’un lieu ou d’une action par l’utilisateur. Cependant, il est possible d'ajouter des interactions supplémentaires pour enrichir l’expérience.`,
        icon: projectsIllustration1,
      },
    ],
    slackFeatures: [
      {
        title: "Plan du Projet",
        subtitle: "Représentation visuelle",
        description2: `Pour structurer le développement du jeu, j’ai élaboré un plan visuel détaillé à l'aide de schémas. Ces représentations graphiques m'ont permis d'organiser les différentes interactions possibles ainsi que les connexions entre les lieux et les actions du joueur.`,
      },
      {
        description1: `Les images ont servi de guide pour la conception du système de navigation et d'interaction dans le jeu. Elles illustrent les transitions entre les différentes zones du lycée et les actions disponibles à chaque étape.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Grâce à ces schémas, j’ai pu mieux comprendre la logique du gameplay et m’assurer que chaque élément du jeu soit bien intégré et cohérent.`,
        icon: projectsIllustration1,
      },
    ],
    mesMissions: [
      {
        title: "Mon rôle dans le projet",
        description2: `Dans ce projet, j'avais plusieurs objectifs à atteindre pour structurer et développer un jeu textuel interactif. J'ai travaillé seul sur la conception, le développement et l'intégration des différentes mécaniques du jeu.`,
      },
      {
        description1: `
        - Mise en place d'un système de navigation permettant au joueur de se déplacer entre plusieurs lieux du lycée A.U.<br/>
        - Intégration d'un inventaire pour stocker des objets clés et des consommables.<br/>
        - Développement d'un système de combat où le joueur peut affronter des mannequins et obtenir des récompenses.
        `,
        icon: projectsIllustration1,
      },
      {
        description1: `
        - Gestion des actions du joueur via des choix interactifs en terminal.<br/>
        - Utilisation de Colorama pour améliorer l'affichage avec des couleurs dynamiques.<br/>
        - Optimisation du code pour une meilleure organisation et évolutivité.
        `,
        icon: projectsIllustration1,
      },
      {
        description1: `
        - Ajout d'un système d'objets récupérables et interactifs (ex : obtenir une arme, récupérer un badge, etc.).<br/>
        - Possibilité d'étendre facilement le jeu avec de nouveaux lieux et actions.<br/>
        - Respect des consignes du README initial en y ajoutant une touche personnelle.
        `,
        icon: projectsIllustration1,
      },
    ],
    imageGithub: images.textAdventureRepo,
    imageFigma: images.textAdventureReadMe,
    imageSlack: images.textAdventurePlan,
    imageAdnCron: images.textAdventureExemple,
  },
  {
    type: "ecole",
    logo: les4Fantastiques,
    title: "Les4Fantastiques",
    description:
      "Exploration de l’univers Marvel : personnages, séries et mini-jeu interactif",
    link: "https://example.com/school-project-two",
    details: [
      {
        description: `Projet réalisé en équipe de 3-4 personnes, visant à développer une application complète intégrant une API externe et une base de données pour stocker des informations utilisateur.`,
        public: `Utilisateur en local`,
        duree: `02 Octobre 2024 - 18 Décembre 2024`,
      },
    ],
    technologies: [
      { name: "Python", logo: logoPython },
      { name: "Django", logo: logoDjangoNoir },
      { name: "HTML", logo: logoHtml },
      { name: "CSS", logo: logoCss },
      { name: "JavaScript", logo: logoJavaScript },
      { name: "SQLite", logo: logoSQLite },
    ],

    patrimoineInformatique: "Structure et Développement du Projet",
    githubFeatures: [
      {
        title: "GitLab",
        subtitle: "Gestion du Code Source",
        description2:
          "Le projet est hébergé sur GitLab pour assurer la sauvegarde des données et faciliter la collaboration entre les membres de l’équipe.",
      },
      {
        description1: `Le développement s’est fait sur différentes branches, permettant à chaque membre de l’équipe de travailler sur des fonctionnalités spécifiques sans perturber le code principal.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des commits réguliers ont été effectués pour suivre l’évolution du projet et assurer un historique de développement clair et structuré.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des revues de code et des fusions de branches ont été effectuées régulièrement afin d'assurer la stabilité et la qualité du projet.`,
        icon: projectsIllustration1,
      },
    ],
    figmaFeatures: [
      {
        title: "Conception de la Base de Données",
        subtitle: "Suivi méthodologique et structuration",
        description2: `Nous avons suivi les étapes de conception afin de structurer correctement notre base de données. Cette approche nous a permis d'organiser les relations entre les différentes entités et d'assurer la cohérence des données.`,
      },
      {
        description1: `Un diagramme de la base de données a été réalisé afin de visualiser les entités principales : Utilisateur, Série, Personnages, Question et Favoris.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Ce modèle relationnel permet de gérer efficacement les interactions entre les utilisateurs et les éléments de l’univers Marvel, garantissant une structuration optimale pour notre application.`,
        icon: projectsIllustration1,
      },
    ],
    slackFeatures: [
      {
        title: "Charte Graphique",
        subtitle: "Cohérence visuelle et identité du projet",
        description2: `Une charte graphique a été établie afin de garantir une identité visuelle cohérente et immersive, en accord avec l’univers Marvel et les 4 Fantastiques.`,
      },
      {
        description1: `Nous avons défini une typographie spécifique pour notre projet : "Avengeance-Heroic-Avenger" pour les titres, inspirée de l’univers Marvel, et "Poppins" pour le contenu, garantissant une lisibilité optimale.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Le style des boutons a été conçu pour être intuitif et dynamique, avec des couleurs contrastées et des effets de survol permettant d’améliorer l’expérience utilisateur.`,
        icon: projectsIllustration1,
      },
      {
        description1: `La mise en page a été pensée pour offrir une navigation fluide, avec un header distinctif en fond bleu, mettant en avant le logo et assurant une hiérarchie visuelle claire.`,
        icon: projectsIllustration1,
      },
    ],
    mesMissions: [
      {
        title: "Notre Rôle dans le Projet",
        subtitle: "Missions et Contributions",
        description2: `Tout au long du projet, nous avons collaboré pour structurer, concevoir et développer une application web immersive sur l’univers Marvel. Notre travail s'est articulé autour de plusieurs axes essentiels.`,
      },
      {
        description1: `
        - Élaboration d'un cahier des charges détaillé définissant les objectifs et fonctionnalités de l'application.</br>
        - Conception et modélisation de la base de données pour structurer les interactions entre utilisateurs, séries et personnages.</br>
        - Développement du backend avec Django, incluant l’intégration d’une API externe pour récupérer des données Marvel.
        `,
        icon: projectsIllustration1,
      },
      {
        description1: `
        - Mise en place d'une charte graphique cohérente inspirée de l’univers Marvel, incluant typographie, palette de couleurs et design des boutons.</br>
        - Développement du frontend en respectant l’identité visuelle définie, assurant une navigation fluide et une bonne ergonomie.</br>
        - Gestion du code source sur GitLab avec un workflow collaboratif, incluant les branches et les revues de code.
        `,
        icon: projectsIllustration1,
      },
      {
        description1: `
        - Tests et ajustements pour garantir la stabilité et l’expérience utilisateur optimale.</br>
        - Documentation complète du projet, avec un README détaillé et un guide d’installation pour faciliter la prise en main.
        `,
        icon: projectsIllustration1,
      },
    ],
    imageGithub: images.Les4FantastiquesRepo,
    imageFigma: images.Les4FantastiquesDiagramme,
    imageSlack: images.Les4FantastiquescharteGraphique,
    imageLinear: images.Les4FantastiquesLinear,
    imageAdnCron: images.Les4fantastiquesRole,
  },
  {
    type: "ecole",
    logo: joTickets,
    title: "JO Tickets",
    description:
      "Plateforme de billetterie pour les Jeux Olympiques, achat et de gestion des billets pour assister aux événements.",
    link: "https://example.com/school-project-three",
    details: [
      {
        description: `Développement d'une application web en Django avec une API REST permettant la gestion des matchs de football des JO, l'achat de billets et le contrôle d'accès via QR Code.`,
        public: `Utilisateur en local`,
        duree: `05 Janvier 2025 - 17 mars 2025`,
      },
    ],
    technologies: [
      { name: "Python", logo: logoPython },
      { name: "Django", logo: logoDjangoNoir },
      { name: "HTML", logo: logoHtml },
      { name: "CSS", logo: logoCss },
      { name: "JavaScript", logo: logoJavaScript },
      { name: "SQLite", logo: logoSQLite },
    ],

    patrimoineInformatique: "Structure et Développement du Projet",
    githubFeatures: [
      {
        title: "GitLab",
        subtitle: "Gestion du Code Source",
        description2:
          "Le projet est hébergé sur GitLab pour assurer la sauvegarde des données et faciliter un développement structuré.",
      },
      {
        description1: `Le développement a été réalisé en autonomie, en adoptant un workflow organisé avec des commits réguliers pour assurer un suivi clair des évolutions.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Une gestion rigoureuse des versions a été mise en place, avec des sauvegardes fréquentes afin d’éviter toute perte de données et faciliter les retours en arrière si nécessaire.`,
        icon: projectsIllustration1,
      },
      {
        description1: `L'utilisation d'un dépôt centralisé a permis d'assurer une organisation optimale du code et une meilleure traçabilité des modifications.`,
        icon: projectsIllustration1,
      },
    ],
    figmaFeatures: [
      {
        title: "Planification et Conception",
        subtitle: "Un diagramme pour structurer le projet",
      },
      {
        description1: `Le diagramme a permis d'identifier les trois principales composantes du projet : l'application mobile pour les supporters, l'API Django pour la gestion des données et l'application de scan des billets.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Grâce à cette représentation visuelle, j'ai pu structurer la mise en place des endpoints API, définir les fonctionnalités à développer en priorité et organiser les flux de données entre les différentes applications.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Cela m'a permis d'avoir une vision globale du projet dès le départ, de m'assurer que chaque module fonctionne de manière cohérente et d'anticiper les défis techniques liés à l'intégration des différentes fonctionnalités.`,
        icon: projectsIllustration1,
      },
    ],
    slackFeatures: [
      {
        title: "Documentation et Organisation",
        subtitle: "Un README pour structurer le projet",
        description2: `Dès le début du projet, un fichier README a été rédigé afin de définir les objectifs, les étapes de développement et les fonctionnalités principales à implémenter.`,
      },
      {
        description1: `Le README contenait des informations détaillées sur l'installation du projet, la configuration de la base de données et le déploiement de l’API pour assurer un bon démarrage.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Ce document a également servi de guide technique, expliquant comment interagir avec l’API Django, quelles routes étaient disponibles et comment les applications mobiles devaient s’y connecter.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Grâce à cette documentation, il a été plus facile de suivre une méthodologie claire et de garantir une bonne structuration du code et des fonctionnalités.`,
        icon: projectsIllustration1,
      },
    ],
    mesMissions: [
      {
        title: "Mon Rôle dans le Projet",
        subtitle: "Missions et Contributions",
        description2: `Dans ce projet, j’ai travaillé en autonomie sur l’ensemble des aspects techniques, de la conception à la mise en place de l’application. Mon travail s'est articulé autour de plusieurs axes essentiels.`,
      },
      {
        description1: `
        - Conception et structuration de la base de données, en ajoutant notamment le modèle de gestion des tickets.</br>
        - Développement du backend en Django, avec mise en place des endpoints API permettant la gestion des matchs, des billets et de l'authentification utilisateur.</br>
        - Implémentation d’un système sécurisé pour l’achat de billets et la génération de QR Codes uniques.`,
        icon: projectsIllustration1,
      },
      {
        description1: `
        - Développement de l’interface d’administration Django pour permettre aux super utilisateurs de gérer les événements et les scores des matchs.</br>
        - Mise en place de la gestion des sessions et de l'authentification via API pour permettre la connexion des utilisateurs sur l’application mobile.</br>
        - Création d’un scanner de billets fonctionnel capable de lire un QR Code et de vérifier la validité du ticket via l’API.`,
        icon: projectsIllustration1,
      },
      {
        description1: `
        - Gestion du code source sur GitLab avec un suivi rigoureux des versions grâce à des commits réguliers.</br>
        - Tests et corrections des fonctionnalités API et intégration des différentes parties du projet pour assurer une communication fluide entre les applications.</br>
        - Rédaction d’un README détaillé pour documenter l’installation, le fonctionnement de l’API et les appels nécessaires pour l’interaction avec l’application mobile.`,
        icon: projectsIllustration1,
      },
    ],
    imageGithub: images.JoRepo,
    imageFigma: images.SchemaJo,
    imageSlack: images.ReadMeJo,
    imageAdnCron: images.JoRole,
  },
  {
    type: "ecole",
    logo: gestEPI,
    title: "GestEPI",
    description:
      "Une gestion efficace des EPI pour garantir la sécurité de vos cordistes",
    link: "https://example.com/school-project-three",
    details: [
      {
        description: `Développement d'une application fullstack en React pour la gestion des EPI, backend avec API intégrant un système d'alertes automatiques pour les vérifications à programmer.`,
        public: `Utilisateur en local`,
        duree: `20 Janvier 2025 - 17 mars 2025 `,
      },
    ],
    technologies: [
      { name: "React", logo: logoReact },
      { name: "phpMyAdmin", logo: logoSql },
      { name: "Tailwind", logo: logoTailwind },
    ],

    patrimoineInformatique: "Structure et Développement du Projet",
    githubFeatures: [
      {
        title: "GitHub",
        subtitle: "Gestion du Code Source",
        description2:
          "Le projet est organisé en deux modules distincts dans un dépôt GitHub : GestEPIFront pour l'interface utilisateur et GestEPIBack pour la logique métier et l'API.",
      },
      {
        description1: `La structure du projet est clairement divisée avec TypeScript offrant une base solide et maintenable. Les commits réguliers et la documentation permettent de suivre l'évolution du développement.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Le développement a suivi une approche méthodique avec des branches dédiées et des mises à jour régulières du README pour faciliter la prise en main du projet par d'autres développeurs.`,
        icon: projectsIllustration1,
      },
      {
        description1: `L'utilisation d'un dépôt centralisé a permis d'assurer une organisation optimale du code et une meilleure traçabilité des modifications, facilitant la collaboration et les revues de code.`,
        icon: projectsIllustration1,
      },
    ],
    figmaFeatures: [
      {
        title: "Interface Utilisateur",
        subtitle: "Maquettes et Design System",
        description2: `Les maquettes ont été soigneusement conçues pour offrir une expérience intuitive aux gestionnaires d'EPI, avec une organisation claire des informations et des actions possibles.`,
      },
      {
        description1: `L'interface principale présente un tableau de bord complet des EPI avec des colonnes bien structurées permettant de visualiser rapidement les informations essentielles : identifiant, marque, modèle, dates importantes et fréquence de contrôle.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Un système de couleurs intuitif est utilisé pour distinguer les différents statuts des équipements et des contrôles, facilitant la prise de décision pour les gestionnaires et cordistes.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Des formulaires de saisie épurés et fonctionnels ont été conçus pour l'ajout et la modification des EPI ainsi que pour l'enregistrement des contrôles, assurant une expérience utilisateur optimale.`,
        icon: projectsIllustration1,
      },
    ],
    slackFeatures: [
      {
        title: "Analyse Fonctionnelle",
        subtitle: "Diagramme des cas d'utilisation",
        description2: `L'analyse des besoins a été formalisée par un diagramme UML des cas d'utilisation, mettant en évidence les fonctionnalités essentielles du système et les interactions avec les différents acteurs.`,
      },
      {
        description1: `Le diagramme distingue clairement les deux types d'utilisateurs (gestionnaire d'EPI et cordiste) et leurs permissions respectives, structurant ainsi le développement des fonctionnalités et de la gestion des droits.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Les cas d'utilisation principaux sont organisés autour des fonctionnalités d'enregistrement et de consultation des EPI et de leurs contrôles, avec une attention particulière au système d'alertes pour les vérifications à venir.`,
        icon: projectsIllustration1,
      },
      {
        description1: `Cette modélisation a servi de référence tout au long du développement, assurant que toutes les fonctionnalités requises soient correctement implémentées selon les besoins des utilisateurs finaux.`,
        icon: projectsIllustration1,
      },
    ],

    mesMissions2images: `<p>Cette application a nécessité une attention particulière aux besoins des utilisateurs et aux exigences réglementaires:</p>
<ul style="list-style-type: disc; padding-left: 20px; margin-top: 10px;">
  <li>J'ai développé l'interface utilisateur en suivant les maquettes pour les gestionnaires d'EPI qui manipulent fréquemment l'application.</li>
  <li>J'ai implémenté une logique métier permettant le suivi précis des dates de contrôle et la gestion des statuts des équipements conformément aux normes de sécurité.</li>
  <li>J'ai créé un système d'alerte visuel et par notification pour signaler les équipements nécessitant une vérification, priorisant ainsi la sécurité des cordistes.</li>
  <li>J'ai veillé à rendre l'application responsive pour permettre son utilisation sur le terrain via des appareils mobiles par les gestionnaires et cordistes.</li>
</ul>`,

    showLabels: false,
    imageAvant: images.signaleo1,
    imageApres: images.signaleo2,

    imageGithub: images.RepoGestiEPI,
    imageFigma: images.figmaGestEPI,
    imageSlack: images.diagrammeGestEPI,
    imageAdnCron: images.JoRole,
  },
];
