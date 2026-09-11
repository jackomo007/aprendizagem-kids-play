import Image from "next/image";
import { Badge, ButtonLink, Icon } from "./ui";
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <Badge tone="purple">
          <Icon name="spark" />
          Um mundo de descobertas
        </Badge>
        <p className="hero-name">Aprendizagem Kids Play</p>
        <h1>
          Aprender, brincar
          <br />e <span>descobrir!</span>
        </h1>
        <p className="hero-description">
          Jogos, atividades e novas ideias para quem tem curiosidade de sobra.
          Da Educação Infantil ao Fundamental I, cada descoberta é um novo
          começo.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#explorar">
            Começar a aprender
            <Icon name="arrow" />
          </ButtonLink>
          <ButtonLink href="/jogos/" variant="secondary">
            <Icon name="play" />
            Explorar jogos
          </ButtonLink>
        </div>
        <div className="hero-reassurance">
          <span>
            <Icon name="check" />
            100% gratuito
          </span>
          <span>
            <Icon name="check" />
            Sem cadastro
          </span>
          <span>
            <Icon name="check" />
            No seu ritmo
          </span>
        </div>
      </div>
      <div className="hero-artwork">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/marca/perfil-400.webp" />
          <Image
            src="/images/marca/perfil-800.webp"
            alt="Os personagens do Aprendizagem Kids Play celebram novas descobertas entre livros, lápis e um globo."
            width={800}
            height={800}
            priority
            className="hero-brand-image"
          />
        </picture>
      </div>
    </section>
  );
}
