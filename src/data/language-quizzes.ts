import type { Quiz } from "@/types/content";

export const languageQuizzes: Record<string, Quiz> = {
  "ingles:1-ano": { title: "Inglês · 1º ano", description: "Cores, números e animais.", questions: [
    { prompt: "Como se diz azul em inglês?", options: ["Blue", "Red", "Green"], answer: "Blue", explanation: "Blue significa azul." },
    { prompt: "O que significa cat?", options: ["Gato", "Cachorro", "Pássaro"], answer: "Gato", explanation: "Cat significa gato." },
    { prompt: "Como se diz três?", options: ["One", "Two", "Three"], answer: "Three", explanation: "Three significa três." },
  ]},
  "ingles:2-ano": { title: "Inglês · 2º ano", description: "Objetos e frases curtas.", questions: [
    { prompt: "O que significa book?", options: ["Livro", "Mesa", "Lápis"], answer: "Livro", explanation: "Book significa livro." },
    { prompt: "Complete: Good ___!", options: ["morning", "cat", "blue"], answer: "morning", explanation: "Good morning significa bom dia." },
    { prompt: "Qual é o plural de dog?", options: ["Dogs", "Doges", "Dog"], answer: "Dogs", explanation: "Acrescentamos s: dogs." },
  ]},
  "ingles:3-ano": { title: "Inglês · 3º ano", description: "Rotina e descrições.", questions: [
    { prompt: "I wake up significa…", options: ["Eu acordo", "Eu almoço", "Eu durmo"], answer: "Eu acordo", explanation: "Wake up significa acordar." },
    { prompt: "Qual frase significa 'Ela é feliz'?", options: ["She is happy", "He is happy", "She is tall"], answer: "She is happy", explanation: "She é ela e happy é feliz." },
    { prompt: "Qual palavra indica um lugar da escola?", options: ["Classroom", "Breakfast", "Monday"], answer: "Classroom", explanation: "Classroom significa sala de aula." },
  ]},
  "ingles:4-ano": { title: "Inglês · 4º ano", description: "Tempo, ações e perguntas.", questions: [
    { prompt: "What time is it? pergunta…", options: ["Que horas são?", "Qual é seu nome?", "Onde você mora?"], answer: "Que horas são?", explanation: "A pergunta pede o horário." },
    { prompt: "Escolha o verbo no passado.", options: ["Played", "Play", "Playing"], answer: "Played", explanation: "Played indica uma ação passada." },
    { prompt: "Which season is usually cold?", options: ["Winter", "Summer", "Spring"], answer: "Winter", explanation: "Winter significa inverno." },
  ]},
  "ingles:5-ano": { title: "Inglês · 5º ano", description: "Leitura e comunicação.", questions: [
    { prompt: "Choose the correct sentence.", options: ["She likes music.", "She like music.", "She liking music."], answer: "She likes music.", explanation: "Com she, usamos likes no presente simples." },
    { prompt: "Because indica…", options: ["Causa", "Lugar", "Número"], answer: "Causa", explanation: "Because significa porque." },
    { prompt: "What does 'We must protect nature' mean?", options: ["Devemos proteger a natureza", "Visitamos a natureza", "Desenhamos a natureza"], answer: "Devemos proteger a natureza", explanation: "Must expressa dever ou necessidade." },
  ]},
  "espanhol:1-ano": { title: "Espanhol · 1º ano", description: "Cores, números e animais.", questions: [
    { prompt: "O que significa amarillo?", options: ["Amarelo", "Azul", "Vermelho"], answer: "Amarelo", explanation: "Amarillo significa amarelo." },
    { prompt: "Como se diz cachorro?", options: ["Perro", "Gato", "Pájaro"], answer: "Perro", explanation: "Perro significa cachorro." },
    { prompt: "O que significa hola?", options: ["Olá", "Obrigado", "Até logo"], answer: "Olá", explanation: "Hola é uma saudação." },
  ]},
  "espanhol:2-ano": { title: "Espanhol · 2º ano", description: "Objetos e frases curtas.", questions: [
    { prompt: "O que significa libro?", options: ["Livro", "Mesa", "Porta"], answer: "Livro", explanation: "Libro significa livro." },
    { prompt: "Buenos días significa…", options: ["Bom dia", "Boa noite", "Até amanhã"], answer: "Bom dia", explanation: "Buenos días é uma saudação matinal." },
    { prompt: "Qual é o plural de casa?", options: ["Casas", "Cases", "Casaes"], answer: "Casas", explanation: "Acrescentamos s: casas." },
  ]},
  "espanhol:3-ano": { title: "Espanhol · 3º ano", description: "Rotina e descrições.", questions: [
    { prompt: "Me despierto significa…", options: ["Eu acordo", "Eu brinco", "Eu almoço"], answer: "Eu acordo", explanation: "Despertarse significa acordar." },
    { prompt: "Ella está feliz significa…", options: ["Ela está feliz", "Ele está feliz", "Ela está cansada"], answer: "Ela está feliz", explanation: "Ella corresponde a ela." },
    { prompt: "Qual palavra indica um lugar da escola?", options: ["Biblioteca", "Desayuno", "Zapato"], answer: "Biblioteca", explanation: "Biblioteca é um espaço de leitura." },
  ]},
  "espanhol:4-ano": { title: "Espanhol · 4º ano", description: "Tempo, ações e perguntas.", questions: [
    { prompt: "¿Qué hora es? pergunta…", options: ["Que horas são?", "Qual é seu nome?", "Onde está?"], answer: "Que horas são?", explanation: "A pergunta pede o horário." },
    { prompt: "Qual verbo está no passado?", options: ["Jugué", "Juego", "Jugaré"], answer: "Jugué", explanation: "Jugué indica uma ação passada." },
    { prompt: "Qual estação costuma ser fria?", options: ["Invierno", "Verano", "Primavera"], answer: "Invierno", explanation: "Invierno significa inverno." },
  ]},
  "espanhol:5-ano": { title: "Espanhol · 5º ano", description: "Leitura e comunicação.", questions: [
    { prompt: "Escolha a frase correta.", options: ["Ella escucha música.", "Ella escuchan música.", "Ella escuchar música."], answer: "Ella escucha música.", explanation: "Escucha concorda com ella." },
    { prompt: "Porque pode indicar…", options: ["Causa", "Lugar", "Tamanho"], answer: "Causa", explanation: "Porque apresenta uma razão." },
    { prompt: "Debemos proteger la naturaleza significa…", options: ["Devemos proteger a natureza", "Podemos pintar a natureza", "Visitamos a natureza"], answer: "Devemos proteger a natureza", explanation: "Debemos expressa dever." },
  ]},
};
