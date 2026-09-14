import { notFound } from "next/navigation";
import { games } from "@/data/games";
import { quizzes } from "@/data/quizzes";
import { Container } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { QuizPlayer } from "@/components/QuizPlayer";
import { OceanGame } from "@/components/OceanGame";
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
  const game = games.find((item) => item.slug === slug && item.status === "available");
  if (slug === "missao-oceano" && game)
    return pageMetadata(game.title, game.description, `/jogos/${slug}/`);
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
  const game = games.find((item) => item.slug === slug && item.status === "available");
  if (slug === "missao-oceano" && game) {
    return (
      <Container className="page-container ocean-page">
        <PageIntro
          title={game.title}
          description={game.description}
          label="Jogo educativo"
          icon="globe"
          tone="blue"
        />
        <OceanGame />
        <aside className="ocean-learning">
          <h2>Aprender enquanto joga</h2>
          <p>O lixo no mar pode ferir ou prender animais. No dia a dia, use menos descartáveis, coloque os resíduos na lixeira e participe da coleta seletiva com um adulto.</p>
        </aside>
      </Container>
    );
  }
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
