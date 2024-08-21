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

  return (
    <PublicLayout>
      <div
        className="animated-bg flex min-h-screen w-full flex-col bg-white"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "",
        }}
      >
        <HeaderSnowpact />
        <main className="flex flex-col items-center justify-center gap-10 self-center ">
          <div className="flex w-full justify-center py-20">
            <div
              className="mx-20 rounded-xl"
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
      <section className=" flex justify-center bg-slate-800 pb-20 pt-36">
        <div className="flex w-2/3 flex-col ">
          <p className="pb-10 text-center text-[35px] text-white">
            L'équipe Snowpact
          </p>
          <Team items={teamData} />
        </div>
      </section>
      <div className="bg-gradient-to-b from-violet-600 via-violet-400 to-violet-600 text-center sm:p-20">
        <p className="pb-10 text-start text-[50px] text-white">
          <FancyText
            gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
            animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
            animateDuration={1000}
          >
            L'approche de Snowpact
          </FancyText>
        </p>
        <div className="flex flex-col justify-center gap-10 sm:flex-row">
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
    </PublicLayout>
  );
};
