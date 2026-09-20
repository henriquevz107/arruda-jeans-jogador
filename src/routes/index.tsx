import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, MessageCircle, PackageCheck, Ruler, ShieldCheck, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import darkJeans from "@/assets/arruda-dark-jeans-jogador.jpg";
import blueJeans from "@/assets/arruda-blue-jeans-jogador.jpg";
import blackWhiteShortsAsset from "@/assets/short-jogador-black-cordao-branco.jpeg.asset.json";
import graphiteShortsAsset from "@/assets/short-jogador-grafite-destroyed.jpeg.asset.json";
import blackGoldShortsAsset from "@/assets/short-jogador-black-yellow.jpeg.asset.json";
import blackGoldSplashShortsAsset from "@/assets/short-jogador-black-yellow-splash.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { arrudaLogoUrl, SiteLayout, whatsappUrl } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "ARRUDA JEANS — Calças e Shorts Jeans Masculinos" },
    { name: "description", content: "Moda masculina urbana com calças e shorts jeans. Escolha seu modelo e compre diretamente pelo WhatsApp." },
    { property: "og:title", content: "ARRUDA JEANS — Estilo que veste a quebrada" },
    { property: "og:description", content: "Calças e shorts jeans masculinos com atitude, qualidade e identidade." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

type Product = { name: string; category: string; image: string; description: string; washes: string[]; price?: string };

const products: Product[] = [
  { name: "Calça Jogador Black", category: "Calças Jeans", image: darkJeans, description: "Modelagem ajustada, lavagem estonada, puídos e respingos que marcam presença.", washes: ["Chumbo estonado", "Preto marmorizado"] },
  { name: "Calça Jogador Ice", category: "Calças Jeans", image: blueJeans, description: "Jeans claro de shape afunilado, efeito acid wash e rasgos na medida.", washes: ["Cinza ice", "Azul gelo"] },
  { name: "Short Jogador Black White", category: "Shorts Jeans", image: blackWhiteShortsAsset.url, description: "Jeans preto destroyed com respingos claros, barra desfiada e cordão branco.", washes: ["Preto estonado"], price: "R$ 135,00" },
  { name: "Short Jogador Grafite Destroyed", category: "Shorts Jeans", image: graphiteShortsAsset.url, description: "Lavagem grafite marmorizada, recortes destroyed e acabamento desfiado.", washes: ["Grafite ice"], price: "R$ 135,00" },
  { name: "Short Jogador Black Gold", category: "Shorts Jeans", image: blackGoldShortsAsset.url, description: "Jeans preto com puídos, respingos e cordão amarelo em destaque.", washes: ["Preto estonado"], price: "R$ 135,00" },
  { name: "Short Jogador Black Gold Splash", category: "Shorts Jeans", image: blackGoldSplashShortsAsset.url, description: "Modelo preto destroyed com respingos brancos, barra desfiada e detalhes amarelos.", washes: ["Preto intenso"], price: "R$ 135,00" },
];

function ProductCard({ product }: { product: Product }) {
  const [size, setSize] = useState("");
  const message = `Olá! Vim pelo site da Arruda Jeans e quero saber mais sobre o produto ${product.name}${size ? `, tamanho ${size}` : ""}.`;
  return (
    <article className="group border-b border-border pb-8">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img src={product.image} alt={`Foto do ${product.name}`} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        <span className="absolute left-3 top-3 bg-secondary px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-widest text-secondary-foreground">Modelo Jogador</span>
      </div>
      <div className="pt-5">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-primary">{product.category}</p>
        <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4"><h3 className="min-w-0 text-2xl font-black uppercase">{product.name}</h3><p className={`shrink-0 font-bold uppercase ${product.price ? "text-xl text-primary" : "text-xs text-muted-foreground"}`}>{product.price ?? "Preço a cadastrar"}</p></div>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
        <div className="mt-4"><p className="text-[0.65rem] font-bold uppercase tracking-widest">Lavagens previstas</p><p className="mt-1 text-sm text-muted-foreground">{product.washes.join(" • ")} — confirmar disponibilidade</p></div>
        <fieldset className="mt-4"><legend className="text-[0.65rem] font-bold uppercase tracking-widest">Escolha o tamanho</legend><div className="mt-2 flex flex-wrap gap-2">{["38", "40", "42", "44", "46"].map((item) => <button key={item} type="button" onClick={() => setSize(item)} aria-pressed={size === item} className={`h-10 min-w-10 border px-3 text-xs font-bold transition-colors ${size === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-foreground"}`}>{item}</button>)}</div><p className="mt-2 text-[0.68rem] text-muted-foreground">Grade demonstrativa — confirme os tamanhos disponíveis.</p></fieldset>
        <Button asChild variant="whatsapp" size="xl" className="mt-5 w-full"><a href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle />Comprar pelo WhatsApp</a></Button>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative min-h-[calc(100svh-6rem)] overflow-hidden bg-secondary text-secondary-foreground sm:min-h-[calc(100svh-7rem)]">
        <img src={darkJeans} alt="Modelo ARRUDA JEANS usando calça jeans escura" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover object-[58%_35%] opacity-70 sm:object-center lg:left-auto lg:w-[58%] lg:opacity-85" />
        <div className="image-shade absolute inset-0 lg:bg-gradient-to-r lg:from-secondary lg:via-secondary/85 lg:to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl items-end px-4 pb-14 pt-28 sm:min-h-[calc(100svh-7rem)] sm:px-6 sm:pb-20 lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 h-36 w-36 overflow-hidden rounded-full border-4 border-primary bg-secondary shadow-xl sm:h-44 sm:w-44">
              <img src={arrudaLogoUrl} alt="Logo ARRUDA JEANS — Menó das Jogador" width={1254} height={1254} className="h-full w-full scale-105 object-cover" />
            </div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">Denim • São Paulo</p>
            <h1 className="text-[clamp(4.5rem,16vw,10rem)] font-black uppercase leading-[0.72]">Arruda<br /><span className="text-primary">Jeans</span></h1>
            <p className="mt-7 text-xl font-semibold sm:text-2xl">Estilo que veste a quebrada.</p>
            <Button asChild variant="gold" size="xl" className="mt-8"><a href="#produtos">Ver produtos <ChevronRight /></a></Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-primary py-3 text-primary-foreground" aria-label="Destaques"><div className="mx-auto flex max-w-7xl justify-around gap-8 overflow-hidden px-4 text-[0.65rem] font-bold uppercase tracking-[0.2em]"><span>Denim com atitude</span><span className="hidden sm:inline">Compra direta e segura</span><span>Atendimento no WhatsApp</span></div></section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Feito para o corre</p><h2 className="mt-3 text-5xl font-black uppercase leading-[0.88] sm:text-7xl">Jeans com identidade.</h2></div><div className="border-l-2 border-primary pl-6"><p className="max-w-2xl text-lg leading-8 text-muted-foreground">A ARRUDA JEANS reúne calças e shorts masculinos com modelagens atuais, lavagens marcantes e a resistência que acompanha sua rotina.</p><p className="mt-4 text-xs font-bold uppercase tracking-widest">Qualidade • presença • autenticidade</p></div></div></section>

      <section id="produtos" className="scroll-mt-24 bg-card px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl"><div className="flex items-end justify-between gap-6 border-b-2 border-foreground pb-5"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Coleção</p><h2 className="mt-2 text-5xl font-black uppercase sm:text-7xl">Nossos produtos</h2></div><ShoppingBag className="hidden h-9 w-9 text-primary sm:block" /></div>
          <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.name} product={product} />)}</div>
        </div>
      </section>

      <section id="como-comprar" className="scroll-mt-24 bg-secondary px-4 py-16 text-secondary-foreground sm:px-6 sm:py-24 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Sem complicação</p><h2 className="mt-2 text-5xl font-black uppercase sm:text-7xl">Como comprar</h2><div className="mt-12 grid gap-px bg-secondary-foreground/15 md:grid-cols-2 lg:grid-cols-5">{[
        ["01", "Escolha seu produto", "Veja modelo, lavagem, tamanho e preço."], ["02", "Fale com a gente", "Chame no WhatsApp para confirmar disponibilidade."], ["03", "Confirme o pedido", "Confirme tamanho, quantidade, total e pagamento."], ["04", "Pagamento", "Formas aceitas: a definir pela loja."], ["05", "Entrega ou retirada", "Regiões, valores e prazos: a definir pela loja."],
      ].map(([n,t,d]) => <article key={n} className="bg-secondary p-6"><span className="font-display text-4xl font-black text-primary">{n}</span><h3 className="mt-7 text-xl font-bold uppercase">{t}</h3><p className="mt-3 text-sm leading-6 text-secondary-foreground/60">{d}</p></article>)}</div></div></section>

      <section id="tamanhos" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]"><div><Ruler className="h-8 w-8 text-primary"/><h2 className="mt-5 text-5xl font-black uppercase leading-[0.9]">Tabela de tamanhos</h2><p className="mt-5 text-sm leading-6 text-muted-foreground">As medidas reais variam por modelo. Confirme tudo no WhatsApp antes de finalizar.</p></div><div className="overflow-x-auto border border-border"><table className="w-full min-w-[620px] border-collapse text-left text-sm"><thead className="bg-secondary text-secondary-foreground"><tr>{["Numeração", "Cintura", "Quadril", "Comprimento", "Coxa"].map(h => <th key={h} className="p-4 text-xs uppercase tracking-wider">{h}</th>)}</tr></thead><tbody>{["Calça jeans", "Short jeans"].map(item => <tr key={item} className="border-t border-border"><td className="p-4 font-bold">{item}</td>{[1,2,3,4].map(n => <td key={n} className="p-4 text-muted-foreground">A cadastrar</td>)}</tr>)}</tbody></table></div></div></div></section>

      <section className="border-y border-border bg-card px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">{[
        [PackageCheck, "Entrega clara", "Frete, regiões e prazos são confirmados antes do pagamento."], [ShieldCheck, "Compra confirmada", "Produto, tamanho e valor são revisados com você no atendimento."], [MessageCircle, "Canal oficial", "Atendimento direto pelo número (11) 98843-9209."],
      ].map(([Icon, title, text]) => { const FeatureIcon = Icon as typeof PackageCheck; return <article key={title as string} className="border-l border-primary pl-5"><FeatureIcon className="h-6 w-6 text-primary"/><h3 className="mt-5 text-2xl font-black uppercase">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text as string}</p></article> })}</div></section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Recomendações dos clientes</p><h2 className="mt-3 text-5xl font-black uppercase leading-[0.9]">O que nossos clientes dizem</h2></div><div className="border border-dashed border-border bg-card p-8"><div className="flex gap-1 text-primary">{[1,2,3,4,5].map(n => <Star key={n} className="h-4 w-4" />)}</div><p className="mt-6 font-display text-2xl font-bold uppercase">Este espaço aguarda avaliações reais.</p><p className="mt-3 text-sm leading-6 text-muted-foreground">A ARRUDA JEANS poderá publicar aqui comentários autorizados de clientes. Nenhum depoimento demonstrativo foi apresentado como real.</p><Button asChild variant="outline" size="xl" className="mt-6"><a href={whatsappUrl("Olá! Vim pelo site da Arruda Jeans e gostaria de enviar uma avaliação sobre minha compra.")} target="_blank" rel="noreferrer">Enviar avaliação <Check /></a></Button></div></div></div></section>

      <section className="bg-primary px-4 py-14 text-primary-foreground sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="font-display text-4xl font-black uppercase sm:text-5xl">Achou seu estilo?</p><p className="mt-2 text-sm font-medium">Chama no WhatsApp e confirme seu pedido.</p></div><Button asChild variant="ink" size="xl"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Falar com a loja</a></Button></div></section>
    </SiteLayout>
  );
}