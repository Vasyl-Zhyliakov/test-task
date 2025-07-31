import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

type ScrambleTextProps = {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
};

const ScrambleText = ({
  text,
  duration = 1,
  delay = 0,
  className = "",
}: ScrambleTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  const chars = "abcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      duration,
      delay,
      scrambleText: {
        text,
        chars,
        revealDelay: 0.3,
        speed: 0.3,
      },
      ease: "power2.out",
    });
  }, [text, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
};

export default ScrambleText;
