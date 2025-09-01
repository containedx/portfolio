import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  className?: string; // optional styling
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [inView, text, speed]);

  return (
    <div ref={ref} className={className} style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
      {displayedText}
    </div>
  );
};

export default Typewriter;
