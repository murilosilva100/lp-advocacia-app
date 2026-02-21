import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "../src/pages/HomePage";
import AdvogadoTrabalhista from "./pages/AdvogadoTrabalhista";
import AdvogadoCriminalista from "./pages/AdvogadoCriminalista";
import AdvogadoCivel from "./pages/AdvogadoCivel";
import "../src/styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/advogadotrabalhista" element={<AdvogadoTrabalhista />} />
        <Route path="/advogadocriminalista" element={<AdvogadoCriminalista />} />
        <Route path="/advogadocivel" element={<AdvogadoCivel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
