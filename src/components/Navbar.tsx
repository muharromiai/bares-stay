
"use client";

import Link from "next/link";
import { useState } from "react";

type NavbarProps = {
  variant?: "hero" | "default";
};

export default function Navbar({ variant = "hero" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHero = variant === "hero";

  const textColor = isHero ? "text-white" : "text-[#243C32]";
  const borderColor = isHero ? "border-white" : "border-[#243C32]";

  const mobileMenuBackground = isHero
    ? "bg-[#243C32] text-white"
    : "bg-[#F5F1E8] text-[#243C32]";

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav
      className={`${
        isHero ? "absolute" : "relative"
      } top-0 z-30 w-full px-6 py-6 md:px-16`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          onClick={closeMenu}
          className={`text-2xl font-semibold tracking-[0.2em] ${textColor}`}
        >
          BARÈS
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden items-center gap-10 text-sm md:flex ${textColor}`}>
          <Link href="/" className="transition hover:text-[#C5AE8B]">
            Home
          </Link>

          <Link href="/rooms" className="transition hover:text-[#C5AE8B]">
            Rooms
          </Link>

          <Link href="/gallery" className="transition hover:text-[#C5AE8B]">
            Gallery
          </Link>

          <Link href="/location" className="transition hover:text-[#C5AE8B]">
            Location
          </Link>
        </div>

        {/* Desktop Booking Button */}
        <Link
          href="/#booking"
          className={`hidden border px-5 py-3 text-xs tracking-widest transition hover:bg-[#243C32] hover:text-white md:block ${borderColor} ${textColor}`}
        >
          BOOK YOUR STAY
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-3xl md:hidden ${textColor}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className={`absolute left-0 top-full w-full px-6 py-8 shadow-lg md:hidden ${mobileMenuBackground}`}
        >
          <div className="flex flex-col gap-6 text-sm">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>

            <Link href="/rooms" onClick={closeMenu}>
              Rooms
            </Link>

            <Link href="/gallery" onClick={closeMenu}>
              Gallery
            </Link>

            <Link href="/location" onClick={closeMenu}>
              Location
            </Link>

            <Link
              href="/#booking"
              onClick={closeMenu}
              className="mt-2 border border-current px-5 py-3 text-center text-xs tracking-widest"
            >
              BOOK YOUR STAY
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
