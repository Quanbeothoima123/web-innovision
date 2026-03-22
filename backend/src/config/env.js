const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.BACKEND_PORT || 4000),
  frontendOrigin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
  adminUsername: process.env.ADMIN_USERNAME || "admin",
  adminPassword: process.env.ADMIN_PASSWORD || "admin123",
  adminSessionSecret:
    process.env.ADMIN_SESSION_SECRET || "innovision-admin-session",
};

module.exports = { env };
