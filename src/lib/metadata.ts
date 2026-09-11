import type { Metadata } from "next";
import { site } from "@/data/site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      images: [site.socialImage],
    },
  };
}
