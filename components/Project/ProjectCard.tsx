"use client";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/components/animations/animation";
import GitHubImg from "@/assets/icons/github.svg";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  name: string;
  image: string | StaticImageData;
  iconImage: (string | StaticImageData)[];
  url: string;
  invertColor?: boolean;
  github: string;
}

const MotionImage = motion(Image);

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  iconImage,
  url,
  invertColor,
  github,
}) => {
  return (
    <div
      className="flex flex-col items-center p-6 sm:p-6 shadow-3xl rounded-lg 
             w-full max-w-sm sm:max-w-md md:max-w-lg
             hover:scale-105 transition duration-300 ease-in-out
             border border-white/50 border-t-white/10 border-b-white/10 bg-black/20"
    >
      <MotionImage
        src={image}
        alt={name}
        className="w-full h-auto rounded-md object-cover
           hover:border-slate-600 hover:border-spacing-2
           hover:scale-105 transition duration-300 ease-in-out"
        variants={fadeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <div className="mt-2 flex justify-center items-center w-full">
        {iconImage.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt={`${name} Icon ${index}`}
            width={32}
            height={32}
            className={`w-8 h-8 mr-2 ${invertColor ? "invert" : ""}`}
          />
        ))}
      </div>
      <h2 className="mt-4 text-2xl font-bold text-white">{name}</h2>
      <div className="flex justify-between w-full items-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-white underline hover:text-orange-200"
        >
          Visit Project
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Image
            src={GitHubImg}
            alt={`${name} GitHub`}
            width={40}
            height={40}
            className="mt-4 w-10 h-10 invert hover:border hover:border-orange-200 
                       rounded-full hover:scale-105 transition duration-300 ease-in-out"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
