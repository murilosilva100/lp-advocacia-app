import ConteudoAdvCivel from "../components/SectionsAdvogadoCivel/ConteudoAdvCivel";
import HeaderAdvCivel from "../components/SectionsAdvogadoCivel/HeaderAdvCivel";
import ButtonFloatingContato from "../components/SectionsHomePage/ButtonFloatingContato";
import HomeAdvCivel from "../components/SectionsAdvogadoCivel/HomeAdvCivel";
import Contacts from "../components/SectionsHomePage/Contacts";
import Footer from "../components/SectionsHomePage/Footer";

export default function AdvogadoCivel() {
  return (
    <>
      <HeaderAdvCivel />
      <ButtonFloatingContato />
      <HomeAdvCivel />
      <ConteudoAdvCivel />
      <Contacts />
      <Footer />
    </>
  );
}
