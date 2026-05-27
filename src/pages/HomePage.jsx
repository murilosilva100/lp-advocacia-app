import About from "../components/sections/home/About";
import Contact from "../components/sections/home/Contact";
import Faq from "../components/sections/home/Faq";
import FloatingContactButton from "../components/sections/home/FloatingContactButton";
import Footer from "../components/sections/home/Footer";
import Header from "../components/sections/home/Header";
import Hero from "../components/sections/home/Hero";
import Process from "../components/sections/home/Process";
import Services from "../components/sections/home/Services";
import Testimonials from "../components/sections/home/Testimonials";

function HomePage() {
  return (
    <>
      <Header />
      <FloatingContactButton />
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
