import PortfolioCaseTemplate from "@/components/portfolio/PortfolioCaseTemplate";

export const metadata = {
  title: "Fintech Verification AI",
  description:
    "AI assistant to verify fintech transactions from logs + receipts, detect mismatches, and flag suspicious cases for review.",
  alternates: { canonical: "/portfolio/fintech-verification-ai/" },
};

export default function Page() {
  return (
    <PortfolioCaseTemplate
      title="Fintech Verification AI"
      subtitle="LLM + RAG combined with Document AI to automatically verify and classify financial transactions"
      problem="In payment gateway and fintech companies, accounting teams are overwhelmed by manually verifying thousands of daily transactions. These transactions often include text data (receipts, transaction logs, notes) and images (screenshots of transfers, scanned invoices, payment slips). Manual checking is time-consuming, error-prone, and costly."
      solution={[
        "LLM + RAG combined with Document AI (OCR + NLP) to analyze both text and image-based transaction evidence",
        "Automatically classify whether a transaction is legitimate, duplicate, or suspicious.",
        "Provides accountants with a confidence score and cited references (from transaction logs or attached images).",
        "Flags anomalies for human review, reducing workload significantly",
      ]}
      primaryImage="/portfolio/fintech-verification-ai/primary.png"
      secondaryImage="/portfolio/fintech-verification-ai/secondary.png"
      mockImage={undefined}
      captions={[
        "Fintech transaction verification — unified view from logs + receipts",
        "Automated review assistant for accountants with evidence-linked decisions",
      ]}
      verticalLabel={"CASE\nSTUDY"}
      bigNumber="01"
      keyFeatures={[
        "OCR + parsing for receipts / invoices / screenshots",
        "RAG retrieval for transaction logs & historical evidence",
        "Rule checks (format, currency/date, amount sanity) before LLM decisioning",
        "Human-in-the-loop escalation for low confidence / suspicious cases",
      ]}
      // ✅ Cùng 1 IO cho cả 2 ảnh khi click
      io={[
        {
          input: "Transaction log (text) + payment screenshot (image)",
          system: [
            "AI verifies if payment reference, amount, and timestamp match company records.",
          ],
          output:
            '"Transaction verified (legit), Source: system log + uploaded receipt."',
        },
        {
          input: "Transaction log (text) + payment screenshot (image)",
          system: [
            "AI verifies if payment reference, amount, and timestamp match company records.",
          ],
          output:
            '"Transaction verified (legit), Source: system log + uploaded receipt."',
        },
      ]}
      // ✅ Khối thêm trước metricsTop
      preMetricsBlocks={[
        // 1) Khối IO (text + image)
        {
          type: "split",
          mode: "io",
          title: "",
          image: "/portfolio/fintech-verification-ai/evidence_flow.png",
          imageSide: "right",
          input: "Transaction log (text) + payment screenshot (image)",
          system: [
            "AI verifies if payment reference, amount, and timestamp match company records.",
          ],
          output:
            '"Transaction verified (legit), Source: system log + uploaded receipt."',
        },

        // 2) Khối diagram (image-only)
        {
          type: "image",
          title: "Fintech Transaction Verification Assistant",
          subtitle: "",
          image: "/portfolio/fintech-verification-ai/diagram.png",
          alt: "Fintech verification flow diagram",
        },
      ]}
      metricsTop={[
        {
          value: "50K+",
          label: "Throughput",
          description: "Transactions per hour",
        },
        {
          value: "1B",
          label: "Processing",
          description: "Tokens per day",
        },
        {
          value: "97%",
          label: "Accuracy",
          description: "Fraud detection precision",
        },
        {
          value: "<400ms",
          label: "Latency",
          description: "Per transaction",
        },
      ]}
      metricsBottom={[
        {
          value: "~70%",
          label: "Workload Reduction",
          description: "Reduction in manual workload for accounting teams",
        },
        {
          value: "~90%+",
          label: "Detection Accuracy",
          description:
            "Accuracy in detecting mismatched or fraudulent transactions",
        },
      ]}
    />
  );
}
