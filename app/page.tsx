"use client";

import { useState, useEffect } from "react";
import {
  RenewableSection,
  HeroSection,
  TeamSection,
  MainSection,
  ElectricitySection,
  ServicesSection,
  CasesSection,
  ScrollToTop
} from "@/components";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
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
      <TeamSection />
      <MainSection />
      <ElectricitySection />
      <ServicesSection />
      <CasesSection />
      <div className="custom-container relative">
        <ScrollToTop scrollVisible={isVisible} />
      </div>
    </main>
  );
}
