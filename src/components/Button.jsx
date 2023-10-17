import React from "react";

const Button = ({
  children,
  type = "button",
  className = "",
  bgColor = "bg-BrightRed",
  shadow = "shadow-lg shadow-BrightRed/40 ",
  opacity = "opacity-70 ",
  cursor = "cursor-pointer",
  color = "text-VaryLightGray ",
  ...props
}) => {
  return (
    <button
      type={type}
      className={` ${bgColor} ${color}  font-BeVietnamPro font-medium text-sm tracking-wide
       capitalize py-2 px-4 rounded-3xl ${shadow} hover:${opacity} ${cursor} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
