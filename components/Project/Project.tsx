"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { slideAnimation } from "@/components/animations/animation";
import { useRef, useState, useEffect } from "react";
import ProjectCard from "@/components/Project/ProjectCard";
import { PROJECT_DATA } from "@/data/projects";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleLoop = () => {
    if (!isPaused) {
      if (currentIndex === PROJECT_DATA.length) {
        setIsResetting(true);
        setTimeout(() => {
          setCurrentIndex(0);
          setIsResetting(false);
        }, 100);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(handleLoop, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const albertQuotes = [
    {
      quote:
        '"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."',
      author: "Albert Einstein",
    },
  ];

  return (
    <AnimatePresence>
      <div className="mt-[100px] flex flex-col w-full h-[1024px]">
        {albertQuotes.map((quote, index) => (
          <motion.h1
            key={index}
            ref={ref}
            className="text-center font-bold text-2xl sm:text-3xl md:text-5xl lg:6xl"
            variants={slideAnimation("up")}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            exit="exit"
          >
            {quote.quote}{" "}
            <motion.h1
              key={index}
              ref={ref}
              className="text-center font-bold text-2xl sm:text-3xl md:text-5xl lg:6xl"
              variants={slideAnimation("up")}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              exit="exit"
            >
              - {quote.author}
            </motion.h1>
          </motion.h1>
        ))}
        <div
          className="mt-5 mb-10 overflow-hidden h-4/6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex h-full"
            animate={{ x: isResetting ? 0 : `-${currentIndex * 100}%` }}
            transition={{ duration: isResetting ? 0 : 1, ease: "easeInOut" }}
          >
            {[...PROJECT_DATA, ...PROJECT_DATA].map((project, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center px-4"
              >
                <ProjectCard
                  name={project.projectName}
                  image={project.image}
                  iconImage={project.icon}
                  url={project.url}
                  invertColor={project.invertColor}
                  github={project.github}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Project;
