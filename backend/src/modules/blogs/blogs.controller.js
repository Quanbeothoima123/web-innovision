const service = require("./blogs.service");

async function getPublished(_req, res) {
  const posts = await service.getPublishedPosts();
  return res.json({ ok: true, posts });
}

async function getBySlug(req, res) {
  const post = await service.getPostBySlug(req.params.slug);
  if (!post) {
    return res.status(404).json({ ok: false, message: "Post not found" });
  }
  return res.json({ ok: true, post });
}

async function getAdmin(_req, res) {
  const posts = await service.getAdminPosts();
  return res.json({ ok: true, posts });
}

async function create(req, res) {
  const post = await service.upsertPost("", req.body);
  return res.json({ ok: true, post });
}

async function update(req, res) {
  const post = await service.upsertPost(req.params.slug, req.body);
  return res.json({ ok: true, post });
}

async function remove(req, res) {
  await service.deletePostBySlug(req.params.slug);
  return res.json({ ok: true });
}

module.exports = {
  getPublished,
  getBySlug,
  getAdmin,
  create,
  update,
  remove,
};
