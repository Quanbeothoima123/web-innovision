const { env } = require("../../config/env");

function isValidCredentials(username, password) {
  return (
    String(username || "").trim() === env.adminUsername &&
    String(password || "") === env.adminPassword
  );
}

module.exports = { isValidCredentials };
