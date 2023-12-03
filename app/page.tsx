"use client";

import { useState, useEffect } from "react";
import {
  RenewableSection,
  HeroSection,
  MainSection,
  ElectricitySection,
  CasesSection,
  ContactsSection,
  FaqSection,
  ScrollToTop
} from "@/components";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 2000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );
    };
  }, []);
  return (
    <main>
      <RenewableSection />
      <HeroSection />
      <MainSection />
      <ElectricitySection />
      <CasesSection />
      <FaqSection />
      <ContactsSection />
      <ScrollToTop scrollVisible={isVisible} />
    </main>
  );
}
