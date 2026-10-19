import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  Flame,
  ShieldCheck,
  Sparkles,
  Wrench,
  Search,
  Droplets,
  Home,
  Wind,
  CheckCircle2,
  Star,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { BUSINESS_INFO, HOME_PAGE, CHIMNEY_IMAGES } from "@/data/sheetData";
import {
  extractHeadingAndIntro,
  extractCards,
  extractH3Items,
  extractListItems,
} from "@/utils/htmlHelpers";

export const metadata: Metadata = {
  title: HOME_PAGE.seoTitle,
  description: HOME_PAGE.metaDescription,
};

export default function HomePage() {
  const heroData = extractHeadingAndIntro(HOME_PAGE.sections["hero"] || "");
  const heroParagraph = heroData.introHtml.replace(/<p>\s*<a[^>]*>[\s\S]*?<\/p>/gi, "").trim();

  const whyUsData = extractHeadingAndIntro(HOME_PAGE.sections["why-us"] || "");
  const whyUsItems = extractListItems(HOME_PAGE.sections["why-us"] || "");

  const problemsData = extractHeadingAndIntro(HOME_PAGE.sections["problems"] || "");
  const problemItems = extractH3Items(problemsData.restHtml);

  const processData = extractHeadingAndIntro(HOME_PAGE.sections["process"] || "");
  const processItems = extractListItems(HOME_PAGE.sections["process"] || "");

  const servicesData = extractHeadingAndIntro(HOME_PAGE.sections["services"] || "");
  const serviceCards = extractCards(HOME_PAGE.sections["services"] || "");

  const scheduleData = extractHeadingAndIntro(HOME_PAGE.sections["schedule"] || "");
  const areasData = extractHeadingAndIntro(HOME_PAGE.sections["areas"] || "");

  const ctaData = extractHeadingAndIntro(HOME_PAGE.sections["cta"] || "");
  const ctaParagraph = ctaData.introHtml.replace(/<p>\s*<a[^>]*>[\s\S]*?<\/p>/gi, "").trim();

  const faqData = extractHeadingAndIntro(HOME_PAGE.sections["faq"] || "");
  const faqItems = extractH3Items(faqData.restHtml);

  const problemIcons = [Flame, Droplets, ShieldCheck, Home, Wind];
  const serviceIcons = [Sparkles, Search, Wrench];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Max Garage Dark Overlay Hero) */}
      <section className="relative min-h-[560px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-[#0c0c0c] text-white">
        <Image
          src={CHIMNEY_IMAGES[0]}
          alt={heroData.h1 || HOME_PAGE.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20 animate-fade-up">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            {heroData.h1 ? (
              <>
                {heroData.h1.split(" in ")[0]}{" "}
                <span className="text-[#f5b400]">
                  {heroData.h1.includes(" in ") ? `in ${heroData.h1.split(" in ")[1]}` : ""}
                </span>
              </>
            ) : (
              HOME_PAGE.title
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
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ROYAL BLUE ACTION BAR (Max Garage Blue Banner Below Hero) */}
      <section className="bg-[#0d5cab] text-white py-7 px-4 shadow-md relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-lg sm:text-2xl font-extrabold tracking-tight">
            {HOME_PAGE.title} — {BUSINESS_INFO.name}
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

      {/* 3. TWO-COLUMN "WELCOME" SECTION (Why Choose Hearthguard + 2 Vertical Images) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <Reveal className="lg:col-span-7 space-y-6">
            <div>
              <div className="w-10 h-1 bg-[#f5b400] mb-3" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {whyUsData.h2}
              </h2>
            </div>
            <div
              className="sheet-content text-slate-600"
              dangerouslySetInnerHTML={{ __html: whyUsData.introHtml }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {whyUsItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-lg p-4 hover:border-[#f5b400] transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#f5b400] shrink-0 mt-0.5" />
                    <div>
                      {item.title && (
                        <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                      )}
                      <div
                        className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column: Two Tall Vertical Photo Cards with Blue & Gold Bottom Bars */}
          <Reveal delayMs={150} className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative h-80 sm:h-96 rounded overflow-hidden shadow-xl group bg-slate-900">
              <Image
                src={CHIMNEY_IMAGES[2]}
                alt="Fireplace and chimney cleaning in Rockwall"
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
                src={CHIMNEY_IMAGES[1]}
                alt="Chimney inspection and repair in Rockwall"
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

      {/* 4. CENTRAL CIRCULAR HUB ("What We Are Provide" style — Common Chimney Problems) */}
      <section className="py-20 bg-[#f6f7f9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="w-10 h-1 bg-[#f5b400] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
              {problemsData.h2}
            </h2>
            <div
              className="text-slate-600 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: problemsData.introHtml }}
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side Problem Items */}
            <div className="lg:col-span-4 space-y-8">
              {problemItems.slice(0, 3).map((item, idx) => {
                const Icon = problemIcons[idx % problemIcons.length];
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
                        className="text-xs sm:text-sm text-slate-600 leading-relaxed [&_p]:mb-0"
                        dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Center Large Circle Image */}
            <Reveal className="lg:col-span-4 flex justify-center my-4 lg:my-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-slate-800">
                <Image
                  src={CHIMNEY_IMAGES[4]}
                  alt={problemsData.h2 || "Common Chimney Problems"}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Right Side Problem Items */}
            <div className="lg:col-span-4 space-y-8">
              {problemItems.slice(3).map((item, idx) => {
                const Icon = problemIcons[(idx + 3) % problemIcons.length];
                const isLast = idx === problemItems.slice(3).length - 1;
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
                        className="text-xs sm:text-sm text-slate-600 leading-relaxed [&_p]:mb-0"
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

      {/* 5. DARK CHARCOAL CIRCULAR BADGES STRIP (Our Chimney Cleaning Process) */}
      <section className="py-20 bg-[#222222] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <div className="w-10 h-1 bg-[#f5b400] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
              {processData.h2}
            </h2>
            <div
              className="text-slate-300 text-sm sm:text-base [&_p]:mb-0"
              dangerouslySetInnerHTML={{ __html: processData.introHtml }}
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
            {processItems.map((step, idx) => (
              <Reveal key={idx} delayMs={idx * 90} className="w-full flex flex-col items-center">
                {/* Circular White Badge matching template */}
                <div className="w-36 h-36 rounded-full bg-white text-slate-900 flex flex-col items-center justify-center p-4 shadow-2xl border-4 border-white/20 mb-4 group hover:scale-105 transition-transform">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Step
                  </span>
                  <span className="text-2xl font-black text-[#0d5cab] leading-tight">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-extrabold text-center text-slate-800 mt-1 line-clamp-2">
                    {step.title}
                  </span>
                </div>
                <div
                  className="text-xs sm:text-sm text-slate-300 text-center leading-relaxed max-w-xs"
                  dangerouslySetInnerHTML={{ __html: step.bodyHtml }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 3-COLUMN ANGLED-HEADER CARDS ("Including Offers" style — Core Chimney Services) */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="w-10 h-1 bg-[#f5b400] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4">
              {servicesData.h2}
            </h2>
            <div
              className="text-slate-600 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: servicesData.introHtml }}
            />
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
                    {/* Template Angled Top Banner */}
                    <div className="relative h-32 bg-slate-50 border-b border-slate-100 overflow-hidden p-6">
                      <div
                        className={`absolute inset-0 clip-angled-header ${
                          isFeatured ? "bg-[#f5b400]" : "bg-slate-200/75"
                        }`}
                      />
                      <div className="relative z-10 flex items-center justify-between">
                        <div>
                          <span
                            className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded ${
                              isFeatured
                                ? "bg-black/15 text-slate-900"
                                : "bg-[#0d5cab] text-white"
                            }`}
                          >
                            0{idx + 1} Service
                          </span>
                          <h3 className="text-xl font-black text-slate-900 mt-2">
                            {card.title}
                          </h3>
                        </div>
                        <div className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-[#f5b400]">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Striped Content Area */}
                    <div className="p-6 space-y-4">
                      <div
                        className="sheet-content text-sm text-slate-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: card.bodyHtml }}
                      />
                    </div>
                  </div>

                  {/* Card Footer Phone CTA */}
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

      {/* 7. SPLIT SPOTLIGHT CARD ("Experienced Workers" style — Schedule & Service Areas) */}
      <section className="py-20 bg-[#f6f7f9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-10 h-1 bg-[#f5b400] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {scheduleData.h2}
            </h2>
          </Reveal>

          <Reveal className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Vertical Image with Diagonal Dark Badge */}
              <div className="lg:col-span-4 relative min-h-[340px] rounded-lg overflow-hidden bg-slate-900">
                <Image
                  src={CHIMNEY_IMAGES[3]}
                  alt={scheduleData.h2 || "Schedule Chimney Service"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-[#222222]/95 clip-worker-badge flex flex-col justify-end p-4 text-right">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#f5b400]">
                    {BUSINESS_INFO.name}
                  </span>
                  <span className="text-[11px] text-slate-300">{BUSINESS_INFO.address}</span>
                </div>
              </div>

              {/* Right Content + 4 Thumbnail Boxes */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <div
                    className="sheet-content text-sm sm:text-base text-slate-600"
                    dangerouslySetInnerHTML={{
                      __html: scheduleData.introHtml + scheduleData.restHtml,
                    }}
                  />

                  <div className="pt-4 border-t border-slate-200">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                      {areasData.h2}
                    </h2>
                    <div
                      className="sheet-content text-sm sm:text-base text-slate-600"
                      dangerouslySetInnerHTML={{
                        __html: areasData.introHtml + areasData.restHtml,
                      }}
                    />
                  </div>
                </div>

                {/* 4 Thumbnail Boxes matching the Max Garage Worker Gallery Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  {[CHIMNEY_IMAGES[5], CHIMNEY_IMAGES[6], CHIMNEY_IMAGES[7], CHIMNEY_IMAGES[8]].map(
                    (imgSrc, i) => (
                      <div
                        key={i}
                        className={`relative h-24 rounded overflow-hidden border-2 ${
                          i === 2 ? "border-[#f5b400]" : "border-slate-200"
                        }`}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Rockwall chimney service ${i + 1}`}
                          fill
                          sizes="180px"
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. SPLIT 50/50 BLUE & DARK PHOTO CTA BANNER */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Royal Blue Half */}
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

        {/* Right Dark Photo Half */}
        <div className="relative min-h-[280px] bg-[#111111] flex items-center justify-center p-8 overflow-hidden">
          <Image
            src={CHIMNEY_IMAGES[9]}
            alt="Call Hearthguard Chimney Sweep Rockwall"
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
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="w-10 h-1 bg-[#f5b400] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              {faqData.h2}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqItems.map((faq, idx) => {
              const isBlueCorner = idx % 2 === 1;
              return (
                <Reveal
                  key={idx}
                  delayMs={idx * 100}
                  className="relative bg-white border border-slate-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="flex items-center gap-1 text-[#f5b400] mb-3">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">
                      {faq.title}
                    </h3>
                    <div
                      className="sheet-content text-xs sm:text-sm text-slate-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: faq.bodyHtml }}
                    />
                  </div>

                  {/* Folded Corner Badge from Max Garage Template */}
                  <div
                    className={`w-10 h-10 clip-corner-fold self-end -mr-6 -mb-6 mt-4 ${
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
