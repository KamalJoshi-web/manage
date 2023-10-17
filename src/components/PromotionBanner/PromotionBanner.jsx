import React from "react";
import { Button, Heading } from "../index";
import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "../../animations/animations";

const PromotionBanner = () => {
  return (
    <motion.section
      className=" bg-BrightRed flex justify-around items-center 
    flex-wrap gap-5 overflow-clip relative py-10 mt-20 "
      variants={fadeInAnimationVariant}
      initial="initial"
      whileInView="animate"
    >
      <Heading
        color=" text-white"
        textSize=" text-3xl"
        className="  z-40 before:content-promotionBannerDesktop  before:absolute before:-top-20 before:right-0 
        max-md:before:content-promotionBannerMobile  max-md:before:right-80  "
      >
        Simplify how your team <br /> works today.
      </Heading>
      <Button
        bgColor="bg-white"
        shadow="none"
        color=" text-BrightRed"
        className=" z-50"
      >
        Get Started
      </Button>
    </motion.section>
  );
};

export default PromotionBanner;
