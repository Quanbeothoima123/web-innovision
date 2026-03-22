const { prisma } = require("../../lib/prisma");

function findPublished() {
  return prisma.portfolioItem.findMany({
    where: { published: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
}

function findAll() {
  return prisma.portfolioItem.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
}

function findBySlug(slug) {
  return prisma.portfolioItem.findUnique({ where: { slug } });
}

function updateBySlug(slug, payload) {
  return prisma.portfolioItem.update({ where: { slug }, data: payload });
}

function upsertBySlug(slug, payload) {
  return prisma.portfolioItem.upsert({
    where: { slug },
    update: payload,
    create: payload,
  });
}

function deleteBySlug(slug) {
  return prisma.portfolioItem.delete({ where: { slug } });
}

module.exports = {
  findPublished,
  findAll,
  findBySlug,
  updateBySlug,
  upsertBySlug,
  deleteBySlug,
};
