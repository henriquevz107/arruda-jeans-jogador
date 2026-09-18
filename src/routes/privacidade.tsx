import { createFileRoute } from "@tanstack/react-router";
import { EditableBlock, LegalPage } from "@/components/site-shell";

export const Route = createFileRoute("/privacidade")({ head: () => ({ meta: [
  { title: "Política de Privacidade — ARRUDA JEANS" }, { name: "description", content: "Informações sobre privacidade e dados no site ARRUDA JEANS." }, { property: "og:title", content: "Política de Privacidade — ARRUDA JEANS" }, { property: "og:description", content: "Saiba como seus dados são tratados durante o atendimento e a compra." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
]}), component: PrivacidadePage });

function PrivacidadePage() { return <LegalPage eyebrow="Transparência" title="Política de privacidade" description="Conteúdo-base editável. A loja deve revisar e completar esta política conforme sua operação real.">
  <EditableBlock title="Dados utilizados"><p>Durante o atendimento, poderão ser solicitados somente os dados necessários para responder dúvidas, confirmar pedidos e organizar a entrega.</p></EditableBlock>
  <EditableBlock title="Finalidade"><p>Os dados informados pelo cliente devem ser usados para atendimento, pagamento, entrega e suporte pós-compra.</p></EditableBlock>
  <EditableBlock title="Compartilhamento e armazenamento"><p>Prestadores envolvidos, períodos de retenção e medidas adotadas: a definir pela ARRUDA JEANS.</p></EditableBlock>
  <EditableBlock title="Direitos e contato"><p>Solicitações relacionadas a dados pessoais podem ser encaminhadas pelo WhatsApp oficial da loja.</p></EditableBlock>
</LegalPage> }