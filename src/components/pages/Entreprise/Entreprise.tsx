import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { SnowpactBlock } from "@/components/atoms/SnowpactBlock/SnowpactBlock";
import { Team } from "@/components/atoms/Team/Team";
import homeBg from "@/assets/home-bg.jpg";
import livraison from "@/assets/livraison.png";
import conception from "@/assets/conception.png";
import developpement from "@/assets/developpement.png";
import etudeDeBesoin from "@/assets/etudeDeBesoin.png";

import { teamData } from "@/components/atoms/Team/temaData";
import HeaderSnowpact from "@/components/atoms/HeaderSnowpact/HeaderSnowpact";
import { CardApproche } from "@/components/atoms/CardApproche/CardApproche";
import FancyText from "@carefully-coded/react-text-gradient";
import { MesMissions } from "@/components/organisms/MesMissions/MesMissions";
import StackInformatique from "@/components/organisms/StackInformatique/StackInformatique";

export const Entreprise = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/avataaars2.png", "/avataaarsWinkT.png"];

  useEffect(() => {
    const changeImage = () => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    };

    const intervalId = setInterval(changeImage, 500);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images]);

  useEffect(() => {
    const smoothScrollHandler = (event: any) => {
      const target = event.target;
      if (target.tagName === "A" && target.hash) {
        event.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", smoothScrollHandler);

    return () => {
      document.removeEventListener("click", smoothScrollHandler);
    };
  }, []);
  return (
    <PublicLayout>
      <div
        className="animated-bg flex min-h-screen w-full flex-col scroll-smooth bg-white"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "",
        }}
      >
        <HeaderSnowpact />
        <main className="flex flex-col items-center justify-center gap-10 self-center ">
          <div className="flex w-full justify-center py-20">
            <div
              className=" rounded-xl lg:mx-20"
              style={{
                // height: 500,
                background: "transparent",
                position: "relative",
              }}
            >
              <Snowfall />
              <SnowpactBlock />
            </div>
          </div>
        </main>
      </div>
      <section
        id="team"
        className=" flex justify-center bg-slate-800 pb-20 pt-36"
      >
        <div className="flex flex-col lg:w-2/3 ">
          <p className="pb-10 text-center text-[50px] text-white">
            <FancyText
              gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
              animateDuration={1000}
            >
              L'équipe Snowpact
            </FancyText>
          </p>

          <Team items={teamData} />
        </div>
      </section>
      <section id="approach">
        <div className="bg-gradient-to-b from-violet-600 via-violet-400 to-violet-600 text-center sm:p-20">
          <p className="pb-10 text-start text-[50px] text-white">
            <FancyText
              gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
              animateDuration={1000}
              className="pt-10 text-center lg:pt-0"
            >
              L'approche de Snowpact
            </FancyText>
          </p>

          <div className="flex flex-col justify-center gap-10 pb-10 sm:flex-row lg:pb-0">
            <CardApproche
              label="Livraison"
              description="Nous testons et validons ensemble pour mettre de nouvelles versions en production de manière continue."
              imageSrc={livraison}
            />
            <CardApproche
              label="Conception"
              description="Nous concevons ensemble le MVP (le produit minimum viable) qui répondra à vos plus grandes attentes."
              imageSrc={conception}
            />
            <CardApproche
              label="Etude de besoin"
              description="Nous discutons ensemble de votre projet de vos objectifs, puis nous vous proposons un plan de route pour livrer votre application."
              imageSrc={etudeDeBesoin}
            />
            <CardApproche
              label="Développement"
              description="Nous développerons les fonctionnalités les plus importantes à chaque sprint pour atteindre efficacement votre objectif."
              imageSrc={developpement}
            />
          </div>
        </div>
      </section>

      <section>
        <section id="missions">
          <MesMissions />
        </section>
        <section id="stack">
          <StackInformatique />
        </section>
      </section>
    </PublicLayout>
  );
};
