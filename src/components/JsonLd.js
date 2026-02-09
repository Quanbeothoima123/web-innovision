import { site } from "@/app/lib/site";

export default function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}${site.ogImage}`,
      email: site.email,
      sameAs: [site.socials.facebook, site.socials.linkedin, site.socials.zalo],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: site.supportPhone,
          contactType: "customer support",
          areaServed: "VN",
          availableLanguage: ["vi", "en"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        ...site.address,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      inLanguage: "vi",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
