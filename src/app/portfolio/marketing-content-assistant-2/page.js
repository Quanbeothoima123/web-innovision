import PortfolioCaseTemplate from "@/components/portfolio/PortfolioCaseTemplate";

export const metadata = {
  title: "Marketing Content Assistant",
  description:
    "LLM content assistant that generates listings, promotional copy, and social posts with brand-consistent tone.",
  alternates: { canonical: "/portfolio/marketing-content-assistant/" },
};

export default function Page() {
  return (
    <PortfolioCaseTemplate
      title="Marketing Content Assistant"
      subtitle="LLM-powered document intelligence system that revolutionizes government archive management with secure, lightning-fast search and retrieval capabilities."
      problem="Marketing teams in real estate, retail, and e-commerce spend excessive time and resources creating content for listings, social media, and product descriptions. Outsourcing to agencies adds cost and often delays campaigns."
      solution={[
        "LLM fine-tuned with brand voice and product data.",
        "Automatically generates property listings, promotional copy, and social media posts.",
        "Ensures consistent tone and style across channels while supporting multilingual output.",
      ]}
      primaryImage="/portfolio/marketing-content-assistant-2/primary.png"
      secondaryImage="/portfolio/marketing-content-assistant-2/secondary.png"
      captions={[
        "Marketing content automation with brand consistency",
        "Social post generation with multilingual output",
      ]}
      verticalLabel={"CONTENT\nAI"}
      bigNumber="03"
      keyFeatures={[
        "Brand voice tuning (tone, vocabulary, formatting)",
        "Multilingual output (VN/EN)",
        "Templates for listing / promo / social post",
        "Channel-aware formatting (FB, LinkedIn, Email, Web)",
      ]}
      io={[
        {
          input:
            "“Generate a social post for a 2-bedroom apartment near Cau Giay, highlighting lake view and special promotion.”",
          system: [
            "Detect intent and required format for the channel",
            "Apply brand tone + structure template",
            "Generate VN/EN versions and run style consistency checks",
          ],
          output:
            "A ready-to-publish Vietnamese & English post with brand-consistent tone.",
        },
        {
          input: "Generate 10 variants for the same campaign for A/B testing",
          system: [
            "Keep key facts fixed, vary hooks/CTA/wording",
            "Control length, keywords, and prohibited claims",
            "Deduplicate and score quality before export",
          ],
          output:
            "10 variations produced with consistent brand voice and clear CTA.",
        },
      ]}
      // ✅ TOP: đúng 3 card như screenshot
      metricsTop={[
        {
          label: "Supported Channels",
          description: "Email / Facebook / LinkedIn / Web",
          icons: ["mail", "facebook", "linkedin", "web"], // ✅ icon row
          showTrend: false,
        },
        {
          value: "<2s",
          label: "Generation Speed",
          description: "For long-form content generation",
          showTrend: false,
        },
        {
          value: "95%+",
          label: "Brand Consistency",
          description: "Brand style adherence rate",
          showTrend: false,
        },
      ]}
      metricsBottom={[
        {
          value: "3–5x Faster",
          label: "Content Generation Speed",
          description: "Dramatically accelerated content creation process",
          showTrend: false,
        },
        {
          value: "~50%",
          label: "Cost Reduction",
          description: "Reduced outsourcing and agency costs",
          showTrend: false,
        },
      ]}
    />
  );
}
