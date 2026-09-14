import { CreatorSection } from "@/components/CreatorSection";
import { Container, SectionTitle, Icon, ButtonLink } from "@/components/ui";
import { Hero } from "@/components/Hero";
import { CategoryCard, GameCard, ActivityCard } from "@/components/cards";
import { categories } from "@/data/categories";
import { games } from "@/data/games";
import { activities } from "@/data/activities";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
export const metadata = pageMetadata(
  "Aprender, brincar e descobrir",
  site.description,
  "/",
);
export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <section id="explorar" className="section">
          <SectionTitle
            eyebrow="POR ONDE VAMOS COMEÇAR?"
            title="Cada curiosidade, um novo caminho."
            description="Escolha seu próximo universo de descobertas."
          />
          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </section>
      </Container>
      <section className="section soft-section">
        <Container>
          <SectionTitle
            eyebrow="APRENDER BRINCANDO"
            title="Dê o play na próxima descoberta"
            description="Experimente, pense e tente de novo. O importante é explorar."
            href="/jogos/"
            linkLabel="Explorar todos os jogos"
          />
          <div className="content-grid">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </Container>
      </section>
      <Container>
        <section className="section">
          <SectionTitle
            eyebrow="DA TELA PARA O PAPEL"
            title="Ideias para levar com você"
            description="Atividades gratuitas para imprimir e aprender de um jeito diferente."
            href="/atividades/"
            linkLabel="Ver atividades"
          />
          <div className="content-grid">
            {activities.slice(0, 3).map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        </section>
        <CreatorSection compact />
        <section className="family-banner">
          <div className="family-icon">
            <Icon name="heart" />
          </div>
          <div>
            <p className="eyebrow">PARA PAIS E PROFESSORES TAMBÉM</p>
            <h2>
              Pequenas descobertas.
              <br />
              Bons momentos juntos.
            </h2>
            <p>
              Escolha uma atividade, acompanhe uma brincadeira e respeite o
              tempo de cada criança. Aqui, aprender não é uma corrida.
            </p>
          </div>
          <ButtonLink href="/sobre/" variant="secondary">
            Conheça o projeto
            <Icon name="arrow" />
          </ButtonLink>
        </section>
      </Container>
    </>
  );
}
