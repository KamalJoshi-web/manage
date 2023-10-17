import React from "react";
import { Logo, Button } from "../index";
import NavigationLinks from "./NavigationLinks";
import { motion } from "framer-motion";
import { fadeInAnimationVariantTop } from "../../animations/animations";

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-around items-center py-5 relative  z-20"
      variants={fadeInAnimationVariantTop}
      initial="initial"
      whileInView="animate"
    >
      {/* Logo */}
      <Logo />
      {/* Links */}
      <NavigationLinks />
      {/* Button */}
      <Button className=" max-md:hidden">Get Started</Button>
    </motion.nav>
  );
};

export default Navbar;
