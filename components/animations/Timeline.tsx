"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { slideAnimation } from "@/components/animations/animation";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.3, type: "spring", duration: 1.2, bounce: 0 },
      opacity: { delay: i * 0.3, duration: 0.2 },
    },
  }),
};

interface Event {
  title: string;
  school: string;
  description: string;
}

interface TimelineProps {
  index: number;
  event: Event;
  onComplete?: () => void;
}

const Timeline = ({ index, event, onComplete }: TimelineProps) => {
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);
  const [secondAnimationComplete, setSecondAnimationComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="timeline-container flex flex-col items-center my-8"
    >
      {/* Timeline line + circle */}
      <motion.svg
        width="100"
        height="200"
        viewBox="0 0 100 200"
        className="mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.line
          x1="50"
          y1="0"
          x2="50"
          y2="200"
          stroke="#00cc88"
          strokeWidth={6}
          variants={draw}
          custom={index}
          onAnimationComplete={() => setFirstAnimationComplete(true)}
        />

        {firstAnimationComplete && (
          <motion.circle
            cx="50"
            cy="50"
            r="15"
            stroke="#00cc88"
            strokeWidth={6}
            fill="#475569"
            variants={draw}
            custom={index + 1}
            onAnimationComplete={() => {
              setSecondAnimationComplete(true);
              if (onComplete) {
                onComplete();
              }
            }}
          />
        )}
      </motion.svg>

      {/* Event details */}
      {secondAnimationComplete && (
        <div className="flex flex-col items-center mt-4 text-center max-w-md">
          <motion.h3
            variants={slideAnimation("up")}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
          >
            {event.title}
          </motion.h3>
          <motion.p
            variants={slideAnimation("up")}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400"
          >
            {event.school}
          </motion.p>
          <motion.p
            variants={slideAnimation("up")}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500"
          >
            {event.description}
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Timeline;
