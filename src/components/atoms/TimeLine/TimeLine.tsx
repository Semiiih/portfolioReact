import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ImAccessibility } from "react-icons/im";

export const TimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education  "
        contentStyle={{ background: "#8A53C7", color: "#fff" }}
        date="2023 - non défini"
        iconStyle={{ background: "#8A53C7", color: "#fff" }}
        icon={<ImAccessibility />}
      >
        <h3 className="vertical-timeline-element-title ">
          alternance chez Snowpact
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Osny</h4>
        <p>Agence de développement d'application web et mobile</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work  "
        contentStyle={{ background: "#8A53C7", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #fff" }}
        date="2023 - 2025 "
        iconStyle={{ background: "#8A53C7", color: "#fff" }}
        icon={<ImAccessibility />}
      >
        <h3 className="vertical-timeline-element-title">Esiee-IT</h3>
        <h4 className="vertical-timeline-element-subtitle">Pontoise</h4>
        <p>
          BTS SIO SLAM, préparation à la mise en place de solutions
          informatiques au sein des entreprises, en vue de gérer efficacement un
          parc informatique complet.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(135, 135, 135)", color: "#fff" }}
        date="2021 - 2023"
        iconStyle={{ background: "rgb(135, 135, 135)", color: "#fff" }}
        icon={<ImAccessibility />}
      >
        <h3 className="vertical-timeline-element-title">
          Stage chez Point services mobiles{" "}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Avignon</h4>
        <p>
          Chaîne nationale spécialisée dans la réparation de smartphones et
          tablettes
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(135, 135, 135)", color: "#fff" }}
        date="2021 - 2023"
        iconStyle={{ background: "rgb(135, 135, 135)", color: "#fff" }}
        icon={<ImAccessibility />}
      >
        <h3 className="vertical-timeline-element-title">STI2D Option SIN</h3>
        <h4 className="vertical-timeline-element-subtitle">Avignon</h4>
        <p>
          SIN, aborde la façon dont le traitement numérique de l'information
          permet le pilotage des produits et l'optimisation de leurs usages et
          de leurs performances environnementales.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        contentStyle={{ background: "rgb(135, 135, 135)", color: "#fff" }}
        date="2020 - 2021"
        iconStyle={{ background: "rgb(135, 135, 135)", color: "#fff" }}
        icon={<ImAccessibility />}
      >
        <h3 className="vertical-timeline-element-title ">Général Option NSI</h3>
        <h4 className="vertical-timeline-element-subtitle">Avignon</h4>
        <p>
          NSI, comprendre les bases de la programmation, pour élaborer des
          logiciels par exemple, des sites internet, des applications pour
          smartphones, etc.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<ImAccessibility />}
      />
    </VerticalTimeline>
  );
};
