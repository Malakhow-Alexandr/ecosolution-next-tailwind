import {
  RenewableSection,
  HeroSection,
  TeamSection,
  MainSection,
  ElectricitySection,
  ServicesSection
} from "@/components";

export default function Home() {
  return (
    <main>
      <RenewableSection />
      <HeroSection />
      <TeamSection />
      <MainSection />
      <ElectricitySection />
      <ServicesSection />
    </main>
  );
}
