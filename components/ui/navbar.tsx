"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => navItems.map((item) => item.href.slice(1)), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.22, 0.35, 0.5], rootMargin: "-12% 0px -58% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-ink/[0.65] px-4 py-3 shadow-glass backdrop-blur-2xl">
        <Link
          href="#home"
          className="focus-ring flex items-center gap-3 rounded-full"
          aria-label="Aryan Jung Chhetri home"
        >
          <span className="grid size-9 place-items-center rounded-full bg-white text-sm font-black text-slate-950">
            AJ
          </span>
          <span className="hidden font-display text-sm font-semibold text-white sm:block">
            Aryan Jung Chhetri
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition ${
                active === item.href.slice(1)
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="https://github.com/aryan123jung"
            className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aryan-jung-chhetri-b67049363/"
            className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
        </div>

        <button
          className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-ink/[0.90] p-3 shadow-glass backdrop-blur-2xl lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
