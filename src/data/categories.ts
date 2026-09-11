import type { Category } from "@/types/content";
export const categories: Category[] = [
  {
    slug: "educacao-infantil",
    title: "Educação Infantil",
    description:
      "Pequenas descobertas, grandes aprendizados. Letras, formas, cores e muito mais.",
    icon: "shapes",
    tone: "purple",
    cta: "Vamos descobrir",
  },
  {
    slug: "fundamental",
    title: "Ensino Fundamental I",
    description:
      "Novas ideias para explorar a matemática, as palavras e o mundo ao redor.",
    icon: "book",
    tone: "blue",
    cta: "Explorar conteúdos",
  },
  {
    slug: "jogos",
    title: "Jogos educativos",
    description: "Aprender fica ainda melhor quando a gente brinca junto.",
    icon: "play",
    tone: "green",
    cta: "Escolher um jogo",
  },
  {
    slug: "atividades",
    title: "Atividades para imprimir",
    description: "Lápis na mão e ideias no papel. Materiais gratuitos em PDF.",
    icon: "pencil",
    tone: "orange",
    cta: "Encontrar atividades",
  },
  {
    slug: "idiomas",
    title: "Um mundo de idiomas",
    description:
      "Diga hello, diga hola! Descubra palavras em inglês e espanhol.",
    icon: "globe",
    tone: "pink",
    cta: "Conhecer idiomas",
  },
  {
    slug: "desafios",
    title: "Quizzes e desafios",
    description: "O que você já sabe? Experimente, pense e descubra algo novo.",
    icon: "rocket",
    tone: "yellow",
    cta: "Aceitar um desafio",
  },
  {
    slug: "videos",
    title: "Vídeos educativos",
    description: "Uma janela para novas descobertas. Conteúdos em preparação.",
    icon: "play",
    tone: "blue",
    cta: "Conhecer a coleção",
  },
];
export const schoolTopics = {
  "educacao-infantil": [
    "Coordenação motora",
    "Traçados",
    "Letras",
    "Números",
    "Formas",
    "Cores",
    "Pintura",
    "Alfabetização inicial",
    "Observação",
  ],
  fundamental: ["Matemática", "Português", "Ciências", "Inglês", "Espanhol"],
};
