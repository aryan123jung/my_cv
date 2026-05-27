"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[90] grid place-items-center bg-ink"
        >
          <div className="relative grid size-24 place-items-center">
            <div className="absolute inset-0 rounded-full border border-cyan-200/20" />
            <div className="absolute inset-2 animate-spin rounded-full border-t border-cyan-200" />
            <div className="absolute inset-5 rounded-full bg-cyan-300/10 blur-xl" />
            <span className="font-display text-lg font-bold text-white">AJ</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
