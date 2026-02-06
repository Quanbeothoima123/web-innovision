"use client";

import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

export default function Homepage() {
  // --- STATES & REFS ---
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const requestRef = useRef(undefined);

  // State riêng cho Section Achievements
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [isAchievementPaused, setIsAchievementPaused] = useState(false);

  // --- DATA ---
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
    "/logo/ais.png", //Nhân đôi
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

  // --- EFFECTS ---

  // 1. Smooth Scroll (Lenis)
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

  // 2. Achievements Auto-play & Pause on Hover
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    if (isAchievementPaused) return;
    const interval = setInterval(() => {
      setAchievementIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAchievementPaused, achievements.length]);

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden font-['Montserrat']">
      {/* 1. HEADER */}

      {/* 2. HERO SECTION */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Lớp nền ảnh với hiệu ứng Parallax */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg.png')",
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />

        {/* Lớp phủ Gradient */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white via-white/40 to-transparent z-[1]" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white via-white/40 to-transparent z-[1]" />

        {/* Nội dung Banner */}
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
      </div>

      {/* 3. SECTION: COMPETENCIES */}
      <section className="relative z-[10] bg-white py-24 md:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#3c90fc] mb-6">
              Our Core Competencies
            </h1>
            <p className="text-[18px] text-[#474363] max-w-2xl mx-auto font-medium">
              We operate across three complementary pillars to deliver
              innovation and value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {competencies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group relative p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-6 flex flex-col items-center text-center
      ${index === 1 ? "md:h-[400px] md:-translate-y-8 z-20 border-[#3c90fc]/20" : "md:h-[340px] z-10"}`}
              >
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#3c90fc] transition-all duration-500">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-24 h-24 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                  />
                </div>

                <h3 className="text-[22px] font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-[#474363] text-[15px] opacity-70">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[4px] bg-[#3c90fc] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: HOW WE WORK */}
      <section className="relative z-[10] bg-white py-24 md:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#3c90fc] mb-6">
              How We Work
            </h1>
            <p className="text-[16px] md:text-[18px] text-black max-w-3xl mx-auto opacity-80 leading-relaxed">
              Our culture is reflected in the way we work with each other and
              with our partners.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((item, index) => (
              <div
                key={index}
                className="group relative h-[450px] overflow-hidden cursor-pointer shadow-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0 z-10" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 text-left">
                  <div className="inline-block w-fit">
                    <h3 className="text-white text-[22px] font-bold mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/80 text-[14px] mt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: KEY ACHIEVEMENTS */}
      <section className="relative z-[10] py-24 md:py-32 overflow-hidden min-h-[700px] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: "url('/bg_keyAchievements.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="relative z-[2] w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#3c90fc] mb-6">
              Key Achievements
            </h1>
            <p className="text-[18px] text-white font-medium opacity-90 leading-relaxed mb-8">
              Driving digital transformation through proven AI solutions.
            </p>
            <div className="flex gap-2">
              {achievements.map((_, i) => (
                <div
                  key={i}
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
                <motion.div
                  key={index}
                  animate={{
                    x: isActive ? 60 : isPrev ? 500 : 0,
                    opacity: isPrev ? 0 : 1,
                    zIndex: isActive ? 50 : 40,
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute w-[320px] md:w-[450px] p-10 rounded-[32px] bg-white shadow-2xl flex flex-col justify-center border border-white/10"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="w-12 h-12 bg-[#3c90fc]/10 rounded-xl flex items-center justify-center mb-8 text-[#3c90fc] font-bold text-lg">
                    0{index + 1}
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-bold text-black mb-5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#474363] text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                  <div
                    className={`absolute bottom-8 right-10 transition-opacity duration-500 ${isActive ? "opacity-10" : "opacity-0"}`}
                  >
                    <span className="font-black text-7xl text-[#3c90fc]">
                      {index + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SECTION: CLIENTS & PARTNERS */}
      <section className="relative z-[10] bg-white py-16 md:py-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h1 className="text-[32px] md:text-[42px] font-bold text-[#3c90fc] mb-3">
              Clients & Partners
            </h1>
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
                    <h2 className="text-[22px] font-bold uppercase">
                      {section.title}
                    </h2>
                  </div>
                  <div className="grid gap-3 w-full">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
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

          {/* KHỐI LOGO CHẠY NGANG */}
          <div className="relative mt-20 pt-10 border-t border-gray-50">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex overflow-hidden group">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-20 items-center py-4"
              >
                {partnerLogos.map((logoPath, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-32 h-12 flex items-center justify-center cursor-pointer 
                               grayscale-0 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <img
                      src={logoPath}
                      alt={`Partner Logo ${i + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
