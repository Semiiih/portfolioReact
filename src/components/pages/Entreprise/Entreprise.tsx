import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { SnowpactBlock } from "@/components/atoms/SnowpactBlock/SnowpactBlock";
import { Team } from "@/components/atoms/Team/Team";
import homeMain from "@/assets/home-main.svg";
import homeBg from "@/assets/home-bg.jpg";

import { teamData } from "@/components/atoms/Team/temaData";

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
        <main className="flex flex-col items-center justify-center gap-10 self-center ">
          <div className="flex w-full justify-center pt-20">
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
      <section className=" flex justify-center bg-slate-800 pt-36">
        <div className="flex w-2/3 flex-col ">
          <p className="pb-10 text-center text-[35px] text-white">
            L'équipe Snowpact
          </p>
          <Team items={teamData} />
        </div>
      </section>
    </PublicLayout>
  );
};
