import { createFileRoute } from "@tanstack/react-router";
import { EditableBlock, LegalPage } from "@/components/site-shell";

export const Route = createFileRoute("/trocas")({ head: () => ({ meta: [
  { title: "Trocas e Devoluções — ARRUDA JEANS" }, { name: "description", content: "Consulte as condições de troca e devolução da ARRUDA JEANS." }, { property: "og:title", content: "Trocas e Devoluções — ARRUDA JEANS" }, { property: "og:description", content: "Prazos, condições e orientações para trocas na ARRUDA JEANS." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
]}), component: TrocasPage });

function TrocasPage() { return <LegalPage eyebrow="Atendimento" title="Trocas e devoluções" description="Esta página está preparada para receber a política real da loja. Confirme sempre as condições antes da compra.">
  <EditableBlock title="Prazo para solicitar troca"><p>A definir pela ARRUDA JEANS.</p></EditableBlock>
  <EditableBlock title="Condições da peça"><p>A definir: estado da peça, etiquetas, embalagem e comprovante necessários.</p></EditableBlock>
  <EditableBlock title="Como solicitar"><p>Entre em contato pelo WhatsApp oficial, informe o número do pedido e aguarde as orientações.</p></EditableBlock>
  <EditableBlock title="Custos de envio"><p>A responsabilidade pelo frete de troca deve ser definida conforme o motivo e a política real da loja.</p></EditableBlock>
  <EditableBlock title="Quando a troca não é aceita"><p>Situações não aceitas: a definir pela ARRUDA JEANS antes da publicação definitiva.</p></EditableBlock>
</LegalPage> }