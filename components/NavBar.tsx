"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/images/projects/logos/logo512.png";
import { slideAnimation } from "@/components/animations/animation";
import LinkedIn from "@/assets/icons/socials/linkedin.svg";
import GitHub from "@/assets/icons/socials/github.svg";
import Instagram from "@/assets/icons/socials/instagram.svg";
import YouTube from "@/assets/icons/socials/youtube.svg";
import Twitter from "@/assets/icons/socials/x.svg";
import TypingEffect from "@/components/animations/TypingEffect";

const NavBar = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [lastNameComplete, setLastNameComplete] = useState(false);
  const [logoComplete, setLogoComplete] = useState(false);

  const icons = [
    {
      src: LinkedIn,
      url: "https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/",
    },
    { src: GitHub, url: "https://github.com/SandeebAdhikari" },
    { src: Instagram, url: "https://instagram.com" },
    { src: YouTube, url: "https://youtube.com" },
    { src: Twitter, url: "https://twitter.com" },
  ];
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-center md:py-6 md:px-16">
      <motion.div
        variants={slideAnimation("down")}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={() => setLogoComplete(true)}
      >
        <Image src={logo} alt="logo" className="h-12 w-12" />
      </motion.div>

      {logoComplete && (
        <div className="flex justify-center">
          <TypingEffect
            text="SANDEEB"
            onComplete={() => setTypingComplete(true)}
          />

          {typingComplete && (
            <motion.h1
              variants={slideAnimation("down")}
              initial="initial"
              animate="animate"
              exit="exit"
              onAnimationComplete={() => setLastNameComplete(true)}
              className="text-center font-display text-2xl tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem] text-slate-500"
            >
              ADHIKARI
            </motion.h1>
          )}
        </div>
      )}

      <div className="flex justify-center space-x-4">
        {lastNameComplete &&
          icons.map((icon, index) => (
            <motion.div
              key={`icon-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={icon.src}
                  alt={`icon-${index}`}
                  width={36}
                  height={24}
                  className="h-6 w-9 hover:border-red-600 hover:scale-110 transition-transform duration-200"
                  style={{ filter: "invert(1)" }}
                />
              </a>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default NavBar;
