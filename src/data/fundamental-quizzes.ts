import type { Question, Quiz } from "@/types/content";

const gradeNames = ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"];
const q = (prompt: string, options: string[], answer: string, explanation: string): Question => ({ prompt, options, answer, explanation });

function questions(subject: string, level: number): Question[] {
  const index = level - 1;
  const banks: Record<string, Question[][]> = {
    "lingua-portuguesa": [
      [q("Qual palavra começa com B?", ["Bola", "Casa", "Dado"], "Bola", "Bola começa com a letra B."), q("Quantas sílabas há em CASA?", ["1", "2", "3"], "2", "Falamos CA-SA: duas sílabas."), q("Qual palavra rima com GATO?", ["Pato", "Bola", "Sol"], "Pato", "Gato e pato terminam com o som ATO.")],
      [q("Qual é o plural de FLOR?", ["Flores", "Florais", "Flors"], "Flores", "O plural de flor é flores."), q("Qual frase está pontuada?", ["Que dia lindo!", "que dia lindo", "Que dia lindo"], "Que dia lindo!", "A frase começa com maiúscula e termina com exclamação."), q("Qual é o contrário de ALTO?", ["Baixo", "Grande", "Longe"], "Baixo", "Alto e baixo têm sentidos opostos.")],
      [q("Em 'A menina correu', qual é o verbo?", ["Menina", "Correu", "A"], "Correu", "Correu indica uma ação."), q("Qual palavra é um substantivo?", ["Casa", "Bonito", "Correr"], "Casa", "Casa nomeia um lugar ou objeto."), q("Qual opção completa: Eu ___ um livro ontem.", ["Li", "Lerei", "Leio amanhã"], "Li", "Li indica uma ação que já aconteceu.")],
      [q("Qual conectivo indica causa?", ["Porque", "Porém", "Depois"], "Porque", "Porque pode apresentar a causa de um fato."), q("Qual palavra é um adjetivo?", ["Alegre", "Menino", "Brincou"], "Alegre", "Alegre caracteriza alguém ou algo."), q("Qual sinal encerra uma pergunta?", ["?", "!", "."], "?", "O ponto de interrogação encerra perguntas.")],
      [q("Qual título combina com uma notícia sobre chuva forte?", ["Temporal alaga ruas", "Minha receita favorita", "Era uma vez"], "Temporal alaga ruas", "O título informa o fato principal."), q("Qual expressão indica opinião?", ["Eu acredito que", "Ontem às oito", "Na rua central"], "Eu acredito que", "Essa expressão apresenta um ponto de vista."), q("Em qual opção há sentido figurado?", ["Ela tem um coração de ouro", "O coração bate", "O ouro é metal"], "Ela tem um coração de ouro", "A expressão indica bondade, não um coração feito de ouro.")],
    ],
    matematica: [
      [q("Quanto é 4 + 3?", ["6", "7", "8"], "7", "Quatro mais três é sete."), q("Qual número vem depois de 19?", ["18", "20", "21"], "20", "Depois de 19 vem 20."), q("Qual forma tem três lados?", ["Triângulo", "Círculo", "Quadrado"], "Triângulo", "O triângulo tem três lados.")],
      [q("Quanto é 36 + 24?", ["50", "60", "70"], "60", "36 + 24 = 60."), q("Qual é a metade de 18?", ["8", "9", "10"], "9", "Duas partes de 9 formam 18."), q("Quanto valem duas notas de R$ 10?", ["R$ 12", "R$ 20", "R$ 100"], "R$ 20", "10 + 10 = 20.")],
      [q("Quanto é 7 × 6?", ["36", "42", "48"], "42", "7 grupos de 6 totalizam 42."), q("Quanto é 48 ÷ 6?", ["7", "8", "9"], "8", "48 dividido em 6 grupos dá 8."), q("Qual é o perímetro de um quadrado de lado 4 cm?", ["8 cm", "12 cm", "16 cm"], "16 cm", "Somamos os quatro lados: 4 + 4 + 4 + 4.")],
      [q("Qual fração representa três de quatro partes?", ["3/4", "1/3", "4/3"], "3/4", "Três quartos significa 3 de 4 partes iguais."), q("Quanto é 125 × 4?", ["400", "500", "600"], "500", "125 multiplicado por 4 é 500."), q("2 metros equivalem a quantos centímetros?", ["20", "200", "2.000"], "200", "Cada metro tem 100 centímetros.")],
      [q("Quanto é 2,5 + 1,75?", ["3,25", "4,25", "4,75"], "4,25", "2,50 + 1,75 = 4,25."), q("Qual fração é maior?", ["3/4", "1/2", "1/4"], "3/4", "Três quartos é maior que um meio e um quarto."), q("Qual é a área de um retângulo de 6 cm por 4 cm?", ["10 cm²", "20 cm²", "24 cm²"], "24 cm²", "Área = 6 × 4 = 24 cm².")],
    ],
    historia: [
      [q("O que aconteceu antes de hoje?", ["Ontem", "Amanhã", "Depois"], "Ontem", "Ontem é o dia anterior a hoje."), q("Uma fotografia antiga ajuda a conhecer o quê?", ["O passado", "Só o futuro", "Uma conta"], "O passado", "Fotografias podem ser fontes históricas."), q("Quem pode contar histórias da família?", ["Familiares", "Apenas robôs", "Ninguém"], "Familiares", "As memórias familiares ajudam a conhecer nossa história.")],
      [q("Qual objeto é uma fonte histórica?", ["Carta antiga", "Nuvem", "Eco"], "Carta antiga", "Cartas registram informações de outra época."), q("Uma linha do tempo organiza fatos em qual ordem?", ["Cronológica", "Alfabética", "Aleatória"], "Cronológica", "Ela organiza fatos conforme o tempo."), q("Brincadeiras podem mudar com o tempo?", ["Sim", "Nunca", "Só à noite"], "Sim", "Costumes e brincadeiras se transformam.")],
      [q("O que é patrimônio cultural?", ["Bem importante para a memória coletiva", "Qualquer preço", "Somente um brinquedo"], "Bem importante para a memória coletiva", "Patrimônios preservam referências culturais."), q("Qual exemplo é uma tradição?", ["Festa transmitida entre gerações", "Um número", "Uma sombra"], "Festa transmitida entre gerações", "Tradições são práticas compartilhadas ao longo do tempo."), q("Relatos orais são fontes históricas?", ["Sim", "Não", "Somente escritos"], "Sim", "Depoimentos também ajudam a estudar o passado.")],
      [q("A população brasileira foi formada por quais povos?", ["Diversos povos", "Um único povo", "Nenhum povo"], "Diversos povos", "Muitos povos contribuíram para a formação do Brasil."), q("Por que comparar fontes históricas?", ["Para compreender diferentes perspectivas", "Para apagar fatos", "Para evitar perguntas"], "Para compreender diferentes perspectivas", "Fontes podem apresentar pontos de vista diferentes."), q("Qual atitude valoriza a diversidade cultural?", ["Respeitar diferentes tradições", "Proibir costumes", "Zombar das diferenças"], "Respeitar diferentes tradições", "Respeito fortalece a convivência.")],
      [q("Qual é um direito da criança?", ["Educação", "Trabalho perigoso", "Ficar sem proteção"], "Educação", "Toda criança tem direito à educação."), q("O que significa cidadania?", ["Participar da sociedade com direitos e deveres", "Morar sozinho", "Não seguir regras"], "Participar da sociedade com direitos e deveres", "Cidadania envolve convivência e participação."), q("Qual ação ajuda a comunidade?", ["Cuidar dos espaços públicos", "Jogar lixo no chão", "Danificar praças"], "Cuidar dos espaços públicos", "O cuidado coletivo melhora o lugar onde vivemos.")],
    ],
  };
  if (banks[subject]) return banks[subject][index];

  const common: Record<string, string[][]> = {
    ciencias: [["seres vivos", "Árvore", "Pedra", "Copo"], ["estados da água", "Gelo", "Areia", "Madeira"], ["partes da planta", "Raiz", "Roda", "Telhado"], ["cadeia alimentar", "Produtor", "Asfalto", "Plástico"], ["movimentos da Terra", "Rotação", "Evaporação", "Filtração"]],
    geografia: [["ponto de referência", "Praça", "Som", "Cheiro"], ["paisagem rural", "Plantação", "Metrô", "Arranha-céu"], ["serviço público", "Escola municipal", "Brinquedo pessoal", "Coleção"], ["orientação", "Rosa dos ventos", "Relógio", "Balança"], ["região brasileira", "Nordeste", "Atlântico", "Andes"]],
    arte: [["cor primária", "Azul", "Verde", "Laranja"], ["forma geométrica", "Círculo", "Música", "Cheiro"], ["história em imagens", "Quadrinhos", "Receita", "Mapa"], ["contraste", "Diferença visual", "Silêncio", "Peso"], ["técnica artística", "Colagem", "Divisão", "Natação"]],
    "educacao-fisica": [["movimento corporal", "Pular", "Dormir", "Ler"], ["equilíbrio", "Andar sobre uma linha", "Sentar", "Desenhar"], ["aquecimento", "Preparar o corpo", "Encerrar a aula", "Guardar livros"], ["hidratação", "Beber água", "Evitar água", "Comer papel"], ["jogo inclusivo", "Permitir participação de todos", "Excluir colegas", "Ignorar regras"]],
  };
  const [theme, correct, wrong1, wrong2] = common[subject][index];
  return [
    q(`Qual opção se relaciona com ${theme}?`, [correct, wrong1, wrong2], correct, `${correct} é a opção relacionada ao tema.`),
    q(`Em uma atividade sobre ${theme}, qual atitude ajuda a aprender?`, ["Observar e perguntar", "Ignorar as orientações", "Desistir antes de tentar"], "Observar e perguntar", "Observar e fazer perguntas ajuda a construir conhecimento."),
    q("Qual atitude demonstra cuidado durante a atividade?", ["Respeitar pessoas e materiais", "Danificar os materiais", "Interromper os colegas"], "Respeitar pessoas e materiais", "Cuidar dos materiais e respeitar os colegas melhora a aprendizagem."),
  ];
}

export const fundamentalQuizzes: Record<string, Quiz> = {};
for (let level = 1; level <= 5; level += 1) {
  for (const subject of ["lingua-portuguesa", "matematica", "historia", "ciencias", "geografia", "arte", "educacao-fisica"]) {
    fundamentalQuizzes[`${level}-ano:${subject}`] = {
      title: `${gradeNames[level - 1]} · ${subject.replaceAll("-", " ")}`,
      description: "Responda com calma. Você pode tentar quantas vezes quiser.",
      questions: questions(subject, level),
    };
  }
}
