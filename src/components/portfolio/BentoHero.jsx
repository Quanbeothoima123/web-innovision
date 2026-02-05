export default function BentoHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute top-40 right-40 h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-14">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          OUR PROJECTS
        </h1>
        <p className="mt-5 text-base text-neutral-700 max-w-2xl">
          See how INNOVISION delivers AI-driven solutions across industries
        </p>
        <p className="mt-3 text-sm text-neutral-600 max-w-2xl leading-relaxed">
          We build fast, scalable AI solutions from LLM platforms to Edge and
          embedded systems, that help teams ship smarter and innovate faster.
        </p>
      </div>
    </section>
  );
}
