import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { useEffect, useState } from "react";
import avataaars2 from "@/assets/avataaars2.png";
import avataaarsWinkT from "@/assets/avataaarsWinkT.png";

import homeBg from "@/assets/home-bg.jpg";
import FancyText from "@carefully-coded/react-text-gradient";
import { CertificationBlock } from "@/components/atoms/CertificationBlock/index";

import Certifier from "@/assets/Certifier.png";
import Certifier2 from "@/assets/Certifier2.png";

import { Cards } from "@/components/atoms/Card/Card";
import { TimeLine } from "@/components/atoms/TimeLine/TimeLine";
import { BlockProjectCard } from "@/components/organisms/BlockProjectCard";
import { CompetenceBlock } from "@/components/atoms/CompetenceBlock/CompetenceBlock";

export const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [avataaars2, avataaarsWinkT];
  useEffect(() => {
    const changeImage = () => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    };

    const intervalId = setInterval(changeImage, 500);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images]);

  return (
    <>
      <PublicLayout>
        <div
          className="animated-bg flex min-h-screen w-full flex-col bg-white"
          style={{
            backgroundImage: `url(${homeBg})`,
            backgroundSize: "",
          }}
        >
          <main className="mx-auto max-w-screen-xl">
            <div className="grid justify-items-center gap-4 pt-10 sm:grid-cols-2">
              <div className="hidden sm:block">
                <img
                  src={images[currentImageIndex].toString()}
                  alt="Avatar"
                  className="h-full w-full animate-shake animate-duration-[1500ms] animate-ease-in-out"
                />
              </div>
              <div className="animate-fade-down self-end pb-10 text-right animate-duration-[1500ms] animate-ease-in-out sm:pb-0">
                <Cards />
              </div>
            </div>
            <CertificationBlock />
          </main>
        </div>
        <section className="bg-slate-800">
          <div className="ms:mx-80 mb-32 flex justify-center border-b-2 pb-6 pt-56 text-[20px] text-white  sm:text-[40px] ">
            <FancyText
              gradient={{ from: "#0f0f0f", to: "#e3e3e3", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#bfbfbf" }}
              animateDuration={2000}
            >
              <p>MON PARCOURS TECHNOLOGIQUES</p>
            </FancyText>
          </div>
          <TimeLine />
          <div
            className="justify-center pb-32 pt-40 text-center text-[40px] sm:pt-60"
            id="certifications"
          >
            <FancyText
              gradient={{ from: "#e3e3e0", to: "#bfbfbf", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#e3e3e0" }}
              animateDuration={2000}
            >
              <p id="certifications">Mes Certifications</p>
            </FancyText>
            <img
              src={Certifier}
              alt="Avatar"
              className="absolute right-0 mx-auto flex h-36 w-36 sm:right-1  sm:mt-10 sm:h-80 sm:w-80 "
            />
            <img
              src={Certifier2}
              alt="Avatar"
              className="absolute left-0 mx-auto flex  h-32 w-32 sm:left-1 sm:h-80 sm:w-80 "
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-20 sm:flex-row ">
            <BlockProjectCard />
          </div>
          <div className="justify-center pb-32 pt-40 text-center text-[40px] sm:pt-60">
            <FancyText
              gradient={{ from: "#e3e3e0", to: "#bfbfbf", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#e3e3e0" }}
              animateDuration={2000}
            >
              <p>Mes compétences</p>
              <CompetenceBlock />
            </FancyText>
          </div>
        </section>
      </PublicLayout>
    </>
  );
};
