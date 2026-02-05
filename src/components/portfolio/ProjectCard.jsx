import Link from "next/link";
import Image from "next/image";

function Pill({ children, tone = "neutral" }) {
  const cls =
    tone === "green"
      ? "bg-emerald-200/70 text-emerald-900 border-emerald-300/70"
      : "bg-white/55 text-neutral-900 border-white/70";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
        "border backdrop-blur-md",
        cls,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export default function ProjectCard({ project, size = "md" }) {
  const isLarge = size === "lg";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border border-white/70 bg-white/50 backdrop-blur-xl",
        "shadow-softer hover:shadow-soft transition-shadow",
      ].join(" ")}
    >
      <div className={isLarge ? "h-[300px] md:h-[340px]" : "h-[220px]"}>
        <div className="relative h-full w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={
              isLarge
                ? "(min-width: 1024px) 60vw, 100vw"
                : "(min-width: 1024px) 30vw, 100vw"
            }
            className="object-cover"
            priority={project.layout === "large"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0" />
        </div>
      </div>

      <div
        className={[
          "relative p-7",
          // gradient content giống figma (màu mềm)
          "bg-gradient-to-br from-purple-200/60 via-pink-200/50 to-blue-200/40",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-3">
          {project.featured ? <Pill>Featured</Pill> : <span />}
          {project.metric ? <Pill tone="green">{project.metric}</Pill> : null}
        </div>

        <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-neutral-900">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-neutral-700 leading-relaxed max-w-[52ch]">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags?.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/60 border border-white/70 px-3 py-1 text-xs font-semibold text-neutral-800"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
