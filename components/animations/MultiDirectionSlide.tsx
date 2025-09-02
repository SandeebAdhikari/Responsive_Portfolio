// MultiDirectionSlide.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MultiDirectionSlideProps {
  text1?: string;
  text2?: string;
}

const MultiDirectionSlide = ({ text1, text2 }: MultiDirectionSlideProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };

  return (
    <div className="overflow-hidden" ref={ref}>
      <motion.h1
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="text-center font-display  font-bold tracking-[-0.02em] drop-shadow-sm  md:leading-[5rem]"
      >
        {text1}
      </motion.h1>

      <motion.h1
        initial="right"
        animate={isInView ? "visible" : "right"}
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="text-center font-display font-semibold tracking-[-0.02em] drop-shadow-sm  md:leading-[5rem]"
      >
        {text2}
      </motion.h1>
    </div>
  );
};

export default MultiDirectionSlide;
