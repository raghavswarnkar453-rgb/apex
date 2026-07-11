"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import useScroll from "@/hooks/useScroll";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrolled = useScroll();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl"
    >
      <div className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <Logo />

        <NavLinks />

        <MenuButton
          isOpen={isOpen}
          toggle={toggleMenu}
        />

        <MobileMenu
          isOpen={isOpen}
          closeMenu={closeMenu}
        />
      </div>
    </motion.header>
  );
}


