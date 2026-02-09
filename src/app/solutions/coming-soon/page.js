"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";
import { ArrowLeft, Construction } from "lucide-react";
import { motion } from "framer-motion";

const IndustrialAIDetail = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className="bg-white min-h-screen font-['Montserrat'] overflow-x-hidden">
      {/* SECTION 1: HERO BANNER - Xóa lớp phủ đen, title màu #3c90fc, text màu đen */}
      <section className="relative h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/solutions/banner/comming_soon.png"
            alt="Industrial AI & Automation Background"
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
            className="max-w-4xl text-left"
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
              Industrial AI <br className="hidden md:block" /> & Automation
            </h1>

            <p className="text-black text-lg md:text-2xl leading-relaxed font-medium max-w-2xl">
              End-to-end industrial AI solutions for inspection, failure
              prediction, and seamless factory system integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: COMING SOON - Thiết kế chuyên nghiệp */}
      <section className="py-40 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <div className="w-20 h-20 bg-blue-50 flex items-center justify-center rounded-full text-[#3c90fc] mb-4">
              <Construction size={40} />
            </div>

            <h2 className="text-[40px] md:text-[64px] font-bold text-gray-900 uppercase tracking-tighter">
              Coming <span className="text-[#3c90fc]">Soon</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#1081ea] to-[#77c3f4]"></div>

            <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
              We are currently fine-tuning our Industrial AI modules to bring
              you the most advanced automated inspection and predictive
              maintenance tools.
            </p>

            <Link
              href="/solutions"
              className="mt-12 px-10 py-4 bg-gray-900 text-white font-bold rounded-none hover:bg-[#3c90fc] transition-colors uppercase tracking-widest text-sm"
            >
              Explore Other Solutions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialAIDetail;
