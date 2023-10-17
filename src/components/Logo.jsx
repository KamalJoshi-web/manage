import React from "react";
import LogoIcon from "../assets/logo.svg";
import LogoIconWhite from "../assets/logo-white.svg";

const Logo = ({ className = "", color, ...props }) => {
  return (
    <img
      src={color ? LogoIconWhite : LogoIcon}
      alt="logo"
      className={` ${className}`}
      {...props}
    />
  );
};

export default Logo;
