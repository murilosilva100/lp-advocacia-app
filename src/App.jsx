import "../src/styles/App.css";
import NavBar from "../src/components/NavBar";
import Home from "../src/components/home";
import About from "../src/components/About";
import Services from "../src/components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
