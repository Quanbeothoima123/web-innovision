import Link from "next/link";

export const metadata = {
  title: "Solutions",
  description:
    "Danh mục giải pháp: AI Products, Coming Soon, Software/Firmware Development.",
  alternates: { canonical: "/solutions/" },
};

export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Solutions</h1>
      <p className="text-neutral-600">Route: /solutions</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <Link className="underline" href="/solutions/ai-products-2">
            AI Products 2
          </Link>
        </li>
        <li>
          <Link className="underline" href="/solutions/coming-soon">
            Coming Soon
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/solutions/software-firmware-development-2"
          >
            Software/Firmware Dev 2
          </Link>
        </li>
      </ul>
    </div>
  );
}
