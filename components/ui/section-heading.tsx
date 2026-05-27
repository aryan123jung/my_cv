type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-normal text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
