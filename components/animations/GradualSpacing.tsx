"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

interface GradualSpacingProps {
  text: string;
  onComplete?: () => void;
}

const GradualSpacing: React.FC<GradualSpacingProps> = ({
  text,
  onComplete,
}) => {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  useEffect(() => {
    if (onComplete) {
      const timeout = setTimeout(() => {
        onComplete();
      }, text.length * 100);
      return () => clearTimeout(timeout);
    }
  }, [text, onComplete]);

  return (
    <div className="flex w-full justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center font-bold font-display drop-shadow-sm md:leading-[5rem]"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GradualSpacing;
