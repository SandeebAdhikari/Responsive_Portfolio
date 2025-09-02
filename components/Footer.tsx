"use client";
import { motion } from "framer-motion";
import { slideAnimation } from "@/components/animations/animation";

const Footer = () => {
  return (
    <div className="mt-[100px]  h-[150px] md:px-56">
      <hr className="orange-200"></hr>
      <div className="flex mt-10 justify-between w-full text-xl font-semibold">
        <motion.h1
          variants={slideAnimation("left")}
          initial="initial"
          whileInView="animate"
          exit="exit"
        >
          SANDEEB <span className="text-slate-600">ADHIKARI</span>
        </motion.h1>
        <motion.h1
          variants={slideAnimation("right")}
          whileInView="animate"
          initial="initial"
          exit="exit"
        >
          2024 © All Rights Reserved.
        </motion.h1>
      </div>
    </div>
  );
};

export default Footer;
