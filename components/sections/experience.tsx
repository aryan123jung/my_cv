import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { experienceItems } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Academic and personal experience, framed professionally."
        description="No formal job title is needed to show momentum. This section focuses on hands-on learning, collaboration, and project practice."
      />
      <div className="relative">
        <div className="absolute left-5 top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-cyan-200/50 via-white/[0.15] to-violet-200/45 md:block" />
        <div className="grid gap-5">
          {experienceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="glass grid gap-5 rounded-[2rem] p-6 md:grid-cols-[3.5rem_1fr] md:p-7">
                  <span className="relative z-10 grid size-12 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-cyan-100">
                      Academic & Personal Experience
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
