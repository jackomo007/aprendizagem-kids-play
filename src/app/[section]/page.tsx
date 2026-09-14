import { BrandBanner } from "@/components/BrandBanner";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, schoolTopics } from "@/data/categories";
import { games } from "@/data/games";
import { activities } from "@/data/activities";
import { videos } from "@/data/videos";
import { languages } from "@/data/languages";
import {
  Container,
  SectionTitle,
  Icon,
  Card,
  Badge,
  ButtonLink,
} from "@/components/ui";
import {
  ActivityCard,
  GameCard,
  VideoCard,
  ContentCard,
} from "@/components/cards";
import { PageIntro } from "@/components/PageIntro";
import { EarlyChildhoodActivities } from "@/components/EarlyChildhoodActivities";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return categories
    .filter((category) => category.slug !== "atividades")
    .map((category) => ({ section: category.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const category = categories.find((c) => c.slug === section);
  return category
    ? pageMetadata(category.title, category.description, `/${section}/`)
    : {};
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const category = categories.find((c) => c.slug === section);
  if (!category) notFound();
  const school = section === "educacao-infantil" || section === "fundamental";
  return (
    <Container className="page-container">
      <PageIntro
        title={category.title}
        description={category.description}
        label={category.title}
        icon={category.icon}
        tone={category.tone}
      />
      {section === "jogos" && (
        <section className="section">
          <SectionTitle
            title="Escolha sua próxima aventura"
            description="Três jogos curtos para aprender, pensar e cuidar do planeta."
          />
          <div className="content-grid">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
          <p className="editorial-note">
            Os jogos desta primeira coleção são experiências curtas de
            demonstração. Sem cronômetro, ranking ou coleta de dados.
          </p>
        </section>
      )}
      {section === "videos" && <BrandBanner variant="videos" />}
      {section === "videos" && (
        <section className="section">
          <SectionTitle
            title="Novas histórias estão a caminho"
            description="Esta é uma prévia da coleção. Os vídeos serão selecionados e revisados antes de aparecerem aqui."
          />
          <div className="content-grid">
            {videos.map((video) => (
              <VideoCard key={video.slug} video={video} />
            ))}
          </div>
          <div className="notice">
            <Icon name="play" />
            <p>
              Ainda não há vídeos publicados. Enquanto isso, que tal{" "}
              <Link href="/jogos/">experimentar um jogo</Link>? No futuro, os
              vídeos serão hospedados no YouTube.
            </p>
          </div>
        </section>
      )}
      {section === "idiomas" && (
        <section className="section">
          <SectionTitle
            title="Novas palavras, novos mundos"
            description="Comece pelas primeiras palavras. Cada idioma já tem um pequeno quiz para experimentar."
          />
          <div className="language-grid">
            {languages.map((language) => (
              <Card
                key={language.slug}
                className={`language-card tone-${language.tone}`}
              >
                <Icon name="globe" />
                <Badge tone={language.tone}>Primeiros passos</Badge>
                <h2>{language.title}</h2>
                <p>{language.description}</p>
                <ButtonLink
                  href={`/idiomas/${language.slug}/`}
                  variant="secondary"
                >
                  {language.greeting}
                  <Icon name="arrow" />
                </ButtonLink>
              </Card>
            ))}
          </div>
        </section>
      )}
      {section === "desafios" && (
        <section className="section">
          <SectionTitle
            title="Sua curiosidade é o ponto de partida"
            description="Perguntas curtas, novas ideias e quantas tentativas você quiser."
          />
          <div className="content-grid">
            <ContentCard
              content={{
                slug: "natureza",
                title: "Pequenos cientistas",
                description:
                  "O que você sabe sobre plantas, animais e o cuidado com o planeta?",
                subject: "Ciências",
                level: "Fundamental I · 3 perguntas",
                tone: "green",
                icon: "spark",
              }}
              href="/desafios/natureza/"
              cta="Começar desafio"
            />
            {games
              .filter((g) => g.status === "available")
              .map((game) => (
                <ContentCard
                  key={game.slug}
                  content={game}
                  href={`/jogos/${game.slug}/`}
                  cta="Experimentar desafio"
                />
              ))}
          </div>
          <p className="editorial-note">
            Quizzes de prática, sem nota. Simulados e novos desafios poderão
            chegar em futuras coleções.
          </p>
        </section>
      )}
      {section === "educacao-infantil" && <EarlyChildhoodActivities />}
      {school && section !== "educacao-infantil" && (
        <>
          <section className="section">
            <SectionTitle
              title={
                section === "fundamental"
                  ? "Conhecimento para ir mais longe"
                  : "Um começo cheio de possibilidades"
              }
              description="A coleção está começando. Estes são os temas que vão guiar nossas próximas atividades."
            />
            <div className="topic-list">
              {schoolTopics[section].map((topic) => (
                <span key={topic}>
                  <Icon name="check" />
                  {topic}
                </span>
              ))}
            </div>
            {section === "fundamental" && (
              <p className="editorial-note">
                Do 1º ao 5º ano. Nesta primeira coleção, os materiais de
                Português e Matemática são introdutórios, para o 1º e 2º ano.
              </p>
            )}
          </section>
          <section className="section compact-section">
            <SectionTitle title="Para descobrir agora" />
            <div className="content-grid">
              {games
                .filter(
                  (g) =>
                    g.status === "available" &&
                    (section === "fundamental" || g.slug === "conta-comigo"),
                )
                .map((game) => (
                  <GameCard key={game.slug} game={game} />
                ))}
              {activities
                .filter((a) =>
                  section === "fundamental"
                    ? a.subject === "Matemática"
                    : a.level === "Educação Infantil",
                )
                .map((activity) => (
                  <ActivityCard key={activity.slug} activity={activity} />
                ))}
            </div>
          </section>
        </>
      )}
    </Container>
  );
}
