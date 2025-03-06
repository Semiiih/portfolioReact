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
import php from "@/assets/PHP.svg";
import typeScript from "@/assets/typeScript.svg";
import logoYarn from "@/assets/yarn.png";
import logoSql from "@/assets/logoSql.svg";
import logoStorybook from "@/assets/storybook.png";
import projectsIllustration1 from "@/assets/projects-illustration1.gif";
import signaleoGithub from "@/assets/signaleoGithub.png";
import snowpactGithub from "@/assets/snowpactGithub.png";
import snowpactSlack from "@/assets/snowpactSlack.png";
import signaleoFigma from "@/assets/signaleoFigma.png";
import signaleoSlack from "@/assets/signaleoSlack.png";
import textAdventure from "@/assets/textAdventure.jpeg";
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
import joTickets from "@/assets/joTickets.webp";
import JoRepo from "@/assets/JoRepo.webp";
import SchemaJo from "@/assets/SchemaJo.webp";
import ReadMeJo from "@/assets/ReadMeJo.webp";
import JoRole from "@/assets/JoRole.webp";

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
];
