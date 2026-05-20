import NavBar from "../components/SectionsHomePage/NavBar";
import ButtonFloatingContato from "../components/SectionsHomePage/ButtonFloatingContato";
import Home from "../components/SectionsHomePage/Home";
import About from "../components/SectionsHomePage/About";
import Services from "../components/SectionsHomePage/Services";
import Process from "../components/SectionsHomePage/Process";
import Testimonials from "../components/SectionsHomePage/Testimonials";
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
      <Process />
      <Testimonials />
      <Questions />
      <Contacts />
      <Footer />
    </>
  );
}

export default HomePage;
