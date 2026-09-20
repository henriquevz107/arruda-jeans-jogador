import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/arruda-jeans-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";

export const whatsappNumber = "5511988439209";
export const generalMessage = "Olá! Vim pelo site da Arruda Jeans e quero saber mais sobre os produtos.";
export const arrudaLogoUrl = logoAsset.url;

export function whatsappUrl(message = generalMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const nav: ReadonlyArray<{ label: string; to: "/" | "/entrega"; hash?: string }> = [
  { label: "Produtos", to: "/", hash: "produtos" },
  { label: "Como comprar", to: "/", hash: "como-comprar" },
  { label: "Tamanhos", to: "/", hash: "tamanhos" },
  { label: "Entrega", to: "/entrega" },
];

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="ARRUDA JEANS — início">
      <img src={arrudaLogoUrl} alt="ARRUDA JEANS — Menó das Jogador" className={`h-20 w-20 object-cover shadow-md sm:h-24 sm:w-24 ${light ? "ring-1 ring-secondary-foreground/20" : "ring-1 ring-border"}`} />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-24 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-4 sm:h-28 sm:px-6 lg:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {nav.map((item) => item.hash ? (
            <a key={item.label} href={`/#${item.hash}`} className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>
          ) : (
            <Link key={item.label} to={item.to} className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden" aria-label="Navegação móvel">
          {nav.map((item) => item.hash ? (
            <a key={item.label} href={`/#${item.hash}`} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-display text-xl font-bold uppercase">{item.label}</a>
          ) : (
            <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-display text-xl font-bold uppercase">{item.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div><Wordmark light /><p className="mt-5 max-w-sm text-sm text-secondary-foreground/65">Calças • Shorts • Moda Masculina<br />Estilo que veste a quebrada.</p></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Atendimento oficial</p>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="mt-4 block text-sm hover:text-primary">WhatsApp: (11) 98843-9209</a>
          <p className="mt-2 text-sm text-secondary-foreground/55">Instagram: a informar</p>
        </div>
        <div className="grid gap-2 text-sm">
          <Link to="/trocas" className="hover:text-primary">Trocas e devoluções</Link>
          <Link to="/privacidade" className="hover:text-primary">Política de privacidade</Link>
          <Link to="/termos" className="hover:text-primary">Termos de compra</Link>
          <Link to="/entrega" className="hover:text-primary">Informações de entrega</Link>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 px-4 py-5 text-center text-[0.68rem] uppercase tracking-widest text-secondary-foreground/40">© 2026 ARRUDA JEANS. Todos os direitos reservados.</div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar com a Arruda Jeans pelo WhatsApp" className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-105 sm:bottom-6 sm:right-6">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /><WhatsAppFloat /></>;
}

export function LegalPage({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <SiteLayout>
      <section className="bg-secondary px-4 py-16 text-secondary-foreground sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl"><p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">{eyebrow}</p><h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.9] sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base text-secondary-foreground/65 sm:text-lg">{description}</p></div>
      </section>
      <section className="px-4 py-12 sm:px-6 sm:py-16"><div className="mx-auto max-w-5xl">{children}</div></section>
      <section className="border-t border-border px-4 py-10 sm:px-6"><div className="mx-auto flex max-w-5xl items-center gap-3 text-sm text-muted-foreground"><ShieldCheck className="h-5 w-5 shrink-0 text-primary" /><span>Em caso de dúvida, confirme as condições diretamente no canal oficial da ARRUDA JEANS.</span></div></section>
    </SiteLayout>
  );
}

export function EditableBlock({ title, children }: { title: string; children: ReactNode }) {
  return <article className="border-t border-border py-8 first:border-t-0"><h2 className="text-2xl font-black uppercase sm:text-3xl">{title}</h2><div className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">{children}</div></article>;
}