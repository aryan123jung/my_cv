"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Globe2, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/button-link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative flex min-h-screen items-center pb-16 pt-28 md:pt-32"
    >
      <div className="absolute left-1/2 top-28 -z-10 size-[560px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <motion.div
        aria-hidden
        className="absolute right-0 top-36 -z-10 hidden size-64 rounded-full border border-cyan-200/20 md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />

      <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Dhobighat, Lalitpur
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-6xl"
          >
            Aryan Jung Chhetri
            {/* <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
              builds polished digital interfaces.
            </span> */}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            A BSc (Hons) Computing student focused on fullstack development,
            mobile application development, elegant UI/UX, cybersecurity
            learning, and data-driven thinking. I enjoy turning clear ideas
            into fast, accessible, recruiter-ready digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="#projects">
              View Projects <ArrowDown size={17} />
            </ButtonLink>
            <ButtonLink href="/aryan-jung-chhetri-cv.pdf" download variant="secondary">
              Download CV <Download size={17} />
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-7 flex items-center gap-3"
          >
            {[
              { href: profile.social.github, label: "GitHub", Icon: Github },
              { href: profile.social.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: profile.social.portfolio, label: "Portfolio", Icon: Globe2 }
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="focus-ring grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:text-cyan-200"
              >
                <Icon size={19} />
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[2rem] p-4 sm:p-5"
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
          <div className="rounded-[1.55rem] border border-white/10 bg-slate-950/[0.55] p-4 sm:p-5">
            <div className="relative min-h-[340px] overflow-hidden rounded-[1.4rem] border border-cyan-200/20 bg-white/[0.055] shadow-glow sm:min-h-[400px] lg:min-h-[430px]">
              <Image
                src={profile.image}
                alt="Portrait of Aryan Jung Chhetri"
                fill
                priority
                sizes="(max-width: 640px) 88vw, 460px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-cyan-100/80">Aryan Jung Chhetri</p>
                  <p className="font-display text-2xl font-semibold text-white">
                    Fullstack Developer
                  </p>
                </div>
                <span className="relative flex size-3 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-70" />
                  <span className="relative inline-flex size-3 rounded-full bg-emerald-300" />
                </span>
              </div>
            </div>

            <div className="mt-5">
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-400">Available for</p>
                <p className="font-display text-xl font-semibold text-white">
                  Internship & Projects
                </p>
                <p className="mt-1 truncate text-sm text-cyan-100/80">
                  Fullstack • Mobile • UI/UX • Security
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {profile.titles.map((title, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.08 }}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2"
                >
                  <p className="text-xs font-semibold text-white sm:text-sm">{title}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-cyan-200/15 bg-cyan-200/[0.055] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">
                Contact
              </p>
              <Link
                href={`mailto:${profile.email}`}
                className="focus-ring mt-3 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-cyan-100"
              >
                {profile.email} <Send size={15} />
              </Link>
              <p className="mt-2 text-sm text-slate-400">{profile.phone}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
