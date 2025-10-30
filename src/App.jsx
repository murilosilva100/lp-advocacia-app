import "../src/styles/App.css";
import NavBar from "../src/components/NavBar";
import ButtonFloatingContato from "../src/components/ButtonFloatingContato";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Questions from "../src/components/Questions"
import Footer from "../src/components/Footer"
import Contacts from "../src/components/Contacts"

function App() {
  return (
    <div>
      <NavBar />
      <ButtonFloatingContato />
      <Home />
      <About />
      <Services />
      <Questions />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
