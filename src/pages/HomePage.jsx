import NavBar from "../components/SectionsHomePage/NavBar";
import ButtonFloatingContato from "../components/SectionsHomePage/ButtonFloatingContato";
import Home from "../components/SectionsHomePage/Home";
import About from "../components/SectionsHomePage/About";
import Services from "../components/SectionsHomePage/Services";
import Questions from "../components/SectionsHomePage/Questions";
import Footer from "../components/SectionsHomePage/Footer";
import Contacts from "../components/SectionsHomePage/Contacts";

function HomePage() {
  return (
    <>
      <NavBar />
      <ButtonFloatingContato />
      <Home />
      <About />
      <Services />
      <Questions />
      <Contacts />
      <Footer />
    </>
  );
}

export default HomePage;
