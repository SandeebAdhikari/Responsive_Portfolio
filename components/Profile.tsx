"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  fadeAnimation,
  headTextAnimation,
  slideAnimation,
} from "@/components/animations/animation";
import GradualSpacing from "@/components/animations/GradualSpacing";
import RotateBetweenWords from "@/components/animations/RotateBetweenWords";

import Profile_Pic from "@/assets/image/profile-pic.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Profile = () => {
  const [firstGradualComplete, setFirstGradualComplete] = useState(false);
  const [secondGradualComplete, setSecondGradualComplete] = useState(false);
  const [firstBottonComplete, setFirstBottonComplete] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-24 md:p-10">
      <div className=" mt-[40px] text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
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
          <div className="mt-5 flex items-center justify-center">
            <motion.h1 variants={headTextAnimation} className="text-2xl">
              Hi, I'm Sandeeb, I am{" "}
            </motion.h1>
            <h1 className="mx-2 text-slate-600">
              <RotateBetweenWords
                words={[
                  "Full-Stack Developer",
                  "Freelancer",
                  "OpenSource Contributor",
                ]}
              />
            </h1>
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
              className="w-36 flex mr-5 items-center h-12 px-5 border  rounded-xl gap-2"
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
              <motion.button
                variants={slideAnimation("up")}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{ scale: 1.1 }}
                className="w-32 bg-orange-200  flex items-center h-12 px-5 hover:border rounded-xl"
                onClick={() =>
                  (window.location.href = "mailto:sandeebadhikari@gmail.com")
                }
              >
                <span className="ml-2 font-bold text-black text-lg">
                  <GradualSpacing text="Contact" />
                </span>
              </motion.button>
            )}
          </div>
        )}
      </div>
      {firstGradualComplete && (
        <motion.img
          variants={fadeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          src={Profile_Pic.src}
          alt="profile"
          className="h-[400px] w-[350px] rounded-full hover:border border-spacing-0.5 border-orange-200"
        />
      )}
    </div>
  );
};

export default Profile;
