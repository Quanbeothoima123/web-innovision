"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import { Footer } from "./Footer";

export default function SiteChrome({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isAdminArea = pathname?.startsWith("/admin");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      {children}
      {!isAdminArea ? <Footer /> : null}
    </>
  );
}
