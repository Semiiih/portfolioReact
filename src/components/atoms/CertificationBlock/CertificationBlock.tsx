import { useState } from "react";
import AnssiCertification from "@/assets/AnssiCertification.png";
import PixCertification from "@/assets/PixLogo.svg.png";
import OpenCertification from "@/assets/openlogo.webp";
import udemyLogo from "@/assets/udemyLogo.png";
import click from "@/assets/click.png";

export const CertificationBlock = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToCertifications = () => {
    const certificationsSection = document.getElementById("certifications");
    if (certificationsSection) {
      certificationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="mx-auto  w-full max-w-6xl overflow-hidden rounded-t-xl hover:shadow-lg hover:shadow-white lg:rounded-xl"
      id="certification-block"
    >
      <div
        className="relative cursor-pointer bg-gradient-to-r from-violet-600 to-indigo-800 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-violet-400/30"
        onClick={scrollToCertifications}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Click indicator - only visible on desktop */}
        <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block">
          <img
            src={click}
            alt="Click for details"
            className="h-16 w-16 animate-pulse transition-opacity animate-duration-[2000ms]"
            style={{ opacity: isHovered ? 1 : 0.6 }}
          />
        </div>

        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Mes Certifications
        </h2>

        <div className="grid grid-cols-2 items-center justify-items-center gap-4 md:grid-cols-4">
          <div className="certification-card">
            <img
              src={AnssiCertification}
              alt="ANSSI Certification"
              className="h-20 object-contain transition-transform duration-300 hover:scale-110 md:h-24"
            />
            <p className="mt-2 text-center text-xs text-white md:text-sm">
              ANSSI
            </p>
          </div>

          <div className="certification-card">
            <img
              src={PixCertification}
              alt="PIX Certification"
              className="h-20 object-contain transition-transform duration-300 hover:scale-110 md:h-24"
            />
            <p className="mt-2 text-center text-xs text-white md:text-sm">
              PIX
            </p>
          </div>

          <div className="certification-card">
            <img
              src={OpenCertification}
              alt="Open Certification"
              className="h-20 object-contain transition-transform duration-300 hover:scale-110 md:h-24"
            />
            <p className="mt-2 text-center text-xs text-white md:text-sm">
              OpenClassrooms
            </p>
          </div>

          <div className="certification-card">
            <img
              src={udemyLogo}
              alt="Udemy Certification"
              className="h-20 object-contain transition-transform duration-300 hover:scale-110 md:h-24"
            />
            <p className="mt-2 text-center text-xs text-white md:text-sm">
              Udemy
            </p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-white/80">
            Cliquez pour voir mes certifications en détail
          </p>
        </div>
      </div>
    </div>
  );
};
