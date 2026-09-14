import type { Game } from "@/types/content";
export const games: Game[] = [
  {
    slug: "conta-comigo",
    title: "Conta comigo!",
    description: "Conte as estrelas e descubra como os números se juntam.",
    subject: "Matemática",
    level: "Infantil · 1º ano",
    tone: "yellow",
    icon: "star",
    status: "available",
  },
  {
    slug: "detetive-das-palavras",
    title: "Detetive das palavras",
    description:
      "Siga as pistas e encontre a palavra que combina com cada descoberta.",
    subject: "Português",
    level: "1º e 2º ano",
    tone: "purple",
    icon: "book",
    status: "available",
  },
  {
    slug: "missao-oceano",
    title: "Missão Oceano",
    description:
      "Pilote o submarino, recolha o lixo e ajude a proteger a vida marinha.",
    subject: "Ciências",
    level: "Fundamental I",
    tone: "blue",
    icon: "globe",
    status: "available",
  },
];
