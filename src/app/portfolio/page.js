import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description:
    "Dự án tiêu biểu: trợ lý AI, xác thực fintech, xử lý tài liệu, nền tảng web tải cao.",
  alternates: { canonical: "/portfolio/" },
};

export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Portfolio</h1>
      <p className="text-neutral-600">Route: /portfolio</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <Link
            className="underline"
            href="/portfolio/real-estate-ai-assistant"
          >
            Real Estate AI Assistant
          </Link>
        </li>
        <li>
          <Link className="underline" href="/portfolio/fintech-verification-ai">
            Fintech Verification AI
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/portfolio/government-document-ai-2"
          >
            Government Document AI 2
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/portfolio/marketing-content-assistant-2"
          >
            Marketing Content Assistant 2
          </Link>
        </li>
        <li>
          <Link
            className="underline"
            href="/portfolio/high-traffic-web-platform"
          >
            High Traffic Web Platform
          </Link>
        </li>
      </ul>
    </div>
  );
}
