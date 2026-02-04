"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

/** Icons inline để KHÔNG phụ thuộc lucide-react */
function IconX({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTrendingUp({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 17l6-6 4 4 7-7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8h6v6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Metric Card */
function MetricCard({
  value,
  label,
  description,
  delay = 0,
  span = 1,
  showTrend = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      className={[
        "rounded-2xl border border-white/20 bg-white/12 backdrop-blur-md",
        "p-6 shadow-[0_14px_30px_rgba(0,0,0,0.18)]",
        "hover:bg-white/16 transition-colors",
        span === 2 ? "col-span-2" : "col-span-1",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-3xl font-extrabold tracking-tight text-white">
            {value}
          </div>
          <div className="mt-2 text-sm font-semibold text-white/90">
            {label}
          </div>
        </div>

        {showTrend && (
          <div className="rounded-xl bg-white/12 p-2 text-white/90">
            <IconTrendingUp className="h-5 w-5" />
          </div>
        )}
      </div>

      <div className="mt-2 text-xs text-white/75">{description}</div>
    </motion.div>
  );
}

/** Content card (giữ Problem/Solution ở trang chính) */
function ContentCard({
  title,
  subtitle,
  problem,
  solution,
  mockImage,
  problemTitle = "Problem",
  solutionTitle = "Solution",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden"
    >
      <div className="px-10 pt-10 pb-6">
        <motion.h1
          className="text-4xl font-bold text-neutral-900 mb-3 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {title}
        </motion.h1>

        {subtitle ? (
          <motion.p
            className="text-base text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>

      <div className="px-10 pb-10">
        <div className="h-px bg-neutral-100" />

        <div className="py-8">
          <h3 className="text-sm font-bold text-neutral-900 mb-2">
            {problemTitle}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600">{problem}</p>
        </div>

        <div className="h-px bg-neutral-100" />

        <div className="py-8">
          <h3 className="text-sm font-bold text-neutral-900 mb-2">
            {solutionTitle}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600">{solution}</p>

          {mockImage ? (
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <img
                src={mockImage}
                alt="Mock"
                className="w-full h-auto rounded-xl"
              />
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

/** Photo stack (label đọc từ trên xuống dưới + bám sát ảnh primary) */
function PhotoStackParallax({
  primaryImage,
  secondaryImage,
  verticalLabel = "NĂM KINH NGHIỆM",
  bigNumber = "25",
  onImageClick,
  isExpanded,
}) {
  const containerRef = useRef(null);

  // === TUNE SIZE/POSITION Ở ĐÂY ===
  const H = 560;
  const primary = { left: 100, top: 70, w: 300, h: 380 };
  const secondary = { left: 250, top: 155, w: 300, h: 370 };

  const number = { left: 40, bottom: 34, size: 130 };

  // Label bám theo ảnh primary
  const labelCfg = { gapFromPrimary: 30, insetTop: 8, fontSize: 16 };
  const labelLeft = Math.max(8, primary.left - labelCfg.gapFromPrimary);
  const labelTop = primary.top + labelCfg.insetTop;
  const labelHeight = Math.max(40, primary.h - labelCfg.insetTop * 2);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pY = useTransform(scrollYProgress, [0, 1], [8, -14]);
  const sY = useTransform(scrollYProgress, [0, 1], [-6, 14]);

  return (
    <div ref={containerRef} className="relative" style={{ height: H }}>
      {/* Label: đọc từ trên xuống dưới */}
      <div
        className="absolute z-30 select-none pointer-events-none"
        style={{
          left: labelLeft,
          top: labelTop,
          height: labelHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="font-medium tracking-[0.45em] text-neutral-500 uppercase"
          style={{
            fontSize: labelCfg.fontSize,
            writingMode: "vertical-lr",
            textOrientation: "mixed",
          }}
        >
          {verticalLabel}
        </div>
      </div>

      {/* Số 25 */}
      <div
        className="absolute z-30 select-none"
        style={{ left: number.left, bottom: number.bottom }}
      >
        <div
          className="font-extrabold leading-none text-red-600"
          style={{ fontSize: number.size }}
        >
          {bigNumber}
        </div>
      </div>

      {/* Ảnh dưới */}
      <motion.button
        type="button"
        style={{
          left: secondary.left,
          top: secondary.top,
          width: secondary.w,
          height: secondary.h,
          y: sY,
          rotate: 0,
        }}
        className={[
          "absolute rounded-[34px] overflow-hidden bg-white cursor-pointer",
          "shadow-[0_18px_48px_rgba(0,0,0,0.14)]",
          "transform-gpu",
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100",
        ].join(" ")}
        onClick={() => onImageClick(secondaryImage, 1)}
        whileHover={{ scale: 1.012, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <motion.img
          src={secondaryImage}
          alt="Secondary"
          className="w-full h-full object-cover"
          draggable={false}
          layoutId="case-image-1"
        />
      </motion.button>

      {/* Ảnh trên */}
      <motion.button
        type="button"
        style={{
          left: primary.left,
          top: primary.top,
          width: primary.w,
          height: primary.h,
          y: pY,
          rotate: 0,
        }}
        className={[
          "absolute rounded-[34px] overflow-hidden bg-white cursor-pointer z-20",
          "shadow-[0_24px_70px_rgba(0,0,0,0.18)]",
          "transform-gpu",
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100",
        ].join(" ")}
        onClick={() => onImageClick(primaryImage, 0)}
        whileHover={{ scale: 1.02, rotate: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <motion.img
          src={primaryImage}
          alt="Primary"
          className="w-full h-full object-cover"
          draggable={false}
          layoutId="case-image-0"
        />
      </motion.button>
    </div>
  );
}

/** Modal: HIỂN THỊ INPUT / SYSTEM / OUTPUT theo ảnh */
function ExpandedImageModal({
  image,
  caption,
  onClose,
  panelTitle = "Enhanced View",
  keyFeatures = [],
  ioItem, // ✅ object: { input, system, output }
  expandedIndex = 0,
}) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const systemList = useMemo(() => {
    if (!ioItem?.system) return [];
    if (Array.isArray(ioItem.system)) return ioItem.system;
    return String(ioItem.system)
      .split("\n")
      .map((x) => x.trim())
      .filter(Boolean);
  }, [ioItem]);

  const Bullet = () => (
    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* overlay */}
      <motion.div
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(18px)" }}
        exit={{ backdropFilter: "blur(0px)" }}
        className="absolute inset-0 bg-black/70"
      />

      <div
        className="relative max-w-7xl w-full mx-auto px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="col-span-8"
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 24 }}
            transition={{
              duration: 0.55,
              type: "spring",
              stiffness: 120,
              damping: 22,
            }}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute -top-14 right-0 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                aria-label="Close"
              >
                <IconX className="h-6 w-6" />
              </button>

              <div className="rounded-3xl overflow-hidden shadow-2xl bg-black/20">
                <motion.img
                  src={image}
                  alt={caption}
                  className="w-full h-auto max-h-[75vh] object-cover"
                  layoutId={`case-image-${expandedIndex}`}
                />
              </div>

              {caption ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="mt-4 text-white/90 text-sm font-medium"
                >
                  {caption}
                </motion.p>
              ) : null}
            </div>
          </motion.div>

          {/* Panel */}
          <motion.div
            className="col-span-4"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                {panelTitle}
              </h2>

              <div className="space-y-8">
                {/* INPUT */}
                <div>
                  <div className="text-xs font-bold tracking-wider text-neutral-500 mb-2">
                    INPUT
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {ioItem?.input || "—"}
                  </p>
                </div>

                <div className="h-px bg-neutral-100" />

                {/* SYSTEM */}
                <div>
                  <div className="text-xs font-bold tracking-wider text-neutral-500 mb-3">
                    SYSTEM
                  </div>

                  {systemList.length ? (
                    <ul className="space-y-3">
                      {systemList.map((t, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-neutral-700 leading-relaxed"
                        >
                          <span className="mt-1.5">
                            <Bullet />
                          </span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      —
                    </p>
                  )}
                </div>

                <div className="h-px bg-neutral-100" />

                {/* OUTPUT */}
                <div>
                  <div className="text-xs font-bold tracking-wider text-neutral-500 mb-2">
                    OUTPUT
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
                    {ioItem?.output || "—"}
                  </p>
                </div>

                {/* Key features */}
                {keyFeatures?.length ? (
                  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                    <p className="text-sm font-semibold text-neutral-700 mb-2">
                      Key Features:
                    </p>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      {keyFeatures.map((x, i) => (
                        <li key={i}>• {x}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/** MAIN TEMPLATE */
export default function PortfolioCaseTemplate({
  title,
  subtitle,
  problem,
  solution,
  primaryImage,
  secondaryImage,
  mockImage,
  captions = [],
  verticalLabel,
  bigNumber,
  metricsTop = [],
  metricsBottom = [],
  keyFeatures = [],
  io = [], // ✅ NEW: [{input, system, output}, {input, system, output}]
}) {
  const [expandedImage, setExpandedImage] = useState(null);

  const captionSafe = useMemo(() => {
    if (!captions?.length) return ["", ""];
    return [captions[0] || "", captions[1] || ""];
  }, [captions]);

  const ioSafe = useMemo(() => {
    // đảm bảo luôn có 2 item (0/1) để tránh undefined
    const empty = { input: "", system: [], output: "" };
    return [io?.[0] || empty, io?.[1] || empty];
  }, [io]);

  const onImageClick = (url, index) => setExpandedImage({ url, index });
  const onClose = () => setExpandedImage(null);

  return (
    <LayoutGroup>
      <div className="min-h-screen bg-neutral-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-14 md:py-20">
          {/* Hero */}
          <div className="grid grid-cols-12 gap-12 mb-20 md:mb-24">
            <div className="col-span-12 lg:col-span-5">
              <PhotoStackParallax
                primaryImage={primaryImage}
                secondaryImage={secondaryImage}
                verticalLabel={verticalLabel}
                bigNumber={bigNumber}
                onImageClick={onImageClick}
                isExpanded={!!expandedImage}
              />
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ContentCard
                title={title}
                subtitle={subtitle}
                problem={problem}
                solution={solution}
                mockImage={mockImage}
              />
            </div>
          </div>

          {/* Metrics */}
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {metricsTop.map((m, i) => (
                <MetricCard
                  key={`${m.label}-${i}`}
                  value={m.value}
                  label={m.label}
                  description={m.description}
                  delay={i * 80}
                  span={1}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {metricsBottom.map((m, i) => (
                <MetricCard
                  key={`${m.label}-${i}`}
                  value={m.value}
                  label={m.label}
                  description={m.description}
                  delay={(metricsTop.length + i) * 80}
                  span={2}
                />
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {expandedImage ? (
            <ExpandedImageModal
              image={expandedImage.url}
              expandedIndex={expandedImage.index}
              caption={captionSafe[expandedImage.index] || ""}
              onClose={onClose}
              ioItem={ioSafe[expandedImage.index]}
              keyFeatures={keyFeatures}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}
