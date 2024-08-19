import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { useEffect, useState } from "react";
import { Cards } from "@/components/atoms/Card/Card";
import { TimeLine } from "@/components/atoms/TimeLine/TimeLine";
import avataaars2 from "@/assets/avataaars2.png";
import avataaarsWinkT from "@/assets/avataaarsWinkT.png";

import homeBg from "@/assets/home-bg.jpg";
import { TiltEffect } from "@/components/atoms/TiltEffect/TiltEffect";
import FancyText from "@carefully-coded/react-text-gradient";
import { CertificationBlock } from "@/components/atoms/CertificationBlock/index";
import AnssiCertification from "@/assets/AnssiCertification.png";
import PixCertification from "@/assets/PixLogo.svg.png";
import Certifier from "@/assets/Certifier.png";
import Certifier2 from "@/assets/certifier2.png";
import AttestationAnssi from "@/assets/attestation-anssi.pdf";
import AttestationPix from "@/assets/attestation-pix.pdf";

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
            <div className="grid grid-cols-2 justify-items-center gap-4 pt-10">
              <div>
                <img
                  src={images[currentImageIndex].toString()}
                  alt="Avatar"
                  className="h-full w-full animate-shake animate-duration-[1500ms] animate-ease-in-out"
                />
              </div>
              <div className="animate-fade-down self-end text-right animate-duration-[1500ms] animate-ease-in-out">
                <Cards />
              </div>
            </div>
            <CertificationBlock />
          </main>
        </div>
        <section className="bg-slate-800">
          <div className="mx-80 mb-32 flex justify-center border-b-2 pb-6 pt-56 text-[40px] text-white ">
            <FancyText
              gradient={{ from: "#0f0f0f", to: "#e3e3e3", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#bfbfbf" }}
              animateDuration={2000}
            >
              MON PARCOURS TECHNOLOGIQUES
            </FancyText>
          </div>
          <TimeLine />
          <div className="justify-center pb-32 pt-60 text-center text-[40px]">
            <FancyText
              gradient={{ from: "#e3e3e0", to: "#bfbfbf", type: "linear" }}
              animateTo={{ from: "#8a8a8a", to: "#e3e3e0" }}
              animateDuration={2000}
            >
              Mes Certifications
            </FancyText>
            <img
              src={Certifier}
              alt="Avatar"
              className="absolute right-1 mx-auto mt-10 flex h-80 w-80 "
            />
            <img
              src={Certifier2}
              alt="Avatar"
              className="absolute left-0 mx-auto  flex h-80 w-80 "
            />
          </div>
          <div
            id="certifications"
            className="flex flex-row justify-center gap-20 "
          >
            <TiltEffect
              label="Mooc Anssi"
              imageSrc={AnssiCertification}
              competences={[
                "Panorama de la SSI",
                "Sécurité de l’authentification",
                "Sécurité sur Internet",
                "Sécurité du poste de travail et nomadisme",
              ]}
              screenshotUrl={AttestationAnssi}
            />
            <TiltEffect
              label="Pix"
              imageSrc={PixCertification}
              competences={[
                "Informations et données",
                "Communication et collaboration",
                "Création de contenu",
                "Protection et sécurité",
                "Environnement numérique",
              ]}
              screenshotUrl={AttestationPix}
            />
            <TiltEffect
              label="Pix"
              imageSrc={PixCertification}
              competences={[
                "Informations et données",
                "Communication et collaboration",
                "Création de contenu",
                "Protection et sécurité",
                "Environnement numérique",
              ]}
            />
          </div>
        </section>
      </PublicLayout>
    </>
  );
};
