const DEFAULT_API_BASE_URL = "http://localhost:4000";

export function getApiBaseUrl() {
  if (typeof window === "undefined") {
    return (
      process.env.API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      DEFAULT_API_BASE_URL
    );
  }

  return process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL;
}

export function apiUrl(path) {
  const normalizedPath = String(path || "").startsWith("/")
    ? path
    : `/${String(path || "")}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
}
