import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { projects } from "@/data/profile";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Portfolio concepts with practical product thinking."
        description="These polished placeholders are structured like real case studies and ready to connect to live repositories when projects are published."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className="glass group overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2 hover:border-cyan-200/35">
                <div
                  className={`relative min-h-56 overflow-hidden bg-gradient-to-br ${project.accent}`}
                >
                  <div className="absolute inset-0 bg-radial-grid bg-[length:22px_22px] opacity-35" />
                  <div className="absolute -right-12 -top-12 size-52 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute inset-6 rounded-[1.6rem] border border-white/[0.14] bg-slate-950/[0.42] p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-white">
                        <Icon size={24} />
                      </span>
                      <span className="rounded-full border border-white/[0.12] bg-white/[0.07] px-3 py-1 text-xs font-semibold text-slate-200">
                        Concept
                      </span>
                    </div>
                    <div className="mt-10 h-2 w-3/4 rounded-full bg-white/[0.18]" />
                    <div className="mt-3 h-2 w-1/2 rounded-full bg-white/[0.12]" />
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-2xl bg-white/10" />
                      <div className="h-16 rounded-2xl bg-white/10" />
                      <div className="h-16 rounded-2xl bg-white/10" />
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/[0.065] px-3 py-1.5 text-xs font-semibold text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="#contact"
                      className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                    >
                      Live Demo <ArrowUpRight size={16} />
                    </Link>
                    <Link
                      href="https://github.com/aryan123jung"
                      className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/50"
                    >
                      GitHub <Github size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
