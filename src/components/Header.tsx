"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin, ShieldCheck, ChevronDown, Menu, X, Flame } from "lucide-react";
import { BUSINESS_INFO, SERVICE_PAGES, LOCATION_PAGES } from "@/data/sheetData";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#111111] text-white shadow-xl border-b border-white/10">
      {/* Top Info Strip (Max Garage template top bar) */}
      <div className="bg-[#0a0a0a] border-b border-white/10 text-xs text-slate-300 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#f5b400]" />
              <span>{BUSINESS_INFO.address}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f5b400]" />
              <span>Hearthguard Chimney Sweep Rockwall</span>
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-[#f5b400] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#f5b400] flex items-center justify-center text-[#111111] shadow-md group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-wider text-white leading-none">
                HEARTH<span className="text-[#f5b400]">GUARD</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#f5b400] font-semibold mt-1">
                Chimney Sweep Rockwall
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider">
            <Link
              href="/"
              className={`py-2 border-b-2 transition-colors ${
                pathname === "/"
                  ? "border-[#f5b400] text-[#f5b400]"
                  : "border-transparent text-slate-200 hover:text-[#f5b400]"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1 py-2 border-b-2 border-transparent text-slate-200 group-hover:text-[#f5b400] uppercase tracking-wider cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#181818] border border-white/15 rounded-md shadow-2xl py-2 overflow-hidden">
                  {SERVICE_PAGES.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.slug}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-[#0d5cab] hover:text-white transition-colors normal-case tracking-normal border-b border-white/5 last:border-none"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1 py-2 border-b-2 border-transparent text-slate-200 group-hover:text-[#f5b400] uppercase tracking-wider cursor-pointer"
              >
                <span>Service Areas</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-[#181818] border border-white/15 rounded-md shadow-2xl py-2 max-h-96 overflow-y-auto">
                  {LOCATION_PAGES.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={loc.slug}
                      className="block px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-[#0d5cab] hover:text-white transition-colors normal-case tracking-normal border-b border-white/5 last:border-none"
                    >
                      {loc.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/blog/"
              className={`py-2 border-b-2 transition-colors ${
                pathname?.startsWith("/blog")
                  ? "border-[#f5b400] text-[#f5b400]"
                  : "border-transparent text-slate-200 hover:text-[#f5b400]"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact/"
              className={`py-2 border-b-2 transition-colors ${
                pathname?.startsWith("/contact")
                  ? "border-[#f5b400] text-[#f5b400]"
                  : "border-transparent text-slate-200 hover:text-[#f5b400]"
              }`}
            >
              Contact
            </Link>

            {/* Phone CTA Button Only */}
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded shadow-md transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 bg-[#f5b400] text-[#111111] font-extrabold text-xs px-3.5 py-2.5 rounded"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded text-slate-200 hover:text-[#f5b400] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#161616] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 max-h-[82vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-bold uppercase tracking-wider text-[#f5b400] border-b border-white/10"
          >
            Home
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between py-2.5 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              <span>Chimney Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-3 py-2 space-y-1.5 bg-black/30 rounded mt-1">
                {SERVICE_PAGES.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.slug}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1.5 text-xs text-slate-300 hover:text-[#f5b400]"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              type="button"
              onClick={() => setLocationsOpen(!locationsOpen)}
              className="w-full flex items-center justify-between py-2.5 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
            >
              <span>Service Areas</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
            </button>
            {locationsOpen && (
              <div className="pl-3 py-2 space-y-1.5 bg-black/30 rounded mt-1">
                {LOCATION_PAGES.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={loc.slug}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1.5 text-xs text-slate-300 hover:text-[#f5b400]"
                  >
                    {loc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog/"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
          >
            Blog
          </Link>

          <Link
            href="/contact/"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-bold uppercase tracking-wider text-white border-b border-white/10"
          >
            Contact
          </Link>

          <div className="pt-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#f5b400] text-[#111111] font-extrabold text-sm uppercase py-3 rounded shadow-lg"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
