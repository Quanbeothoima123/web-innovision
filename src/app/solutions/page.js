"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

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
  },
  {
    title: "Industrial AI & Automation",
    desc: "End-to-end industrial AI solutions for computer vision inspection, failure prediction, and seamless factory system integration.",
    image: "/IndustrialAI.jpg",
    features: ["Defect Detection", "Predictive Maintenance", "IoT Integration"],
    route: "/solutions/coming-soon",
  },
  {
    title: "Software & Firmware Development",
    desc: "Expert software engineering and embedded system development tailored for technology products and enterprise-grade solutions.",
    image: "/softwareAndFirmware.jpg",
    features: ["Custom Web/App", "Embedded C/C++", "Cloud Architecture"],
    route: "/solutions/software-firmware-development-2",
  },
];

const Solutions = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
      // cleanup Lenis (nếu version bạn dùng có destroy)
      if (typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white min-h-screen font-['Montserrat'] overflow-x-hidden">
      {/* BANNER ĐẦU TRANG */}
      <section className="h-[60vh] flex items-center justify-center bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="text-center relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[44px] md:text-[72px] font-bold text-[#3c90fc] tracking-tighter uppercase"
          >
            Our Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="text-[#474363] text-[18px] font-medium mt-4"
          >
            Empowering the future through AI-driven innovation.
          </motion.p>
        </div>
      </section>

      {/* DANH SÁCH GIẢI PHÁP SO LE */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-32 md:gap-48">
        {solutionsData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* PHẦN NỘI DUNG */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-5/12 space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-[36px] md:text-[52px] font-bold text-black leading-[1.1]">
                    {item.title}
                  </h2>
                </div>

                <p className="text-[17px] text-[#474363] leading-relaxed opacity-90">
                  {item.desc}
                </p>

                {/* Các tính năng nổi bật */}
                <div className="flex flex-col gap-x-6 gap-y-3">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3c90fc]" />
                      <span className="text-sm font-bold text-gray-700">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href={item.route}>
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="group flex items-center gap-3 px-8 py-4 bg-[#3c90fc] text-white font-bold shadow-xl shadow-blue-100 transition-all hover:bg-[#2a78e4]"
                  >
                    Read More
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* PHẦN ẢNH TĨNH */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-7/12 relative h-[300px] md:h-[500px] rounded-[40px] overflow-hidden group bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Lớp phủ Gradient mờ để tăng chiều sâu */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Viền highlight công nghệ khi hover */}
                <div className="absolute inset-0 border-[1px] border-white/20 group-hover:border-[#3c90fc]/40 rounded-[40px] transition-all duration-500 z-10" />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solutions;
