import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Flame, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  BUSINESS_INFO,
  HOME_PAGE,
  SERVICE_PAGES,
  LOCATION_PAGES,
  CHIMNEY_IMAGES,
} from "@/data/sheetData";

export const metadata: Metadata = {
  title: `Contact | ${BUSINESS_INFO.name}`,
  description: HOME_PAGE.metaDescription,
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden bg-[#0c0c0c] text-white">
        <Image
          src={CHIMNEY_IMAGES[0]}
          alt={BUSINESS_INFO.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#f5b400] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <Flame className="w-3.5 h-3.5" />
            <span>{BUSINESS_INFO.name}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Contact <span className="text-[#f5b400]">{BUSINESS_INFO.name}</span>
          </h1>
          <div className="flex items-center justify-center">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="btn-phone-pulse inline-flex items-center gap-3 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-black text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded shadow-xl transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ROYAL BLUE ACTION BAR */}
      <section className="bg-[#0d5cab] text-white py-7 px-4 shadow-md relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-lg sm:text-2xl font-extrabold tracking-tight">
            {BUSINESS_INFO.address}
          </p>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded shadow-lg shrink-0 transition-transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* 3. ADDRESS, PHONE & GOOGLE MAP SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Address & Phone Details Cards */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-md space-y-8">
              <div>
                <div className="w-10 h-1 bg-[#f5b400] mb-3" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {BUSINESS_INFO.name}
                </h2>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#f5b400] text-[#111111] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Phone
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="text-xl sm:text-2xl font-black text-[#0d5cab] hover:text-[#f5b400] transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0d5cab] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Address
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-800">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Direct Call CTA Button */}
              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-black text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Service Areas Quick Links */}
            <div className="bg-[#111111] text-white rounded-xl p-6 shadow-md border-t-4 border-[#f5b400]">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#f5b400] mb-3">
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {LOCATION_PAGES.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={loc.slug}
                    className="text-xs bg-white/10 hover:bg-[#0d5cab] text-slate-200 hover:text-white px-3 py-1.5 rounded transition-colors"
                  >
                    {loc.city}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Large Visible Google Map */}
          <Reveal delayMs={150} className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[450px] rounded-xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107173.73497390897!2d-96.4197495!3d32.9198629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5e8a789038d65c9%3A0x7b8d88143a107594!2s!5e0!3m2!1sen!2sph!4v1792390070745!5m2!1sen!2sph"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Hearthguard Chimney Sweep Rockwall Location Map"
                className="w-full h-full min-h-[450px] block"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
