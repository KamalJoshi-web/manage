import React from "react";
import { Button, Heading } from "../index";
import { motion } from "framer-motion";
import { fadeInAnimationVariantLeft } from "../../animations/animations";

const Info = () => {
  return (
    <motion.div
      variants={fadeInAnimationVariantLeft}
      initial="initial"
      whileInView="animate"
    >
      <Heading>
        Bring everyone <br /> together to build <br /> better products.
      </Heading>
      <p className=" font-BeVietnamPro text-DarkGrayishBlue my-8 leading-6 text-start max-md:text-center  ">
        Manage makes it simple for software teams <br /> to plan day-to-day
        tasks while keeping the <br /> larger team goals in view.
      </p>
      <Button className=" block m-0 max-md:m-auto">Get Started</Button>
    </motion.div>
  );
};

export default Info;
