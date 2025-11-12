"use client";

import { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { fadeUp } from "./animations";

interface RevealProps extends PropsWithChildren {
  duration?: number;
  delay?: number;
  className?: string;
}

export function Reveal({ children, duration = 0.7, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

