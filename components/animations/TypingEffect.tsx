import React, { useEffect, useState } from "react";

export interface TypingEffectProps {
  text: string;
  onComplete: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
        if (onComplete) onComplete();
      }
    }, 200);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, text, onComplete]);

  return (
    <h1 className="text-center font-display text-2xl tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem]">
      {displayedText ? displayedText : text}
    </h1>
  );
};

export default TypingEffect;
