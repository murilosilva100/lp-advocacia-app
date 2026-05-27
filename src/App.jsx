import { BrowserRouter, Route, Routes } from "react-router-dom";
import CivilLawPage from "./pages/CivilLawPage";
import CriminalLawPage from "./pages/CriminalLawPage";
import ScrollToTop from "./components/navigation/ScrollToTop";
import HomePage from "./pages/HomePage";
import LaborLawPage from "./pages/LaborLawPage";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/advogadotrabalhista" element={<LaborLawPage />} />
        <Route path="/advogadocriminalista" element={<CriminalLawPage />} />
        <Route path="/advogadocivel" element={<CivilLawPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
