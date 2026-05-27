import FloatingContactButton from "../sections/home/FloatingContactButton";
import Contact from "../sections/home/Contact";
import Footer from "../sections/home/Footer";

export default function ServicePageLayout(props) {
  const HeaderComponent = props.Header;
  const HeroComponent = props.Hero;
  const ContentComponent = props.Content;

  return (
    <>
      <HeaderComponent />
      <FloatingContactButton />
      <HeroComponent />
      <ContentComponent />
      <Contact />
      <Footer />
    </>
  );
}
