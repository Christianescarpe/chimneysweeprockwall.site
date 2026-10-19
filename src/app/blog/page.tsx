import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, BookOpen, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BUSINESS_INFO, BLOG_PAGES, CHIMNEY_IMAGES } from "@/data/sheetData";

export const metadata: Metadata = {
  title: `Blog | ${BUSINESS_INFO.name}`,
  description: BLOG_PAGES[0]?.metaDescription || "",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[380px] flex items-center justify-center overflow-hidden bg-[#0c0c0c] text-white">
        <Image
          src={CHIMNEY_IMAGES[2]}
          alt={BUSINESS_INFO.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16 animate-fade-up">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-5">
            {BUSINESS_INFO.name} <span className="text-[#f5b400]">Blog</span>
          </h1>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 bg-[#f5b400] hover:bg-[#e0a400] text-[#111111] font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded shadow-lg"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_PAGES.map((post, idx) => (
            <Reveal
              key={post.slug}
              delayMs={idx * 70}
              className="bg-white border border-slate-200 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative h-52 bg-slate-900 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0d5cab] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded">
                    <BookOpen className="w-3 h-3 inline mr-1" />
                    {post.pageType}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-black text-slate-900 mb-3 group-hover:text-[#0d5cab] transition-colors">
                    <Link href={post.slug}>{post.title}</Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {post.metaDescription}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                <Link
                  href={post.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0d5cab] hover:text-[#f5b400]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-xs font-bold text-slate-700 hover:text-[#0d5cab]"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
