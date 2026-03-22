import SeoAuditOptimizationFromHtml from "@/components/SeoAuditOptimizationFromHtml";

export const metadata = {
  title: "Homepage Demo (SEO From HTML Body)",
  description:
    "JSX + Tailwind + split CSS version converted from SEO audit HTML body.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomepageSeoFromHtmlPage() {
  return <SeoAuditOptimizationFromHtml />;
}
