const { prisma } = require("../../lib/prisma");

function findPublished() {
  return prisma.solutionItem.findMany({
    where: { published: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
}

function findAll() {
  return prisma.solutionItem.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
}

function findBySlug(slug) {
  return prisma.solutionItem.findUnique({ where: { slug } });
}

function updateBySlug(slug, payload) {
  return prisma.solutionItem.update({ where: { slug }, data: payload });
}

function upsertBySlug(slug, payload) {
  return prisma.solutionItem.upsert({
    where: { slug },
    update: payload,
    create: payload,
  });
}

function deleteBySlug(slug) {
  return prisma.solutionItem.delete({ where: { slug } });
}

module.exports = {
  findPublished,
  findAll,
  findBySlug,
  updateBySlug,
  upsertBySlug,
  deleteBySlug,
};
