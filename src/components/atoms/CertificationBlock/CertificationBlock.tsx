import React from "react";
import AnssiCertification from "@/assets/AnssiCertification.png";
import PixCertification from "@/assets/PixLogo.svg.png";
import click from "@/assets/click.png";
import FancyText from "@carefully-coded/react-text-gradient";

export const CertificationBlock = () => {
  return (
    <div className="h-[200PX] w-full flex-row border-4 shadow-2xl shadow-white">
      <div className=" absolute left-44 h-[200px] w-[200px] pt-10">
        <img
          src={click}
          alt="AnssiCertification"
          className="h-32 w-32 animate-fade-right animate-duration-[1500ms] animate-fill-backwards animate-infinite animate-ease-in-out "
        />
      </div>
      <div className="flex h-[200px] w-[200px] flex-row ">
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
          className="h-full w-full"
        />
        <img src={PixCertification} alt="Avatar" className="h-full w-full " />
      </div>
    </div>
  );
};
