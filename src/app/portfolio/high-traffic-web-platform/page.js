import PortfolioCaseTemplate from "@/components/portfolio/PortfolioCaseTemplate";

export const metadata = {
  title: "High-traffic Web Platform",
  description:
    "Enterprise-grade platform built to handle 50,000+ concurrent users with <200ms response time and 99.9% uptime.",
  alternates: { canonical: "/portfolio/high-concurrency-platform/" },
};

export default function Page() {
  return (
    <PortfolioCaseTemplate
      title="High-traffic Web Platform"
      subtitle="LLM-powered document intelligence system that revolutionizes government archive management with secure, lightning-fast search and retrieval capabilities."
      problem="Enterprises struggle with large-scale concurrent users on their platforms"
      solution={[
        "React frontend + Node.js backend ",
        "Database cluster (Postgres + Redis) with caching & sharding.",
        "Auto-scaling on AWS/GCP for cost efficiency.",
      ]}
      /** ✅ Hero: cần 2 ảnh như template hiện tại của bạn */
      primaryImage="/portfolio/high_traffic_web_platform/primary.png"
      secondaryImage="/portfolio/high_traffic_web_platform/secondary.png"
      mockImage={undefined}
      captions={[
        "Architecture designed for high concurrency & high availability",
        "Clustered storage + Redis caching for <200ms under load",
      ]}
      verticalLabel={"HIGH\nSCALE"}
      bigNumber="03"
      keyFeatures={[
        "Load balancing + horizontal scaling strategy",
        "Redis caching for hot paths + session handling",
        "DB read/write separation + sharding-ready schema",
        "Autoscaling policies + rate limiting + circuit breakers",
        "Monitoring: latency, error rate, saturation + alerting",
      ]}
      /** ✅ Modal IO cho 2 ảnh hero */
      io={[
        {
          input:
            "A campaign launch drives a sudden spike to tens of thousands of concurrent users",
          system: [
            "Traffic routed through load balancer with health checks",
            "Node.js services scale horizontally based on CPU/RPS",
            "Redis cache serves hot data to reduce DB pressure",
            "Postgres read replicas handle read-heavy traffic",
          ],
          output:
            "Stable sessions maintained. P95 latency remains <200ms under peak load.",
        },
        {
          input: "User activity increases database reads and session writes",
          system: [
            "Session + rate limiting stored in Redis",
            "Cache-aside strategy with TTL for frequently accessed entities",
            "DB connection pooling + query optimization on critical endpoints",
          ],
          output:
            "Database load reduced significantly, preventing throttling and maintaining 99.9% uptime.",
        },
      ]}
      /** ✅ Nếu bạn muốn thêm 1 block ảnh/IO trước metrics (giống archive page) */

      /** ✅ Metrics giống section xanh của bạn */
      metricsTop={[
        {
          value: "50,000+",
          label: "Concurrent users",
          description: "Peak concurrency",
        },
        {
          value: "99.9%",
          label: "Uptime",
          description: "SLA",
        },
        {
          value: "<200ms",
          label: "Response time",
          description: "Under load (P95)",
        },
        {
          value: "30%",
          label: "Cloud cost savings",
          description: "Via scaling + caching",
        },
      ]}
      metricsBottom={[
        {
          value: "Spike → Stable",
          label: "Autoscaling Reliability",
          description: "Handles traffic bursts without downtime",
        },
        {
          value: "Cache-first",
          label: "DB Load Reduction",
          description: "Redis offloads hot reads & sessions",
        },
      ]}
    />
  );
}
