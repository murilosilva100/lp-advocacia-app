import ServiceHeader from "../../navigation/ServiceHeader";
import "../../../styles/services/civil.css";

export default function CivilHeader() {
  return (
    <ServiceHeader
      activeArea="civil"
      headerId="civil-header"
      navId="civil-navbar"
      logoId="civil-nav_logo"
      navContainerClassName="civil-navbar-container"
    />
  );
}
