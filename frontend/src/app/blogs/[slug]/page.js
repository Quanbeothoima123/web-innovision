import BlogPostClient from "./BlogPostClient";
import {
  fetchBlogPostBySlug,
  fetchPublishedBlogPosts,
} from "@/lib/api/contentApi";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog Detail - INNOVISION",
  description: "Read insights, project updates, and company stories from INNOVISION.",
};

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  const post = await fetchBlogPostBySlug(slug);
  const posts = await fetchPublishedBlogPosts();
  const recentPosts = posts.filter((item) => item.slug !== slug).slice(0, 3);

  return <BlogPostClient post={post} recentPosts={recentPosts} />;
}
