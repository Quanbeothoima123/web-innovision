"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}

function Pill({ children, dark = false }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-semibold tracking-widest uppercase",
        dark
          ? "border border-black/10 bg-black/5 text-[#0b1020]/80"
          : "border border-white/15 bg-white/10 text-white/95",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 font-bold uppercase tracking-widest text-sm transition-all";
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`${base} bg-[#3c90fc] text-white hover:brightness-110 shadow-[0_24px_80px_rgba(60,144,252,0.30)]`}
      >
        {children}
      </Link>
    );
  }
  if (variant === "line") {
    return (
      <Link
        href={href}
        className={`${base} border border-white/25 text-white hover:border-white/55 hover:bg-white/10`}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`${base} bg-white text-[#0b1020] hover:bg-white/90 shadow-[0_18px_60px_rgba(0,0,0,0.18)]`}
    >
      {children}
    </Link>
  );
}

function ServiceCard({ iconSrc, title, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative rounded-sm overflow-hidden bg-gradient-to-b from-white/10 to-white/5 text-white border border-white/10 p-10 pb-8"
    >
      <div className="relative z-10">
        <div className="relative w-[92px] h-[92px] rounded-sm bg-[#3c90fc] p-3 shadow-[0_24px_70px_rgba(60,144,252,0.22)]">
          <Image
            src={iconSrc}
            alt=""
            fill
            className="object-contain p-4"
            sizes="92px"
          />
        </div>
        <h3 className="mt-6 text-xl font-extrabold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm text-white/80 leading-relaxed">{desc}</p>
        <div className="mt-6">
          <Button href="/solutions" variant="line">
            Learn more
          </Button>
        </div>
      </div>

      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-[140px] h-[140px] opacity-10 pointer-events-none">
        <Image src={iconSrc} alt="" fill className="object-contain" sizes="140px" />
      </div>
    </motion.div>
  );
}

