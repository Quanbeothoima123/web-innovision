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
      subtitle="LLM + RAG combined with Document AI to automatically search and recommend properties"
      problem="Real estate firms face fragmented, siloed project data across multiple sources making it difficult to quickly search and recommend suitable properties to customers."
      solution={[
        "LLM + RAG combined with Document AI to extract and index property data from internal listings and scanned documents",
        "Natural language query understanding to interpret customer requirements",
        "Intelligent property matching with confidence scores and source citations",
        "Real-time market data integration for accurate recommendations",
      ]}
      primaryImage="/portfolio/real_estate_ai_assistant/primary.jpg"
      secondaryImage="/portfolio/real_estate_ai_assistant/preview.png"
      mockImage={undefined}
      captions={[
        "Real estate property search — unified view from multiple data sources",
        "AI-powered property recommendations with evidence-based matching",
      ]}
      verticalLabel={"CASE\nSTUDY"}
      bigNumber="02"
      keyFeatures={[
        "OCR + parsing for property documents and contracts",
        "RAG retrieval for listings & historical property data",
        "Natural language query interpretation for customer requirements",
        "Ranked recommendations with confidence scores and source attribution",
      ]}
      io={[
        {
          input:
            'A customer asks: "Show me apartments in Hanoi with 3 bedrooms, under $150,000, near international schools."',
          system: [
            "Extracts structured data from internal listings and scanned documents.",
            "Uses RAG to combine with real-time market reports and pricing history.",
            "LLM interprets query and generates a ranked list with confidence scores.",
          ],
          output:
            '"Found 12 matching properties. Top match: Apartment in Cau Giay District, 3BR, $145,000, 500m from Hanoi International School. Source: Company Database + Market Report 2024 Q4."',
        },
        {
          input:
            'A customer asks: "Show me apartments in Hanoi with 3 bedrooms, under $150,000, near international schools."',
          system: [
            "Extracts structured data from internal listings and scanned documents.",
            "Uses RAG to combine with real-time market reports and pricing history.",
            "LLM interprets query and generates a ranked list with confidence scores.",
          ],
          output:
            '"Found 12 matching properties. Top match: Apartment in Cau Giay District, 3BR, $145,000, 500m from Hanoi International School. Source: Company Database + Market Report 2024 Q4."',
        },
      ]}
      preMetricsBlocks={[
        {
          type: "split",
          mode: "io",
          title: "",
          image: "/portfolio/real_estate_ai_assistant/preview.png",
          imageSide: "right",
          input:
            'A customer asks: "Show me apartments in Hanoi with 3 bedrooms, under $150,000, near international schools."',
          system: [
            "Extracts structured data from internal listings and scanned documents.",
            "Uses RAG to combine with real-time market reports and pricing history.",
            "LLM interprets query and generates a ranked list with confidence scores.",
          ],
          output:
            '"Found 12 matching properties. Top match: Apartment in Cau Giay District, 3BR, $145,000, 500m from Hanoi International School. Source: Company Database + Market Report 2024 Q4."',
        },
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
    />
  );
}
