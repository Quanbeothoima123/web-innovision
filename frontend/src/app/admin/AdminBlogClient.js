"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Edit3, LogOut, Plus, Save, Search, Trash2 } from "lucide-react";

import { blogCategories, blogPosts as seedPosts } from "../blogs/data";
import { apiUrl } from "@/lib/api/client";

const blogOnlyCategories = blogCategories.filter((c) => c !== "All");
const MAX_IMAGE_SIZE_MB = 3;
const ITEMS_PER_PAGE = 6;

function slugify(input) {
  return String(input || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatDate(date = new Date()) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function emptyForm() {
  return {
    slug: "",
    title: "",
    excerpt: "",
    category: blogOnlyCategories[0] || "Company News",
    date: "",
    readTime: "5 min read",
    image: "/banner-aboutus.webp",
    keywords: "",
    featured: false,
    published: true,
    contentText: "",
    relatedLabel: "",
    relatedHref: "",
  };
}

function postToForm(post) {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    image: post.image,
    keywords: (post.keywords || []).join(", "),
    featured: Boolean(post.featured),
    published: post.published !== false,
    contentText: (post.content || [])
      .map((b) => `${b.heading}\n${b.text}`)
      .join("\n\n"),
    relatedLabel: post.relatedLinks?.[0]?.label || "",
    relatedHref: post.relatedLinks?.[0]?.href || "",
  };
}

function formToPost(form) {
  const finalSlug = slugify(form.slug || form.title);
  const blocks = String(form.contentText || "")
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const lines = part.split("\n");
      const heading = lines[0] || "Section";
      const text = lines.slice(1).join(" ").trim() || lines[0];
      return { heading, text };
    });

  return {
    slug: finalSlug,
    title: form.title.trim(),
    excerpt: form.excerpt.trim(),
    category: form.category,
    date: form.date || formatDate(),
    readTime: form.readTime.trim() || "5 min read",
    image: form.image.trim() || "/banner-aboutus.webp",
    featured: form.featured,
    published: form.published !== false,
    keywords: String(form.keywords || "")
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean),
    content: blocks.length
      ? blocks
      : [{ heading: "Overview", text: form.excerpt.trim() }],
    relatedLinks:
      form.relatedLabel.trim() && form.relatedHref.trim()
        ? [{ label: form.relatedLabel.trim(), href: form.relatedHref.trim() }]
        : [],
  };
}

async function parseResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data?.ok === false) {
    throw new Error(data?.message || "Request failed");
  }
  return data;
}

