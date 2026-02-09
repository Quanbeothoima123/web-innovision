"use client";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const SoftwareDevelopment = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const CORE_CONCEPTS_DATA = [
    {
      title: "FRONTEND",
      desc1: "React, Angular, Vue for web apps",
      desc2: "Responsive UI/UX for cross-platform experience",
    },
    {
      title: "BACKEND",
      desc1: "Node.js, Python (FastAPI, Django), Java Spring Boot",
      desc2: "REST/gRPC APIs for scalable microservices",
    },
    {
      title: "DATABASES",
      desc1: "SQL (Postgres, MySQL) & NoSQL (MongoDB, Redis",
      desc2:
        "Optimized for high-traffic workloads with caching, sharding, and replication",
    },
    {
      title: "CLOUD & DEVOPS",
      desc1: "AWS, GCP, Azure deployment.",
      desc2: "CI/CD pipelines, container orchestration (Docker, Kubernetes)",
    },
  ];

  const KEY_POINTS = [
    {
      title:
        "Iterative Development: Work in sprints (2–3 weeks) with clear deliverables.",
    },
    {
      title:
        "Cross-functional Teams: Firmware engineers, backend/frontend developers, and QA work together.",
    },
    {
      title:
        "Continuous Feedback: Client reviews after each sprint, ensuring alignment.",
    },
    {
      title:
        "Transparency: Sprint backlog, burn-down charts, and progress tracking.",
    },
    {
      title:
        "Adaptability: Scope adjustments based on real-time business needs.",
    },
  ];

  const SCRUM_ROLES = [
    { role: "Product Owner (PO): Represents customer needs." },
    { role: "Scrum Master: Facilitates process, removes blockers." },
    {
      role: "Development Team: Delivers increments of working software.",
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
    return () => window.removeEventListener("scroll", handleScroll);
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
            src="/solutions/banner/solution3.png"
            alt="Software & Firmware Development Background"
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
              Software & Firmware Development
            </h1>

            <p className="text-black text-lg md:text-2xl leading-relaxed font-medium">
              Custom software and firmware solutions that power modern
              applications, from web platforms to embedded systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: CORE TECHNOLOGY */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
          <h2 className="text-[40px] md:text-[56px] text-center font-bold text-gray-900 uppercase tracking-tighter">
            Software <span className="text-[#3c90fc]">Development</span>
          </h2>
        </div>

        {/* 5.2 CONCEPT CARDS - Hiệu ứng đè title với 3 dòng desc */}
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
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
                </div>
                {/* Đường line trang trí phía dưới */}
                <div className="mt-8 w-full h-1 bg-gradient-to-r from-[#1081ea] via-[#77c3f4] to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6: DEVELOPMENT PROCESS - Parallax */}
      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24"
      >
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0 h-[130%]">
          <img
            src="/softwareAndFirmware-ai2.jpg"
            alt="Development Process Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-20 text-left text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[56px] font-bold text-white tracking-tighter uppercase mb-6"
            >
              Development <span className="text-[#3c90fc]">Process</span>
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed"
            >
              We follow the Agile/Scrum methodology to ensure flexibility,
              transparency, and rapid delivery of business value.
            </motion.span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-stretch">
            {/* 1. KEY POINTS - CHIẾM 7 PHẦN */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-7 bg-white/10 backdrop-blur-xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-8 uppercase tracking-widest border-b border-blue-500/30 pb-3">
                Key Points
              </h3>
              <div className="flex flex-col gap-y-6">
                {KEY_POINTS.map((item, index) => (
                  <div key={index} className="group">
                    <p className="text-white text-xs md:text-[16px] font-medium transition-colors leading-tight">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. SCRUM ROLES - CHIẾM 3 PHẦN */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-3 flex flex-col justify-between"
            >
              <div className="bg-[#1081ea]/10 backdrop-blur-md p-8 border border-blue-500/20 h-full">
                <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest border-b border-white/20 pb-3">
                  Scrum Roles
                </h3>
                <div className="space-y-6">
                  {SCRUM_ROLES.map((item, index) => (
                    <div key={index} className="relative">
                      <p className="text-white text-xs md:text-[16px] font-bold transition-colors leading-tight">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: VISUAL BREAK / IMAGE SECTION */}
      <section className="py-24 md:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full flex justify-center"
          >
            <img
              src="/SF-pipeline.png"
              alt="Team Collaboration Visual"
              className="w-full h-auto max-h-[700px] object-contain object-center"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
