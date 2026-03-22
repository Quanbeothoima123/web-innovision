import { Suspense } from "react";
import AdminLoginClient from "./AdminLoginClient";

export const metadata = {
  title: "Admin Login - INNOVISION",
  description: "Admin authentication page",
};

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <AdminLoginClient />
    </Suspense>
  );
}
