import { PublicLayout } from "@/components/templates/PublicLayout";
import "@/components/hooks/mainAnim.css";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { SnowpactBlock } from "@/components/atoms/SnowpactBlock/SnowpactBlock";
import { Team } from "@/components/atoms/Team/Team";
import homeMain from "@/assets/home-main.svg";
import homeBg from "@/assets/home-bg.jpg";
import murat from "@/assets/team/murat.png";
import stephane from "@/assets/team/stephane.png";
import farid from "@/assets/team/farid.png";
import alexandre from "@/assets/team/alexandre.png";
import yasin from "@/assets/team/yasin.png";
import yeliz from "@/assets/team/yeliz.png";
import sanae from "@/assets/team/sanae.png";
import kabir from "@/assets/team/kabir.png";
import fatih from "@/assets/team/fatih.png";
import gulsum from "@/assets/team/gulsum.png";
import fahmi from "@/assets/team/fahmi.png";
import mohamed from "@/assets/team/mohammed.png";
import semih from "@/assets/team/semih.png";
import anthony from "@/assets/team/anthony.png";
import amira from "@/assets/team/amira.png";
import emir from "@/assets/team/emir.png";
import siham from "@/assets/team/siham.png";

export const Entreprise = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/avataaars2.png", "/avataaarsWinkT.png"];
  const teamData = [
    {
      image: murat,
      alt: "Member 1",
      name: "Murat",
      skills: "Frontend Developer",
      position: "Lead Developer",
    },
    {
      image: stephane,
      alt: "Member 2",
      name: "Stephane",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: farid,
      alt: "Member 1",
      name: "Farid",
      skills: "Frontend Developer",
      position: "Lead Developer",
      link: "https://example.com/johndoe",
    },
    {
      image: alexandre,
      alt: "Member 2",
      name: "Alexandre",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: yasin,
      alt: "Member 1",
      name: "Yasin",
      skills: "Frontend Developer",
      position: "Lead Developer",
    },
    {
      image: yeliz,
      alt: "Member 2",
      name: "Yeliz",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: sanae,
      alt: "Member 1",
      name: "Sanae",
      skills: "Frontend Developer",
      position: "Lead Developer",
    },
    {
      image: kabir,
      alt: "Member 2",
      name: "Kabir",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: fatih,
      alt: "Member 1",
      name: "Fatih",
      skills: "Frontend Developer",
      position: "Lead Developer",
    },
    {
      image: gulsum,
      alt: "Member 2",
      name: "Gulsum",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: fahmi,
      alt: "Member 2",
      name: "Fahmi",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: mohamed,
      alt: "Mohamed",
      name: "Mohamed",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: semih,
      alt: "Member 2",
      name: "Semih",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: anthony,
      alt: "Member 2",
      name: "Anthony",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: amira,
      alt: "Member 2",
      name: "Amira",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: emir,
      alt: "Member 2",
      name: "Emir",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
    {
      image: siham,
      alt: "Member 2",
      name: "Siham",
      skills: "Backend Developer",
      position: "Senior Developer",
    },
  ];

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
          <div className="flex w-full justify-center pt-32">
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
        <div className="flex w-2/3 ">
          <Team items={teamData} />
        </div>
      </section>
    </PublicLayout>
  );
};
