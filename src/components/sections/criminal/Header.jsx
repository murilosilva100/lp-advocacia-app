import ServiceHeader from "../../navigation/ServiceHeader";
import "../../../styles/services/criminal.css";

export default function CriminalHeader() {
  return (
    <ServiceHeader
      activeArea="criminal"
      headerId="criminal-header"
      navId="criminal-navbar"
      logoId="criminal-nav_logo"
      navContainerClassName="criminal-navbar-container"
    />
  );
}
