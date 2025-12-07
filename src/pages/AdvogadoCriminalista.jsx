import ConteudoAdvCriminalista from "../components/SectionsAdvogadoCriminalista/ConteudoAdvCriminalista";
import HeaderAdvCriminalista from "../components/SectionsAdvogadoCriminalista/HeaderAdvCriminalista";
import HomeAdvCriminalista from "../components/SectionsAdvogadoCriminalista/HomeAdvCriminalista";
import Contacts from "../components/SectionsHomePage/Contacts";
import Footer from "../components/SectionsHomePage/Footer"

export default function AdvogadoCriminalista() {
  return (
    <>
      <HeaderAdvCriminalista />
      <HomeAdvCriminalista />
      <ConteudoAdvCriminalista />
      <Contacts />
      <Footer />
    </>
  );
}
