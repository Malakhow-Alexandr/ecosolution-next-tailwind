import React from "react";
import ServicesMeta from "./ServicesMeta";
import ServicesList from "./ServicesList";

const ServicesSection = () => {
  return (
    <section id="Services" className="mb-[36px]">
      <div className="custom-container">
        <h2 className="font-title text-[36px] text-center text-mainText leading-[36px] mb-[24px]">
          THE SERVICES <br />
          WE PROVIDE
        </h2>
        <div>
          <ServicesMeta />
          <ServicesList />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
