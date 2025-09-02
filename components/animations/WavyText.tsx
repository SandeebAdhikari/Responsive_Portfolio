"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import React, { useRef } from "react";

interface WavyTextProps {
  word: string;
}

const WavyText: React.FC<WavyTextProps> = ({ word = "default text" }) => {
  // Reference the container div and set up in-view tracking
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const variants1 = {
    hidden: { y: 10 },
    visible: { y: -10 },
  };

  return (
    <div ref={ref} className="flex space-x-2 justify-center">
      <AnimatePresence>
        {isInView && // Only render characters when in view
          word.split("").map((char, i) => (
            <motion.h1
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants1}
              transition={{
                yoyo: Infinity,
                duration: 0.5,
                delay: i * 0.2,
              }}
              className="text-center font-display font-bold tracking-[-0.3em] drop-shadow-sm md:leading-[5rem]"
            >
              {char}
            </motion.h1>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default WavyText;
