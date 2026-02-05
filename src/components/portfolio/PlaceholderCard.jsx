import { IconSparkle } from "./icons";

export default function PlaceholderCard({ large = false }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-white/70 bg-white/50 backdrop-blur-xl",
        "shadow-softer",
        large ? "min-h-[440px]" : "min-h-[300px]",
      ].join(" ")}
    >
      <div className="h-full flex flex-col items-center justify-center text-center p-10">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
          <IconSparkle className="h-8 w-8 text-blue-700/60" />
        </div>
        <div className="mt-4 text-lg font-bold text-neutral-500">
          Coming Soon
        </div>
        <div className="mt-1 text-sm text-neutral-500">
          New project in development
        </div>
      </div>
    </div>
  );
}
