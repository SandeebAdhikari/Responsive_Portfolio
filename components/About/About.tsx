"use client";
import { motion } from "framer-motion";
import React from "react";
import MultiDirectionSlide from "@/components/animations/MultiDirectionSlide";

import AboutCard from "@/components/About/AboutCard";

const About = () => {
  const description =
    "Hi, Im Sandeeb, a Full Stack Developer with a passion for blending technology and creativity to build meaningful digital experiences. I love creating everything from full-stack applications—like a banking management system and an e-commerce platform—to engaging visuals, from 3D animations in Blender to 2D designs in Procreate.AI excites me the most; I’m fascinated by its potential to empower people and drive innovation. My future goal is to start a company focused on discovering and nurturing talent worldwide, helping individuals realize their potential regardless of where they’re from. Driven by curiosity and creativity, I’m committed to building solutions that make a real impact. Let’s create something amazing together!";

  return (
    <>
      <div className="text-3xl md:text-5xl lg:text-6xl w-full mt-16">
        <MultiDirectionSlide text1="Passion Fuels Purpose!" />
        <div className="text-xl p-2 sm:text-3xl lg:text-4xl">
          <MultiDirectionSlide text2="Get To Know More" />
        </div>

        <div className="flex justify-between items-center w-full">
          <motion.div className=" sm:flex flex-1 w-1/2 text-center sm:px-8">
            <AboutCard title="BIOGRAPHY" description={description} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
