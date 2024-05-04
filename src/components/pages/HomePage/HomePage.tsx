import { PublicLayout } from "@/components/templates/PublicLayout";
import { Link } from "react-router-dom";
import "@/components/hooks/mainAnim.css";
import { useEffect, useState } from "react";
import { Cards } from "@/components/atoms/Card/Card";

export const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/avataaars2.png", "/images/avataaarsWinkT.png"];
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
      <main className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 justify-items-center	 gap-4 pt-10">
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
      </main>
    </PublicLayout>
  );
};
