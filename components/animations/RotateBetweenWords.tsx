import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotateBetweenWordsProps {
  words: string[];
}

const RotateBetweenWords: React.FC<RotateBetweenWordsProps> = ({ words }) => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center font-display text-3xl tracking-[-0.02em] drop-shadow-sm md:text-4xl md:leading-[5rem]"
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
};

export default RotateBetweenWords;
