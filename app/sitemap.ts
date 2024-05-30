import { MetadataRoute } from "next";

import { SITE_URL } from "@/const";

// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2024-05-25",
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          es: `${SITE_URL}/es`,
        },
      },
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: "2024-05-25",
      priority: 0.5,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/resume`,
          es: `${SITE_URL}/es/resume`,
        },
      },
    },
  ];
}