function SplitHighlight({ n, title, desc, imageSrc }) {
  return (
    <Link
      href="/portfolio"
      className="group block overflow-hidden rounded-sm bg-[#0b1020] text-white border border-white/10 hover:border-white/25 transition-colors"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
        <div className="md:col-span-6 p-10">
          <h3 className="text-3xl font-black tracking-tight">{title}</h3>
          <p className="mt-4 text-white/75 leading-relaxed">{desc}</p>
        </div>
        <div className="md:col-span-6 relative overflow-hidden min-h-[240px]">
          <div className="absolute top-0 left-0 z-10 p-5 text-3xl font-black text-white">
            {String(n).padStart(2, "0")}
          </div>
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </Link>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-[#3c90fc] text-white shadow-[0_24px_80px_rgba(60,144,252,0.22)] grid place-items-center font-black text-xl">
        +
      </div>
      <div className="text-4xl font-black tracking-tight text-[#0b1020]">
        {value}
      </div>
      <div className="mt-2 text-sm text-[#474363] font-semibold">{label}</div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Network Security",
    "Endpoint Protection",
    "Threat Intelligence",
    "Penetration Testing",
    "Security Audits",
    "Incident Response",
  ];
  const doubled = items.concat(items);
  return (
    <div className="bg-[#3c90fc] text-white py-4 overflow-hidden">
      <style jsx>{`
        @keyframes marquee2 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <div
        className="flex whitespace-nowrap gap-6 items-center will-change-transform"
        style={{ animation: "marquee2 28s linear infinite" }}
      >
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {t}
            </span>
            <span className="text-2xl md:text-3xl opacity-35">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CyberguardHomepage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1020] font-['Montserrat']">
      {/* HERO (homepage-2 jarallax video) */}
      <div className="relative bg-[#0b1020] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/cyberguard/video/1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0b1020]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3c90fc]/25 via-transparent to-[#0b1020]/75" />
        </div>

        <Container className="relative z-10 pt-10">
          <div className="hidden md:flex items-center justify-between text-xs text-white/75 border-b border-white/10 pb-3">
            <div className="flex gap-6">
              <span>Hanoi • Vietnam</span>
              <span>+84 88 639 2913</span>
              <span>support@innovision.com</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-white">
                X
              </Link>
              <Link href="#" className="hover:text-white">
                YouTube
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between py-6">
            <Image
              src="/cyberguard/logo-white.webp"
              alt="Cyberguard demo logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              unoptimized
            />
            <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-white/85">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/solutions" className="hover:text-white">
                Solutions
              </Link>
              <Link href="/portfolio" className="hover:text-white">
                Portfolio
              </Link>
              <Link href="/about-us" className="hover:text-white">
                About
              </Link>
              <Link href="/blogs" className="hover:text-white">
                Blog
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button href="/about-us" variant="line">
                Start for free
              </Button>
              <Button href="/pricing" variant="primary">
                Explore pricing
              </Button>
            </div>
          </div>
        </Container>

        <Container className="relative z-10 pt-8 pb-16 md:pb-24">
          <div className="text-center">
            <div className="pt-8" />
            <Pill>Cybersecurity Experts</Pill>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 text-[54px] md:text-[104px] font-black tracking-tighter leading-[0.9]"
            >
              Cyber Guard
            </motion.h1>
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Protect your business from digital threats with cutting-edge
              security — monitoring, penetration testing, and expert-driven
              defense strategies.
            </p>
            <div className="mt-10">
              <Button href="/about-us" variant="primary">
                Start for free
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="opacity-90 hover:opacity-100 transition">
                  <Image
                    src={`/cyberguard/badge/${i}.webp`}
                    alt={`Badge ${i}`}
                    width={220}
                    height={120}
                    className="w-full h-auto px-6"
                    sizes="(min-width: 1024px) 14vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* CTA band (bg-dark-3) */}
      <section className="relative bg-[#222e66] text-white py-12 overflow-hidden">
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.08] pointer-events-none">
          <Image
            src="/cyberguard/logo-big-white.webp"
            alt=""
            fill
            className="object-contain"
            sizes="520px"
          />
        </div>
        <Container className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Need 24/7 protection from cyber attacks?
          </h2>
          <Button href="/about-us" variant="line">
            Start for free
          </Button>
        </Container>
      </section>

      {/* About block */}
      <section className="relative py-20 bg-[#0b1020] text-white">
        <div className="absolute inset-0">
          <Image
            src="/cyberguard/background/6.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0b1020]/85" />
        </div>

        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto">
            <Pill>Cybersecurity Experts</Pill>
            <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tight">
              Comprehensive cybersecurity solutions for{" "}
              <span className="text-[#3c90fc]">modern threats</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute left-6 bottom-6 z-20 w-[220px] rounded-sm bg-[#3c90fc] p-5 shadow-[0_24px_80px_rgba(60,144,252,0.25)]">
                  <div className="text-3xl font-black leading-none">99.9%</div>
                  <div className="mt-2 text-sm text-white/90 leading-snug">
                    Threat detection and prevention rate
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-sm border border-white/10">
                  <Image
                    src="/cyberguard/misc/l1.webp"
                    alt="Dashboard"
                    width={900}
                    height={700}
                    className="w-full h-auto"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                <div className="absolute right-0 -bottom-10 w-[55%] overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
                  <Image
                    src="/cyberguard/misc/s1.webp"
                    alt="Monitoring"
                    width={700}
                    height={520}
                    className="w-full h-auto"
                    sizes="(min-width: 1024px) 30vw, 60vw"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 pt-6">
              <p className="text-white/80 leading-relaxed">
                We safeguard your business against evolving cyber threats with
                proactive defense, cutting-edge tools, and a dedicated team.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    icon: "/cyberguard/icons-dark/padlock.png",
                    title: "Vulnerability Assessment",
                    desc: "Identify weaknesses before attackers do and reduce risk exposure.",
                  },
                  {
                    icon: "/cyberguard/icons-dark/cloud.png",
                    title: "Data Protection",
                    desc: "Safeguard sensitive data with encryption, access control, and secure storage.",
                  },
                  {
                    icon: "/cyberguard/icons-dark/quality.png",
                    title: "Brand Reputation",
                    desc: "Maintain trust by preventing incidents and demonstrating strong responsibility.",
                  },
                ].map((x) => (
                  <div key={x.title} className="relative pl-[110px]">
                    <div className="absolute left-0 top-0 w-[92px] h-[92px] rounded-sm bg-white/10 border border-white/10">
                      <Image
                        src={x.icon}
                        alt=""
                        fill
                        className="object-contain p-5"
                        sizes="92px"
                      />
                    </div>
                    <h3 className="text-xl font-extrabold">{x.title}</h3>
                    <p className="mt-2 text-white/75 leading-relaxed">{x.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Marquee />

      {/* Services grid */}
      <section className="py-20 bg-[#0b1020] text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Pill>What We Provide</Pill>
            <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tight">
              Robust cybersecurity services for today’s{" "}
              <span className="text-[#3c90fc]">threats</span>
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              End-to-end security solutions: detection, monitoring, and proactive
              defense strategies tailored to your infrastructure.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                icon: "/cyberguard/icons-color/cyber-security.png",
                title: "Network Security",
                desc: "Deploy firewalls and intrusion detection to safeguard networks.",
              },
              {
                icon: "/cyberguard/icons-color/encryption.png",
                title: "Data Encryption",
                desc: "Protect sensitive data using modern encryption and key management.",
              },
              {
                icon: "/cyberguard/icons-color/fingerprint.png",
                title: "Identity & Access",
                desc: "Strong identity controls with MFA and least-privilege policies.",
              },
              {
                icon: "/cyberguard/icons-color/monitoring.png",
                title: "Security Monitoring",
                desc: "24/7 monitoring with actionable alerting and response playbooks.",
              },
              {
                icon: "/cyberguard/icons-color/cloud-storage.png",
                title: "Backup & Recovery",
                desc: "Secure backups and rapid recovery for critical business data.",
              },
              {
                icon: "/cyberguard/icons-color/settings.png",
                title: "Configuration",
                desc: "Hardening and secure configuration across infrastructure.",
              },
            ].map((s, idx) => (
              <ServiceCard
                key={s.title}
                iconSrc={s.icon}
                title={s.title}
                desc={s.desc}
                delay={idx * 0.05}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose us split cards */}
      <section className="py-20 bg-[#191b36] text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Pill>Why Choose Us</Pill>
            <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tight">
              Complete cyber defense against{" "}
              <span className="text-[#3c90fc]">modern attacks</span>
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Stay protected with a fully integrated defense strategy built for
              today’s complex cyber landscape.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SplitHighlight
              n={1}
              title="Advanced Threat Detection"
              desc="Leverage real-time monitoring and analytics to detect threats across your systems."
              imageSrc="/cyberguard/misc/s2.webp"
            />
            <SplitHighlight
              n={2}
              title="Zero Trust Architecture"
              desc="Implement strict access controls and continuous verification for every request."
              imageSrc="/cyberguard/misc/s3.webp"
            />
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <Stat value="350+" label="Projects Completed" />
            <Stat value="98%" label="Client Satisfaction" />
            <Stat value="120+" label="Experts" />
            <Stat value="25+" label="Certifications" />
          </div>
        </Container>
      </section>

      {/* Consultation */}
      <section className="bg-[#f7fbff] pt-16 pb-0 overflow-hidden">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Pill dark>Request Consultation</Pill>
            <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tight">
              Get expert help securing your systems
            </h2>
            <p className="mt-4 text-[#474363] leading-relaxed">
              Share your needs and we’ll propose a practical, secure rollout —
              from assessment to implementation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary">
                Request consultation
              </Button>
              <Button href="/solutions" variant="secondary">
                Explore solutions
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="/cyberguard/misc/c1.webp"
              alt=""
              width={900}
              height={680}
              className="w-full h-auto"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#3c90fc] text-white py-14 overflow-hidden">
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.12] pointer-events-none">
          <Image
            src="/cyberguard/logo-big-white.webp"
            alt=""
            fill
            className="object-contain"
            sizes="520px"
          />
        </div>
        <Container className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Start securing your business today
            </h2>
            <p className="mt-2 text-white/90 max-w-2xl">
              Talk to our team and get a tailored plan for your environment.
            </p>
          </div>
          <Button href="/about-us" variant="line">
            Start for free
          </Button>
        </Container>
      </section>

      <footer className="bg-[#0b1020] text-white/70 py-10 border-t border-white/10">
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-sm">
            Demo: Cyberguard Homepage 2 layout (route{" "}
            <span className="text-white font-bold">/homepage-cyberguard</span>)
          </div>
          <div className="flex gap-4 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-white">
              Original Home
            </Link>
            <Link href="/homepage-cyberguard" className="hover:text-white">
              Demo Home
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}

