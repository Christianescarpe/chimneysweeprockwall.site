import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Flame,
  ShieldCheck,
  Sparkles,
  Wrench,
  Search,
  CheckCircle2,
  Star,
  MapPin,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { BUSINESS_INFO, LOCATION_PAGES, CHIMNEY_IMAGES } from "@/data/sheetData";
import {
  extractHeadingAndIntro,
  extractCards,
  extractH3Items,
  extractListItems,
} from "@/utils/htmlHelpers";

type LocationPageData = (typeof LOCATION_PAGES)[number];

export default function LocationPageTemplate({ page }: { page: LocationPageData }) {
  const heroData = extractHeadingAndIntro(page.sections["hero"] || "");
  const heroParagraph = heroData.introHtml.replace(/<p>\s*<a[^>]*>[\s\S]*?<\/p>/gi, "").trim();

  const localFocusData = extractHeadingAndIntro(page.sections["local-focus"] || "");

  const processData = extractHeadingAndIntro(page.sections["process"] || "");
  const processItems = extractListItems(page.sections["process"] || "");

  const servicesData = extractHeadingAndIntro(page.sections["services"] || "");
  const serviceCards = extractCards(page.sections["services"] || "");

  const safetyData = extractHeadingAndIntro(page.sections["safety"] || "");

  const ctaData = extractHeadingAndIntro(page.sections["cta"] || "");
  const ctaParagraph = ctaData.introHtml.replace(/<p>\s*<a[^>]*>[\s\S]*?<\/p>/gi, "").trim();

  const faqData = extractHeadingAndIntro(page.sections["faq"] || "");
  const faqItems = extractH3Items(faqData.restHtml);

  const stepIcons = [ShieldCheck, Search, Sparkles, Wrench, Flame];
  const serviceIcons = [Sparkles, Search, Wrench];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Max Garage Dark Overlay Hero) */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center justify-center overflow-hidden bg-[#0c0c0c] text-white">
        <Image
          src={page.heroImage}
          alt={heroData.h1 || page.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#f5b400] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{page.city}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            {heroData.h1 ? (
              <>
                {heroData.h1.split(" in ")[0]}{" "}
                <span className="text-[#f5b400]">
                  {heroData.h1.includes(" in ") ? `in ${heroData.h1.split(" in ")[1]}` : ""}
                </span>
              </>
            ) : (
              page.title
            )}
          </h1>
          <div
            className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto mb-9 leading-relaxed [&_p]:mb-0"
            dangerouslySetInnerHTML={{ __html: heroParagraph }}
          />
          {/* Phone CTA Button Only */}
          <div className="flex items-center justify-center">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="btn-phone-pulse inline-flex items-center gap-3 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-black text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded shadow-xl transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ROYAL BLUE ACTION BAR */}
      <section className="bg-[#0d5cab] text-white py-7 px-4 shadow-md relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-lg sm:text-2xl font-extrabold tracking-tight">
            {page.title} — {BUSINESS_INFO.name}
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

      {/* 3. TWO-COLUMN "WELCOME" SECTION (Local Focus + 2 Tall Vertical Images) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7 space-y-5">
            <div>
              <div className="w-10 h-1 bg-[#f5b400] mb-3" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {localFocusData.h2}
              </h2>
            </div>
            <div
              className="sheet-content text-slate-600 text-sm sm:text-base"
              dangerouslySetInnerHTML={{
                __html: localFocusData.introHtml + localFocusData.restHtml,
              }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              {page.internalLinks.map((lnk, idx) => (
                <Link
                  key={idx}
                  href={lnk.href}
                  className="flex items-center gap-2 bg-slate-50 hover:bg-[#0d5cab] text-slate-800 hover:text-white border border-slate-200 rounded p-3 text-xs font-extrabold uppercase tracking-wider transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#f5b400] shrink-0" />
                  <span>{lnk.anchor}</span>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={150} className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative h-80 sm:h-96 rounded overflow-hidden shadow-xl group bg-slate-900">
              <Image
                src={page.secondaryImages[0]}
                alt={`${page.title} service`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#0d5cab] text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider py-3 px-3 text-center">
                <a href={BUSINESS_INFO.phoneHref} className="block hover:underline">
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded overflow-hidden shadow-xl group bg-slate-900">
              <Image
                src={page.secondaryImages[1]}
                alt={`${page.title} inspection`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#f5b400] text-[#111111] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider py-3 px-3 text-center">
                <a href={BUSINESS_INFO.phoneHref} className="block hover:underline">
                  Call {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CENTRAL CIRCULAR HUB ("What We Are Provide" style — Process Steps) */}
      <section className="py-20 bg-[#f6f7f9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="w-10 h-1 bg-[#f5b400] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
              {processData.h2}
            </h2>
            <div
              className="text-slate-600 text-sm sm:text-base [&_p]:mb-0"
              dangerouslySetInnerHTML={{ __html: processData.introHtml }}
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-8">
              {processItems.slice(0, 3).map((item, idx) => {
                const Icon = stepIcons[idx % stepIcons.length];
                return (
                  <Reveal
                    key={idx}
                    delayMs={idx * 100}
                    className="flex flex-col sm:flex-row lg:flex-row-reverse items-start lg:items-center gap-4 lg:text-right bg-white lg:bg-transparent p-5 lg:p-0 rounded-xl shadow-sm lg:shadow-none"
                  >
                    <div className="w-14 h-14 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#0d5cab] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <div
                        className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="lg:col-span-4 flex justify-center my-4 lg:my-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-slate-800">
                <Image
                  src={page.secondaryImages[2]}
                  alt={processData.h2 || page.title}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-4 space-y-8">
              {processItems.slice(3).map((item, idx) => {
                const Icon = stepIcons[(idx + 3) % stepIcons.length];
                const isLast = idx === processItems.slice(3).length - 1;
                return (
                  <Reveal
                    key={idx}
                    delayMs={(idx + 3) * 100}
                    className="flex flex-col sm:flex-row items-start lg:items-center gap-4 bg-white lg:bg-transparent p-5 lg:p-0 rounded-xl shadow-sm lg:shadow-none"
                  >
                    <div
                      className={`w-14 h-14 rounded-full shadow-md flex items-center justify-center shrink-0 ${
                        isLast
                          ? "bg-[#0d5cab] text-white"
                          : "bg-white border border-slate-200 text-[#0d5cab]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <div
                        className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK CHARCOAL CIRCULAR BADGES STRIP */}
      <section className="py-16 bg-[#222222] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {processItems.map((step, idx) => (
            <Reveal key={idx} delayMs={idx * 80} className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full bg-white text-slate-900 flex flex-col items-center justify-center p-4 shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  Step
                </span>
                <span className="text-2xl font-black text-[#0d5cab] leading-tight">
                  0{idx + 1}
                </span>
                <span className="text-xs font-extrabold text-center text-slate-800 mt-1 line-clamp-2">
                  {step.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. 3-COLUMN ANGLED-HEADER CARDS ("Including Offers" style — Location Services) */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="w-10 h-1 bg-[#f5b400] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
              {servicesData.h2}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((card, idx) => {
              const isFeatured = idx === 1;
              const Icon = serviceIcons[idx % serviceIcons.length];
              return (
                <Reveal
                  key={idx}
                  delayMs={idx * 120}
                  className="bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    <div className="relative h-32 bg-slate-50 border-b border-slate-100 overflow-hidden p-6">
                      <div
                        className={`absolute inset-0 clip-angled-header ${
                          isFeatured ? "bg-[#f5b400]" : "bg-slate-200/75"
                        }`}
                      />
                      <div className="relative z-10 flex items-center justify-between gap-2">
                        <div>
                          <span
                            className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded ${
                              isFeatured
                                ? "bg-black/15 text-slate-900"
                                : "bg-[#0d5cab] text-white"
                            }`}
                          >
                            {page.city}
                          </span>
                          <h3 className="text-lg font-black text-slate-900 mt-2 leading-snug">
                            {card.title}
                          </h3>
                        </div>
                        <div className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-[#f5b400] shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div
                        className="sheet-content text-sm text-slate-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: card.bodyHtml }}
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className={`w-full inline-flex items-center justify-center gap-2 font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded transition-colors ${
                        isFeatured
                          ? "bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] shadow-md"
                          : "bg-slate-100 hover:bg-[#0d5cab] text-slate-800 hover:text-white"
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SPLIT SPOTLIGHT CARD ("Experienced Workers" style — Safety Section) */}
      <section className="py-20 bg-[#f6f7f9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-10 h-1 bg-[#f5b400] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {safetyData.h2}
            </h2>
          </Reveal>

          <Reveal className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-4 relative min-h-[300px] rounded-lg overflow-hidden bg-slate-900">
                <Image
                  src={page.heroImage}
                  alt={safetyData.h2 || page.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-[#222222]/95 clip-worker-badge flex flex-col justify-end p-4 text-right">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#f5b400]">
                    {page.city}
                  </span>
                  <span className="text-[11px] text-slate-300">{BUSINESS_INFO.name}</span>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div
                  className="sheet-content text-sm sm:text-base text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: safetyData.introHtml + safetyData.restHtml,
                  }}
                />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  {[
                    page.secondaryImages[0],
                    page.secondaryImages[1],
                    page.secondaryImages[2],
                    CHIMNEY_IMAGES[0],
                  ].map((imgSrc, i) => (
                    <div
                      key={i}
                      className={`relative h-24 rounded overflow-hidden border-2 ${
                        i === 2 ? "border-[#f5b400]" : "border-slate-200"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${page.city} chimney sweep ${i + 1}`}
                        fill
                        sizes="180px"
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. SPLIT 50/50 BLUE & DARK PHOTO CTA BANNER */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#0d5cab] text-white py-16 px-6 sm:px-12 lg:px-16 flex items-center justify-end">
          <div className="max-w-lg w-full space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black leading-tight">
              {ctaData.h2}{" "}
              <span className="text-[#f5b400] block mt-1">{BUSINESS_INFO.phoneDisplay}</span>
            </h2>
            <div
              className="text-slate-100 text-sm sm:text-base leading-relaxed [&_p]:mb-0"
              dangerouslySetInnerHTML={{ __html: ctaParagraph }}
            />
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[280px] bg-[#111111] flex items-center justify-center p-8 overflow-hidden">
          <Image
            src={page.secondaryImages[0]}
            alt={`Call Hearthguard in ${page.city}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-30"
          />
          <div className="relative z-10 text-center">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-3 border-2 border-white/80 hover:border-[#f5b400] hover:bg-[#f5b400] text-white hover:text-[#111111] font-extrabold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. FOLDED-CORNER FAQ CARDS ("Our Clients Says" style) */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="w-10 h-1 bg-[#f5b400] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {faqData.h2}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((faq, idx) => {
              const isBlueCorner = idx % 2 === 1;
              return (
                <Reveal
                  key={idx}
                  delayMs={idx * 120}
                  className="relative bg-white border border-slate-200 rounded-lg p-7 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="flex items-center gap-1 text-[#f5b400] mb-3">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                      {faq.title}
                    </h3>
                    <div
                      className="sheet-content text-sm text-slate-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: faq.bodyHtml }}
                    />
                  </div>

                  <div
                    className={`w-10 h-10 clip-corner-fold self-end -mr-7 -mb-7 mt-4 ${
                      isBlueCorner ? "bg-[#0d5cab]" : "bg-[#f5b400]"
                    }`}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
