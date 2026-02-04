export const metadata = {
  title: "Trang chủ",
  description: "Điểm bắt đầu để điều hướng tới các trang Innovision.",
  alternates: { canonical: "/" },
};

import Homepage from "@/components/HomePage";

export default function Page() {
  return <Homepage />;
}
