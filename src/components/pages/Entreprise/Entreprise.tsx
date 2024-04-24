import { PublicLayout } from "@/components/templates/PublicLayout";
import { Link } from "react-router-dom";
import "@/components/hooks/mainAnim.css";
import { useEffect, useState } from "react";
import { Cards } from "@/components/atoms/Card/Card";
import Snowfall from "react-snowfall";

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
      <main className="flex items-center justify-center self-center ">
        <div className="flex w-[1000px] pt-20">
          <div
            style={{
              height: 500,
              width: 1000,
              background: "#282c34",
              position: "relative",
            }}
          >
            <Snowfall />

            <div className="flex h-full flex-col gap-20 rounded-xl bg-violet-400 bg-opacity-20 p-20">
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-[30px] text-white">Snowpact</p>
                <img src="/main-logo.png" alt="Avatar" className="w-32" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PublicLayout>
  );
};
