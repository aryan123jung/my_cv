import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { education, softSkills } from "@/data/profile";
import { Award, GraduationCap, Shield, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-shell py-24">
      <SectionHeading
        eyebrow="About"
        title="A modern computing student with a builder's mindset."
        description="Aryan combines fullstack development, mobile app thinking, UI/UX design, cybersecurity curiosity, and analytics into one practical skill set."
      />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="glass rounded-[2rem] p-6 md:p-8">
          <div className="grid min-h-full content-between gap-10">
            <div>
              <span className="grid size-12 place-items-center rounded-2xl bg-cyan-200/12 text-cyan-100">
                <GraduationCap />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                {education.degree}
              </h3>
              <p className="mt-2 text-slate-300">{education.college}</p>
              <p className="mt-1 text-sm font-semibold text-cyan-100">
                {education.graduation}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="grid gap-6">
          <div className="glass rounded-[2rem] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-violet-200/12 text-violet-100">
                <Sparkles />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  Fullstack, mobile, UI/UX, and security-aware thinking.
                </h3>
                <p className="mt-4 leading-8 text-slate-300">
                  I am passionate about building digital products that look
                  refined, feel quick, and stay easy to understand. My focus is
                  on React, Flutter, strong visual hierarchy, smooth user flows,
                  analytics, and learning how secure web applications are tested
                  in real environments.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-[2rem] p-6">
              <Award className="text-emerald-200" />
              <h4 className="mt-5 font-display text-xl font-semibold text-white">
                Leadership Through Cricket
              </h4>
              <p className="mt-3 leading-7 text-slate-300">
                As U19 District Cricket Captain, I learned decision-making,
                discipline, and accountability under pressure.
              </p>
            </div>
            <div className="glass rounded-[2rem] p-6">
              <Shield className="text-cyan-200" />
              <h4 className="mt-5 font-display text-xl font-semibold text-white">
                Cybersecurity Direction
              </h4>
              <p className="mt-3 leading-7 text-slate-300">
                I am building a foundation in web security testing, vulnerability
                awareness, and responsible defensive practices.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
