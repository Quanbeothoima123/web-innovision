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
import Lenis from "@studio-freight/lenis";

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

/** ✅ NEW: Icons for Supported Channels (inline) */
function IconMail({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 7l7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconFacebook({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.6l.4-3H13V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconLinkedIn({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6.5 9.5H4v10h2.5v-10Z" fill="currentColor" />
      <path
        d="M5.25 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
        fill="currentColor"
      />
      <path
        d="M20 19.5h-2.5v-5.2c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9v5.2H11.3v-10h2.4v1.4c.3-.6 1.2-1.6 2.9-1.6 2.1 0 3.4 1.4 3.4 4.3v5.9Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconGlobe({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3.5 12h17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 3c2.5 2.6 4 5.6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.6-4-9s1.5-6.4 4-9Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

const metricIconMap = {
  mail: IconMail,
  facebook: IconFacebook,
  linkedin: IconLinkedIn,
  web: IconGlobe,
};

/** Utils */
function toLines(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v.filter(Boolean);
  return String(v)
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);
}
function hasAnyText(v) {
  if (!v) return false;
  if (Array.isArray(v)) return v.some((x) => String(x || "").trim().length);
  return String(v).trim().length > 0;
}

/** ✅ UPDATED Metric Card: support icons + optional trend */
function MetricCard({
  value,
  label,
  description,
  delay = 0,
  span = 1,
  showTrend = true,
  icons = [], // ✅ NEW: ["mail","facebook","linkedin","web"]
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
        <div className="min-w-0">
          {/* ✅ If icons exist => show icon row, else show value */}
          {icons?.length ? (
            <div className="flex items-center gap-4 text-white/90">
              {icons.map((k, i) => {
                const Cmp = metricIconMap[k];
                return Cmp ? (
                  <Cmp key={`${k}-${i}`} className="h-7 w-7" />
                ) : null;
              })}
            </div>
          ) : value ? (
            <div className="text-3xl font-extrabold tracking-tight text-white">
              {value}
            </div>
          ) : null}

          <div className="mt-4 text-sm font-semibold text-white/90">
            {label}
          </div>
        </div>

        {showTrend && (
          <div className="rounded-xl bg-white/12 p-2 text-white/90">
            <IconTrendingUp className="h-5 w-5" />
          </div>
        )}
      </div>

      {description ? (
        <div className="mt-2 text-xs text-white/75">{description}</div>
      ) : null}
    </motion.div>
  );
}

/** Content card: Problem / Solution (string hoặc array bullets) */
function ContentCard({
  title,
  subtitle,
  problem,
  solution,
  mockImage,
  problemTitle = "Problem",
  solutionTitle = "Solution",
}) {
  const problemLines = useMemo(
    () => (Array.isArray(problem) ? problem : null),
    [problem],
  );
  const solutionLines = useMemo(
    () => (Array.isArray(solution) ? solution : null),
    [solution],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className=" overflow-hidden"
    >
      <div className="px-10 pb-10">
        <div className="py-8">
          <h3 className="text-sm font-bold text-neutral-900 mb-2">
            {problemTitle}
          </h3>

          {problemLines ? (
            <ul className="space-y-2 text-sm text-neutral-600">
              {problemLines.map((x, i) => (
                <li key={i} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-neutral-600">
              {problem}
            </p>
          )}
        </div>

        <div className="h-px bg-neutral-100" />

        <div className="py-8">
          <h3 className="text-sm font-bold text-neutral-900 mb-2">
            {solutionTitle}
          </h3>

          {solutionLines ? (
            <ul className="space-y-2 text-sm text-neutral-600">
              {solutionLines.map((x, i) => (
                <li key={i} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-neutral-600">
              {solution}
            </p>
          )}

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

/** Photo stack (hero) */
function PhotoStackParallax({
  primaryImage,
  secondaryImage,
  onImageClick,
  isExpanded,
}) {
  const containerRef = useRef(null);

  // === TUNE SIZE/POSITION Ở ĐÂY ===
  const H = 560;
  const primary = { left: 100, top: 70, w: 300, h: 380 };
  const secondary = { left: 250, top: 155, w: 300, h: 370 };

  const number = { left: 40, bottom: 34, size: 130 };

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
      {/* Label */}
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
        ></div>
      </div>

      {/* Number */}
      <div
        className="absolute z-30 select-none"
        style={{ left: number.left, bottom: number.bottom }}
      >
        <div
          className="font-extrabold leading-none text-red-600"
          style={{ fontSize: number.size }}
        ></div>
      </div>

      {/* Secondary */}
      <motion.button
        type="button"
        style={{
          left: secondary.left,
          top: secondary.top,
          width: secondary.w,
          height: secondary.h,
          y: sY,
        }}
        className={[
          "absolute rounded-[34px] overflow-hidden bg-white cursor-pointer",
          "shadow-[0_18px_48px_rgba(0,0,0,0.14)] transform-gpu",
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100",
        ].join(" ")}
        onClick={() => onImageClick(secondaryImage, 1)}
        whileHover={{ scale: 1.012 }}
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

      {/* Primary */}
      <motion.button
        type="button"
        style={{
          left: primary.left,
          top: primary.top,
          width: primary.w,
          height: primary.h,
          y: pY,
        }}
        className={[
          "absolute rounded-[34px] overflow-hidden bg-white cursor-pointer z-20",
          "shadow-[0_24px_70px_rgba(0,0,0,0.18)] transform-gpu",
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100",
        ].join(" ")}
        onClick={() => onImageClick(primaryImage, 0)}
        whileHover={{ scale: 1.02 }}
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

/** Pre-metrics block: image only */
function PreMetricsImageBlock({
  title,
  subtitle,
  image,
  alt = "Preview image",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full"
    >
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title ? (
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
              {title}
            </h2>
          ) : null}
          {subtitle ? (
            <p className="mt-3 text-base md:text-lg text-neutral-500">
              {subtitle}
            </p>
          ) : null}
        </div>
      )}

      <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
        <img src={image} alt={alt} className="w-full h-auto" />
      </div>
    </motion.section>
  );
}

/** Pre-metrics block: split (IO hoặc Solution-only), image optional */
function PreMetricsSplitBlock({
  title,
  mode = "io", // "io" | "solution"
  image,
  alt = "Section image",
  imageSide = "right", // "left" | "right"
  input,
  system,
  output,
  bullets = [],
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const systemLines = useMemo(() => toLines(system), [system]);

  const BulletDot = () => (
    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />
  );

  const TextCol = (
    <div className="space-y-8">
      {title ? (
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
          {title}
        </h3>
      ) : null}

      {mode === "io" ? (
        <div className="space-y-8">
          <div>
            <div className="text-xs font-bold tracking-wider text-neutral-500 mb-2">
              INPUT
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
              {input || "—"}
            </p>
          </div>

          <div className="h-px bg-neutral-100" />

          <div>
            <div className="text-xs font-bold tracking-wider text-neutral-500 mb-3">
              SYSTEM
            </div>

            {systemLines.length ? (
              <ul className="space-y-3">
                {systemLines.map((t, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-neutral-700 leading-relaxed"
                  >
                    <span className="mt-1.5">
                      <BulletDot />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-neutral-700 leading-relaxed">—</p>
            )}
          </div>

          <div className="h-px bg-neutral-100" />

          <div>
            <div className="text-xs font-bold tracking-wider text-neutral-500 mb-2">
              OUTPUT
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
              {output || "—"}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-xs font-bold tracking-wider text-neutral-500 mb-3">
            SOLUTION
          </div>
          {bullets?.length ? (
            <ul className="space-y-3">
              {bullets.map((t, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-neutral-700 leading-relaxed"
                >
                  <span className="mt-1.5">
                    <BulletDot />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-neutral-700 leading-relaxed">—</p>
          )}
        </div>
      )}
    </div>
  );

  const ImgCol = image ? (
    <div className="rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
  ) : null;

  const isLeft = imageSide === "left";

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full"
    >
      {!ImgCol ? (
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm p-8 md:p-10">
          {TextCol}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div
            className={`lg:col-span-6 ${isLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
          >
            <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm p-8 md:p-10">
              {TextCol}
            </div>
          </div>

          <div
            className={`lg:col-span-6 ${isLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
          >
            {ImgCol}
          </div>
        </div>
      )}
    </motion.section>
  );
}

/** Modal - ✅ FIXED: CSS để panel không bị cao quá */
function ExpandedImageModal({
  image,
  caption,
  onClose,
  panelTitle = "Enhanced View",
  keyFeatures = [],
  ioItem,
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

  const systemList = useMemo(() => toLines(ioItem?.system), [ioItem]);

  const hasIO =
    hasAnyText(ioItem?.input) ||
    hasAnyText(systemList) ||
    hasAnyText(ioItem?.output);

  const showPanel = hasIO || (keyFeatures?.length ?? 0) > 0;

  const Bullet = () => (
    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
      onClick={onClose}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(255,255,255,0.3) transparent",
      }}
    >
      <motion.div
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(18px)" }}
        exit={{ backdropFilter: "blur(0px)" }}
        className="absolute inset-0 bg-black/70 pointer-events-none"
      />

      {/* ✅ FIX: Bỏ overflow-y-auto ở đây vì đã có ở parent */}
      <div
        className="relative max-w-7xl w-full mx-auto px-6 md:px-10 py-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ FIX 2: items-center → items-start */}
        <div
          className={`grid ${showPanel ? "grid-cols-12 gap-10" : "grid-cols-1"} items-start`}
        >
          <motion.div
            className={showPanel ? "col-span-12 lg:col-span-8" : "col-span-1"}
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
              {/* ✅ FIX: Dấu X nằm ở góc ảnh (top-3 right-3) thay vì -top-14 */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-50 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Close"
              >
                <IconX className="h-6 w-6" />
              </button>

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                {/* ✅ FIX 3: Bỏ bg-black/20 và dùng object-cover như cũ */}
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

          {showPanel ? (
            <motion.div
              className="col-span-12 lg:col-span-4"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {/* ✅ FIX 4: Thêm max-h-[75vh] overflow-y-auto + custom scrollbar */}
              <div
                className="bg-white rounded-3xl shadow-2xl p-8 max-h-[75vh] overflow-y-auto"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(0,0,0,0.2) rgba(0,0,0,0.05)",
                }}
              >
                {/* ✅ FIX 5: Title sticky top-0 */}
                <h2 className="text-2xl font-bold text-neutral-900 mb-8 sticky top-0 bg-white z-10 pb-2">
                  {panelTitle}
                </h2>

                <div className="space-y-8">
                  {hasIO ? (
                    <>
                      <div>
                        <div className="text-xs font-bold tracking-wider text-neutral-500 mb-2">
                          INPUT
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {ioItem?.input || "—"}
                        </p>
                      </div>

                      <div className="h-px bg-neutral-100" />

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

                      <div>
                        <div className="text-xs font-bold tracking-wider text-neutral-500 mb-2">
                          OUTPUT
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
                          {ioItem?.output || "—"}
                        </p>
                      </div>
                    </>
                  ) : null}

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
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * MAIN TEMPLATE
 *
 * ✅ preMetricsBlocks
 * - [{ type: "image", title?, subtitle?, image, alt? }]
 * - [{ type: "split", title?, mode: "io"|"solution", image?, imageSide?, input?, system?, output?, bullets? }]
 */
export default function PortfolioCaseTemplate({
  title,
  subtitle,
  problem,
  solution,
  primaryImage,
  secondaryImage,
  mockImage,
  captions = [],
  metricsTop = [],
  metricsBottom = [],
  keyFeatures = [],
  io = [],
  preMetricsBlocks = [],
}) {
  const [expandedImage, setExpandedImage] = useState(null);

  // Lenis smooth scroll
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };
    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;

      if (typeof lenis.destroy === "function") lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (expandedImage) lenis.stop();
    else lenis.start();
  }, [expandedImage]);

  const captionSafe = useMemo(() => {
    if (!captions?.length) return ["", ""];
    return [captions[0] || "", captions[1] || ""];
  }, [captions]);

  // chỉ dùng 2 ảnh => chỉ cần io[0], io[1]
  const ioSafe = useMemo(() => {
    const empty = { input: "", system: [], output: "" };
    return [io?.[0] || empty, io?.[1] || empty];
  }, [io]);

  const onImageClick = (url, index) => setExpandedImage({ url, index });
  const onClose = () => setExpandedImage(null);

  return (
    <LayoutGroup>
      <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-14 md:py-20">
          {/* Hero */}
          <div className="bg-white  rounded-2xl">
            <div className="px-10 pt-10 pb-6 text-center">
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
            <div className="grid grid-cols-12 gap-12 mb-20 md:mb-24">
              <div className="col-span-12 lg:col-span-5">
                <PhotoStackParallax
                  primaryImage={primaryImage}
                  secondaryImage={secondaryImage}
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
          </div>

          {/* Blocks before Metrics */}
          {preMetricsBlocks?.length ? (
            <div className="space-y-16 md:space-y-24 mb-20 md:mb-24">
              {preMetricsBlocks.map((b, idx) => {
                if (b?.type === "image") {
                  return (
                    <PreMetricsImageBlock
                      key={`pre-img-${idx}`}
                      title={b.title}
                      subtitle={b.subtitle}
                      image={b.image}
                      alt={b.alt}
                    />
                  );
                }

                return (
                  <PreMetricsSplitBlock
                    key={`pre-split-${idx}`}
                    title={b.title}
                    mode={b.mode || "io"}
                    image={b.image}
                    alt={b.alt}
                    imageSide={b.imageSide || "right"}
                    input={b.input}
                    system={b.system}
                    output={b.output}
                    bullets={b.bullets || []}
                  />
                );
              })}
            </div>
          ) : null}

          {/* ✅ UPDATED Metrics Grid:
              - Top: if length===3 -> lg:grid-cols-3 else lg:grid-cols-4
              - MetricCard supports icons + showTrend toggle
           */}
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 rounded-3xl shadow-2xl p-8 md:p-12">
            <div
              className={[
                "grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5",
                metricsTop.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
              ].join(" ")}
            >
              {metricsTop.map((m, i) => (
                <MetricCard
                  key={`${m.label}-${i}`}
                  value={m.value}
                  label={m.label}
                  description={m.description}
                  icons={m.icons}
                  showTrend={m.showTrend ?? false}
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
                  showTrend={m.showTrend ?? false}
                  delay={(metricsTop.length + i) * 80}
                  span={2}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
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
