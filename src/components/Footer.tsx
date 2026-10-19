import React from "react";
import Link from "next/link";
import { Phone, MapPin, Flame, ArrowRight } from "lucide-react";
import { BUSINESS_INFO, SERVICE_PAGES, LOCATION_PAGES, BLOG_PAGES } from "@/data/sheetData";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-slate-300 pt-16 pb-10 border-t-4 border-[#f5b400]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Top Brand Logo (Matches Max Garage Footer Header) */}
        <div className="flex flex-col items-center justify-center text-center pb-12 border-b border-white/10">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[#f5b400] flex items-center justify-center text-[#111111] shadow-lg">
              <Flame className="w-7 h-7 fill-current" />
            </div>
            <div className="text-left">
              <span className="block text-2xl font-black tracking-wider text-white leading-none">
                HEARTH<span className="text-[#f5b400]">GUARD</span>
              </span>
              <span className="block text-[11px] tracking-[0.22em] uppercase text-[#f5b400] font-semibold mt-1">
                Chimney Sweep Rockwall
              </span>
            </div>
          </Link>
        </div>

        {/* Main Footer Grid + Visible Google Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10">
          {/* Column 1: Contact Details & Phone CTA */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white border-l-4 border-[#f5b400] pl-3">
              Hearthguard Chimney Sweep Rockwall
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f5b400] shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#f5b400] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-white font-bold hover:text-[#f5b400] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded shadow-md transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Chimney Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white border-l-4 border-[#0d5cab] pl-3">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICE_PAGES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.slug}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#f5b400] transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-[#f5b400]" />
                    <span>{s.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white border-l-4 border-[#f5b400] pl-3">
              Service Areas
            </h3>
            <ul className="space-y-2 text-xs">
              {LOCATION_PAGES.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={loc.slug}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#f5b400] transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-[#0d5cab]" />
                    <span>{loc.city}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Visible Google Map Embed (Exact iframe requested by user) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white border-l-4 border-[#0d5cab] pl-3">
              Our Location Map
            </h3>
            <div className="w-full rounded-lg overflow-hidden border-2 border-white/15 shadow-xl bg-[#1a1a1a]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107173.73497390897!2d-96.4197495!3d32.9198629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5e8a789038d65c9%3A0x7b8d88143a107594!2s!5e0!3m2!1sen!2sph!4v1792390070745!5m2!1sen!2sph"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Hearthguard Chimney Sweep Rockwall Map"
                className="w-full h-64 sm:h-72 block"
              />
            </div>
          </div>
        </div>

        {/* Recent Blog Guides Links */}
        <div className="py-8 border-b border-white/10">
          <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#f5b400] mb-4 text-center">
            Chimney Care & Safety Guides
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            {BLOG_PAGES.map((b) => (
              <Link
                key={b.slug}
                href={b.slug}
                className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
              >
                {b.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-6 uppercase tracking-wider font-semibold text-slate-400">
            <Link href="/" className="hover:text-[#f5b400]">Home</Link>
            <Link href="/chimney-cleaning/" className="hover:text-[#f5b400]">Chimney Cleaning</Link>
            <Link href="/chimney-inspection/" className="hover:text-[#f5b400]">Chimney Inspection</Link>
            <Link href="/chimney-repair/" className="hover:text-[#f5b400]">Chimney Repair</Link>
            <Link href="/blog/" className="hover:text-[#f5b400]">Blog</Link>
            <Link href="/contact/" className="hover:text-[#f5b400]">Contact</Link>
          </div>
          <p className="text-center">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
