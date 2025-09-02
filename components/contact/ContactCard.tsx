"use client";
import Instagram from "@/assets/icons/socials/instagram.svg";
import YouTube from "@/assets/icons/socials/youtube.svg";
import Twitter from "@/assets/icons/socials/x.svg";
import LinkedIn from "@/assets/icons/socials/linkedin.svg";
import { motion } from "framer-motion";
import Image from "next/image";

interface ContactCardProps {
  email: string;
}

const ContactCard = ({ email }: ContactCardProps) => {
  const icons = [
    {
      src: LinkedIn,
      url: "https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/",
    },
    { src: Instagram, url: "https://instagram.com" },
    { src: YouTube, url: "https://www.youtube.com/watch?v=jfKfPfyJRdk" },
    { src: Twitter, url: "https://twitter.com" },
  ];

  const FADE_DOWN = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="flex flex-col items-center p-2 gap-8"
    >
      <motion.h1
        variants={FADE_DOWN}
        className="font-semibold text-2xl text-center underline hover:text-orange-200"
      >
        {email}
      </motion.h1>
      <motion.div variants={FADE_DOWN} className="flex items-center space-x-4">
        {icons.map((icon, index) => (
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
      </motion.div>
      <div className="flex flex-col bg-black items-center gap-5 w-full">
        <motion.input
          variants={FADE_DOWN}
          type="text"
          placeholder="NAME"
          className="border-b p-2 w-full bg-black border-orange-200 hover:border-slate-600"
        />
        <motion.input
          variants={FADE_DOWN}
          type="email"
          placeholder="EMAIL"
          className="border-b p-2 w-full bg-black border-orange-200 hover:border-slate-600"
        />
        <motion.textarea
          variants={FADE_DOWN}
          placeholder="MESSAGE"
          className="border-b p-2 w-full  bg-black border-orange-200 hover:border-slate-600"
        />
      </div>
      <motion.div variants={FADE_DOWN} className=" flex justify-end w-full">
        <button className="border-b p-2 w-16  hover:border hover:border-orange-200">
          SEND
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ContactCard;
