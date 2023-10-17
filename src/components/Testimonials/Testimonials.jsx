import React from "react";
import Slider from "./Slider";
import { Button, Heading } from "../index";
import { motion } from "framer-motion";
import { fadeInAnimationVariantBottom } from "../../animations/animations";

const Testimonials = () => {
  return (
    <motion.section
      variants={fadeInAnimationVariantBottom}
      initial="initial"
      whileInView="animate"
    >
      <Heading className=" my-10  text-center text-3xl ">
        What they’ve said
      </Heading>
      <Slider />
      <Button className=" block m-auto">Get Started</Button>
    </motion.section>
  );
};

export default Testimonials;
