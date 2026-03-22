const { HttpError } = require("../../lib/httpError");
const { prisma } = require("../../lib/prisma");
const repository = require("./blogs.repository");

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizePost(input) {
  return {
    slug: String(input.slug || "").trim(),
    title: String(input.title || "").trim(),
    excerpt: String(input.excerpt || "").trim(),
    category: String(input.category || "Company News").trim(),
    dateLabel: String(input.date || "").trim(),
    readTime: String(input.readTime || "5 min read").trim(),
    image: String(input.image || "/banner-aboutus.webp").trim(),
    featured: Boolean(input.featured),
    published: input.published !== false,
    keywords: ensureArray(input.keywords)
      .map((item) => String(item).trim())
      .filter(Boolean),
    content: ensureArray(input.content).map((block) => ({
      heading: String(block?.heading || "Overview").trim(),
      text: String(block?.text || "").trim(),
    })),
    relatedLinks: ensureArray(input.relatedLinks).map((item) => ({
      label: String(item?.label || "").trim(),
      href: String(item?.href || "").trim(),
    })),
  };
}

function toApiPost(record) {
  return {
    slug: record.slug,
    title: record.title,
    excerpt: record.excerpt,
    category: record.category,
    date: record.dateLabel,
    readTime: record.readTime,
    image: record.image,
    featured: Boolean(record.featured),
    published: Boolean(record.published),
    keywords: ensureArray(record.keywords),
    content: ensureArray(record.content),
    relatedLinks: ensureArray(record.relatedLinks),
  };
}

async function getPublishedPosts() {
  const rows = await repository.findPublished();
  return rows.map(toApiPost);
}

async function getAdminPosts() {
  const rows = await repository.findAll();
  return rows.map(toApiPost);
}

async function getPostBySlug(slug, options = {}) {
  const targetSlug = String(slug || "").trim();
  const includeDraft = Boolean(options.includeDraft);

  if (!targetSlug) return null;
  const row = await repository.findBySlug(targetSlug);
  if (!row) return null;
  if (!includeDraft && !row.published) return null;
  return toApiPost(row);
}

async function upsertPost(existingSlug, payload) {
  const normalized = normalizePost(payload);
  if (!normalized.slug || !normalized.title) {
    throw new HttpError(400, "Slug and title are required");
  }

  return prisma.$transaction(async (tx) => {
    if (normalized.featured) {
      await repository.unsetFeaturedExcept(normalized.slug, tx);
    }

    const targetSlug = String(existingSlug || "").trim();
    const current = targetSlug
      ? await tx.blogPost.findUnique({ where: { slug: targetSlug } })
      : null;

    const data = {
      slug: normalized.slug,
      title: normalized.title,
      excerpt: normalized.excerpt,
      category: normalized.category,
      dateLabel: normalized.dateLabel,
      readTime: normalized.readTime,
      image: normalized.image,
      featured: normalized.featured,
      published: normalized.published,
      keywords: normalized.keywords,
      content: normalized.content,
      relatedLinks: normalized.relatedLinks,
    };

    if (current) {
      const updated = await tx.blogPost.update({
        where: { slug: targetSlug },
        data,
      });
      return toApiPost(updated);
    }

    const created = await tx.blogPost.upsert({
      where: { slug: normalized.slug },
      update: data,
      create: data,
    });
    return toApiPost(created);
  });
}

async function deletePostBySlug(slug) {
  const targetSlug = String(slug || "").trim();
  if (!targetSlug) throw new HttpError(400, "Slug is required");
  await repository.deleteBySlug(targetSlug);
}

module.exports = {
  getPublishedPosts,
  getAdminPosts,
  getPostBySlug,
  upsertPost,
  deletePostBySlug,
};
