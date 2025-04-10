import { useState } from "react";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";

import projectsIllustration1 from "@/assets/projects-illustration1.gif";
import projectsIllustration2 from "@/assets/projects-illustration2.gif";
import projectsIllustration3 from "@/assets/projects-illustration3.gif";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { MacbookScroll } from "@/components/atoms/MacBookHeroScroll/HeroScroll";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";

export const Bilan = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  // Données pour les compétences techniques
  const technicalSkills = [
    {
      category: "Développement Front-end",
      skills: [
        { name: "HTML/CSS", icon: <FaCode size={24} /> },
        { name: "JavaScript", icon: <BiLogoJavascript size={24} /> },
        { name: "React", icon: <FaReact size={24} /> },
        { name: "Next.js", icon: <RiNextjsFill size={24} /> },
        { name: "Java", icon: <FaJava size={24} /> },
        { name: "Python", icon: <FaPython size={24} /> },
      ],
    },
    {
      category: "Développement Back-end",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={24} /> },
        { name: "Express", icon: <SiExpress size={24} /> },
      ],
    },
    {
      category: "Base de données",
      skills: [
        { name: "phpMyAdmin", icon: <FaDatabase size={24} /> },
        { name: "PostgreSQL", icon: <FaDatabase size={24} /> },
      ],
    },
    {
      category: "Outils et méthodes",
      skills: [
        { name: "Git/GitHub", icon: <FaCode size={24} /> },
        { name: "Méthodes agiles", icon: <FaProjectDiagram size={24} /> },
        { name: "Tests unitaires", icon: <FaLaptopCode size={24} /> },
      ],
    },
  ];

  const softSkills = [
    "Travail en équipe",
    "Communication",
    "Autonomie",
    "Résolution de problèmes",
    "Adaptabilité",
    "Organisation",
  ];

  const progression = [
    {
      period: "Premier semestre",
      title: "Les bases du développement",
      description:
        "Apprentissage des fondamentaux du développement web, algorithmique, programmation orientée objet et bases de données.",
      skills: ["HTML/CSS", "JavaScript", "SQL", "Algorithmique", "POO"],
      projects: ["Site web statique", "Application console"],
    },
    {
      period: "Deuxième semestre",
      title: "Approfondissement technique",
      description:
        "Consolidation des connaissances et introduction aux frameworks modernes et à la gestion de projets.",
      skills: ["React", "Node.js", "Express", "MongoDB", "Git"],
      projects: ["Application CRUD", "Portfolio personnel"],
    },
    {
      period: "Troisième semestre",
      title: "Spécialisation et projets professionnels",
      description:
        "Stage en entreprise et développement de compétences avancées en développement web et mobile.",
      skills: ["Next.js", "TypeScript", "API REST", "Redux", "Tests unitaires"],
      projects: ["Application métier", "Projet de stage"],
    },
    {
      period: "Quatrième semestre",
      title: "Projet final et préparation professionnelle",
      description:
        "Réalisation du projet final de BTS et préparation à l'insertion professionnelle.",
      skills: [
        "Gestion de projet",
        "DevOps",
        "CI/CD",
        "Méthodes agiles",
        "Veille technologique",
      ],
      projects: ["Projet final BTS", "Application full-stack"],
    },
  ];

  const keyProjects = [
    {
      title: "Signaleo",
      description:
        "Développement d'une application de gestion pour une entreprise locale pendant mon stage de première année.",
      tech: ["Next.JS", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      role: "Développement back-end front-end",
      impact: "finirrrr",
    },
    {
      title: "GestEPI",
      description:
        "Création d'une plateforme e-learning pour un établissement scolaire dans le cadre d'un projet de groupe.",
      tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "phpMyAdmin"],
      role: "Développement back-end front-end",
      impact: "finirrrr ",
    },
    {
      title: "",
      description: "",
      tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
      role: "",
      impact: "finirrrr",
    },
  ];

  return (
    <PublicLayout>
      <div className="relative overflow-hidden bg-gradient-to-b from-violet-900 to-slate-900 pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-16 flow-root sm:mt-24"
          >
            <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MacbookScroll />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Mon parcours en BTS SIO option SLAM
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Durant ces deux années intensives, j'ai développé des compétences
              techniques et personnelles qui m'ont permis d'acquérir une solide
              formation en développement d'applications. Ce bilan présente mon
              évolution, mes acquis et mes projets marquants.
            </p>

            <div className="mt-10 flex justify-center gap-6">
              <img
                src={projectsIllustration1}
                alt="GIF transparent"
                className="w-full max-w-[120px]"
              />
              <img
                src={projectsIllustration2}
                alt="GIF transparent"
                className="w-full max-w-[120px]"
              />
              <img
                src={projectsIllustration3}
                alt="GIF transparent"
                className="w-full max-w-[120px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tab.Group onChange={setSelectedTab} selectedIndex={selectedTab}>
            <Tab.List className="flex space-x-1 rounded-xl bg-slate-800/50 p-1">
              {["Compétences", "Progression", "Projets clés"].map(
                (category, idx) => (
                  <Tab
                    key={idx}
                    className={({ selected }: { selected: boolean }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${
                        selected
                          ? "bg-violet-600 text-white shadow"
                          : "text-gray-300 hover:bg-slate-700/50 hover:text-white"
                      }`
                    }
                  >
                    {category}
                  </Tab>
                ),
              )}
            </Tab.List>
            <Tab.Panels className="mt-8">
              <Tab.Panel className="rounded-xl bg-slate-800/30 p-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">
                      Compétences techniques
                    </h3>
                    <div className="space-y-6">
                      {technicalSkills.map((category, index) => (
                        <div key={index} className="mb-6">
                          <h4 className="mb-3 text-lg font-medium text-violet-300">
                            {category.category}
                          </h4>
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {category.skills.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="flex items-center gap-3 rounded-lg bg-slate-700/30 p-3 transition-all hover:bg-slate-700/50"
                              >
                                <span className="text-violet-400">
                                  {skill.icon}
                                </span>
                                <span className="text-white">{skill.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-semibold text-white">
                      Compétences comportementales
                    </h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {softSkills.map((skill, index) => (
                        <div
                          key={index}
                          className="rounded-lg bg-slate-700/30 p-4 text-center transition-all hover:bg-slate-700/50"
                        >
                          <span className="text-white">{skill}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-lg bg-gradient-to-r from-violet-800/30 to-slate-800/30 p-4">
                      <h4 className="mb-3 text-lg font-medium text-white">
                        Certifications obtenues
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="mr-2 text-violet-400">•</span>
                          <span>ANSSI - Cybersécurité initiation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-violet-400">•</span>
                          <span>PIX - Compétences numériques</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-violet-400">•</span>
                          <span>OpenClassrooms - Développement web</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-violet-400">•</span>
                          <span>Udemy - Framework React</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 rounded-lg bg-gradient-to-r from-indigo-800/30 to-slate-800/30 p-4">
                      <h4 className="mb-3 text-lg font-medium text-white">
                        Objectifs professionnels
                      </h4>
                      <p className="text-gray-300">
                        Approfondir mes connaissances dans le développement web
                        full-stack et m'orienter vers des projets innovants en
                        mettant à profit l'ensemble des compétences acquises
                        durant ma formation.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>

              <Tab.Panel className="rounded-xl bg-slate-800/30 p-6">
                <div className="relative">
                  <div
                    className="absolute left-12 top-0 h-full w-0.5 bg-violet-600"
                    aria-hidden="true"
                  />
                  <div className="space-y-16">
                    {progression.map((stage, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600">
                          <span className="text-sm font-medium text-white">
                            {index + 1}
                          </span>
                        </div>
                        <div className="ml-14">
                          <h3 className="text-xl font-medium text-white">
                            {stage.period}: {stage.title}
                          </h3>
                          <p className="mt-2 text-gray-300">
                            {stage.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {stage.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="rounded-full bg-violet-900/50 px-3 py-1 text-sm text-white"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="mt-4">
                            <h4 className="text-lg font-medium text-white">
                              Projets réalisés:
                            </h4>
                            <ul className="mt-2 space-y-1 text-gray-300">
                              {stage.projects.map((project, projectIndex) => (
                                <li
                                  key={projectIndex}
                                  className="flex items-start"
                                >
                                  <span className="mr-2 text-violet-400">
                                    •
                                  </span>
                                  <span>{project}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab.Panel>

              <Tab.Panel className="rounded-xl bg-slate-800/30 p-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {keyProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-md shadow-violet-900/20"
                    >
                      <h3 className="mb-3 text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-gray-300">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-medium text-violet-400">
                          Technologies utilisées
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="rounded-md bg-violet-900/30 px-2 py-1 text-xs text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="mb-1 text-sm font-medium text-violet-400">
                          Mon rôle
                        </h4>
                        <p className="text-sm text-gray-300">{project.role}</p>
                      </div>

                      <div>
                        <h4 className="mb-1 text-sm font-medium text-violet-400">
                          Impact
                        </h4>
                        <p className="text-sm text-gray-300">
                          {project.impact}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>

      <div className="bg-gradient-to-t from-slate-900 to-violet-900/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Vers l'avenir
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ces deux années de BTS m'ont permis de construire une base solide
              de connaissances et de compétences. Je me sens désormais prêt à
              relever de nouveaux défis, que ce soit en poursuivant mes études
              ou en intégrant le monde professionnel.
            </p>

            <div className="mt-10 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <a
                href="#contact"
                className="rounded-md bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
              >
                Me contacter
              </a>
              <a
                href="/projets"
                className="rounded-md bg-gray-800 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
              >
                Voir mes projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};
