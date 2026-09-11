import { Container } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { QuizPlayer } from "@/components/QuizPlayer";
import { quizzes } from "@/data/quizzes";
import { pageMetadata } from "@/lib/metadata";
const quiz = quizzes.natureza;
export const metadata = pageMetadata(
  quiz.title,
  quiz.description,
  "/desafios/natureza/",
);
export default function NaturePage() {
  return (
    <Container className="page-container">
      <PageIntro
        title={quiz.title}
        description={quiz.description}
        label="Desafio de Ciências"
        icon="spark"
        tone="green"
      />
      <QuizPlayer quiz={quiz} />
    </Container>
  );
}
