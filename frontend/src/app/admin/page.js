import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin - INNOVISION",
  description: "Admin entry point",
};

export default function AdminPage() {
  redirect("/admin/login");
}
