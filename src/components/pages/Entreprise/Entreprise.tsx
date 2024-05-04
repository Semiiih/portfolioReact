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

            <div className="flex h-full flex-row rounded-xl border-4 border-gray-400 bg-violet-400 bg-opacity-20 pl-10 ">
              <div className="flex-1 flex-col items-center  self-center">
                <div className="flex flex-1 flex-col items-center py-4 ">
                  <p className="text-[30px] text-white">Snowpact</p>
                  <img
                    src="/images/main-logo.png"
                    alt="logoSnow"
                    className="w-32"
                  />
                  <img
                    src="/images/localisation2.png"
                    alt="loca"
                    className="z-0 mt-10 w-[400px] rounded-xl border-4 border-gray-400"
                  />
                </div>
              </div>
              <div className="relative flex flex-1 self-center">
                <a
                  href="https://snowpact.com/"
                  target="_blank"
                  className="block"
                >
                  <img
                    src="/images/MacSnow.png"
                    alt="MacSnow.png"
                    className="w-[1000px] transform rounded-xl transition duration-300 hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PublicLayout>
  );
};
