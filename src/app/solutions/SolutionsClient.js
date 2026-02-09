"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

/**
 * FILE: src/app/solutions/SolutionsClient.js
 * Client Component - handles interactive UI
 */

/* =======================
   DATA
======================= */
const solutionsData = [
  {
    title: "AI Products",
    desc: "A suite of AI products that automates analysis, Q&A, and real-time decision making through advanced neural networks.",
    image: "/AI_Product.jpg",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Real-time Q&A",
    ],
    route: "/solutions/ai-products-2",
    category: "Artificial Intelligence",
  },
  {
    title: "Industrial AI & Automation",
    desc: "End-to-end industrial AI solutions for computer vision inspection, failure prediction, and seamless factory system integration.",
    image: "/IndustrialAI.jpg",
    features: ["Defect Detection", "Predictive Maintenance", "IoT Integration"],
    route: "/solutions/coming-soon",
    category: "Industrial Automation",
  },
  {
    title: "Software & Firmware Development",
    desc: "Expert software engineering and embedded system development tailored for technology products and enterprise-grade solutions.",
    image: "/softwareAndFirmware.jpg",
    features: ["Custom Web/App", "Embedded C/C++", "Cloud Architecture"],
    route: "/solutions/software-firmware-development-2",
    category: "Software Development",
  },
];

/* =======================
   STRUCTURED DATA (JSON-LD)
======================= */
const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "INNOVISION Solutions",
  description:
    "Comprehensive AI and technology solutions offered by INNOVISION Corporation",
  url: "https://innovision.com/solutions",
  numberOfItems: solutionsData.length,
  itemListElement: solutionsData.map((solution, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: solution.title,
      description: solution.desc,
      image: `https://innovision.com${solution.image}`,
      url: `https://innovision.com${solution.route}`,
      provider: {
        "@type": "Organization",
        name: "INNOVISION Corporation",
      },
      areaServed: {
        "@type": "Place",
        name: "Global",
      },
      serviceType: solution.category,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
    },
  })),
});

/* =======================
   BREADCRUMB STRUCTURED DATA
======================= */
const getBreadcrumbData = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://innovision.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://innovision.com/solutions",
    },
  ],
});

/* =======================
   FAQ STRUCTURED DATA
======================= */
const getFAQData = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI solutions does INNOVISION offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "INNOVISION offers three main solution categories: AI Products for intelligent automation and decision-making, Industrial AI & Automation for smart manufacturing, and custom Software & Firmware Development services for enterprise applications.",
      },
    },
    {
      "@type": "Question",
      name: "What industries can benefit from INNOVISION's AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our solutions serve multiple industries including manufacturing, real estate, fintech, government, and marketing. We specialize in AI-driven automation, computer vision, natural language processing, and embedded systems.",
      },
    },
    {
      "@type": "Question",
      name: "Does INNOVISION provide custom software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide expert software engineering and embedded system development tailored for technology products and enterprise-grade solutions, including custom web/app development, embedded C/C++, and cloud architecture.",
      },
    },
  ],
});

/* =======================
   MAIN COMPONENT
======================= */
const SolutionsClient = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const requestRef = useRef(null);

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
      setScrollY(e.scroll || 0);
      setIsScrolled((e.scroll || 0) > 50);
    });

    return () => {
      if (typeof lenis.destroy === "function") lenis.destroy();
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Multiple Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbData()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQData()),
        }}
      />

      <div className="bg-white min-h-screen font-['Montserrat'] overflow-x-hidden">
        {/* HERO BANNER */}
        <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background with Parallax */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/banner-solutions.png')",
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
            role="img"
            aria-label="Solutions banner showcasing AI and technology innovations"
          />

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-white via-white/40 to-transparent z-[1]" />
          <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white via-white/40 to-transparent z-[1]" />

          {/* Hero Content */}
          <div className="relative z-[2] text-left w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[44px] md:text-[72px] font-bold text-[#3c90fc] tracking-tighter uppercase"
            >
              Our Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-[16px] md:text-[18px] text-[#000000] font-medium max-w-2xl"
            >
              Empowering the future through AI-driven innovation.
            </motion.p>
          </div>
        </header>

        {/* SOLUTIONS LIST - ALTERNATING LAYOUT */}
        <main
          className="relative z-[10] bg-white w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-32 md:gap-48"
          role="main"
        >
          {solutionsData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* CONTENT SECTION */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-5/12 space-y-8"
                >
                  <div className="space-y-4">
                    <h2
                      className="text-[36px] md:text-[52px] font-bold text-black leading-[1.1]"
                      itemProp="name"
                    >
                      {item.title}
                    </h2>
                  </div>

                  <p
                    className="text-[17px] text-[#474363] leading-relaxed opacity-90"
                    itemProp="description"
                  >
                    {item.desc}
                  </p>

                  {/* Key Features */}
                  <div
                    className="flex flex-col gap-x-6 gap-y-3"
                    role="list"
                    aria-label={`${item.title} key features`}
                  >
                    {item.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2"
                        role="listitem"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full bg-[#3c90fc]"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-bold text-gray-700">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Link
                      href={item.route}
                      aria-label={`Learn more about ${item.title}`}
                      itemProp="url"
                    >
                      <motion.button
                        whileHover={{ x: 10 }}
                        className="group flex items-center gap-3 px-8 py-4 bg-[#3c90fc] text-white font-bold rounded-xl shadow-xl shadow-blue-100 transition-all hover:bg-[#2a78e4]"
                        type="button"
                      >
                        Read More
                        <span
                          className="transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-7/12 relative h-[300px] md:h-[500px] rounded-[40px] overflow-hidden group bg-gray-100"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.desc}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index === 0 ? "eager" : "lazy"}
                    itemProp="image"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Border Highlight */}
                  <div
                    className="absolute inset-0 border-[1px] border-white/20 group-hover:border-[#3c90fc]/40 rounded-[40px] transition-all duration-500 z-10"
                    aria-hidden="true"
                  />
                </motion.div>
              </article>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default SolutionsClient;
