import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { skillGroups } from "@/data/profile";

const toneMap = {
  cyan: "from-cyan-300/20 to-blue-500/10 text-cyan-100",
  violet: "from-violet-300/20 to-fuchsia-500/10 text-violet-100",
  emerald: "from-emerald-300/20 to-teal-500/10 text-emerald-100",
  amber: "from-amber-300/20 to-rose-500/10 text-amber-100"
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A balanced toolkit for useful digital products."
        description="Technical skills are grouped around the way real projects are built: interface, logic, visual design, and security awareness."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="glass group h-full rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-200/35">
                <div
                  className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${
                    toneMap[group.tone as keyof typeof toneMap]
                  }`}
                >
                  <Icon size={25} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  {group.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-sm font-semibold text-slate-200 transition group-hover:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
