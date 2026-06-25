"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full bg-[#f4f4f4] sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="w-[95%] max-w-[1500px] mx-auto">
        <div className="flex items-center justify-between pt-1 pb-0">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-4 md:-ml-6 translate-y-2 hover:opacity-90 transition-opacity">
            <Link href="#hero" aria-label="Go to top">
              <Image
                src="/images/logo.svg"
                alt="Profitly Logo"
                width={280}
                height={100}
                className="h-20 md:h-24 w-auto cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 mx-auto pr-10">
            <Link href="/" className="font-outfit font-semibold text-[16px] text-[#191919] hover:text-[#245f61] transition-colors">Home</Link>
            <Link href="#how-it-works" className="font-outfit font-semibold text-[16px] text-gray-500 hover:text-[#245f61] transition-colors">How it Works</Link>
            <Link href="#advisors" className="font-outfit font-semibold text-[16px] text-gray-500 hover:text-[#245f61] transition-colors">Advisors</Link>
            <Link href="#services" className="font-outfit font-semibold text-[16px] text-gray-500 hover:text-[#245f61] transition-colors">Services</Link>
            <Link href="#features" className="font-outfit font-semibold text-[16px] text-gray-500 hover:text-[#245f61] transition-colors">Features</Link>
            <Link href="#news" className="font-outfit font-semibold text-[16px] text-gray-500 hover:text-[#245f61] transition-colors">News</Link>
            <Link href="#testimonials" className="font-outfit font-semibold text-[16px] text-gray-500 hover:text-[#245f61] transition-color">Testimonials</Link>
            <Link href="#faqs" className="font-outfit font-semibold text-[16px] text-gray-500 hover:text-[#245f61] transition-colors">Faqs</Link>
          </nav>

          {/* Login /Sign up Button */}
          <div>
            <button className="flex items-center justify-center h-[40px] px-6 bg-[linear-gradient(88.6deg,#194B56_50%,#277275_100%)] rounded-[50px] font-outfit font-semibold text-[18px] leading-[18px] tracking-[-0.0041em] text-white transition-opacity hover:opacity-90 shadow-lg">
              Connect
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
