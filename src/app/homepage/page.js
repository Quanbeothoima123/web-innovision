import Link from "next/link";

export const metadata = {
  title: "Homepage",
  description:
    "Innovision - giải pháp AI, phần mềm và nền tảng web cho doanh nghiệp Việt Nam.",
  alternates: { canonical: "/homepage/" },
};

export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Homepage</h1>
      <p className="text-neutral-600">Route: /homepage</p>
      <div className="flex flex-wrap gap-2">
        <Link className="underline" href="/solutions">
          Xem Solutions
        </Link>
        <Link className="underline" href="/portfolio">
          Xem Portfolio
        </Link>
        <Link className="underline" href="/about-us">
          Về chúng tôi
        </Link>
      </div>
    </div>
  );
}
