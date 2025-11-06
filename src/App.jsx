import HomePage from "../src/pages/HomePage";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "../src/styles/App.css";
import AdvogadoDeFamilia from "./pages/AdvogadoDeFamilia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servico1" element={<AdvogadoDeFamilia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
