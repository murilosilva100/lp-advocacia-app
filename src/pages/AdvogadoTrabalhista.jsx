import ConteudoAdvTrabalhista from "../components/SectionsAdvogadoTrabalhista/ConteudoAdvTrabalhista";
import HeaderAdvTrabalhista from "../components/SectionsAdvogadoTrabalhista/HeaderAdvTrabalhista";
import ButtonFloatingContato from "../components/SectionsHomePage/ButtonFloatingContato";
import HomeAdvTrabalhista from "../components/SectionsAdvogadoTrabalhista/HomeAdvTrabalhista";
import Contacts from "../components/SectionsHomePage/Contacts";
import Footer from "../components/SectionsHomePage/Footer"

export default function AdvogadoTrabalhista() {
  return (
    <>
      <HeaderAdvTrabalhista />
      <ButtonFloatingContato />
      <HomeAdvTrabalhista />
      <ConteudoAdvTrabalhista />
      <Contacts />
      <Footer />
    </>
  );
}
