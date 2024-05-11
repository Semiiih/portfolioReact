import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../../components/pages/HomePage/HomePage";
import { Veille } from "../../components/pages/Veille/Veille";
import { Entreprise } from "@/components/pages/Entreprise/Entreprise";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/homepage" />} />
      <Route path="homepage" element={<HomePage />} />
      <Route path="about" element={<div>b</div>} />
      <Route path="veille" element={<Veille />} />
      <Route path="entreprise" element={<Entreprise />} />
    </Routes>
  );
};
