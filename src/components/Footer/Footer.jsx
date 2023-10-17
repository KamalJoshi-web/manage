import React from "react";
import SocialHandles from "./SocialHandles";
import FooterLinks from "./FooterLinks";
import InboxForm from "./InboxForm";
import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "../../animations/animations";

const Footer = () => {
  return (
    <motion.footer
      className=" bg-VeryDarkBlue flex  justify-around py-10 flex-wrap-reverse gap-8"
      variants={fadeInAnimationVariant}
      initial="initial"
      whileInView="animate"
    >
      <SocialHandles />
      <FooterLinks />
      <InboxForm />
    </motion.footer>
  );
};

export default Footer;
