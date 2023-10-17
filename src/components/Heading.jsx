import React from "react";

const Heading = ({
  children,
  color = "text-DarkBlue",
  textSize = "text-5xl",
  className = "",
  ...props
}) => {
  return (
    <h2
      className={` font-BeVietnamPro font-semibold    max-md:text-center
 leading-tight max-md:text-4xl ${textSize} ${color} ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading;
