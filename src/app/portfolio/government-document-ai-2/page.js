import PortfolioCaseTemplate from "@/components/portfolio/PortfolioCaseTemplate";

export const metadata = {
  title: "Government Document AI",
  description:
    "LLM-powered OCR + RAG search system for government archives, deployed securely on-premise.",
  alternates: { canonical: "/portfolio/government-document-ai/" },
};

export default function Page() {
  return (
    <PortfolioCaseTemplate
      title="Government Document AI"
      subtitle="LLM-powered document intelligence system that revolutionizes government archive management with secure, lightning-fast search and retrieval capabilities."
      problem="Inefficient manual document search in government archives. Traditional systems require hours or days to locate specific documents, causing delays in public services, legal proceedings, and administrative decisions. Manual searches are error-prone and resource-intensive, leading to high operational costs and citizen dissatisfaction."
      solution={[
        "LLM-powered OCR + RAG search system, deployed on secure on-premise servers.",
      ]}
      primaryImage="/portfolio/government-document-ai-2/primary.png"
      secondaryImage="/portfolio/government-document-ai-2/secondary.png"
      mockImage={undefined}
      captions={[
        "Digitizing & indexing government archive documents for instant retrieval",
        "Secure on-premise document intelligence for public services",
      ]}
      verticalLabel={"ON\nPREMISE"}
      bigNumber="02"
      keyFeatures={[
        "OCR extraction for scanned PDFs with high accuracy",
        "RAG indexing + embeddings for semantic retrieval",
        "On-premise deployment for compliance & data privacy",
        "Traceable outputs with record references and linked documents",
      ]}
      // ✅ Cùng 1 IO cho cả 2 ảnh khi click
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
          input: "Citizen submits a scanned tax form or contract PDF",
          system: [
            "OCR extracts text from the scanned document with 99.5% accuracy",
            "RAG pipeline indexes data and creates semantic embeddings",
            "LLM interprets request using natural language understanding",
          ],
          output:
            '"Tax record located, Ref: Archive #2021-0342, related decrees linked."',
        },
      ]}
      // ✅ Khối IO (text + image) đặt trước metrics
      preMetricsBlocks={[
        {
          type: "split",
          mode: "io",
          title: "",
          image: "/portfolio/government-document-ai-2/process_flow.png",
          imageSide: "right",
          input: "Citizen submits a scanned tax form or contract PDF",
          system: [
            "OCR extracts text from the scanned document with 99.5% accuracy",
            "RAG pipeline indexes data and creates semantic embeddings",
            "LLM interprets request using natural language understanding",
          ],
          output:
            '"Tax record located, Ref: Archive #2021-0342, related decrees linked."',
        },
      ]}
      metricsTop={[
        {
          value: "1B+",
          label: "Processing Capacity",
          description: "Tokens per day",
        },
        {
          value: "99.5%",
          label: "OCR Accuracy",
          description: "High-fidelity extraction",
        },
        {
          value: "<500ms",
          label: "Query Latency",
          description: "Per request",
        },
        {
          value: "10M+",
          label: "Documents Indexed",
          description: "Scanned + structured records",
        },
      ]}
      metricsBottom={[
        {
          value: "Days → Seconds",
          label: "Search Time Reduction",
          description: "From manual lookup to instant retrieval",
        },
        {
          value: "~70%",
          label: "Cost Reduction",
          description: "Significant reduction in manual processing costs",
        },
      ]}
    />
  );
}
