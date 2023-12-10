"use client";

import {
  RenewableSection,
  HeroSection,
  MainSection,
  ElectricitySection,
  CasesSection,
  ContactsSection,
  FaqSection
} from "@/components";

export default function Home() {
  return (
    <main>
      <RenewableSection />
      <HeroSection />
      <MainSection />
      <ElectricitySection />
      <CasesSection />
      <FaqSection />
      <ContactsSection />
    </main>
  );
}
