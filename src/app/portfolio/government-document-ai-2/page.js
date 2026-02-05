import PortfolioCaseTemplate from "@/components/portfolio/PortfolioCaseTemplate";

export const metadata = {
  title: "Archive Search AI",
  description:
    "LLM-powered OCR + RAG search system for government archives, deployed securely on-premise.",
  alternates: { canonical: "/portfolio/archive-search-ai/" },
};

export default function Page() {
  return (
    <PortfolioCaseTemplate
      title="Archive Search AI"
      subtitle="LLM-powered OCR + RAG search system to instantly locate documents in government archives (secure on-premise deployment)."
      problem="Inefficient manual document search in government archives. Traditional systems require hours or days to locate specific documents, causing delays in public services, legal proceedings, and administrative decisions. Manual searches are error-prone and resource-intensive, leading to high operational costs and citizen dissatisfaction."
      solution={[
        "LLM-powered OCR + RAG search system, deployed on secure on-premise servers.",
        "Semantic search across scanned PDFs, contracts, decrees, and internal archive metadata.",
        "Evidence-linked answers: return record ID, references, and related documents in one view.",
      ]}
      // ✅ Hero: 2 ảnh
      primaryImage="/demo/archive/primary.jpg"
      secondaryImage="/demo/archive/secondary.jpg"
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
      // ✅ Modal IO cho 2 ảnh hero (nếu bạn chưa có thì dùng tạm nội dung này)
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
          input: "Case worker searches by citizen name / ID / document number",
          system: [
            "Query understanding + entity normalization (names, dates, IDs)",
            "Semantic retrieval + metadata filtering (year, department, record type)",
            "Return top matches with cited sources for verification",
          ],
          output:
            "Top 5 records found. Primary match: Archive #2019-1180 (confidence 0.92) + linked attachments.",
        },
      ]}
      // ✅ Khối IO (text + image) đặt trước metrics
      preMetricsBlocks={[
        {
          type: "split",
          mode: "io",
          title: "",
          image: "/demo/archive/io.png", // ảnh minh hoạ flow (như screenshot bạn gửi)
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
      // ✅ Metrics đúng như page cũ bạn gửi
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
