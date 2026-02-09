"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * FILE: src/app/about/AboutUsClient.js
 * Client Component - handles interactive UI
 */

/* =======================
   STRUCTURED DATA (JSON-LD)
======================= */
const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INNOVISION Corporation",
  url: "https://innovision.com",
  logo: "https://innovision.com/logo.png",
  description:
    "AI and Edge Computing technology company specializing in LLMs, Edge AI, and digital transformation solutions",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Southeast Asia",
  },
  sameAs: [
    // Add social media links here
    // "https://linkedin.com/company/innovision",
    // "https://twitter.com/innovision"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English", "Vietnamese"],
  },
  areaServed: {
    "@type": "Place",
    name: "Southeast Asia",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "Edge Computing",
    "Embedded Systems",
    "Digital Transformation",
  ],
});

const AboutUsClient = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const requestRef = useRef(null);

  const ourValues = [
    {
      title: "Agility & Ownership",
      desc: "We move fast, take initiative, and own our results.",
      img: "/we_work/wework1.png",
    },
    {
      title: "Innovation with Purpose",
      desc: "Every project must bring practical value to clients and society.",
      img: "/we_work/wework2.png",
    },
    {
      title: "Openness & Collaboration",
      desc: "We welcome ideas, embrace partnerships, and thrive on teamwork.",
      img: "/we_work/wework3.png",
    },
    {
      title: "Integrity & Trust",
      desc: "We commit to transparency and long-term relationships.",
      img: "/we_work/wework4.png",
    },
  ];

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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData()),
        }}
      />

      <div className="bg-white min-h-screen w-full overflow-x-hidden font-['Montserrat']">
        {/* 1. HERO BANNER */}
        <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background image with Parallax */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/banner-aboutus.png')",
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
            role="img"
            aria-label="About us hero background"
          />

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-white via-white/40 to-transparent z-[1]" />
          <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white via-white/40 to-transparent z-[1]" />

          {/* Hero Content */}
          <div className="relative z-[2] text-left w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[44px] md:text-[72px] font-bold text-[#3c90fc] tracking-tighter"
            >
              ABOUT US
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-[16px] md:text-[18px] text-[#000000] font-medium max-w-2xl"
            >
              Engineering Intelligence for the Real World
            </motion.p>
          </div>
        </header>

        {/* 2. ABOUT INNOVISION SECTION */}
        <section
          className="relative z-[10] bg-white py-16 md:py-24"
          aria-labelledby="about-heading"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border-8 border-gray-50">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                    alt="INNOVISION technology team working on AI solutions"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div
                  className="absolute -bottom-6 -right-6 w-full h-full bg-[#3c90fc]/5 rounded-[32px] -z-10"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Right column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <h2
                  id="about-heading"
                  className="text-[32px] md:text-[42px] font-bold text-black leading-tight"
                >
                  About <span className="text-[#3c90fc]">Innovision</span>
                </h2>

                <div className="flex flex-col gap-3" role="list">
                  <span
                    className="py-1.5 text-[13px] font-bold text-[#474363]"
                    role="listitem"
                  >
                    Software Technology Solutions
                  </span>
                  <span
                    className="py-1.5 text-[13px] font-bold text-[#474363]"
                    role="listitem"
                  >
                    Custom Software Services
                  </span>
                </div>

                <p className="text-[16px] text-[#474363] text-justify leading-relaxed opacity-90">
                  Innovision Corporation is a technology startup specializing in
                  AI, LLMs, and Edge AI. We deliver scalable, real-world
                  solutions by combining AI software and embedded systems
                  expertise. Beyond product development, we also provide
                  automation, software, and firmware services that drive
                  sustainable business growth.
                </p>

                <Link
                  href="/portfolio"
                  aria-label="View our AI and technology projects"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-fit px-8 py-4 bg-[#3c90fc] text-white font-bold rounded-full shadow-lg shadow-[#3c90fc]/30 transition-all hover:bg-[#2a78e4]"
                    type="button"
                  >
                    Our Projects
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. VISION & MISSION SECTION */}
        <section
          className="relative z-[10] bg-gray-50 py-16 md:py-24"
          aria-labelledby="vision-mission-heading"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white shadow-sm border border-gray-100 flex flex-col gap-6"
            >
              <h2 className="text-[28px] md:text-[36px] font-bold text-black uppercase tracking-tight">
                Our <span className="text-[#3c90fc]">Vision</span>
              </h2>
              <p className="text-[16px] text-[#474363] leading-relaxed opacity-80 font-medium">
                To become a leading AI and Edge Computing technology company in
                Southeast Asia, empowering enterprises to unlock the potential
                of their data and accelerate digital transformation.
              </p>
            </motion.article>

            {/* Mission */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white shadow-sm border border-gray-100 flex flex-col gap-6"
            >
              <h2 className="text-[28px] md:text-[36px] font-bold text-black uppercase tracking-tight">
                Our <span className="text-[#3c90fc]">Mission</span>
              </h2>

              <ul className="flex flex-col gap-4" role="list">
                {[
                  "Bring AI closer to data and operational workflows.",
                  "Transform unstructured information into actionable business intelligence.",
                  "Build a reusable and scalable AI ecosystem that bridges research and applications.",
                  "Deliver innovative solutions that drive sustainable business growth.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-[15px] text-[#474363]"
                    role="listitem"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-[#3c90fc] mt-2 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>

        {/* 4. OUR VALUES SECTION */}
        <section
          className="relative z-[10] bg-white py-16 md:py-20"
          aria-labelledby="values-heading"
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <h2
                id="values-heading"
                className="text-[32px] md:text-[42px] font-bold text-[#3c90fc]"
              >
                Our Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ourValues.map((value, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[500px] overflow-hidden cursor-pointer rounded-[24px]"
                  aria-label={`${value.title}: ${value.desc}`}
                >
                  {/* Background Image */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${value.img})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    role="img"
                    aria-label={value.title}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 z-10 flex flex-col justify-end p-8 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(60, 144, 252, 1) 0%, rgba(60, 144, 252, 0.8) 30%, rgba(60, 144, 252, 0) 100%)",
                    }}
                  >
                    <h3 className="text-white text-[22px] font-bold mb-3 uppercase tracking-tight leading-tight">
                      {value.title}
                    </h3>
                    <p className="text-white/90 text-[16px] leading-relaxed mb-4">
                      {value.desc}
                    </p>
                  </div>

                  {/* Border */}
                  <div
                    className="absolute inset-0 border border-white/10 group-hover:border-[#3c90fc]/30 rounded-[24px] transition-all duration-500 z-20 pointer-events-none"
                    aria-hidden="true"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsClient;
