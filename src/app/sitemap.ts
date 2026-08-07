import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
  "https://apex-omega-gilt.vercel.app";

  return [
    {
      url: base,
      priority: 1,
    },
    {
      url: `${base}/drivers`,
      priority: 0.9,
    },
    {
      url: `${base}/constructors`,
      priority: 0.9,
    },
    {
      url: `${base}/calendar`,
      priority: 0.9,
    },
    {
      url: `${base}/analytics`,
      priority: 0.9,
    },
    {
      url: `${base}/news`,
      priority: 0.8,
    },
    {
      url: `${base}/standings`,
      priority: 0.8,
    },
    {
      url: `${base}/circuits`,
      priority: 0.8,
    },
  ];
}