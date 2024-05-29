import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { VeilleCard } from "@/components/atoms/VeilleCard/VeilleCard";
import mac from "@/assets/mac.jpg";
import veille1 from "@/assets/veille1.jpeg";
import veille2 from "@/assets/veille2.jpeg";
import veille4 from "@/assets/veille4.jpeg";
import veille3b from "@/assets/veille3b.jpeg";
import veille5 from "@/assets/veille5.jpeg";
import veille6 from "@/assets/veille6.jpeg";

export const Veille = () => {
  return (
    <PublicLayout>
      <main className="mx-auto max-w-screen-xl">
        <div className="mb-10 h-[200px] w-full place-content-center rounded-xl border-2 bg-violet-400 bg-opacity-20	">
          <p className="text-center text-[30px] text-white ">
            Ma veille technologique
          </p>
          <p className="mx-40 flex justify-center pt-7 text-center text-[18px] text-white">
            <span className=" font-medium underline ">Thème: </span> Quels sont
            les langages de programmation et frameworks les plus appropriés pour
            répondre efficacement aux besoins spécifiques d'un projet ?
          </p>
        </div>
        <div className="grid grid-cols-3 gap-20 rounded-xl bg-violet-400 bg-opacity-20 p-20 ">
          <VeilleCard
            className="animate-fade animate-duration-[1000ms] animate-ease-in-out"
            image={veille1}
            title="Article 1"
            description="Quel langages de programmation choisir en 2024 ?"
            href="https://www.grandeecolenumerique.fr/actualites/quel-langage-de-programmation-choisir"
          />
          <VeilleCard
            className="animate-fade animate-duration-[1000ms] animate-ease-in-out"
            image={veille2}
            title="Article 2"
            description="Les avantages d’utiliser des frameworks en développement web"
            href="https://koul.io/blog/4-avantages-d-utiliser-des-frameworks-en-developpement-web"
          />
          <VeilleCard
            className="animate-fade animate-duration-[1000ms] animate-ease-in-out"
            image={veille3b}
            title="Article 3 "
            description="Définition et Rôle dans le Développement Logiciel"
            href="https://cyberinstitut.fr/framework-definition-role-developpement-logiciel/"
          />

          <VeilleCard
            className="animate-fade animate-duration-[1000ms] animate-ease-in-out"
            image={veille4}
            title="Article 4"
            description="Les langages de programmation (et leur utilité)"
            href="https://blog.hubspot.fr/website/langage-de-programmation"
          />
          <VeilleCard
            className="animate-fade animate-duration-[1000ms] animate-ease-in-out"
            image={veille5}
            title="Article 5"
            description="Quels sont les meilleurs langages de programmation à apprendre en 2024"
            href="https://www.hays.fr/conseils-carriere/article/les-meilleurs-langages-de-programmation-%C3%80-apprendre-en-2024"
          />
          <VeilleCard
            className="animate-fade animate-duration-[1000ms] animate-ease-in-out"
            image={veille6}
            title="Article 6"
            description="Découvrez les langages et frameworks en tendance"
            href="https://www.geeketteandgreluche.fr/decouvrez-les-langages-de-programmation-et-frameworks-les-plus-tendance-du-moment/"
          />
        </div>
      </main>
    </PublicLayout>
  );
};
