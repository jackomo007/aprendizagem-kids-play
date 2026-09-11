import { notFound } from "next/navigation";
import { games } from "@/data/games";
import { quizzes } from "@/data/quizzes";
import { Container } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { QuizPlayer } from "@/components/QuizPlayer";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return games
    .filter((g) => g.status === "available")
    .map((g) => ({ slug: g.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = quizzes[slug];
  return quiz
    ? pageMetadata(quiz.title, quiz.description, `/jogos/${slug}/`)
    : {};
}
export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = quizzes[slug];
  if (!quiz || !games.some((g) => g.slug === slug && g.status === "available"))
    notFound();
  return (
    <Container className="page-container">
      <PageIntro
        title={quiz.title}
        description={quiz.description}
        label="Jogos educativos"
        icon="play"
      />
      <QuizPlayer quiz={quiz} />
    </Container>
  );
}
