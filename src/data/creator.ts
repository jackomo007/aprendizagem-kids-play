import type { IconName, Tone } from "@/types/content";

// Conteúdo público resumido. Não adicionar currículo, contatos ou identificadores pessoais.
export const creator = {
  eyebrow: "QUEM CRIOU ESTE PROJETO",
  title: "Uma jovem criadora. Muitas ideias para descobrir.",
  introduction:
    "O Aprendizagem Kids Play nasceu da curiosidade de uma estudante que adora tecnologia, ciências, livros, desenhos e criação de jogos. Com o apoio da família, ela transforma o que aprende em ideias para outras crianças explorarem também.",
  story:
    "Além de aprender, ela gosta de explicar descobertas, contar histórias e experimentar a programação. Participa da criação de conteúdos educativos e da edição de vídeos, sempre com o acompanhamento da família.",
  interests: ["Tecnologia e programação", "Ciências e descobertas", "Leitura e histórias", "Desenho e criatividade"],
  discoveries: [
    {
      title: "Aprender e compartilhar",
      description: "O canal Aprendizagem Kids Play é um espaço para explicar conteúdos e dividir novas descobertas com outras crianças.",
      icon: "book",
      tone: "purple",
    },
    {
      title: "Criar para explorar",
      description: "Entre suas criações estão o jogo Missão Oceano e um tutorial que aproxima o cuidado com o oceano da programação.",
      icon: "globe",
      tone: "blue",
    },
    {
      title: "Crescer com curiosidade",
      description: "Desafios de leitura, escrita, idiomas e ciências fazem parte de sua vontade de aprender. Cada experiência traz uma nova ideia para criar.",
      icon: "spark",
      tone: "green",
    },
  ] satisfies { title: string; description: string; icon: IconName; tone: Tone }[],
  familyTitle: "Uma ideia dela, com apoio da família",
  familyDescription:
    "A família acompanha o desenvolvimento do projeto e incentiva a criatividade, o aprendizado e o cuidado em cada etapa. A proposta é compartilhar conhecimento de um jeito acolhedor e respeitar o tempo de cada criança.",
};
