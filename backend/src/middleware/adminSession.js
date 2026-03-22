const { ADMIN_SESSION_COOKIE } = require("../config/constants");
const { env } = require("../config/env");

function requireAdminSession(req, res, next) {
  const session = req.cookies?.[ADMIN_SESSION_COOKIE] || "";
  if (session !== env.adminSessionSecret) {
    return res.status(401).json({ ok: false, message: "Unauthorized" });
  }
  return next();
}

module.exports = { requireAdminSession };
