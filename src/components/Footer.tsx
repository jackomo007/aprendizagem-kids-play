import Link from "next/link";
import { Brand } from "./Brand";
import { Container, Icon } from "./ui";
export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div>
            <Link href="/" className="brand">
              <Brand />
            </Link>
            <p>
              Aprender, brincar e descobrir.
              <br />
              Um mundo de possibilidades, no seu ritmo.
            </p>
          </div>
          <div>
            <h2>Para explorar</h2>
            <Link href="/educacao-infantil/">Educação Infantil</Link>
            <Link href="/fundamental/">Ensino Fundamental I</Link>
            <Link href="/atividades/">Atividades para imprimir</Link>
          </div>
          <div>
            <h2>Para quem acompanha</h2>
            <Link href="/sobre/">Sobre o projeto</Link>
            <Link href="/privacidade/">Privacidade</Link>
            <p>
              Gratuito. Sem cadastro.
              <br />
              Feito para aprender com tranquilidade.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Aprendizagem Kids Play</span>
          <span>
            <Icon name="heart" /> Feito com curiosidade e carinho.
          </span>
        </div>
      </Container>
    </footer>
  );
}
