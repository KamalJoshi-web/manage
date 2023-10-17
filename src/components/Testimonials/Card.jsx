import React from "react";

const Card = ({ image, name, testimonial }) => {
  return (
    <div className=" bg-VaryLightGray min-w-[15rem]  max-w-[32rem] px-5 rounded-md my-10  max-lg:mx-auto  ">
      <img
        src={image}
        alt={`${name} - avatar `}
        className="h-12 max-w-[3rem]  relative bottom-6 "
      />
      <h2 className=" font-BeVietnamPro text-DarkBlue font-bold text-center mb-4 ">
        {name}
      </h2>
      <p className=" font-BeVietnamPro text-DarkGrayishBlue text-center pb-8 ">
        {testimonial}
      </p>
    </div>
  );
};

export default Card;
