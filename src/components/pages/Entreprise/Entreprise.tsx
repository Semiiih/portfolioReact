import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { SnowpactBlock } from "@/components/atoms/SnowpactBlock/SnowpactBlock";

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
        <SnowpactBlock />
      </main>
    </PublicLayout>
  );
};
