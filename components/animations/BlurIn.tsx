"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurInProps {
  word: string;
}

const BlurIn = ({ word }: BlurInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
      variants={variants1}
      className="font-display font-semibold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
