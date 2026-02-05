"use client";
import React, { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const requestRef = useRef(null);

  const ourValues = [
    {
      title: "Agility & Ownership",
      desc: "We move fast, take initiative, and own our results.",
      img: "/wework1.jpg",
    },
    {
      title: "Innovation with Purpose",
      desc: "Every project must bring practical value to clients and society.",
      img: "/wework2.jpg",
    },
    {
      title: "Openness & Collaboration",
      desc: "We welcome ideas, embrace partnerships, and thrive on teamwork.",
      img: "/wework3.jpg",
    },
    {
      title: "Integrity & Trust",
      desc: "We commit to transparency and long-term relationships.",
      img: "/wework4.jpg",
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
      // e.scroll là số (lenis event)
      setScrollY(e.scroll || 0);
      setIsScrolled((e.scroll || 0) > 50);
    });

    return () => {
      if (typeof lenis.destroy === "function") lenis.destroy();
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden font-['Montserrat']">
      {/* 1. BANNER ĐẦU TRANG */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Lớp nền ảnh với hiệu ứng Parallax */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner-aboutus.jpg')",
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />

        {/* Lớp phủ Gradient trắng phía trên và dưới */}
        <div className="absolute top-0 left-0 w-full h-1/5 bg-gradient-to-b from-white via-white/40 to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white via-white/40 to-transparent z-[1]" />

        {/* Nội dung Banner */}
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
            className="mt-6 text-[16px] md:text-[18px] text-[#fff] font-medium max-w-2xl"
          >
            Engineering Intelligence for the Real World
          </motion.p>
        </div>
      </div>

      {/* 2. SECTION: ABOUT INNOVISION */}
      <section className="relative z-[10] bg-white py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Cột trái */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border-8 border-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt="Tech Focus"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#3c90fc]/5 rounded-[32px] -z-10" />
            </motion.div>

            {/* Cột phải */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-[32px] md:text-[42px] font-bold text-black leading-tight">
                About <span className="text-[#3c90fc]">Innovision</span>
              </h2>

              <div className="flex flex-col gap-3">
                <span className="py-1.5 text-[13px] font-bold text-[#474363]">
                  Software Technology Solutions
                </span>
                <span className="py-1.5 text-[13px] font-bold text-[#474363]">
                  Custom Software Services
                </span>
              </div>

              <p className="text-[16px] text-[#474363] text-justify leading-relaxed opacity-90">
                Innovision Corporation is a technology startup specializing in
                AI, LLMs, and Edge AI. We deliver scalable, real-world solutions
                by combining AI software and embedded systems expertise. Beyond
                product development, we also provide automation, software, and
                firmware services that drive sustainable business growth.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-fit px-8 py-4 bg-[#3c90fc] text-white font-bold rounded-full shadow-lg shadow-[#3c90fc]/30 transition-all"
              >
                Our Projects
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: VISION & MISSION */}
      <section className="relative z-[10] bg-gray-50 py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-white shadow-sm border border-gray-100 flex flex-col gap-6"
          >
            <h2 className="text-[28px] md:text-[36px] font-bold text-black uppercase tracking-tight">
              Our <span className="text-[#3c90fc]">Vision</span>
            </h2>
            <p className="text-[16px] text-[#474363] leading-relaxed opacity-80 font-medium">
              To become a leading AI and Edge Computing technology company in
              Southeast Asia, empowering enterprises to unlock the potential of
              their data and accelerate digital transformation.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 bg-white shadow-sm border border-gray-100 flex flex-col gap-6"
          >
            <h2 className="text-[28px] md:text-[36px] font-bold text-black uppercase tracking-tight">
              Our <span className="text-[#3c90fc]">Mission</span>
            </h2>

            <ul className="flex flex-col gap-4">
              {[
                "Bring AI closer to data and operational workflows.",
                "Transform unstructured information into actionable business intelligence.",
                "Build a reusable and scalable AI ecosystem that bridges research and applications.",
                "Deliver innovative solutions that drive sustainable business growth.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[15px] text-[#474363]"
                >
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION: OUR VALUES */}
      <section className="relative z-[10] bg-white py-16 md:py-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#3c90fc]">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ourValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[500px] overflow-hidden cursor-pointer"
              >
                {/* 1. Ảnh Background */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${value.img})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* 2. Lớp phủ Gradient */}
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

                {/* 3. Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#3c90fc]/30 rounded-[24px] transition-all duration-500 z-20 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
