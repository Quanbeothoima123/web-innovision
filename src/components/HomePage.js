"use client";

import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

/* =======================
   STRUCTURED DATA SCHEMAS
======================= */
const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://innovision.com/#organization",
  name: "INNOVISION Corporation",
  alternateName: "INNOVISION",
  url: "https://innovision.com",
  logo: {
    "@type": "ImageObject",
    url: "https://innovision.com/logo.svg",
    width: 250,
    height: 60,
  },
  description:
    "Leading AI and Edge Computing technology company specializing in LLM, Edge AI, Industrial Automation, and custom software development",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alley 62, Khuc Thua Du, Dich Vong Ward",
    addressLocality: "Cau Giay District",
    addressRegion: "Hanoi",
    addressCountry: "VN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+84-88-639-2913",
      contactType: "Customer Service",
      email: "support@innovision.com",
      availableLanguage: ["English", "Vietnamese"],
      areaServed: ["VN", "Southeast Asia"],
    },
  ],
  sameAs: [
    // Add your social media URLs here
    // "https://www.linkedin.com/company/innovision",
    // "https://twitter.com/innovision",
    // "https://www.facebook.com/innovision",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "Edge Computing",
    "Industrial Automation",
    "Computer Vision",
    "Natural Language Processing",
    "Embedded Systems",
    "IoT",
    "Smart Manufacturing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "INNOVISION Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "AI Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise LLM Solutions",
              description:
                "Custom Large Language Model solutions for businesses",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Edge AI Systems",
              description: "Intelligent edge computing solutions",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Industrial AI & Automation",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Computer Vision Inspection",
              description: "Automated quality control and defect detection",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Predictive Maintenance",
              description: "AI-powered equipment failure prediction",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Software & Firmware Development",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
              description: "Web, mobile, and enterprise software solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Embedded Systems Development",
              description: "Firmware and embedded software engineering",
            },
          },
        ],
      },
    ],
  },
});

const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://innovision.com/#website",
  url: "https://innovision.com",
  name: "INNOVISION Corporation",
  description:
    "AI, LLM, and Edge Computing solutions for digital transformation",
  publisher: {
    "@id": "https://innovision.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://innovision.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
});

const getWebPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://innovision.com/#webpage",
  url: "https://innovision.com",
  name: "INNOVISION - AI & Edge Computing Solutions",
  description:
    "Leading the way in AI, LLM, and Edge Computing solutions for a smarter future",
  isPartOf: {
    "@id": "https://innovision.com/#website",
  },
  about: {
    "@id": "https://innovision.com/#organization",
  },
  breadcrumb: {
    "@id": "https://innovision.com/#breadcrumb",
  },
});

const getBreadcrumbSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://innovision.com/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://innovision.com",
    },
  ],
});

const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://innovision.com/#localbusiness",
  name: "INNOVISION Corporation",
  image: "https://innovision.com/logo.svg",
  telephone: "+84-88-639-2913",
  email: "support@innovision.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alley 62, Khuc Thua Du, Dich Vong Ward",
    addressLocality: "Cau Giay District",
    addressRegion: "Hanoi",
    postalCode: "100000",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.0285,
    longitude: 105.8542,
  },
  url: "https://innovision.com",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
});

