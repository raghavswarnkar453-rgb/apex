"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Mobile Menu Button Placeholder */}
        <button
          className="md:hidden rounded-lg border border-white/10 p-2"
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

