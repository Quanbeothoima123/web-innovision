const { HttpError } = require("../../lib/httpError");
const repository = require("./portfolio.repository");

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizePortfolio(input) {
  return {
    slug: String(input.slug || "").trim(),
    title: String(input.title || "").trim(),
    metric: String(input.metric || "").trim(),
    summary: String(input.summary || "").trim(),
    category: String(input.category || "AI Products").trim(),
    image: String(input.image || "/banner-aboutus.webp").trim(),
    route: String(input.route || "/portfolio").trim(),
    tags: ensureArray(input.tags)
      .map((item) => String(item).trim())
      .filter(Boolean),
    featured: Boolean(input.featured),
    published: input.published !== false,
    sortOrder: Number.isFinite(Number(input.sortOrder)) ? Number(input.sortOrder) : 0,
  };
}

function toApiItem(record) {
  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    metric: record.metric,
    summary: record.summary,
    category: record.category,
    image: record.image,
    route: record.route,
    tags: ensureArray(record.tags),
    featured: Boolean(record.featured),
    published: Boolean(record.published),
    sortOrder: record.sortOrder ?? 0,
  };
}

async function getPublishedItems() {
  const rows = await repository.findPublished();
  return rows.map(toApiItem);
}

async function getAdminItems() {
  const rows = await repository.findAll();
  return rows.map(toApiItem);
}

async function upsertItem(existingSlug, payload) {
  const normalized = normalizePortfolio(payload);
  if (!normalized.slug || !normalized.title) {
    throw new HttpError(400, "Slug and title are required");
  }

  const targetSlug = String(existingSlug || "").trim();
  const current = targetSlug ? await repository.findBySlug(targetSlug) : null;

  const data = {
    slug: normalized.slug,
    title: normalized.title,
    metric: normalized.metric,
    summary: normalized.summary,
    category: normalized.category,
    image: normalized.image,
    route: normalized.route,
    tags: normalized.tags,
    featured: normalized.featured,
    published: normalized.published,
    sortOrder: normalized.sortOrder,
  };

  if (current) {
    const updated = await repository.updateBySlug(targetSlug, data);
    return toApiItem(updated);
  }

  const created = await repository.upsertBySlug(normalized.slug, data);
  return toApiItem(created);
}

async function deleteItemBySlug(slug) {
  const targetSlug = String(slug || "").trim();
  if (!targetSlug) throw new HttpError(400, "Slug is required");
  await repository.deleteBySlug(targetSlug);
}

module.exports = {
  getPublishedItems,
  getAdminItems,
  upsertItem,
  deleteItemBySlug,
};
