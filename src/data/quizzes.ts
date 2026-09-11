import type { Quiz } from "@/types/content";
export const quizzes: Record<string, Quiz> = {
  "conta-comigo": {
    title: "Conta comigo!",
    description: "Conte com calma. Você pode tentar quantas vezes quiser.",
    questions: [
      {
        prompt: "Quantas estrelas você vê?",
        illustration: "★ ★ ★",
        options: ["2", "3", "4"],
        answer: "3",
        explanation: "Uma, duas, três estrelas!",
      },
      {
        prompt: "Quanto é 2 + 3?",
        options: ["4", "5", "6"],
        answer: "5",
        explanation: "Comece no 2 e conte mais três: 3, 4, 5.",
      },
      {
        prompt: "Qual número vem depois do 6?",
        options: ["5", "8", "7"],
        answer: "7",
        explanation: "A sequência é 5, 6, 7, 8.",
      },
    ],
  },
  "detetive-das-palavras": {
    title: "Detetive das palavras",
    description: "Leia as pistas e escolha uma palavra. Sem pressa!",
    questions: [
      {
        prompt: "Qual palavra começa com a letra B?",
        options: ["GATO", "BOLA", "SAPO"],
        answer: "BOLA",
        explanation:
          "BOLA começa com B. Experimente falar a palavra em voz alta.",
      },
      {
        prompt: "Qual palavra rima com GATO?",
        options: ["PATO", "LUA", "BOLA"],
        answer: "PATO",
        explanation: "GATO e PATO têm o mesmo som no final: ATO.",
      },
      {
        prompt: "Complete: o contrário de GRANDE é…",
        options: ["ALTO", "PEQUENO", "LONGE"],
        answer: "PEQUENO",
        explanation: "Grande e pequeno são palavras com sentidos opostos.",
      },
    ],
  },
  natureza: {
    title: "Pequenos cientistas",
    description:
      "Um desafio para observar a natureza e descobrir o que você já sabe.",
    questions: [
      {
        prompt: "O que uma planta precisa para crescer?",
        options: ["Água e luz", "Apenas pedras", "Escuridão o tempo todo"],
        answer: "Água e luz",
        explanation:
          "As plantas precisam de água e luz, além de ar e nutrientes.",
      },
      {
        prompt: "Qual destes animais é um inseto?",
        options: ["Sapo", "Borboleta", "Peixe"],
        answer: "Borboleta",
        explanation: "A borboleta é um inseto e tem seis pernas.",
      },
      {
        prompt: "Onde devemos colocar o lixo de um passeio?",
        options: ["No rio", "No chão", "Na lixeira adequada"],
        answer: "Na lixeira adequada",
        explanation: "Cuidar do lixo ajuda a proteger os animais e a natureza.",
      },
    ],
  },
  ingles: {
    title: "Primeiras descobertas em inglês",
    description: "Vamos brincar com cores, números e animais?",
    questions: [
      {
        prompt: "Como se diz azul em inglês?",
        options: ["Blue", "Red", "Green"],
        answer: "Blue",
        explanation: "Blue significa azul. Red é vermelho e green é verde.",
      },
      {
        prompt: "O que significa cat?",
        options: ["Cachorro", "Gato", "Pássaro"],
        answer: "Gato",
        explanation: "Cat é gato. Dog é cachorro e bird é pássaro.",
      },
      {
        prompt: "Como se diz três em inglês?",
        options: ["One", "Two", "Three"],
        answer: "Three",
        explanation: "One, two, three: um, dois, três!",
      },
    ],
  },
  espanhol: {
    title: "Primeiras descobertas em espanhol",
    description: "Vamos descobrir palavras que nossos vizinhos usam?",
    questions: [
      {
        prompt: "O que significa amarillo?",
        options: ["Azul", "Amarelo", "Vermelho"],
        answer: "Amarelo",
        explanation: "Amarillo é amarelo. Rojo é vermelho.",
      },
      {
        prompt: "Como se diz cachorro em espanhol?",
        options: ["Gato", "Pájaro", "Perro"],
        answer: "Perro",
        explanation: "Perro significa cachorro. Pájaro é pássaro.",
      },
      {
        prompt: "O que significa hola?",
        options: ["Olá", "Obrigado", "Até logo"],
        answer: "Olá",
        explanation: "Hola é uma maneira de cumprimentar alguém: olá!",
      },
    ],
  },
};
