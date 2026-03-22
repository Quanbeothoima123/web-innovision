import BlogsClient from "./BlogsClient";
import { fetchPublishedBlogPosts } from "@/lib/api/contentApi";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog & Insights - INNOVISION",
  description:
    "Company news, technical insights, project success stories, and product updates from INNOVISION.",
  keywords:
    "INNOVISION blog, AI insights, company achievements, project success stories, case studies, engineering updates",
  openGraph: {
    title: "Blog & Insights - INNOVISION",
    description:
      "Read news, technical articles, achievements, and successful project stories from INNOVISION.",
    type: "website",
    url: "https://innovision.com/blogs",
    images: [
      {
        url: "/banner-aboutus.webp",
        width: 1200,
        height: 630,
        alt: "INNOVISION Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights - INNOVISION",
    description:
      "Technical articles, company updates, and project success stories.",
    images: ["/banner-aboutus.webp"],
  },
  alternates: {
    canonical: "https://innovision.com/blogs",
  },
};

export default async function BlogsPage() {
  const posts = await fetchPublishedBlogPosts();
  return <BlogsClient initialPosts={posts} />;
}
