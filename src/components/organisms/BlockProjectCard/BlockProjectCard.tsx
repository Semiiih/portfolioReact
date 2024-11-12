import { CertificationCard } from "@/components/atoms/CertificationCard/CertificationCard";
import AnssiCertification from "@/assets/AnssiCertification.png";
import PixCertification from "@/assets/PixLogo.svg.png";
import OpenCertification from "@/assets/openlogo.webp";
import AttestationAnssi from "@/assets/attestation-anssi.pdf";
import AttestationPix from "@/assets/attestation-pix.pdf";
import AttestationOpen from "@/assets/certificatOpen.png";
import logoUdemy from "@/assets/udemyLogo.png";
import certificationUdemySQL from "@/assets/certificationUdemySQL.jpg";

export const BlockProjectCard = () => {
  return (
    <>
      <CertificationCard
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
      <CertificationCard
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
      <CertificationCard
        label="OpenClassroom"
        imageSrc={OpenCertification}
        competences={[
          "Maîtrise des bases de HTML5",
          "Mettre en forme les pages web avec CSS3",
          "Agencer le contenu des pages",
          "Utilisation des fonctionnalités avancées de HTML et CSS",
        ]}
        screenshotUrl={AttestationOpen}
      />
      <CertificationCard
        label="Udemy"
        imageSrc={logoUdemy}
        imageSize="w-[250px]"
        competences={[
          "Utiliser SQL pour interroger une base de données",
          "Être à l'aise pour mettre SQL et PostgreSQL sur leur CV",
          "Apprendre à exécuter des instructions GROUP BY",
          "Reproduire des situations réelles et interroger des rapports",
        ]}
        screenshotUrl={certificationUdemySQL}
      />
    </>
  );
};
