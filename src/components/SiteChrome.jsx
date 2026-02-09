"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Footer } from "./Footer";

export default function SiteChrome({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <Footer />
    </>
  );
}
