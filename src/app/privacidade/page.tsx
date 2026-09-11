import { Container } from "@/components/ui";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Privacidade",
  "Como esta versão do Aprendizagem Kids Play funciona sem cadastro ou dados pessoais nas atividades.",
  "/privacidade/",
);
export default function PrivacyPage() {
  return (
    <Container className="page-container">
      <PageIntro
        title="Espaço para aprender. Respeito à privacidade."
        description="Informações simples sobre o funcionamento desta versão."
        label="Privacidade"
        icon="heart"
        tone="green"
      />
      <article className="prose">
        <h2>Sem cadastro e sem perfis</h2>
        <p>
          O site não solicita nome, idade, escola, endereço, fotos ou outros
          dados pessoais. Não existem chat, comentários, mensagens privadas ou
          ranking público.
        </p>
        <h2>As respostas ficam nesta brincadeira</h2>
        <p>
          Os jogos guardam o andamento apenas na memória da página. Ao
          recarregar ou sair, o progresso é descartado. Não enviamos respostas a
          um servidor e não usamos cookies ou armazenamento local para
          acompanhar as crianças.
        </p>
        <h2>Métricas e hospedagem</h2>
        <p>
          Esta versão não inclui ferramentas de publicidade ou analytics. O
          provedor de hospedagem pode processar informações técnicas necessárias
          para entregar e proteger o site, como endereço IP e registros de
          acesso. Se métricas agregadas forem adicionadas no futuro, esta página
          será atualizada.
        </p>
        <h2>Materiais e vídeos</h2>
        <p>
          Os PDFs são arquivos do próprio site e não exigem identificação para
          baixar. Ainda não há vídeos publicados. Quando disponíveis, links para
          o YouTube serão identificados; ao abrir um serviço externo, passam a
          valer as regras desse serviço. Recomendamos o acompanhamento de um
          adulto.
        </p>
      </article>
    </Container>
  );
}
