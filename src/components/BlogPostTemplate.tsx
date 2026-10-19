import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Flame, BookOpen, ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BUSINESS_INFO, BLOG_PAGES, SERVICE_PAGES } from "@/data/sheetData";

type BlogPageData = (typeof BLOG_PAGES)[number];

export default function BlogPostTemplate({ post }: { post: BlogPageData }) {
  const { h1, introHtml, blocks } = post.parsed;
  const relatedBlogs = BLOG_PAGES.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[440px] flex items-center justify-center overflow-hidden bg-[#0c0c0c] text-white">
        <Image
          src={post.heroImage}
          alt={h1 || post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#f5b400] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{BUSINESS_INFO.name}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
            {h1 || post.title}
          </h1>
          <div className="flex items-center justify-center">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="btn-phone-pulse inline-flex items-center gap-3 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded shadow-xl transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ROYAL BLUE ACTION BAR */}
      <section className="bg-[#0d5cab] text-white py-6 px-4 shadow-md relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-base sm:text-xl font-extrabold tracking-tight">
            {BUSINESS_INFO.name} — {BUSINESS_INFO.address}
          </p>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-black text-xs uppercase tracking-wider px-6 py-3 rounded shadow-lg shrink-0"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* ARTICLE CONTENT + SIDEBAR */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Blog Article */}
          <article className="lg:col-span-8 space-y-8">
            <Reveal className="bg-slate-50 border-l-4 border-[#f5b400] p-6 rounded-r-lg">
              <div
                className="sheet-content text-base sm:text-lg text-slate-700 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: introHtml }}
              />
            </Reveal>

            <Reveal className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.secondaryImage}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </Reveal>

            {blocks.map((block, idx) => (
              <Reveal
                key={idx}
                delayMs={idx * 60}
                className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-8 shadow-sm"
              >
                <div className="w-8 h-1 bg-[#f5b400] mb-3" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                  {block.heading}
                </h2>
                <div
                  className="sheet-content text-sm sm:text-base text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: block.contentHtml }}
                />
              </Reveal>
            ))}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Phone CTA Card */}
            <div className="bg-[#111111] text-white rounded-xl p-7 shadow-xl border-t-4 border-[#f5b400] sticky top-28 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#f5b400] text-[#111111] flex items-center justify-center shrink-0">
                  <Flame className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="font-black text-base text-white leading-tight">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-[#f5b400] font-semibold mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-black text-xs uppercase tracking-wider py-4 px-5 rounded shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#f5b400] mb-3">
                  Core Services
                </h4>
                <ul className="space-y-2 text-xs">
                  {SERVICE_PAGES.slice(0, 6).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={s.slug}
                        className="flex items-center justify-between py-1.5 text-slate-300 hover:text-[#f5b400] border-b border-white/5"
                      >
                        <span>{s.shortTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#f5b400]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#f5b400] mb-3">
                  More Articles
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {relatedBlogs.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={b.slug}
                        className="block text-slate-300 hover:text-white leading-snug"
                      >
                        {b.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
