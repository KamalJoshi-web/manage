import React from "react";
import { Button } from "../index";
import { motion } from "framer-motion";
import { staggerAnimationVariant } from "../../animations/animations";

const ServiceDetail = () => {
  const services = [
    {
      serialNO: "01",
      name: "Track company-wide progress",
      detail: `See how your day-to-day tasks fit into the wider vision. 
      Go from tracking progress at the milestone level all the way done to the ssmallest of details. Never lose sight  of the bigger picture again.`,
    },
    {
      serialNO: "02",
      name: "Advanced built-in reports",
      detail:
        "Set internal delivery estimates and track progress toward company  goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      serialNO: "03",
      name: "Everything you need in one place",
      detail:
        " Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <div className=" w-1/3 max-lg:w-full mx-1  relative">
      <div>
        {services.map((item, index) => (
          <motion.div
            key={index}
            className=" flex gap-5 max-md:gap-0 ml-0  mb-8  max-md:ml-1  "
            variants={staggerAnimationVariant}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <div className=" static max-md:absolute py-[2px] ">
              <Button shadow="none" opacity="none">
                {item.serialNO}
              </Button>
            </div>
            <div>
              <h1
                className=" font-BeVietnamPro font-semibold text-DarkBlue mb-5 py-2
               max-md:bg-VeryPaleRed max-md:pl-20 rounded-s-3xl "
              >
                {item.name}
              </h1>
              <p className="leading-6 font-BeVietnamPro text-DarkGrayishBlue  ">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
