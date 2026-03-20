"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, Phone } from "lucide-react";

const navItems = [
  { label: "서비스", href: "#services" },
  { label: "프로세스", href: "#process" },
  { label: "실적", href: "#stats" },
  { label: "고객후기", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "문의하기", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="Dilifox"
              className="h-12 w-auto transition-all duration-300"
              style={{
                filter: scrolled ? "none" : "brightness(0) invert(1)",
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium transition-colors text-[15px]"
                style={{
                  color: scrolled ? "#475569" : "rgba(255,255,255,0.85)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#F97316")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = scrolled
                    ? "#475569"
                    : "rgba(255,255,255,0.85)")
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#tracking"
              className="flex items-center gap-2 transition-colors text-sm font-medium"
              style={{
                color: scrolled ? "#475569" : "rgba(255,255,255,0.85)",
              }}
            >
              <Search className="w-4 h-4" />
              송장검색
            </a>
            <a
              href="tel:+8218998384"
              className="flex items-center gap-2 text-sm"
              style={{
                color: scrolled ? "#475569" : "rgba(255,255,255,0.85)",
              }}
            >
              <Phone className="w-4 h-4" />
              1588-2092
            </a>
            <a
              href="#contact"
              className="text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              style={{
                background: "linear-gradient(135deg, #F97316, #EA580C)",
              }}
            >
              무료 상담
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            style={{
              color: scrolled ? "#475569" : "white",
            }}
            aria-label="메뉴 열기"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="lg:hidden py-4"
            style={{
              borderTop: "1px solid",
              borderColor: scrolled
                ? "rgba(241,245,249,1)"
                : "rgba(255,255,255,0.15)",
              background: scrolled ? "transparent" : "rgba(0,0,0,0.5)",
              borderRadius: scrolled ? "0" : "0 0 16px 16px",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 rounded-lg font-medium"
                style={{
                  color: scrolled ? "#475569" : "white",
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 px-4">
              <a
                href="#contact"
                className="block text-center text-white px-6 py-3 rounded-full font-semibold"
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                }}
              >
                무료 상담 신청
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
