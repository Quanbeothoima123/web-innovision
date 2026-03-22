"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Edit3, Plus, Save, Search, Trash2 } from "lucide-react";

import { solutionsSeed } from "@/lib/contentSeed";
import { apiUrl } from "@/lib/api/client";

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

function emptyForm() {
  return {
    slug: "",
    title: "",
    desc: "",
    image: "/banner-solutions.webp",
    route: "/solutions",
    category: "Artificial Intelligence",
    metric: "",
    accent: "from-cyan-500 to-sky-500",
    icon: "Sparkles",
    features: "",
    published: true,
    sortOrder: 0,
  };
}

function itemToForm(item) {
  return {
    slug: item.slug || "",
    title: item.title || "",
    desc: item.desc || "",
    image: item.image || "/banner-solutions.webp",
    route: item.route || "/solutions",
    category: item.category || "Artificial Intelligence",
    metric: item.metric || "",
    accent: item.accent || "from-cyan-500 to-sky-500",
    icon: item.icon || "Sparkles",
    features: (item.features || []).join(", "),
    published: item.published !== false,
    sortOrder: Number(item.sortOrder || 0),
  };
}

function formToItem(form) {
  return {
    slug: slugify(form.slug || form.title),
    title: String(form.title || "").trim(),
    desc: String(form.desc || "").trim(),
    image: String(form.image || "").trim(),
    route: String(form.route || "").trim(),
    category: String(form.category || "").trim(),
    metric: String(form.metric || "").trim(),
    accent: String(form.accent || "").trim(),
    icon: String(form.icon || "").trim(),
    features: String(form.features || "")
      .split(",")
      .map((f) => f.trim())
      .filter(Boolean),
    published: form.published !== false,
    sortOrder: Number(form.sortOrder || 0),
  };
}

async function parseResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data?.ok === false) {
    throw new Error(data?.message || "Request failed");
  }
  return data;
}

