import { createFileRoute } from "@tanstack/react-router";
import { EditableBlock, LegalPage } from "@/components/site-shell";

export const Route = createFileRoute("/entrega")({ head: () => ({ meta: [
  { title: "Entrega e Retirada — ARRUDA JEANS" }, { name: "description", content: "Informações de frete, entrega e retirada da ARRUDA JEANS." }, { property: "og:title", content: "Entrega e Retirada — ARRUDA JEANS" }, { property: "og:description", content: "Consulte regiões, valores e prazos de entrega." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
]}), component: EntregaPage });

function EntregaPage() { return <LegalPage eyebrow="Seu pedido" title="Entrega e retirada" description="Os dados abaixo devem ser preenchidos pela loja. Nenhum valor, região ou prazo foi inventado.">
  <EditableBlock title="Regiões atendidas"><p>A definir pela ARRUDA JEANS.</p></EditableBlock>
  <EditableBlock title="Valor do frete"><p>A definir conforme destino e modalidade. O valor deve ser informado antes da confirmação do pedido.</p></EditableBlock>
  <EditableBlock title="Prazo estimado"><p>A definir pela ARRUDA JEANS. O prazo começa conforme a regra informada no atendimento.</p></EditableBlock>
  <EditableBlock title="Opção de retirada"><p>Disponibilidade, endereço, dias e horários: a definir pela ARRUDA JEANS.</p></EditableBlock>
</LegalPage> }