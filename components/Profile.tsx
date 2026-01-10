"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  headTextAnimation,
  slideAnimation,
} from "@/components/animations/animation";
import GradualSpacing from "@/components/animations/GradualSpacing";
import RotateBetweenWords from "@/components/animations/RotateBetweenWords";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Profile = () => {
  const [firstGradualComplete, setFirstGradualComplete] = useState(false);
  const [secondGradualComplete, setSecondGradualComplete] = useState(false);
  const [firstBottonComplete, setFirstBottonComplete] = useState(false);

  return (
    <div className="mt-16 items-center  justify-between sm:mt-16 sm:mx-8">
      <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-6xl ">
        <GradualSpacing
          text="Transforming Ideas Into"
          onComplete={() => setFirstGradualComplete(true)}
        />
        {firstGradualComplete && (
          <div className=" text-orange-200">
            <GradualSpacing
              text="Digital Reality"
              onComplete={() => setSecondGradualComplete(true)}
            />
          </div>
        )}
        {secondGradualComplete && (
          <div className="mt-5 flex flex-col items-center justify-center">
            <motion.h1 variants={headTextAnimation} className="text-2xl">
              Hi, I&apos;m Sandeeb, I am{" "}
            </motion.h1>
            <div className="mx-2 text-slate-600">
              <RotateBetweenWords
                words={[
                  "Full-Stack Developer",
                  "Freelancer",
                  "OpenSource Contributor",
                ]}
              />
            </div>
          </div>
        )}
        {secondGradualComplete && (
          <div className="mt-3 flex justify-center w-full">
            <motion.button
              variants={slideAnimation("up")}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover={{ scale: 1.1 }}
              onAnimationComplete={() => setFirstBottonComplete(true)}
              className="w-36 flex mr-5 items-center h-12 px-5 border  rounded-xl gap-2 cursor-pointer"
              onClick={() =>
                (window.location.href = "/SandeebAdhikari_Resume.pdf")
              }
            >
              <span className="ml-2 font-bold text-lg">
                <GradualSpacing text="Resume" />
              </span>
              <FaArrowUpRightFromSquare size={16} />
            </motion.button>
            {firstBottonComplete && (
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sandeebadhikari@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={slideAnimation("up")}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{ scale: 1.1 }}
                className="w-32 bg-orange-200 flex items-center h-12 px-5 hover:border rounded-xl cursor-pointer"
              >
                <span className="ml-2 font-bold text-black text-lg">
                  <GradualSpacing text="Contact" />
                </span>
              </motion.a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
