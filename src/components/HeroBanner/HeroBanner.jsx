import React from "react";
import Info from "./Info";
import ChartGraphics from "./ChartGraphics";

const HeroBanner = () => {
  return (
    <section className=" flex w-full justify-around flex-wrap-reverse items-center my-12 overflow-x-clip mb-20    ">
      <Info />
      <ChartGraphics />
    </section>
  );
};

export default HeroBanner;
