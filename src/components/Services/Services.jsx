import React from "react";
import About from "./About";
import ServiceDetail from "./ServiceDetail";

const Services = () => {
  return (
    <section className=" flex  justify-around  flex-wrap overflow-x-clip">
      <About />
      <ServiceDetail />
    </section>
  );
};

export default Services;