export default function Homepage() {
  // ... existing states and refs ...

  // (Keep all your existing code here)

  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const requestRef = useRef(undefined);
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [isAchievementPaused, setIsAchievementPaused] = useState(false);

  const achievements = [
    {
      title: "AI Vision for Manufacturing",
      description:
        "Delivered proof-of-concept systems for automated OK/NG inspection with accuracy rates above 95%.",
    },
    {
      title: "LLM Development for Enterprises & Government",
      description:
        "Developed a Vietnamese domain-specific LLM with Retrieval-Augmented Generation (RAG) for knowledge management.",
    },
    {
      title: "Firmware & IoT Services",
      description:
        "Exported embedded software and firmware solutions to clients in Asia and Europe.",
    },
    {
      title: "Ecosystem Recognition",
      description:
        "Accepted into global technology ecosystems (AWS, semiconductor partners, research collaborations).",
    },
    {
      title: "Real Estate Data Pipeline",
      description:
        "Built an AI-driven workflow that standardized 5,000 property listings within just 10 days.",
    },
  ];

  const competencies = [
    {
      title: "AI Products LLM & Edge AI",
      description: "Enterprise LLM and edge AI for intelligent automation.",
      icon: "/chat-bot.svg",
    },
    {
      title: "Industrial AI & Automation Smart Manufacturing",
      description:
        "Smart vision, predictive maintenance, and seamless factory integration.",
      icon: "/cyborg-3.svg",
    },
    {
      title: "Software & Firmware",
      description: "End-to-end software from devices to cloud platforms.",
      icon: "/screen-share.svg",
    },
  ];

  const howWeWork = [
    {
      title: "Lean & Efficient",
      description: "Small teams, high impact, clear priorities.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Research Meets Practice",
      description: "We transform cutting-edge AI into real-world applications.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Continuous Learning",
      description:
        "Every challenge is an opportunity to grow skills and knowledge.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Partnership Mindset",
      description:
        "We treat clients and partners as collaborators, not just customers.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const clientSections = [
    {
      title: "Our Clients",
      items: [
        {
          desc: "Enterprises - Manufacturing, real estate, and technology sectors.",
        },
        {
          desc: "Government - Agencies adopting AI for efficiency and public services.",
        },
        {
          desc: "Startups & SMEs - Outsourcing AI, software, and firmware development.",
        },
      ],
    },
    {
      title: "Our Partners",
      items: [
        {
          desc: "Semiconductors - Supporting hardware and embedded ecosystems.",
        },
        {
          desc: "Cloud Providers - AWS/GCP – cloud & AI infrastructure.",
        },
        {
          desc: "Factories - Electronics units for Edge AI device deployment.",
        },
        {
          desc: "Academia - Universities co-developing AI innovation.",
        },
      ],
    },
  ];

  const partnerLogos = [
    "/logo/ais.png",
    "/logo/arrow.png",
    "/logo/itmon.png",
    "/logo/devzone.png",
    "/logo/qualcomm.png",
    "/logo/aws.png",
    "/logo/infineon.png",
    "/logo/vinfast.png",
    "/logo/nuvoton.png",
    "/logo/hitec.png",
    "/logo/lidinco.png",
    "/logo/nordic.png",
    "/logo/rostek.png",
    "/logo/nxp.png",
    "/logo/OHSPTEK.png",
    "/logo/ais.png",
    "/logo/arrow.png",
    "/logo/itmon.png",
    "/logo/devzone.png",
    "/logo/qualcomm.png",
    "/logo/aws.png",
    "/logo/infineon.png",
    "/logo/vinfast.png",
    "/logo/nuvoton.png",
    "/logo/hitec.png",
    "/logo/lidinco.png",
    "/logo/nordic.png",
    "/logo/rostek.png",
    "/logo/nxp.png",
    "/logo/OHSPTEK.png",
  ];

  // ... existing useEffects ...

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestRef.current = requestAnimationFrame(raf);
    };
    requestRef.current = requestAnimationFrame(raf);

    lenis.on("scroll", (e) => {
      setScrollY(e.scroll);
      setIsScrolled(e.scroll > 50);
    });

    return () => {
      lenis.destroy();
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // useEffect cho scroll to top - chỉ chạy 1 lần khi component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []); // ← dependency array rỗng = chỉ chạy 1 lần

  // useEffect cho achievement carousel
  useEffect(() => {
    if (isAchievementPaused) return;
    const interval = setInterval(() => {
      setAchievementIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAchievementPaused, achievements.length]);

  return (
    <>
      {/* Multiple Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebsiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalBusinessSchema()),
        }}
      />

      <div className="bg-white min-h-screen w-full overflow-x-hidden font-['Montserrat']">
        {/* 2. HERO SECTION */}
        <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background with Parallax */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/bg.png')",
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
            role="img"
            aria-label="INNOVISION hero background showcasing AI technology"
          />

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white via-white/40 to-transparent z-[1]" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white via-white/40 to-transparent z-[1]" />

          {/* Hero Content */}
          <div className="relative z-[2] text-center w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[44px] md:text-[72px] font-bold text-[#3c90fc] tracking-tighter"
            >
              Beyond Intelligent
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-[16px] md:text-[18px] text-[#3c3c3c] font-medium max-w-2xl mx-auto"
            >
              Leading the way in AI, LLM, and Edge Computing solutions for a
              smarter future.
            </motion.p>
          </div>
        </header>

        {/* 3. SECTION: COMPETENCIES */}
        <section
          className="relative z-[10] bg-white py-24 md:py-32"
          aria-labelledby="competencies-heading"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2
                id="competencies-heading"
                className="text-[36px] md:text-[48px] font-bold text-[#3c90fc] mb-6"
              >
                Our Core Competencies
              </h2>
              <p className="text-[18px] text-[#474363] max-w-2xl mx-auto font-medium">
                We operate across three complementary pillars to deliver
                innovation and value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {competencies.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`group relative p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-6 flex flex-col items-center text-center
                    ${index === 1 ? "md:h-[400px] md:-translate-y-8 z-20 border-[#3c90fc]/20" : "md:h-[340px] z-10"}`}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3c90fc] transition-all duration-500"
                    aria-hidden="true"
                  >
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-24 h-24 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                      loading="lazy"
                    />
                  </div>

                  <h3
                    className="text-[22px] font-bold text-black mb-4"
                    itemProp="name"
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#474363] text-[15px] opacity-70"
                    itemProp="description"
                  >
                    {item.description}
                  </p>
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[4px] bg-[#3c90fc] group-hover:w-full transition-all duration-500"
                    aria-hidden="true"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECTION: HOW WE WORK */}
        <section
          className="relative z-[10] bg-white py-24 md:py-32"
          aria-labelledby="how-we-work-heading"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2
                id="how-we-work-heading"
                className="text-[36px] md:text-[48px] font-bold text-[#3c90fc] mb-6"
              >
                How We Work
              </h2>
              <p className="text-[16px] md:text-[18px] text-black max-w-3xl mx-auto opacity-80 leading-relaxed">
                Our culture is reflected in the way we work with each other and
                with our partners.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howWeWork.map((item, index) => (
                <article
                  key={index}
                  className="group relative h-[450px] overflow-hidden cursor-pointer shadow-lg rounded-lg"
                  itemScope
                  itemType="https://schema.org/Thing"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                    role="img"
                    aria-label={item.title}
                  />
                  <div
                    className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0 z-10"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 text-left">
                    <div className="inline-block w-fit">
                      <h3
                        className="text-white text-[22px] font-bold mb-2"
                        itemProp="name"
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      className="text-white/80 text-[14px] mt-4"
                      itemProp="description"
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SECTION: KEY ACHIEVEMENTS */}
        <section
          className="relative z-[10] py-24 md:py-32 overflow-hidden min-h-[700px] flex items-center"
          aria-labelledby="achievements-heading"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
            style={{
              backgroundImage: "url('/bg_keyAchievements.jpg')",
            }}
            role="img"
            aria-label="Key achievements background"
          />
          <div
            className="absolute inset-0 bg-black/60 z-[1]"
            aria-hidden="true"
          />

          <div className="relative z-[2] w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 text-left">
              <h2
                id="achievements-heading"
                className="text-[36px] md:text-[48px] font-bold text-[#3c90fc] mb-6"
              >
                Key Achievements
              </h2>
              <p className="text-[18px] text-white font-medium opacity-90 leading-relaxed mb-8">
                Driving digital transformation through proven AI solutions.
              </p>
              <div
                className="flex gap-2"
                role="tablist"
                aria-label="Achievement indicators"
              >
                {achievements.map((_, i) => (
                  <div
                    key={i}
                    role="tab"
                    aria-selected={achievementIndex === i}
                    aria-label={`Achievement ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${achievementIndex === i ? "w-10 bg-[#3c90fc]" : "w-3 bg-white/30"}`}
                  />
                ))}
              </div>
            </div>

            <div
              className="w-full md:w-1/2 relative h-[450px] flex items-center justify-center"
              onMouseEnter={() => setIsAchievementPaused(true)}
              onMouseLeave={() => setIsAchievementPaused(false)}
            >
              {achievements.map((item, index) => {
                const isActive = index === achievementIndex;
                const isPrev =
                  (achievementIndex - 1 + achievements.length) %
                    achievements.length ===
                  index;
                const isNext =
                  (achievementIndex + 1) % achievements.length === index;
                if (!(isActive || isPrev || isNext)) return null;

                return (
                  <motion.article
                    key={index}
                    animate={{
                      x: isActive ? 60 : isPrev ? 500 : 0,
                      opacity: isPrev ? 0 : 1,
                      zIndex: isActive ? 50 : 40,
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute w-[320px] md:w-[450px] p-10 rounded-[32px] bg-white shadow-2xl flex flex-col justify-center border border-white/10"
                    style={{ backgroundColor: "#ffffff" }}
                    itemScope
                    itemType="https://schema.org/Achievement"
                  >
                    <div
                      className="w-12 h-12 bg-[#3c90fc]/10 rounded-xl flex items-center justify-center mb-8 text-[#3c90fc] font-bold text-lg"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </div>
                    <h3
                      className="text-[20px] md:text-[24px] font-bold text-black mb-5 leading-tight"
                      itemProp="name"
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#474363] text-[15px] leading-relaxed"
                      itemProp="description"
                    >
                      {item.description}
                    </p>
                    <div
                      className={`absolute bottom-8 right-10 transition-opacity duration-500 ${isActive ? "opacity-10" : "opacity-0"}`}
                      aria-hidden="true"
                    >
                      <span className="font-black text-7xl text-[#3c90fc]">
                        {index + 1}
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. SECTION: CLIENTS & PARTNERS */}
        <section
          className="relative z-[10] bg-white py-16 md:py-20"
          aria-labelledby="clients-partners-heading"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2
                id="clients-partners-heading"
                className="text-[32px] md:text-[42px] font-bold text-[#3c90fc] mb-3"
              >
                Clients & Partners
              </h2>
              <p className="text-[16px] text-[#3c3c3c] font-medium opacity-80">
                Trusted by industry leaders.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              {clientSections.map((section, idx) => {
                const isLeft = idx === 0;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col gap-6 ${isLeft ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"}`}
                  >
                    <div
                      className={`flex items-center gap-3 ${isLeft ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <h3 className="text-[22px] font-bold uppercase">
                        {section.title}
                      </h3>
                    </div>
                    <div className="grid gap-3 w-full" role="list">
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          role="listitem"
                          className={`p-4 rounded-xl border border-gray-50 hover:bg-gray-50 flex flex-col ${isLeft ? "lg:items-end" : "lg:items-start"}`}
                        >
                          <p className="text-[#474363] text-[14px] opacity-75">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* PARTNER LOGOS CAROUSEL */}
            <div className="relative mt-20 pt-10 border-t border-gray-50">
              <div
                className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"
                aria-hidden="true"
              />

              <div
                className="flex overflow-hidden group"
                role="list"
                aria-label="Partner logos"
              >
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex whitespace-nowrap gap-20 items-center py-4"
                >
                  {partnerLogos.map((logoPath, i) => (
                    <div
                      key={i}
                      role="listitem"
                      className="flex-shrink-0 w-32 h-12 flex items-center justify-center cursor-pointer 
                                 grayscale-0 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <img
                        src={logoPath}
                        alt={`Partner logo ${i + 1}`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
