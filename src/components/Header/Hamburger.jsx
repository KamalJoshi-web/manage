import React, { useState } from "react";
import MenuIcon from "../../assets/icon-hamburger.svg";
import CrossIcon from "../../assets/icon-close.svg";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className=" w-5 hidden   max-md:block duration-200"
    >
      {isOpen ? (
        <img src={MenuIcon} alt="Open-Menu" />
      ) : (
        <img src={CrossIcon} alt="Close-Menu" />
      )}
    </button>
  );
};

export default Hamburger;