export default function AdminSolutionsClient() {
  const [items, setItems] = useState(solutionsSeed);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingSlug, setEditingSlug] = useState("");
  const [form, setForm] = useState(emptyForm());
  const [message, setMessage] = useState("Loading solutions...");

  useEffect(() => {
    let active = true;
    async function loadItems() {
      try {
        const res = await fetch(apiUrl("/api/admin/solutions"), {
          cache: "no-store",
          credentials: "include",
        });
        const data = await parseResponse(res);
        if (!active) return;
        setItems(Array.isArray(data.items) ? data.items : solutionsSeed);
        setMessage("Solutions loaded");
      } catch (error) {
        if (!active) return;
        setMessage(error?.message || "Cannot load solutions");
      }
    }
    const frame = window.requestAnimationFrame(() => {
      void loadItems();
    });
    return () => {
      active = false;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q),
    );
  }, [items, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedItems = useMemo(() => {
    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filtered, safePage]);

  function handleEdit(item) {
    setEditingSlug(item.slug);
    setForm(itemToForm(item));
    setMessage(`Editing "${item.title}"`);
  }

  function handleNew() {
    setEditingSlug("");
    setForm(emptyForm());
    setMessage("Creating new solution item");
  }

  async function handleSave() {
    const payload = formToItem(form);
    if (!payload.slug || !payload.title) {
      setMessage("Title and slug are required");
      return;
    }
    try {
      const endpoint = editingSlug
        ? `/api/admin/solutions/${editingSlug}`
        : "/api/admin/solutions";
      const method = editingSlug ? "PUT" : "POST";
      const res = await fetch(apiUrl(endpoint), {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      const data = await parseResponse(res);
      const saved = data.item;
      const next = items.filter((item) => item.slug !== editingSlug && item.slug !== saved.slug);
      setItems([saved, ...next]);
      setEditingSlug(saved.slug);
      setForm(itemToForm(saved));
      setMessage("Saved successfully");
    } catch (error) {
      setMessage(error?.message || "Save failed");
    }
  }

  async function handleDelete(slug) {
    try {
      const res = await fetch(apiUrl(`/api/admin/solutions/${slug}`), {
        method: "DELETE",
        credentials: "include",
      });
      await parseResponse(res);
      setItems((prev) => prev.filter((item) => item.slug !== slug));
      if (editingSlug === slug) {
        setEditingSlug("");
        setForm(emptyForm());
      }
      setMessage("Deleted successfully");
    } catch (error) {
      setMessage(error?.message || "Delete failed");
    }
  }

  function handleImageUpload(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setMessage("Please select an image");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      setMessage(`Image too large. Max ${MAX_IMAGE_SIZE_MB}MB`);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const value = String(reader.result || "");
      setForm((prev) => ({ ...prev, image: value }));
      setMessage(`Uploaded ${file.name}`);
    };
    reader.onerror = () => setMessage("Cannot read image file");
    reader.readAsDataURL(file);
  }

  return (
    <main className="relative overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f7fcff_35%,#ffffff_100%)] pb-16 pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mb-6 rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <h1 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[34px]">
            Manage Solutions
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Create, edit, and delete solution cards shown in the main solutions page.
          </p>
        </section>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-slate-900">Solution Items</h2>
              <button
                type="button"
                onClick={handleNew}
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
                placeholder="Search..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-700 outline-none"
              />
            </label>

            <div className="mt-3 space-y-2">
              {paginatedItems.map((item) => (
                <article key={item.slug} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.slug}</p>
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(item)}
                      className="inline-flex h-8 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 text-[11px] font-semibold text-slate-700"
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.slug)}
                      className="inline-flex h-8 items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2 text-[11px] font-semibold text-rose-700"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>
                </article>
              ))}

              {paginatedItems.length === 0 ? (
                <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-500">
                  No solution items found for your search.
                </p>
              ) : null}
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs text-slate-600">
                Total {filtered.length} item(s) | Showing {paginatedItems.length}/{ITEMS_PER_PAGE} | Page {safePage}/{totalPages}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={safePage <= 1}
                  className="inline-flex h-8 items-center rounded-lg border border-slate-200 bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  disabled={safePage >= totalPages}
                  className="inline-flex h-8 items-center rounded-lg border border-slate-200 bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-5">
            <h2 className="text-lg font-semibold text-slate-900">
              {editingSlug ? "Edit Solution Item" : "Create Solution Item"}
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
                onChange={(e) => setForm((prev) => ({ ...prev, slug: slugify(e.target.value) }))}
                placeholder="Slug"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <textarea
                value={form.desc}
                onChange={(e) => setForm((prev) => ({ ...prev, desc: e.target.value }))}
                placeholder="Description"
                rows={3}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <input
                value={form.category}
                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                placeholder="Category"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <input
                value={form.metric}
                onChange={(e) => setForm((prev) => ({ ...prev, metric: e.target.value }))}
                placeholder="Metric"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <input
                value={form.route}
                onChange={(e) => setForm((prev) => ({ ...prev, route: e.target.value }))}
                placeholder="Route (/solutions/...)"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <label className="inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-700">
                  Upload from computer
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {form.image ? (
                  <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <Image
                      src={form.image}
                      alt="Preview"
                      width={960}
                      height={540}
                      unoptimized
                      className="h-40 w-full object-cover"
                    />
                  </div>
                ) : null}
              </div>
              <input
                value={form.icon}
                onChange={(e) => setForm((prev) => ({ ...prev, icon: e.target.value }))}
                placeholder="Icon (Sparkles | Cpu | Layers)"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <input
                value={form.accent}
                onChange={(e) => setForm((prev) => ({ ...prev, accent: e.target.value }))}
                placeholder="Accent (from-cyan-500 to-sky-500)"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <input
                value={form.features}
                onChange={(e) => setForm((prev) => ({ ...prev, features: e.target.value }))}
                placeholder="Features (comma separated)"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
              <input
                type="number"
                value={form.sortOrder}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, sortOrder: Number(e.target.value || 0) }))
                }
                placeholder="Sort order"
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-slate-900 px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
              >
                <Save className="h-4 w-4" />
                Save Item
              </button>
              <button
                type="button"
                onClick={handleNew}
                className="inline-flex h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700"
              >
                Reset
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
