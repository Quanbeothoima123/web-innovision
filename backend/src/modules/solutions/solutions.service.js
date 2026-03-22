const { HttpError } = require("../../lib/httpError");
const repository = require("./solutions.repository");

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeSolution(input) {
  return {
    slug: String(input.slug || "").trim(),
    title: String(input.title || "").trim(),
    desc: String(input.desc || "").trim(),
    image: String(input.image || "/banner-solutions.webp").trim(),
    route: String(input.route || "/solutions").trim(),
    category: String(input.category || "Artificial Intelligence").trim(),
    metric: String(input.metric || "").trim(),
    accent: String(input.accent || "from-cyan-500 to-sky-500").trim(),
    icon: String(input.icon || "Sparkles").trim(),
    features: ensureArray(input.features)
      .map((item) => String(item).trim())
      .filter(Boolean),
    published: input.published !== false,
    sortOrder: Number.isFinite(Number(input.sortOrder)) ? Number(input.sortOrder) : 0,
  };
}

function toApiItem(record) {
  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    desc: record.desc,
    image: record.image,
    route: record.route,
    category: record.category,
    metric: record.metric,
    accent: record.accent,
    icon: record.icon,
    features: ensureArray(record.features),
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
  const normalized = normalizeSolution(payload);
  if (!normalized.slug || !normalized.title) {
    throw new HttpError(400, "Slug and title are required");
  }

  const targetSlug = String(existingSlug || "").trim();
  const current = targetSlug ? await repository.findBySlug(targetSlug) : null;

  const data = {
    slug: normalized.slug,
    title: normalized.title,
    desc: normalized.desc,
    image: normalized.image,
    route: normalized.route,
    category: normalized.category,
    metric: normalized.metric,
    accent: normalized.accent,
    icon: normalized.icon,
    features: normalized.features,
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
