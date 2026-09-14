import { ActivityNavCard } from "@/components/ActivityNavCard";
import { Container, Icon, SectionTitle } from "@/components/ui";
import { activityGrades } from "@/data/activity-navigation";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/PageIntro";

export const metadata = pageMetadata(
  "Atividades para imprimir",
  "Escolha a turma para encontrar atividades educativas gratuitas em PDF.",
  "/atividades/",
);

export default function ActivitiesPage() {
  return (
    <Container className="page-container">
      <PageIntro
        title="Atividades para imprimir"
        description="Materiais gratuitos em PDF, organizados por turma e matéria para encontrar tudo com facilidade."
        label="Atividades"
        icon="pencil"
        tone="orange"
      />
      <section className="section" aria-label="Escolha da turma">
        <SectionTitle
          eyebrow="NÍVEL 1 · TURMA"
          title="Para qual turma você procura?"
          description="Escolha uma turma para ver as categorias e matérias disponíveis."
        />
        <div className="activity-nav-grid">
          {activityGrades.map((grade) => (
            <ActivityNavCard
              key={grade.slug}
              item={grade}
              href={`/atividades/${grade.slug}/`}
            />
          ))}
        </div>
        <div className="notice activity-help">
          <Icon name="pencil" />
          <p>Os materiais são gratuitos e preparados em PDF. Um adulto pode ajudar na escolha e na impressão.</p>
        </div>
      </section>
    </Container>
  );
}
