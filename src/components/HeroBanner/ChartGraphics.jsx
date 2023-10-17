import React from "react";
import illustrationIntro from "../../assets/illustration-intro.svg";
import TabletPattern from "../../assets/bg-tablet-pattern.svg";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariant,
  fadeInAnimationVariantRight,
} from "../../animations/animations";

const ChartGraphics = () => {
  return (
    <div className=" relative">
      <motion.div
        className=" -z-10 before:absolute before:content-tabletPattern before:-z-10  before:-top-3/4 before:left-20 
      max-md:before:scale-[.5] max-md:before:-top-full  max-md:before:-left-36"
        variants={fadeInAnimationVariant}
        initial="initial"
        animate="animate"
      />
      <motion.img
        src={illustrationIntro}
        alt="Chart"
        className=" z-20 w-full  overflow-hidden "
        variants={fadeInAnimationVariantRight}
        initial="initial"
        whileInView="animate"
      />
    </div>
  );
};

export default ChartGraphics;
