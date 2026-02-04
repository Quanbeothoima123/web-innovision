export const metadata = {
  title: "About Us",
  description:
    "Giới thiệu Innovision: đội ngũ, năng lực và cam kết với doanh nghiệp Việt Nam.",
  alternates: { canonical: "/about-us/" },
};

export default function Page() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">About Us</h1>
      <p className="text-neutral-600">Route: /about-us</p>
      <p>
        Chúng tôi phát triển sản phẩm AI và hệ thống phần mềm tối ưu cho vận
        hành doanh nghiệp.
      </p>
    </div>
  );
}
