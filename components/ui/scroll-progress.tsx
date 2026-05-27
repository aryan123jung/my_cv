"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.25
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300"
      style={{ scaleX }}
    />
  );
}
