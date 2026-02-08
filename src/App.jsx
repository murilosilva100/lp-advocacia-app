import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "../src/pages/HomePage";
import AdvogadoDeFamilia from "./pages/AdvogadoDeFamilia";
import AdvogadoCriminalista from "./pages/AdvogadoCriminalista";
import AdvogadoCivel from "./pages/AdvogadoCivel";
import "../src/styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/advogadodefamilia" element={<AdvogadoDeFamilia />} />
        <Route path="/advogadocriminalista" element={<AdvogadoCriminalista />} />
        <Route path="/advogadocivel" element={<AdvogadoCivel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
