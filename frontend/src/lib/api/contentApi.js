import { blogPosts, getPostBySlug } from "@/app/blogs/data";
import { portfolioSeed, solutionsSeed } from "@/lib/contentSeed";
import { apiUrl } from "@/lib/api/client";

async function parseJson(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data?.ok === false) {
    throw new Error(data?.message || "Request failed");
  }
  return data;
}

export async function fetchPublishedBlogPosts() {
  try {
    const response = await fetch(apiUrl("/api/blogs"), { cache: "no-store" });
    const data = await parseJson(response);
    return Array.isArray(data.posts) ? data.posts : blogPosts;
  } catch {
    return blogPosts;
  }
}

export async function fetchBlogPostBySlug(slug) {
  const targetSlug = String(slug || "").trim();
  if (!targetSlug) return null;

  try {
    const response = await fetch(apiUrl(`/api/blogs/${targetSlug}`), {
      cache: "no-store",
    });
    const data = await parseJson(response);
    return data.post || null;
  } catch {
    return getPostBySlug(targetSlug) || null;
  }
}

export async function fetchPublishedPortfolioItems() {
  try {
    const response = await fetch(apiUrl("/api/portfolio"), { cache: "no-store" });
    const data = await parseJson(response);
    return Array.isArray(data.items) ? data.items : portfolioSeed;
  } catch {
    return portfolioSeed;
  }
}

export async function fetchPublishedSolutions() {
  try {
    const response = await fetch(apiUrl("/api/solutions"), { cache: "no-store" });
    const data = await parseJson(response);
    return Array.isArray(data.items) ? data.items : solutionsSeed;
  } catch {
    return solutionsSeed;
  }
}
