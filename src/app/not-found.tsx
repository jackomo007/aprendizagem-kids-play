import { Container, ButtonLink, Icon } from "@/components/ui";
export default function NotFound() {
  return (
    <Container>
      <section className="empty-state">
        <Icon name="rocket" />
        <p className="eyebrow">OPA, UM CAMINHO NOVO!</p>
        <h1>Esta página ainda não está por aqui.</h1>
        <p>Vamos voltar e escolher outra descoberta?</p>
        <ButtonLink href="/">Voltar ao início</ButtonLink>
      </section>
    </Container>
  );
}
