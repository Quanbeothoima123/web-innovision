import PortfolioCaseTemplate from "@/components/portfolio/PortfolioCaseTemplate";

export const metadata = {
  title: "Real Estate AI Assistant",
  description:
    "Trợ lý AI bất động sản: hỗ trợ tư vấn, tóm tắt, gợi ý và chăm sóc khách hàng.",
  alternates: { canonical: "/portfolio/real-estate-ai-assistant/" },
};

export default function Page() {
  return (
    <PortfolioCaseTemplate
      title="Real Estate AI Assistant"
      subtitle="LLM + RAG combined with Document AI to automatically verify and classify financial transactions"
      problem="Real estate firms face fragmented, siloed project data."
      solution="LLM assistant to unify internal reports, contracts, and property listings into one searchable knowledge base."
      primaryImage="/portfolio/real_estate_ai_assistant/primary.jpg"
      secondaryImage="/portfolio/real_estate_ai_assistant/preview.png"
      mockImage="/portfolio/real_estate_ai_assistant/preview.png"
      captions={[
        "Professional construction team delivering excellence in property development",
        "Modern architectural design showcasing innovative building solutions",
      ]}
      keyFeatures={[
        "Real-time inventory tracking across multiple properties",
        "LLM-powered query generation for complex data analysis",
        "Automated report generation in multiple formats",
        "Seamless integration with existing CRM systems",
      ]}
      metricsTop={[
        {
          value: "1M+",
          label: "Data Coverage",
          description: "Property documents indexed",
        },
        {
          value: "95%+",
          label: "Query Accuracy",
          description: "Real-time prediction rate",
        },
        {
          value: "<300ms",
          label: "Latency",
          description: "Average response time",
        },
        {
          value: "1,000+",
          label: "Scaling",
          description: "Concurrent queries supported",
        },
      ]}
      metricsBottom={[
        {
          value: "~60%",
          label: "Efficiency Improvement",
          description: "Improved internal efficiency",
        },
        {
          value: "~40%",
          label: "Faster Closure",
          description: "Reduced deal closure time",
        },
      ]}
      io={[
        {
          input: "Citizen submits a scanned tax form or contract PDF",
          system: [
            "OCR extracts text from the scanned document with 99.5% accuracy",
            "RAG pipeline indexes data and creates semantic embeddings",
            "LLM interprets request using natural language understanding",
          ],
          output:
            '"Tax record located, Ref: Archive #2021-0342, related decrees linked."',
        },
        {
          input: "Input của ảnh PRIMARY (flow A)",
          system: ["Step A1 ...", "Step A2 ...", "Step A3 ..."],
          output: "Output của flow A",
        },
        {
          input: "Input của ảnh SECONDARY (flow B)",
          system: ["Step B1 ...", "Step B2 ..."],
          output: "Output của flow B",
        },
      ]}
    />
  );
}
