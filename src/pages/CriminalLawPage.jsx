import CriminalContent from "../components/sections/criminal/Content";
import CriminalHeader from "../components/sections/criminal/Header";
import CriminalHero from "../components/sections/criminal/Hero";
import ServicePageLayout from "../components/layout/ServicePageLayout";

export default function CriminalLawPage() {
  return <ServicePageLayout Header={CriminalHeader} Hero={CriminalHero} Content={CriminalContent} />;
}
