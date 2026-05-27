import CivilContent from "../components/sections/civil/Content";
import CivilHeader from "../components/sections/civil/Header";
import CivilHero from "../components/sections/civil/Hero";
import ServicePageLayout from "../components/layout/ServicePageLayout";

export default function CivilLawPage() {
  return <ServicePageLayout Header={CivilHeader} Hero={CivilHero} Content={CivilContent} />;
}
