const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = process.cwd();
const files = [
  path.join(root, "backend", ".env"),
  path.join(root, "frontend", ".env.local"),
];

function upsertEnvVar(content, key, value) {
  const line = `${key}=${value}`;
  const regex = new RegExp(`^${key}=.*$`, "m");
  if (regex.test(content)) {
    return content.replace(regex, line);
  }
  const trimmed = content.trimEnd();
  return `${trimmed}${trimmed ? "\n" : ""}${line}\n`;
}

function ensureFileExists(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "", "utf8");
  }
}

const secret = crypto.randomBytes(32).toString("hex");

for (const filePath of files) {
  ensureFileExists(filePath);
  const current = fs.readFileSync(filePath, "utf8");
  const updated = upsertEnvVar(current, "ADMIN_SESSION_SECRET", secret);
  fs.writeFileSync(filePath, updated, "utf8");
}

// eslint-disable-next-line no-console
console.log("ADMIN_SESSION_SECRET synced to backend/.env and frontend/.env.local");
