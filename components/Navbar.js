// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-100 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3.5 group">
          {/* Logo Image */}
          <div className="relative w-10 h-10 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Realest Digital Limited Logo"
              width={40}
              height={40}
              className="object-contain w-auto h-full"
              priority
            />
          </div>

          {/* Wordmark */}
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-zinc-950 tracking-tight">Realest</span>
            <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">Digital</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-800">
          <Link href="#services" className="hover:text-brand-orange transition-colors">
            Services
          </Link>
          <Link href="#framework" className="hover:text-brand-orange transition-colors">
            Process
          </Link>
          <Link href="#results" className="hover:text-brand-orange transition-colors">
            Portfolio
          </Link>
          <Link href="#faq" className="hover:text-brand-orange transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Action CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold text-sm px-5 py-2.5 rounded-x hover:bg-brand-orange-hover transition-all duration-200 shadow-lg shadow-brand-orange/25 hover:scale-105"
          >
            <span>Get Diagnostic</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </Link>
        </div>

        {/* Custom Morphing Animated Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-zinc-50 border border-zinc-200 p-2 text-zinc-900 focus:outline-none group hover:border-brand-orange/50 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {/* Top Bar */}
          <span
            className={`h-0.5 bg-zinc-900 rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "w-6 translate-y-[8px] rotate-45 bg-brand-orange"
                : "w-6 group-hover:bg-brand-orange"
            }`}
          />
          {/* Middle Bar */}
          <span
            className={`h-0.5 bg-brand-orange rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "w-0 opacity-0" : "w-4 self-start ml-0.5"
            }`}
          />
          {/* Bottom Bar */}
          <span
            className={`h-0.5 bg-zinc-900 rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "w-6 -translate-y-[8px] -rotate-45 bg-brand-orange"
                : "w-6 group-hover:bg-brand-orange"
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isOpen ? "max-h-96 opacity-100 border-b border-zinc-200" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4 text-zinc-800 font-semibold text-base">
            <Link href="#services" onClick={() => setIsOpen(false)}>
              Capabilities
            </Link>
            <Link href="#framework" onClick={() => setIsOpen(false)}>
              Our Engine
            </Link>
            <Link href="#results" onClick={() => setIsOpen(false)}>
              Results
            </Link>
            <Link href="#faq" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
          </nav>
          
          <div className="pt-4 border-t border-zinc-200">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-3 rounded-xl w-full shadow-lg shadow-brand-orange/20"
            >
              <span>Get Free Diagnostic</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}