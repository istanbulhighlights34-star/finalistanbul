import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://finalsatlas.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://finalsatlas.com/finals",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://finalsatlas.com/cities/istanbul",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://finalsatlas.com/cities/madrid",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://finalsatlas.com/cities/frankfurt",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];
}
