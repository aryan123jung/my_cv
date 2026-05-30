import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 py-10">
      <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            Aryan Jung Chhetri
          </p>
          {/* <p className="mt-1 text-sm text-slate-400">
            © 2026. Fullstack, mobile, UI/UX, cybersecurity, and analytics-minded portfolio.
          </p> */}
        </div>
        <div className="flex gap-3">
          <Link
            href="https://github.com/aryan123jung"
            aria-label="GitHub"
            className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-cyan-100"
          >
            <Github size={17} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aryan-jung-chhetri-b67049363/"
            aria-label="LinkedIn"
            className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-cyan-100"
          >
            <Linkedin size={17} />
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-cyan-100"
          >
            <Mail size={17} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
