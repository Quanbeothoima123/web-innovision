import AdminBlogClient from "@/app/admin/AdminBlogClient";

export const metadata = {
  title: "Admin Blog - INNOVISION",
  description: "Manage blog posts: create, edit, and delete.",
};

export default function AdminManageBlogsPage() {
  return <AdminBlogClient />;
}
