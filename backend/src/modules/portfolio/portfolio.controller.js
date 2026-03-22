const service = require("./portfolio.service");

async function getPublished(_req, res) {
  const items = await service.getPublishedItems();
  return res.json({ ok: true, items });
}

async function getAdmin(_req, res) {
  const items = await service.getAdminItems();
  return res.json({ ok: true, items });
}

async function create(req, res) {
  const item = await service.upsertItem("", req.body);
  return res.json({ ok: true, item });
}

async function update(req, res) {
  const item = await service.upsertItem(req.params.slug, req.body);
  return res.json({ ok: true, item });
}

async function remove(req, res) {
  await service.deleteItemBySlug(req.params.slug);
  return res.json({ ok: true });
}

module.exports = {
  getPublished,
  getAdmin,
  create,
  update,
  remove,
};
