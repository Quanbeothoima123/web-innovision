"use client";

export function Footer() {
  return (
    <footer className="relative z-[10] bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-10 w-fit object-contain"
            />
            <div className="flex flex-col gap-4 text-[#474363] text-[15px] leading-relaxed">
              <p className="flex gap-3">
                Alley 62, Khuc Thua Du, Dich Vong Ward, Cau Giay District
              </p>
              <p className="flex gap-3">(+84) 88.639.2913</p>
              <p className="flex gap-3">support@innovision.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-black font-extrabold uppercase tracking-wider mb-8 text-[16px]">
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              {["About Innovision", "Portfolio"].map((item) => (
                <li key={item} className="group w-fit">
                  <a
                    href="#"
                    className="text-[#474363] text-[15px] transition-colors duration-300 group-hover:text-[#3c90fc] relative"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3c90fc] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-black font-extrabold uppercase tracking-wider mb-8 text-[16px]">
              Solutions
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "AI Products",
                "Industrial AI & Automation",
                "Software & Firmware Development",
              ].map((item) => (
                <li key={item} className="group w-fit">
                  <a
                    href="#"
                    className="text-[#474363] text-[15px] transition-colors duration-300 group-hover:text-[#3c90fc] relative"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3c90fc] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-black font-extrabold uppercase tracking-wider mb-8 text-[16px]">
              AI Products
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Real Estate AI Assistant",
                "Fintech Verification AI",
                "Government Document AI",
                "Marketing Content Assistant",
              ].map((item) => (
                <li key={item} className="group w-fit">
                  <a
                    href="#"
                    className="text-[#474363] text-[15px] transition-colors duration-300 group-hover:text-[#3c90fc] relative"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#3c90fc] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
