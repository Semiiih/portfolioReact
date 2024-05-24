import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { useEffect, useState } from "react";
import { Cards } from "@/components/atoms/Card/Card";
import { HoverButton } from "@/components/atoms/ButtonHover/ButtonHover";
import { TimeLine } from "@/components/atoms/TimeLine/TimeLine";
import avataaars2 from "@/assets/avataaars2.png";
import avataaarsWinkT from "@/assets/avataaarsWinkT.png";
import homeBg from "@/assets/home-bg.jpg";

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
                  className="h-full w-full"
                />
              </div>
              <div className="self-end text-right">
                <Cards />
              </div>
            </div>
            <div className="h-[200PX] w-full border-4 shadow-2xl shadow-white"></div>
            <HoverButton />
          </main>
        </div>
        <section className="bg-slate-800">
          <div className="mx-80 mb-20 flex justify-center border-b-2 pb-6 pt-10 text-[30px] text-white">
            Mon parcours Technologiques
          </div>
          <TimeLine />
        </section>
      </PublicLayout>
    </>
  );
};
