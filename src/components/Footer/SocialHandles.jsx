import React from "react";
import { Logo, Heading } from "../index";
import Facebook from "../../assets/icon-facebook.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Youtube from "../../assets/icon-Youtube.svg";
import Pinterest from "../../assets/icon-pinterest.svg";

const SocialHandles = () => {
  const handles = [
    { icon: Facebook, path: "#" },
    { icon: Youtube, path: "https://www.youtube.com/@ReactLearnerWeb/" },
    { icon: Twitter, path: "#" },
    { icon: Pinterest, path: "#" },
    { icon: Instagram, path: "#" },
  ];

  return (
    <div className=" flex flex-col justify-between items-center  max-md:flex-col-reverse max-md:gap-5">
      {/* Copy Right  */}
      <Heading
        textSize=" text-[12px] max-md:text-[12px]"
        color="text-DarkGrayishBlue"
        className=" hidden max-md:block"
      >
        Copyright 2020. All Rights Reserved
      </Heading>
      {/* Logo */}
      <Logo color={"white"} />

      {/* Social Handles */}
      <ul className=" flex gap-2 max-md:gap-5">
        {handles.map((item, index) => (
          <li key={index}>
            <a href={item.path} target="blank">
              <img
                src={item.icon}
                alt={item.icon}
                className=" hover:invert duration-200"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialHandles;
