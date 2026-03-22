function errorHandler(err, _req, res, _next) {
  const status = Number(err?.status) || 500;
  const message =
    status >= 500
      ? "Internal server error"
      : err?.message || "Request failed";

  if (status >= 500) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return res.status(status).json({ ok: false, message });
}

module.exports = { errorHandler };
