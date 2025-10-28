import "../src/styles/App.css";
import NavBar from "../src/components/NavBar";
import ButtonFloatingContato from "../src/components/ButtonFloatingContato";
import Home from "../src/components/home";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Questions from "../src/components/Questions"
import Footer from "../src/components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <ButtonFloatingContato />
      <Home />
      <About />
      <Services />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
