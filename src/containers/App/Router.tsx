import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../components/pages/HomePage/HomePage';

export const Router = () => {
  return (
    <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="about" element={<div>b</div>} />
    </Routes>
  );
};
