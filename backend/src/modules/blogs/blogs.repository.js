const { prisma } = require("../../lib/prisma");

function findPublished() {
  return prisma.blogPost.findMany({
    where: { published: true },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });
}

function findAll() {
  return prisma.blogPost.findMany({
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });
}

function findBySlug(slug) {
  return prisma.blogPost.findUnique({ where: { slug } });
}

function create(payload) {
  return prisma.blogPost.create({ data: payload });
}

function updateBySlug(slug, payload) {
  return prisma.blogPost.update({ where: { slug }, data: payload });
}

function upsertBySlug(slug, payload) {
  return prisma.blogPost.upsert({
    where: { slug },
    update: payload,
    create: payload,
  });
}

function deleteBySlug(slug) {
  return prisma.blogPost.delete({ where: { slug } });
}

function unsetFeaturedExcept(slug, tx = prisma) {
  return tx.blogPost.updateMany({
    where: { NOT: { slug } },
    data: { featured: false },
  });
}

module.exports = {
  findPublished,
  findAll,
  findBySlug,
  create,
  updateBySlug,
  upsertBySlug,
  deleteBySlug,
  unsetFeaturedExcept,
};
