import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_PAGES } from "@/data/sheetData";
import BlogPostTemplate from "@/components/BlogPostTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_PAGES.map((b) => ({
    slug: b.slug.replace(/^\/blog\/|\/$/g, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const normalized = `/blog/${slug}/`;
  const post = BLOG_PAGES.find((b) => b.slug === normalized);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const normalized = `/blog/${slug}/`;
  const post = BLOG_PAGES.find((b) => b.slug === normalized);

  if (!post) {
    notFound();
  }

  return <BlogPostTemplate post={post} />;
}
