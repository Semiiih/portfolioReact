import React, { useState } from "react";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { VeilleCard } from "@/components/atoms/VeilleCard/VeilleCard";
import { Input } from "@/components/atoms/Input/Input";
import veille1 from "@/assets/veille1.jpeg";
import veille2 from "@/assets/veille2.jpeg";
import veille3b from "@/assets/veille3b.jpeg";
import veille4 from "@/assets/veille4.jpeg";
import veille5 from "@/assets/veille5.jpeg";
import veille6 from "@/assets/veille6.jpeg";

export const Veille = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSortedByDate, setIsSortedByDate] = useState(false);

  const articles = [
    {
      image: veille1,
      title: "Article 1",
      description: "Quel langages de programmation choisir en 2024 ?",
      href: "https://www.grandeecolenumerique.fr/actualites/quel-langage-de-programmation-choisir",
      rating: 5,
      date: "2024-01-15",
    },
    {
      image: veille2,
      title: "Article 2",
      description:
        "Les avantages d’utiliser des frameworks en développement web",
      href: "https://koul.io/blog/4-avantages-d-utiliser-des-frameworks-en-developpement-web",
      rating: 4,
      date: "2024-01-20",
    },
    {
      image: veille3b,
      title: "Article 3",
      description: "Définition et Rôle dans le Développement Logiciel",
      href: "https://cyberinstitut.fr/framework-definition-role-developpement-logiciel/",
      rating: 3,
      date: "2024-01-25",
    },
    {
      image: veille4,
      title: "Article 4",
      description: "Les langages de programmation (et leur utilité)",
      href: "https://blog.hubspot.fr/website/langage-de-programmation",
      rating: 4,
      date: "2024-01-30",
    },
    {
      image: veille5,
      title: "Article 5",
      description:
        "Quels sont les meilleurs langages de programmation à apprendre en 2024",
      href: "https://www.hays.fr/conseils-carriere/article/les-meilleurs-langages-de-programmation-%C3%80-apprendre-en-2024",
      rating: 5,
      date: "2024-02-05",
    },
    {
      image: veille6,
      title: "Article 6",
      description: "Découvrez les langages et frameworks en tendance",
      href: "https://www.geeketteandgreluche.fr/decouvrez-les-langages-de-programmation-et-frameworks-les-plus-tendance-du-moment/",
      rating: 2,
      date: "2024-02-10",
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
      <main className="mx-auto max-w-screen-xl">
        <div className="mb-10 h-[200px] w-full place-content-center rounded-xl border-2 bg-violet-400 bg-opacity-20">
          {/* <p className="text-center text-[30px] text-white">
            Ma veille technologique
          </p> */}
          <p className="mx-40 flex justify-center pt-7 text-center text-[22px] text-white">
            <span className="font-medium underline">Thème: </span> Quels sont
            les langages de programmation et frameworks les plus appropriés pour
            répondre efficacement aux besoins spécifiques d'un projet ?
          </p>
        </div>
        <div className="bg-violet-400 bg-opacity-20 py-10">
          <Input
            placeholder="Search articles..."
            onChange={(e) => setSearchTerm(e.target.value)}
            selectedRating={selectedRating}
            onRatingChange={setSelectedRating}
            onSortByDate={() => setIsSortedByDate(!isSortedByDate)}
          />
        </div>
        <div className="grid grid-cols-3 gap-20 rounded-xl bg-violet-400 bg-opacity-20 p-20">
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
