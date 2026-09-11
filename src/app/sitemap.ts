import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { games } from "@/data/games";
import { languages } from "@/data/languages";
import { site } from "@/data/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    ...categories.map((c) => `/${c.slug}/`),
    ...games
      .filter((g) => g.status === "available")
      .map((g) => `/jogos/${g.slug}/`),
    ...languages.map((l) => `/idiomas/${l.slug}/`),
    "/desafios/natureza/",
    "/sobre/",
    "/privacidade/",
  ].map((path) => ({ url: `${site.url}${path}` }));
}
