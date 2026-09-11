import type { Video } from "@/types/content";
// Inclua youtubeId somente após selecionar e revisar o vídeo.
export const videos: Video[] = [
  {
    slug: "aventura-da-adicao",
    title: "A aventura da adição",
    description: "Uma ideia de vídeo para descobrir como juntar quantidades.",
    subject: "Matemática",
    level: "1º ano",
    tone: "yellow",
    icon: "star",
  },
  {
    slug: "mundo-das-plantas",
    title: "O mundo das plantas",
    description: "Uma futura descoberta sobre sementes, folhas e flores.",
    subject: "Ciências",
    level: "Fundamental I",
    tone: "green",
    icon: "spark",
  },
  {
    slug: "palavras-em-ingles",
    title: "Minhas primeiras palavras",
    description: "Uma coleção em preparação para aprender inglês com calma.",
    subject: "Inglês",
    level: "Iniciante",
    tone: "purple",
    icon: "globe",
  },
];
