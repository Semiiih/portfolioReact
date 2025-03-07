import { useState } from "react";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { VeilleCard } from "@/components/atoms/VeilleCard/VeilleCard";
import { Input } from "@/components/atoms/Input/Input";
import veille1 from "@/assets/veille1.jpeg";
import veille2 from "@/assets/veille2.jpeg";
import veille3b from "@/assets/veille3b.jpeg";
import veille4 from "@/assets/veille4.jpeg";
import veille5 from "@/assets/veille5.jpeg";
import veille6 from "@/assets/veille6.jpeg";
import { LampContainer } from "@/components/atoms/Lamp/Lamp";
import { motion } from "framer-motion";
import FancyText from "@carefully-coded/react-text-gradient";

import video from "@/assets/programmer2.gif";
import projectsIllustration1 from "@/assets/projects-illustration1.gif";
import projectsIllustration2 from "@/assets/projects-illustration2.gif";
import projectsIllustration3 from "@/assets/projects-illustration3.gif";

import VeilleHero from "@/assets/VeilleHero.png";
import VeilleHero2 from "@/assets/VeilleHero2.jpeg";
import VeilleHero3 from "@/assets/VeilleHero3.png";
import VeilleHero4 from "@/assets/VeilleHero4.jpg";

export const Veille = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSortedByDate, setIsSortedByDate] = useState(false);

  const articles = [
    {
      image: veille1,
      title: "Le Framework Electrobun ",
      description:
        "Electrobun est disponible pour créer des applications de bureau multiplateformes écrites en TypeScript, Electrobun vise à être un framework inclus dans les piles pour la construction, le test et la mise à jour.",
      href: "https://typescript.developpez.com/actu/365027/Le-Framework-Electrobun-creer-des-applications-de-bureau-multiplateformes-ecrites-en-TypeScript/",
      rating: 5,
      date: "22 novembre 2024",
      source: "Jade Emy",
    },
    {
      image: veille2,
      title: "Les nouveautés de NextJS 15",
      description:
        "NextJS 15 a été présenté aux yeux du monde le 24 octobre 2024 à San Francisco, voici tout ce que l'on sait des puissantes nouveautés de NextJS 15 !",
      href: "https://believemy.com/r/les-nouveautes-de-nextjs-15",
      rating: 4,
      date: "12/05/2024",
      source: "Louis-Nicolas Leuillet",
    },
    {
      image: veille3b,
      title: "Article 3",
      description: "Définition et Rôle dans le Développement Logiciel",
      href: "https://cyberinstitut.fr/framework-definition-role-developpement-logiciel/",
      rating: 3,
      date: "2024-01-25",
      source: "fffff",
    },
    {
      image: veille4,
      title: "Article 4",
      description: "Les langages de programmation (et leur utilité)",
      href: "https://typescript.developpez.com/actu/368264/A-partir-de-la-version-23-6-0-Node-js-prend-en-charge-TypeScript-par-defaut-en-raison-de-sa-popularite-croissante-TypeScript-etant-la-fonctionnalite-la-plus-demandee-sur-Node-js/",
      rating: 4,
      date: "2024-01-30",
      source: "fffff",
    },
    {
      image: veille5,
      title: "Node.js prend en charge TypeScript par défaut",
      description:
        "À partir de la version 23.6.0, Node.js prend en charge TypeScript par défaut, en raison de sa popularité croissante",
      href: "https://www.hays.fr/conseils-carriere/article/les-meilleurs-langages-de-programmation-%C3%80-apprendre-en-2024",
      rating: 5,
      date: "21 janvier 2025",
      source: "Jade Emy",
    },
    {
      image: veille6,
      title: "Article 6",
      description: "Découvrez les langages et frameworks en tendance",
      href: "https://www.geeketteandgreluche.fr/decouvrez-les-langages-de-programmation-et-frameworks-les-plus-tendance-du-moment/",
      rating: 2,
      date: "2024-02-10",
      source: "fffff",
    },
  ];

  const sortByDate = (a: any, b: any) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return isSortedByDate ? dateB.getTime() - dateA.getTime() : 0;
  };

  const filteredArticles = articles
    .filter((article) => {
      const matchesSearchTerm =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRating = selectedRating
        ? article.rating === selectedRating
        : true;

      return matchesSearchTerm && matchesRating;
    })
    .sort(sortByDate);

  return (
    <PublicLayout>
      {/* <VeilleHeader /> */}
      <LampContainer className="hidden md:flex ">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Le thème de ma veille <br />
        </motion.h1>
      </LampContainer>
      <div className="overflow-hidden pb-0">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-10 sm:pt-60 lg:px-8 lg:pt-10">
          <div className="mx-auto flex max-w-2xl flex-col-reverse gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:flex-row lg:items-center">
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 ">
              <div className=" w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-1 xl:pt-80">
                <div className="relative">
                  <img
                    alt=""
                    src={VeilleHero}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-cyan-300"
                  />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    alt=""
                    src={VeilleHero2}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-cyan-300"
                  />
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src={VeilleHero3}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-cyan-300"
                  />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    alt=""
                    src={VeilleHero4}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-cyan-300"
                  />
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-sm-light shadow-cyan-300"
                  />
                </div>
              </div>
            </div>

            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="relative mt-0 text-center text-[25px] leading-10 text-white sm:max-w-md lg:mt-44 lg:max-w-none lg:pl-20 lg:text-[42px]">
                <FancyText
                  gradient={{
                    from: "#e3e3e0",
                    to: "#bfbfbf",
                    type: "linear",
                  }}
                  animateTo={{ from: "#13DDF0", to: "#e3e3e0" }}
                  animateDuration={2000}
                >
                  <p>
                    {/* Quels sont les langages de programmation et frameworks les
                    plus appropriés pour répondre efficacement aux besoins
                    spécifiques d'un projet ? */}
                    Les nouveautés sur les langages de programmation et
                    frameworks
                  </p>
                </FancyText>
              </h1>
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
          </div>
        </div>
      </div>

      <main className="mx-auto  pt-20">
        {/* <div className="mb-10 h-[200px] w-full place-content-center rounded-xl border-2 bg-violet-400 bg-opacity-20">
          <p className="mx-40 flex justify-center pt-7 text-center text-[22px] text-white">
            <span className="font-medium underline">Thème: </span> Quels sont
            les langages de programmation et frameworks les plus appropriés pour
            répondre efficacement aux besoins spécifiques d'un projet ?
          </p>
        </div> */}

        <div className="bg-slate-900  py-14">
          <Input
            placeholder="Recherchez un article..."
            onChange={(e) => setSearchTerm(e.target.value)}
            selectedRating={selectedRating}
            onRatingChange={setSelectedRating}
            onSortByDate={() => setIsSortedByDate(!isSortedByDate)}
          />
        </div>
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 bg-slate-900 bg-opacity-100 p-5 sm:grid-cols-2 sm:gap-10 sm:p-10 lg:grid-cols-3 lg:gap-20 lg:bg-opacity-40 lg:p-20">
          {filteredArticles.map((article, index) => (
            <VeilleCard
              key={index}
              className="animate-fade animate-duration-[1000ms] animate-ease-in-out"
              image={article.image}
              title={article.title}
              description={article.description}
              href={article.href}
              rating={article.rating}
              date={article.date}
              source={article.source}
            />
          ))}
          {filteredArticles.length === 0 && (
            <p className="text-white">Aucun article trouvé</p>
          )}
        </div>
      </main>
    </PublicLayout>
  );
};
