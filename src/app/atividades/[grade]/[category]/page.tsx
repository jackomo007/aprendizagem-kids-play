import Link from "next/link";
import { notFound } from "next/navigation";
import { ActivityCard } from "@/components/cards";
import { Container, Icon } from "@/components/ui";
import { activities } from "@/data/activities";
import { activityCategoryParams, earlyChildhoodGradeSlugs, getActivityCategory, getActivityGrade } from "@/data/activity-navigation";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return activityCategoryParams;
}

export async function generateMetadata({ params }: { params: Promise<{ grade: string; category: string }> }) {
  const { grade: gradeSlug, category: categorySlug } = await params;
  const grade = getActivityGrade(gradeSlug);
  const category = grade ? getActivityCategory(gradeSlug, categorySlug) : undefined;
  return grade && category
    ? pageMetadata(`${category.title} — ${grade.title}`, `Atividades de ${category.title} para ${grade.title}.`, `/atividades/${grade.slug}/${category.slug}/`)
    : {};
}

export default async function ActivityCategoryPage({ params }: { params: Promise<{ grade: string; category: string }> }) {
  const { grade: gradeSlug, category: categorySlug } = await params;
  const grade = getActivityGrade(gradeSlug);
  const category = grade ? getActivityCategory(gradeSlug, categorySlug) : undefined;
  if (!grade || !category) notFound();
  const groupedEducation = grade.slug === "educacao-infantil";
  const filteredActivities = activities.filter(
    (activity) =>
      activity.categorySlug === category.slug &&
      (groupedEducation
        ? activity.gradeSlugs.some((slug) => earlyChildhoodGradeSlugs.includes(slug))
        : activity.gradeSlugs.includes(grade.slug)),
  );
  return (
    <Container className="page-container activity-results-page">
      <nav className="activity-path activity-path-top" aria-label="Caminho das atividades">
        <Link href="/atividades/">Atividades para imprimir</Link><span aria-hidden="true">›</span>
        <Link href={groupedEducation ? "/educacao-infantil/" : `/atividades/${grade.slug}/`}>{grade.title}</Link><span aria-hidden="true">›</span>
        <span aria-current="page">{category.title}</span>
      </nav>
      <section className="section compact-section" aria-labelledby="activities-heading">
        <header className="activity-results-header">
          <p className="eyebrow">NÍVEL 3 · ATIVIDADES</p>
          <h1 id="activities-heading">{category.title}</h1>
          <p>{groupedEducation ? "Pré III, Pré IV e Infantil V" : grade.title} · Escolha uma atividade para visualizar ou baixar.</p>
        </header>
        {filteredActivities.length ? (
          <>
            <div className="content-grid">
              {filteredActivities.map((activity) => <ActivityCard key={activity.slug} activity={activity} levelOverride={groupedEducation ? activity.level : grade.title} />)}
            </div>
            <div className="notice activity-help"><Icon name="pencil" /><p>Abra a atividade para visualizar ou baixe o PDF. Na impressão, use papel A4 e a opção “Ajustar à página”. Um adulto pode ajudar.</p></div>
          </>
        ) : (
          <div className="activity-empty">
            <span aria-hidden="true"><Icon name={category.icon ?? "spark"} /></span>
            <h2>Novas atividades estão sendo preparadas.</h2>
            <p>Ainda não há materiais de {category.title} para {groupedEducation ? "estas turmas" : grade.title}. Volte em breve ou escolha outra opção.</p>
            <Link className="button button-secondary" href={groupedEducation ? "/educacao-infantil/" : `/atividades/${grade.slug}/`}><Icon name="arrow" />Ver outras opções</Link>
          </div>
        )}
      </section>
    </Container>
  );
}
