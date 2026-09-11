import { CreatorSection } from "@/components/CreatorSection";
import { BrandBanner } from "@/components/BrandBanner";
import { Container, ButtonLink } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Sobre o projeto",
  "Um espaço gratuito para aprender com curiosidade, brincadeira e apoio da família.",
  "/sobre/",
);
export default function AboutPage() {
  return (
    <Container className="page-container">
      <PageIntro
        title="Aprender começa com curiosidade."
        description="Um projeto que nasceu de uma ideia de criança, com o apoio dos pais, para transformar descobertas em momentos de aprendizado."
        label="Sobre o projeto"
        icon="heart"
      />
      <BrandBanner variant="about" />
      <CreatorSection />
      <article className="prose">
        <h2>Um espaço para explorar, no seu ritmo</h2>
        <p>
          Aprendizagem Kids Play reúne jogos, atividades e conteúdos para a
          Educação Infantil e o Ensino Fundamental I. O acesso é gratuito e não
          exige cadastro.
        </p>
        <h2>Para crianças, famílias e professores</h2>
        <p>
          Escolha um conteúdo pelo tema e pelo nível indicado. Acompanhe a
          criança quando necessário, converse sobre as descobertas e adapte as
          atividades ao momento de aprendizagem dela. Os materiais são
          complementares e não representam um currículo completo.
        </p>
        <h2>Uma coleção que está começando</h2>
        <p>
          Esta primeira versão tem jogos curtos, quizzes e três atividades de
          exemplo em PDF. Missão Oceano e a coleção de vídeos estão em
          preparação. Novos materiais serão adicionados aos poucos.
        </p>
        <h2>Aprender com tranquilidade</h2>
        <p>
          Não há perfis, ranking público, mensagens ou comentários. As
          brincadeiras não têm cronômetro nem nota. Errar faz parte de
          descobrir.
        </p>
        <ButtonLink href="/atividades/">Encontrar uma atividade</ButtonLink>
      </article>
    </Container>
  );
}
