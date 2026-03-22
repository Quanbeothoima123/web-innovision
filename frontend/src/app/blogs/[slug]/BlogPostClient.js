"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Tag } from "lucide-react";

import BlogImage from "../BlogImage";

export default function BlogPostClient({ post, recentPosts = [] }) {
  const reduceMotion = useReducedMotion();
  const contentBlocks = Array.isArray(post?.content) ? post.content : [];
  const relatedLinks = Array.isArray(post?.relatedLinks)
    ? post.relatedLinks.filter(
        (item) => item?.label && typeof item?.href === "string" && item.href.startsWith("/"),
      )
    : [];

  const sectionAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.58, ease: "easeOut" },
      };

  if (!post) {
    return (
      <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f8fcff_32%,#ffffff_100%)] pb-20 pt-24 sm:pt-28">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <h1 className="text-2xl font-semibold text-slate-900">Post not found</h1>
            <p className="mt-2 text-sm text-slate-600">
              This article may have been removed or the link is invalid.
            </p>
            <Link
              href="/blogs"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white"
            >
              Back to Blogs
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f8fcff_32%,#ffffff_100%)] pb-20 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_18%_0%,rgba(14,165,233,0.18),transparent_58%),radial-gradient(circle_at_84%_10%,rgba(34,211,238,0.12),transparent_56%)]" />

      <motion.section
        className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        {...sectionAnim}
      >
        <div className="rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_26px_70px_rgba(15,23,42,0.10)] backdrop-blur sm:p-8 lg:p-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          <h1 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
            {post.title}
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {post.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {post.category}
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-[26px] border border-slate-200 bg-slate-100">
            <BlogImage
              src={post.image}
              alt={post.title}
              width={1280}
              height={820}
              className="h-[280px] w-full object-cover sm:h-[360px]"
              priority
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8"
        {...sectionAnim}
      >
        <article className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="space-y-7">
            {contentBlocks.map((block, index) => (
              <section key={`${block?.heading || "section"}-${index}`}>
                <h2 className="text-xl font-semibold tracking-[-0.01em] text-slate-900 sm:text-[28px]">
                  {block.heading || `Section ${index + 1}`}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {block.text}
                </p>
              </section>
            ))}
          </div>

          {relatedLinks.length ? (
            <div className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50/55 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-700">
                Related
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedLinks.map((item, index) => (
                  <Link
                    key={`${item.href}-${index}`}
                    href={item.href}
                    className="inline-flex h-9 items-center justify-center rounded-full border border-cyan-200 bg-white px-3 text-[11px] font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </article>
      </motion.section>

      <motion.section
        className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
        {...sectionAnim}
      >
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
          <h2 className="text-xl font-semibold tracking-[-0.01em] text-slate-900 sm:text-[30px]">
            More from INNOVISION Blog
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {recentPosts.map((item) => (
              <article
                key={item.slug}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="relative overflow-hidden border-b border-slate-200 bg-slate-100">
                  <BlogImage
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={560}
                    className="h-36 w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-700">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.excerpt}</p>

                  <Link
                    href={`/blogs/${item.slug}`}
                    className="group mt-4 inline-flex h-9 w-fit items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-slate-300"
                  >
                    Read
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
