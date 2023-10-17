import React from "react";
import { Heading } from "../index";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariant,
  fadeInAnimationVariantLeft,
} from "../../animations/animations";

const About = () => {
  return (
    <div className=" mb-20 relative">
      <motion.div
        className=" before:absolute before:content-tabletPattern before:-z-10  before:top-72 before:right-48 
        max-md:before:-top-[32rem]  max-md:before:-right-[30rem] max-md:before:scale-50  overflow-hidden "
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
      />
      <motion.div
        variants={fadeInAnimationVariantLeft}
        initial="initial"
        whileInView="animate"
      >
        <Heading className=" text-4xl max-md:text-3xl mb-10 ">
          What’s different about <br /> Manage?
        </Heading>
        <p className=" leading-6 font-BeVietnamPro text-DarkGrayishBlue text-start max-md:text-center">
          Manage provides all the functionality your <br /> team needs, without
          the complexity. Our <br /> software is tailor-made for modern digital{" "}
          <br />
          product teams.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
