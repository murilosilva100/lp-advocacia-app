import ServiceHeader from "../../navigation/ServiceHeader";
import "../../../styles/services/labor.css";

export default function LaborHeader() {
  return (
    <ServiceHeader
      activeArea="labor"
      headerId="labor-header"
      navId="labor-navbar"
      logoId="labor-nav_logo"
      navContainerClassName="labor-navbar-container"
    />
  );
}
