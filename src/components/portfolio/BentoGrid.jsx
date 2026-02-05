import ProjectCard from "./ProjectCard";
import PlaceholderCard from "./PlaceholderCard";

export default function BentoGrid({ projects }) {
  const large = projects.find((p) => p.layout === "large");
  const rightTop = projects.find((p) => p.layout === "rightTop");
  const rightBottom = projects.find((p) => p.layout === "rightBottom");

  const rest = projects.filter(
    (p) => p !== large && p !== rightTop && p !== rightBottom,
  );

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        {/* left large */}
        <div className="lg:col-span-8">
          {large ? (
            <ProjectCard project={large} size="lg" />
          ) : (
            <PlaceholderCard large />
          )}
        </div>

        {/* right stack */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-7">
          {rightTop ? <ProjectCard project={rightTop} /> : <PlaceholderCard />}
          {rightBottom ? (
            <ProjectCard project={rightBottom} />
          ) : (
            <PlaceholderCard />
          )}
        </div>

        {/* rest */}
        {rest.map((p) => (
          <div key={p.id} className="lg:col-span-4">
            <ProjectCard project={p} />
          </div>
        ))}

        {/* keep some placeholders like figma */}
        <div className="lg:col-span-8">
          <PlaceholderCard large />
        </div>
        <div className="lg:col-span-4">
          <PlaceholderCard />
        </div>
      </div>
    </section>
  );
}
