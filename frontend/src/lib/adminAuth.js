export const ADMIN_SESSION_COOKIE = "iv_admin_session";

export function getAdminUsername() {
  return process.env.ADMIN_USERNAME || "admin";
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "admin123";
}

export function getAdminSessionValue() {
  return process.env.ADMIN_SESSION_SECRET || "innovision-admin-session";
}

export function isAdminCredentialsValid(username, password) {
  return (
    username === getAdminUsername() && password === getAdminPassword()
  );
}

