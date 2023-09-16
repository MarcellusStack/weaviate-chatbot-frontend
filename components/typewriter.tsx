"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

export type TypewriterProps = {
  text: string;
};

const Typewriter = ({ text }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  const [scope, animate] = useAnimate();

  const animateText = async () => {
    for (let i = 0; i < text.length; i++) {
      setDisplayedText(text.slice(0, i + 1));
      await animate(
        scope.current,
        {
          opacity: 1,
        },
        { duration: 0.025 }
      );
    }
  };

  useEffect(() => {
    animateText();
  }, [text]);

  return (
    <div>
      <motion.p ref={scope} initial={{ opacity: 0 }}>
        {displayedText}
      </motion.p>
    </div>
  );
};

export default Typewriter;
