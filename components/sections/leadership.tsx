import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { Activity, Brain, Medal, UsersRound } from "lucide-react";

const qualities = [
  { label: "Team Leadership", Icon: UsersRound },
  { label: "Decision Making", Icon: Brain },
  { label: "Pressure Discipline", Icon: Activity }
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-shell py-24">
      <SectionHeading
        eyebrow="Leadership"
        title="Competitive sport shaped a calm, accountable working style."
        description="Leadership experience from cricket translates naturally into collaboration, preparation, communication, and handling pressure."
      />
      <Reveal>
        <article className="glass relative overflow-hidden rounded-[2rem] p-6 md:p-10">
          <div className="absolute right-0 top-0 size-80 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="grid size-16 place-items-center rounded-3xl bg-emerald-200/12 text-emerald-100">
                <Medal size={30} />
              </span>
              <h3 className="mt-6 font-display text-3xl font-semibold text-white md:text-4xl">
                U19 District Cricket Captain
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                A professional leadership marker showing responsibility,
                resilience, and the ability to guide a team when the outcome
                depends on clear communication and disciplined execution.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {qualities.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-emerald-200/35"
                >
                  <Icon className="text-emerald-100" />
                  <p className="mt-5 font-display text-xl font-semibold text-white">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
