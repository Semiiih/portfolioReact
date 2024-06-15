import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../../components/pages/HomePage/HomePage";
import { Entreprise } from "@/components/pages/Entreprise/Entreprise";
import { ScrollToTop } from "@/components/hooks/ScrollToTop";
import { Veille } from "@/components/pages/Veille/Veille";
import { Projets } from "@/components/pages/Projets/Projets";

export const Router = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="about" element={<div>b</div>} />
        <Route path="veille" element={<Veille />} />
        <Route path="projets" element={<Projets />} />
        <Route path="entreprise" element={<Entreprise />} />
      </Routes>
    </ScrollToTop>
  );
};
