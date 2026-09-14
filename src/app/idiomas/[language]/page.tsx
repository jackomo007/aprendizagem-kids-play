import { notFound } from "next/navigation";
import { languages } from "@/data/languages";
import { Container } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { LanguageLevelQuiz } from "@/components/LanguageLevelQuiz";
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
      <LanguageLevelQuiz language={language} title={item.title} />
    </Container>
  );
}
