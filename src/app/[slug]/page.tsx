import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, MapPin } from "lucide-react";
import {
  BUSINESS_INFO,
  HOME_PAGE,
  SERVICE_PAGES,
  LOCATION_PAGES,
  CHIMNEY_IMAGES,
} from "@/data/sheetData";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import LocationPageTemplate from "@/components/LocationPageTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const serviceSlugs = SERVICE_PAGES.map((s) => ({
    slug: s.slug.replace(/^\/|\/$/g, ""),
  }));
  const locationSlugs = LOCATION_PAGES.map((l) => ({
    slug: l.slug.replace(/^\/|\/$/g, ""),
  }));
  return [...serviceSlugs, ...locationSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const normalized = `/${slug}/`;

  const service = SERVICE_PAGES.find((s) => s.slug === normalized);
  if (service) {
    return {
      title: service.seoTitle,
      description: service.metaDescription,
    };
  }

  const location = LOCATION_PAGES.find((l) => l.slug === normalized);
  if (location) {
    return {
      title: location.seoTitle,
      description: location.metaDescription,
    };
  }

  return {};
}

export default async function DynamicSlugPage({ params }: Props) {
  const { slug } = await params;
  const normalized = `/${slug}/`;

  const service = SERVICE_PAGES.find((s) => s.slug === normalized);
  if (service) {
    return <ServicePageTemplate page={service} />;
  }

  const location = LOCATION_PAGES.find((l) => l.slug === normalized);
  if (location) {
    return <LocationPageTemplate page={location} />;
  }

  notFound();
}
