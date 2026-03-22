"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, Search, Sparkles, Tag } from "lucide-react";
import { blogCategories as categories, blogPosts as seedPosts } from "./data";
import BlogImage from "./BlogImage";

const PAGE_SIZE = 6;

export default function BlogsClient({ initialPosts = seedPosts }) {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const posts = initialPosts;

  const sectionAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.58, ease: "easeOut" },
      };

  const normalizedKeyword = keyword.trim().toLowerCase();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchKeyword =
        normalizedKeyword.length === 0 ||
        post.title.toLowerCase().includes(normalizedKeyword) ||
        post.excerpt.toLowerCase().includes(normalizedKeyword) ||
        (post.keywords || []).some((k) =>
          String(k).toLowerCase().includes(normalizedKeyword),
        );

      return matchCategory && matchKeyword;
    });
  }, [activeCategory, normalizedKeyword, posts]);

  const featured = filteredPosts.find((p) => p.featured) || filteredPosts[0] || null;
  const regularPosts = filteredPosts.filter((p) => p !== featured);
  const totalPages = Math.max(1, Math.ceil(regularPosts.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pagedPosts = regularPosts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f8fcff_32%,#ffffff_100%)] pb-20 pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_18%_0%,rgba(14,165,233,0.18),transparent_58%),radial-gradient(circle_at_84%_10%,rgba(34,211,238,0.12),transparent_56%)]" />

      <motion.section
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        {...sectionAnim}
      >
        <div className="rounded-[34px] border border-white/80 bg-white/88 p-6 shadow-[0_26px_70px_rgba(15,23,42,0.10)] backdrop-blur sm:p-8 lg:p-10">
          <div className="flex items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
              <Sparkles className="h-3.5 w-3.5" />
              Blog & Insights
            </p>
            <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:inline-flex">
              Company Updates
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[44px]">
            News, Achievements, and
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
              Project Success Stories
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            A central place to publish company updates, technical articles,
            successful deliveries, and product milestones.
          </p>

          <div className="mt-6 rounded-[24px] border border-slate-200 bg-white/90 p-3">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-wrap gap-2 lg:max-w-[68%]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`inline-flex h-9 items-center justify-center rounded-full border px-3 text-[10px] font-semibold uppercase tracking-[0.12em] transition ${
                      activeCategory === cat
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <label className="relative block lg:ml-auto lg:w-[340px]">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search by keyword..."
                  className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-300"
                />
              </label>
            </div>
          </div>
        </div>
      </motion.section>

      {featured ? (
        <motion.section
          className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
          {...sectionAnim}
        >
          <article className="grid gap-6 overflow-hidden rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)] lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
              <BlogImage
                src={featured.image}
                alt={featured.title}
                width={1280}
                height={820}
                className="h-[260px] w-full object-cover md:h-[340px]"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-700">
                Featured
              </span>
              <h2 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[30px]">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{featured.excerpt}</p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {featured.date}
                </span>
                <span>{featured.readTime}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Tag className="h-4 w-4" />
                  {featured.category}
                </span>
              </div>

              <Link
                href={`/blogs/${featured.slug}`}
                className="group mt-5 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800"
              >
                Read Article
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        </motion.section>
      ) : null}

      <motion.section
        className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
        {...sectionAnim}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pagedPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.05 }}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.11)]"
            >
              <div className="relative overflow-hidden border-b border-slate-200 bg-slate-100">
                <BlogImage
                  src={post.image}
                  alt={post.title}
                  width={960}
                  height={620}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-700">
                  {post.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-tight text-slate-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{post.excerpt}</p>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <Link
                  href={`/blogs/${post.slug}`}
                  className="group/btn mt-4 inline-flex h-10 w-fit items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        {regularPosts.length > PAGE_SIZE ? (
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="inline-flex h-9 items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition disabled:cursor-not-allowed disabled:opacity-45"
            >
              Prev
            </button>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              {safePage}/{totalPages}
            </span>
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="inline-flex h-9 items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition disabled:cursor-not-allowed disabled:opacity-45"
            >
              Next
            </button>
          </div>
        ) : null}
        {!featured && regularPosts.length === 0 ? (
          <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-white/85 p-8 text-center text-sm text-slate-500">
            No posts found for this filter. Try another topic or keyword.
          </div>
        ) : null}
      </motion.section>
    </main>
  );
}
