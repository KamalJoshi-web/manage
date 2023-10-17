import React, { useState } from "react";
import Hamburger from "./Hamburger";

const NavigationLinks = () => {
  const [isOpen, setIsOpen] = useState(true);

  const links = [
    { name: "Pricing", path: "#" },
    { name: "Product", path: "#" },
    {
      name: "About Us",
      path: "https://github.com/KamalJoshi-web?tab=repositories",
    },
    { name: "Careers", path: "#" },
    { name: "Community", path: "#" },
  ];

  const responsiveClasses =
    "max-md:space-x-0 max-md:flex-col max-md:bg-VaryLightGray max-md:gap-4 bg-BrightRed  max-md:px-4 max-md:py-4 max-md:absolute  ";

  return (
    <>
      <ul
        className={`flex flex-row gap-0 space-x-8 w-fit  rounded-lg p-0 top-0 static bg-white max-lg:space-x-4 
          ${responsiveClasses} ${
          isOpen
            ? " max-md:invisible "
            : " duration-200 max-md:top-20 max-md:visible max-md:drop-shadow-3xl max-md:space-x-0 max-md:w-64 "
        }   `}
      >
        {links.map((link, index) => (
          <li
            key={index}
            className=" font-BeVietnamPro text-DarkBlue font-normal hover:opacity-70 text-center max-md:font-bold "
          >
            <a href={link.path} target="blank">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default NavigationLinks;
