import Image from "next/image";

const banners = {
  about: {
    file: "banner-sobre",
    height: 512,
    alt: "Aprendizagem Kids Play: aprender, brincar e descobrir! Personagens exploram um mundo de livros, cores e conhecimento.",
  },
  videos: {
    file: "banner-videos",
    height: 480,
    alt: "Aprendizagem Kids Play — Pequenas mentes, grandes descobertas! Uma coleção de jogos, atividades, desafios e vídeos.",
  },
};

export function BrandBanner({ variant }: { variant: keyof typeof banners }) {
  const banner = banners[variant];
  return (
    <div className="brand-banner">
      <picture>
        <source media="(max-width: 767px)" srcSet={`/images/marca/${banner.file}-640.webp`} />
        <Image
          src={`/images/marca/${banner.file}-1280.webp`}
          alt={banner.alt}
          width={1280}
          height={banner.height}
        />
      </picture>
    </div>
  );
}
