"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", handlePointer);
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[-1] hidden opacity-70 mix-blend-screen md:block"
      style={{
        background: `radial-gradient(440px circle at ${position.x}px ${position.y}px, rgba(101, 228, 255, 0.12), transparent 42%)`
      }}
    />
  );
}
