import React, { useEffect, useState } from "react";
import Card from "./Card";
import { testimonials } from "./review";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { staggerAnimationVariant } from "../../animations/animations";

const Slider = () => {
  const [center, setCenter] = useState(true);
  const [slidePer, setSlidePer] = useState(35);
  const [indicators, setIndicators] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (event) => {
      if (event.matches) {
        setCenter(false);
        setSlidePer(100);
        setIndicators(true);
      } else {
        setCenter(true);
        setSlidePer(35);
        setIndicators(false);
      }
    };
    media.addEventListener("change", handleMediaChange);
    handleMediaChange(media);
    return () => {
      media.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className=" mx-1">
      <Carousel
        centerMode={center}
        showArrows={false}
        centerSlidePercentage={slidePer}
        showIndicators={indicators}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={true}
      >
        {testimonials.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            testimonial={item.review}
            image={item.picture}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
