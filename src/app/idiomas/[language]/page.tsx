import { notFound } from "next/navigation";
import { languages, languageTopics } from "@/data/languages";
import { quizzes } from "@/data/quizzes";
import { Container, SectionTitle, Icon } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { QuizPlayer } from "@/components/QuizPlayer";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return languages.map((l) => ({ language: l.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language } = await params;
  const item = languages.find((l) => l.slug === language);
  return item
    ? pageMetadata(item.title, item.description, `/idiomas/${language}/`)
    : {};
}
export default async function LanguagePage({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language } = await params;
  const item = languages.find((l) => l.slug === language);
  if (!item) notFound();
  return (
    <Container className="page-container">
      <PageIntro
        title={item.greeting}
        description={item.description}
        label={item.title}
        icon="globe"
        tone={item.tone}
      />
      <section className="section">
        <SectionTitle
          title="Uma primeira descoberta"
          description="Experimente o quiz de cores, números e animais. Objetos, palavras e frases vão ampliar a coleção no futuro."
        />
        <div className="topic-list">
          {languageTopics.map((topic) => (
            <span key={topic}>
              <Icon name="spark" />
              {topic}
            </span>
          ))}
        </div>
        <QuizPlayer quiz={quizzes[language]} />
      </section>
    </Container>
  );
}
