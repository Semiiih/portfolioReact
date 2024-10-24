import React from "react";
import AnssiCertification from "@/assets/AnssiCertification.png";
import PixCertification from "@/assets/PixLogo.svg.png";
// import OpenCertification from "@/assets/logoOpenclassrooms.jpeg";
import OpenCertification from "@/assets/openlogo.webp";
import click from "@/assets/click.png";
import FancyText from "@carefully-coded/react-text-gradient";

export const CertificationBlock = () => {
  const scrollToCertifications = () => {
    const certificationsSection = document.getElementById("certifications");
    if (certificationsSection) {
      certificationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="ms:mb-0 mb-8 flex h-[full] w-full flex-row justify-center border-4 shadow-2xl shadow-white sm:h-[200px] sm:justify-start"
      onClick={scrollToCertifications}
    >
      <div className="absolute left-44 hidden h-[200px] w-[200px] pt-10 sm:block">
        <img
          src={click}
          alt="AnssiCertification"
          className=" h-32 w-32 animate-fade-right animate-duration-[1500ms] animate-fill-backwards animate-infinite animate-ease-in-out "
        />
      </div>
      <div className="flex w-[200px] flex-col sm:h-[200px] sm:flex-row ">
        <p className="self-center p-4 pl-8 text-center text-[40px] text-white">
          <FancyText
            gradient={{ from: "#e3e3e0", to: "#bfbfbf", type: "linear" }}
            animateTo={{ from: "#8a8a8a", to: "#e3e3e0" }}
            animateDuration={2000}
          >
            Certifications
          </FancyText>
        </p>
        <img
          src={AnssiCertification}
          alt="AnssiCertification"
          className="mx-4 h-full w-full"
        />
        <img src={PixCertification} alt="Avatar" className="h-full w-full " />
        <img
          src={OpenCertification}
          alt="Avatar"
          className="mx-2 h-full w-full"
        />
      </div>
    </div>
  );
};
