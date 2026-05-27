import LaborContent from "../components/sections/labor/Content";
import LaborHeader from "../components/sections/labor/Header";
import LaborHero from "../components/sections/labor/Hero";
import ServicePageLayout from "../components/layout/ServicePageLayout";

export default function LaborLawPage() {
  return <ServicePageLayout Header={LaborHeader} Hero={LaborHero} Content={LaborContent} />;
}
