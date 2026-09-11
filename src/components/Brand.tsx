import Image from "next/image";
import { site } from "@/data/site";

export function Brand({ priority = false }: { priority?: boolean }) {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet="/images/marca/logo-360.webp" />
      <Image
        src={site.logo}
        alt={site.name}
        width={560}
        height={280}
        priority={priority}
        className="brand-image"
      />
    </picture>
  );
}
