"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const AIProductsDetail = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const TECH_SLIDER_DATA = [
    {
      title: "Data Source",
      desc: "PDFs, SOPs, Contracts, Property Listings, Policies",
      image: "/solutions/tech_card/tech-card-1.png",
    },
    {
      title: "OCR & Parsing",
      desc: "Extract text, detect layout & tables",
      image: "/solutions/tech_card/tech-card-2.png",
    },
    {
      title: "Embedding & Indexing",
      desc: "Store vectors in a secure database (vector DB)",
      image: "/solutions/tech_card/tech-card-3.png",
    },
    {
      title: "Retriever + RAG",
      desc: "Retrieve relevant chunks for queries",
      image: "/solutions/tech_card/tech-card-4.png",
    },
    {
      title: "LLM (Domain-tuned)",
      desc: "Generate answers grounded in context",
      image: "/solutions/tech_card/tech-card-5.png",
    },
    {
      title: "Outputs (UI / API)",
      desc: "PDFs, SOPs, Contracts, Property Listings, Policies",
      image: "/solutions/tech_card/tech-card-6.png",
    },
  ];

  const CORE_CONCEPTS_DATA = [
    {
      title: "LLM + RAG",
      desc1: "Supports Vietnamese, English.",
      desc2: "Retrieval-Augmented Generation ensures answers with sources",
      desc3: "Domain-specific fine-tuning for enterprises & government.",
    },
    {
      title: "Document AI",
      desc1: "Supports Vietnamese, English.",
      desc2: "Retrieval-Augmented Generation ensures answers with sources",
      desc3: "Domain-specific fine-tuning for enterprises & government.",
    },
    {
      title: "Conversational AI",
      desc1: "Internal AI assistants for staff Q&A.",
      desc2: "Natural language interfaces for enterprise databases",
      desc3: "Secure deployment: on-prem, hybrid, or cloud",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Optional cleanup (tuỳ version Lenis):
      // lenis.destroy?.();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="bg-white min-h-screen font-['Montserrat'] overflow-x-hidden">
      {/* SECTION 1: HERO BANNER - Xóa lớp phủ đen, title màu #3c90fc, text màu đen */}
      <section className="relative h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/solutions/banner/solution1.png"
            alt="AI Products Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent opacity-90" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent opacity-100" />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-left"
          >
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-black hover:text-[#3c90fc] font-bold uppercase tracking-widest text-sm mb-8 transition-colors group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Solutions
            </Link>

            <h1 className="text-[44px] md:text-[86px] font-bold text-[#3c90fc] leading-[0.9] tracking-tighter mb-8 uppercase">
              AI Products
            </h1>

            <p className="text-black text-lg md:text-2xl leading-relaxed font-medium">
              A suite of AI products that automates analysis, Q&A, and real-time
              decision making through advanced neural networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: VISION STATEMENT - Đưa vào container 1400px */}
      <section className="py-32 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="inline-block px-6 py-2 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">
                Our Vision
              </span>
              <h2 className="text-[40px] md:text-[64px] font-bold text-gray-900 leading-tight tracking-tight">
                Vision Statement
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed italic border-l-4 border-blue-500 pl-8">
                &quot;We believe the future of AI lies in domain-specific,
                localized LLMs that empower organizations to unlock their data
                and knowledge.&quot;
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-8 flex items-center gap-3">
                  <Zap size={24} /> WHY NOW
                </h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Rise of domain-adapted LLMs",
                      desc: "Specialized models for finance, healthcare, and legal sectors.",
                    },
                    {
                      title: "Data privacy & compliance",
                      desc: "Security is now a top-tier priority for enterprise data.",
                    },
                    {
                      title: "Multilingual NLP",
                      desc: "Critical capabilities required for global and emerging markets.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2
                        className="text-blue-500 mt-1 shrink-0"
                        size={22}
                      />
                      <p className="text-gray-700 text-lg">
                        <strong className="text-black">{item.title}:</strong>{" "}
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#3c90fc] p-10 rounded-[40px] text-white shadow-2xl shadow-blue-100"
              >
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">
                  Our Thesis
                </h3>
                <div className="space-y-6 text-lg">
                  <p className="opacity-95 leading-relaxed">
                    Businesses and government still rely heavily on{" "}
                    <strong>unstructured documents</strong> (PDFs, SOPs,
                    contracts), creating a massive efficiency gap.
                  </p>
                  <p className="opacity-95 leading-relaxed">
                    There is a <strong>strong demand for AI assistants</strong>{" "}
                    that truly understand the Vietnamese context, culture, and
                    industry terminology.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TECHNOLOGY LANDSCAPE - Parallax */}
      <section
        ref={containerRef}
        className="relative h-[100vh] overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0 h-[130%]">
          <img
            src="/ai-solution1.jpg"
            alt="Technology Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 pb-24 flex flex-col justify-between h-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[48px] font-bold text-center text-white mb-20 tracking-tighter uppercase pt-24"
          >
            Technology <span className="text-[#3c90fc]">Landscape</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 border-l-2 border-white/30  pl-10"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400 uppercase tracking-widest">
                Global Trends
              </h3>
              <ul className="space-y-6 text-gray-300 text-lg leading-relaxed font-medium">
                <li>
                  Rise of domain-adapted LLMs (finance, healthcare, legal).
                </li>
                <li>Data privacy & compliance becoming top priority.</li>
                <li>
                  Multilingual NLP critical in global and emerging markets.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 border-l-2 border-white/30 pl-10"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400 uppercase tracking-widest">
                Vietnam Context
              </h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-medium">
                <p>
                  Businesses and government still rely heavily on unstructured
                  documents (PDFs, SOPs, contracts).
                </p>
                <p>
                  Strong demand for AI assistants that understand Vietnamese
                  context and terminology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CORE TECHNOLOGY */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
          <h2 className="text-[40px] md:text-[56px] font-bold text-gray-900 uppercase tracking-tighter">
            Core <span className="text-[#3c90fc]">Technology</span>
          </h2>
        </div>

        {/* 5.1 SLIDER CHẠY VÔ TẬN - Tối ưu theo data mới */}
        <div className="relative flex overflow-hidden mb-32 border-y border-gray-100 py-8 bg-gray-50/30">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -2200] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...TECH_SLIDER_DATA, ...TECH_SLIDER_DATA].map((item, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[380px] shrink-0 border border-gray-200 bg-white rounded-none shadow-sm hover:border-[#3c90fc] transition-colors group"
              >
                <div className="h-[220px] overflow-hidden bg-gray-100 flex items-center justify-center p-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 uppercase text-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm whitespace-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 5.2 CONCEPT CARDS - Hiệu ứng đè title với 3 dòng desc */}
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {CORE_CONCEPTS_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col"
            >
              {/* Title Block với Linear Gradient */}
              <div
                className="h-44 p-10 rounded-none flex items-start"
                style={{
                  background:
                    "linear-gradient(90deg, #1081ea 0%, #77c3f4 100%)",
                }}
              >
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">
                  {item.title}
                </h3>
              </div>

              {/* Desc Block - Glassmorphism đè lên chuẩn chiều ngang */}
              <div className="relative z-10 -mt-16 p-10 bg-white/90 backdrop-blur-xl border border-gray-100 shadow-xs min-h-[280px] flex flex-col rounded-none w-full">
                <div className="space-y-4 flex-grow">
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1081ea] mt-2 shrink-0" />
                    <p className="text-gray-700 font-semibold text-sm md:text-base leading-snug">
                      {item.desc1}
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1081ea] mt-2 shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc2}
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1081ea] mt-2 shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc3}
                    </p>
                  </div>
                </div>
                {/* Đường line trang trí phía dưới */}
                <div className="mt-8 w-full h-1 bg-gradient-to-r from-[#1081ea] via-[#77c3f4] to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIProductsDetail;