export default function AdminBlogClient() {
  const reduceMotion = useReducedMotion();
  const [posts, setPosts] = useState(seedPosts);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingSlug, setEditingSlug] = useState("");
  const [form, setForm] = useState(emptyForm());
  const [message, setMessage] = useState("Loading posts...");

  useEffect(() => {
    let active = true;

    async function loadPosts() {
      try {
        const response = await fetch(apiUrl("/api/admin/blogs"), {
          cache: "no-store",
          credentials: "include",
        });
        const data = await parseResponse(response);
        if (!active) return;
        setPosts(Array.isArray(data.posts) ? data.posts : seedPosts);
        setMessage("Posts loaded from database");
      } catch (error) {
        if (!active) return;
        setPosts(seedPosts);
        setMessage(error?.message || "Could not load posts");
      }
    }

    const frame = window.requestAnimationFrame(() => {
      void loadPosts();
    });

    return () => {
      active = false;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q),
    );
  }, [posts, query]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / ITEMS_PER_PAGE),
  );
  const safePage = Math.min(currentPage, totalPages);

  const paginatedPosts = useMemo(() => {
    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPosts, safePage]);

  const sectionAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease: "easeOut" },
      };

  function handleNewPost() {
    setEditingSlug("");
    setForm(emptyForm());
    setMessage("Creating new post");
  }

  function handleEdit(post) {
    setEditingSlug(post.slug);
    setForm(postToForm(post));
    setMessage(`Editing "${post.title}"`);
  }

  async function handleDelete(slug) {
    try {
      const response = await fetch(apiUrl(`/api/admin/blogs/${slug}`), {
        method: "DELETE",
        credentials: "include",
      });
      await parseResponse(response);
      const next = posts.filter((post) => post.slug !== slug);
      setPosts(next);
      if (editingSlug === slug) {
        setEditingSlug("");
        setForm(emptyForm());
      }
      setMessage("Post deleted");
    } catch (error) {
      setMessage(error?.message || "Delete failed");
    }
  }

  async function handleSave() {
    if (!form.title.trim()) {
      setMessage("Title is required");
      return;
    }

    const post = formToPost(form);
    if (!post.slug) {
      setMessage("Slug is invalid");
      return;
    }

    try {
      const endpoint = editingSlug
        ? `/api/admin/blogs/${editingSlug}`
        : "/api/admin/blogs";
      const method = editingSlug ? "PUT" : "POST";

      const response = await fetch(apiUrl(endpoint), {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
        credentials: "include",
      });
      const data = await parseResponse(response);
      const saved = data.post;
      const next = posts.filter(
        (item) => item.slug !== editingSlug && item.slug !== saved.slug,
      );
      setPosts([saved, ...next]);
      setEditingSlug(saved.slug);
      setForm(postToForm(saved));
      setMessage("Saved successfully");
    } catch (error) {
      setMessage(error?.message || "Save failed");
    }
  }

  function handleImageFileChange(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Please choose a valid image file");
      return;
    }

    if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      setMessage(`Image is too large. Max ${MAX_IMAGE_SIZE_MB}MB`);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const encoded = String(reader.result || "");
      if (!encoded.startsWith("data:image/")) {
        setMessage("Image encode failed");
        return;
      }
      setForm((prev) => ({ ...prev, image: encoded }));
      setMessage(`Image "${file.name}" uploaded`);
    };
    reader.onerror = () => setMessage("Could not read image file");
    reader.readAsDataURL(file);
  }

  async function handleLogout() {
    await fetch(apiUrl("/api/admin/logout"), {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/admin/login";
  }

  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f7fcff_35%,#ffffff_100%)] pb-16 pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.section
          className="mb-6 rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
          {...sectionAnim}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[34px]">
                Blog Admin
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Manage posts: create, edit, delete. Changes are saved in MySQL.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/blogs"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700"
              >
                View Blog Page
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </motion.section>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.section
            className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-5"
            {...sectionAnim}
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-slate-900">Posts</h2>
              <button
                type="button"
                onClick={handleNewPost}
                className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-slate-900 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
              >
                <Plus className="h-4 w-4" />
                New
              </button>
            </div>

            <label className="relative mt-3 block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search posts..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-700 outline-none"
              />
            </label>

            <div className="mt-3 space-y-2">
              {paginatedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                    {post.category}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{post.slug}</p>

                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(post)}
                      className="inline-flex h-8 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 text-[11px] font-semibold text-slate-700"
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(post.slug)}
                      className="inline-flex h-8 items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2 text-[11px] font-semibold text-rose-700"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>
                </article>
              ))}

              {paginatedPosts.length === 0 ? (
                <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-500">
                  No posts found for your search.
                </p>
              ) : null}
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-600">
                Total {filteredPosts.length} post(s) | Showing{" "}
                {paginatedPosts.length}/{ITEMS_PER_PAGE} | Page {safePage}/
                {totalPages}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                  disabled={safePage <= 1}
                  className="inline-flex h-8 items-center rounded-lg border border-slate-200 bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.min(totalPages, page + 1))
                  }
                  disabled={safePage >= totalPages}
                  className="inline-flex h-8 items-center rounded-lg border border-slate-200 bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-5"
            {...sectionAnim}
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {editingSlug ? "Edit Post" : "Create Post"}
            </h2>
            <p className="mt-1 text-xs text-slate-500">{message}</p>

            <div className="mt-4 grid gap-3">
              <input
                value={form.title}
                onChange={(e) => {
                  const nextTitle = e.target.value;
                  setForm((prev) => ({
                    ...prev,
                    title: nextTitle,
                    slug: prev.slug || slugify(nextTitle),
                  }));
                }}
                placeholder="Title"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <input
                value={form.slug}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    slug: slugify(e.target.value),
                  }))
                }
                placeholder="Slug"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <textarea
                value={form.excerpt}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, excerpt: e.target.value }))
                }
                placeholder="Excerpt"
                rows={3}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, category: e.target.value }))
                  }
                  className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
                >
                  {blogOnlyCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <input
                  value={form.readTime}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, readTime: e.target.value }))
                  }
                  placeholder="Read time (e.g. 6 min read)"
                  className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
                />
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <label className="inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-700">
                    Upload from computer
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-slate-500">
                    Max {MAX_IMAGE_SIZE_MB}MB.
                  </span>
                </div>
                {form.image ? (
                  <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <Image
                      src={form.image}
                      alt="Blog preview"
                      width={960}
                      height={540}
                      unoptimized
                      className="h-40 w-full object-cover"
                    />
                  </div>
                ) : null}
              </div>
              <input
                value={form.keywords}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, keywords: e.target.value }))
                }
                placeholder="Keywords (comma separated)"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <textarea
                value={form.contentText}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, contentText: e.target.value }))
                }
                placeholder={
                  "Content blocks:\nHeading 1\nText...\n\nHeading 2\nText..."
                }
                rows={7}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <input
                value={form.relatedLabel}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    relatedLabel: e.target.value,
                  }))
                }
                placeholder="Related label"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, featured: e.target.checked }))
                  }
                  className="h-4 w-4 rounded border-slate-300"
                />
                Mark as featured
              </label>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-slate-900 px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
              >
                <Save className="h-4 w-4" />
                Save Post
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingSlug("");
                  setForm(emptyForm());
                }}
                className="inline-flex h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700"
              >
                Reset Form
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
