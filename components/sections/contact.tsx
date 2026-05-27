"use client";

import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect about internships, projects, or collaboration."
        description="A clean contact area for recruiters, mentors, and collaborators to reach Aryan quickly."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass rounded-[2rem] p-6 md:p-8">
          <h3 className="font-display text-2xl font-semibold text-white">
            Contact Details
          </h3>
          <div className="mt-8 grid gap-4">
            <Link
              href={`mailto:${profile.email}`}
              className="focus-ring flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:border-cyan-200/40"
            >
              <Mail className="text-cyan-100" />
              <span>
                <span className="block text-sm text-slate-400">Email</span>
                <span className="font-semibold text-white">{profile.email}</span>
              </span>
            </Link>
            <Link
              href={`tel:${profile.phone}`}
              className="focus-ring flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:border-cyan-200/40"
            >
              <Phone className="text-cyan-100" />
              <span>
                <span className="block text-sm text-slate-400">Phone</span>
                <span className="font-semibold text-white">{profile.phone}</span>
              </span>
            </Link>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <MapPin className="text-cyan-100" />
              <span>
                <span className="block text-sm text-slate-400">Location</span>
                <span className="font-semibold text-white">{profile.location}</span>
              </span>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <Link
              href="https://github.com/"
              aria-label="GitHub"
              className="focus-ring grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-cyan-200/40"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="focus-ring grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-cyan-200/40"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="glass rounded-[2rem] p-6 md:p-8">
          <form
            className="grid gap-5"
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const data = new FormData(form);
              const name = String(data.get("name") || "");
              const message = String(data.get("message") || "");
              const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
              const body = encodeURIComponent(message);
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="focus-ring min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-white placeholder:text-slate-500"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="focus-ring min-h-12 rounded-2xl border border-white/10 bg-white/[0.055] px-4 text-white placeholder:text-slate-500"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Message
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about the opportunity or project..."
                className="focus-ring resize-none rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-white placeholder:text-slate-500"
              />
            </label>
            <button
              type="submit"
              className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-100 sm:w-fit"
            >
              Send Message <Send size={17} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
