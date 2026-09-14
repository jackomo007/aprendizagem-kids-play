import { notFound } from "next/navigation";
import Link from "next/link";
import { ActivityNavCard } from "@/components/ActivityNavCard";
import { Container, SectionTitle } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { activityGrades, getActivityGrade, getCategoriesForGrade } from "@/data/activity-navigation";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return activityGrades.map((grade) => ({ grade: grade.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ grade: string }> }) {
  const { grade: gradeSlug } = await params;
  const grade = getActivityGrade(gradeSlug);
  return grade
    ? pageMetadata(`Atividades do ${grade.title}`, `Escolha uma categoria ou matéria para o ${grade.title}.`, `/atividades/${grade.slug}/`)
    : {};
}

export default async function ActivityGradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade: gradeSlug } = await params;
  const grade = getActivityGrade(gradeSlug);
  if (!grade) notFound();
  const categories = getCategoriesForGrade(grade.slug);
  const preschool = grade.slug.startsWith("pre-");
  return (
    <Container className="page-container">
      <PageIntro
        title={`Atividades do ${grade.title}`}
        description={preschool ? "Escolha uma categoria para continuar." : "Escolha uma matéria para continuar."}
        label={grade.title}
        icon={grade.icon}
        tone={grade.tone}
      />
      <nav className="activity-path" aria-label="Caminho das atividades">
        <Link href="/atividades/">Atividades para imprimir</Link><IconSeparator />
        <span aria-current="page">{grade.title}</span>
      </nav>
      <section className="section compact-section" aria-label="Escolha da categoria ou matéria">
        <SectionTitle
          eyebrow="NÍVEL 2 · CATEGORIA / MATÉRIA"
          title={preschool ? "O que vamos explorar?" : "Qual matéria vamos praticar?"}
          description="Escolha uma opção para encontrar as atividades."
        />
        <div className="activity-nav-grid">
          {categories.map((category) => (
            <ActivityNavCard
              key={category.slug}
              item={category}
              href={`/atividades/${grade.slug}/${category.slug}/`}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}

function IconSeparator() {
  return <span aria-hidden="true">›</span>;
}
