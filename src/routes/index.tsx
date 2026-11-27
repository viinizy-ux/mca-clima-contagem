import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-instalacao.jpg";
import condensadorasImg from "@/assets/condensadoras.jpg";
import manutencaoImg from "@/assets/manutencao.jpg";
import escritorioImg from "@/assets/escritorio.jpg";

/*
 * DEMONSTRAÇÃO — antes da publicação, o proprietário deve confirmar:
 * - textos, serviços oferecidos, horários e área de atendimento;
 * - substituir todas as fotos ilustrativas por fotos reais da empresa.
 * Nenhuma informação além de nome, telefone e endereço foi confirmada.
 */

const PHONE_DISPLAY = "(31) 99330-0647";
const PHONE_TEL = "+5531993300647";
const WHATSAPP = "https://wa.me/5531993300647";
const WHATSAPP_QUOTE = `${WHATSAPP}?text=${encodeURIComponent("Olá, gostaria de solicitar um orçamento.")}`;
const ADDRESS_LINE = "Av. Nossa Senhora da Conceição, 1100";
const ADDRESS_AREA = "Bairro Europa, Contagem — MG";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Avenida Nossa Senhora da Conceição, 1100, Europa, Contagem, MG");

const TITLE = "MCA Ar Condicionado — Instalação e manutenção em Contagem, MG";
const DESCRIPTION =
  "Instalação e manutenção de ar-condicionado em Contagem, MG. Solicite um orçamento pelo WhatsApp (31) 99330-0647.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "MCA Ar Condicionado",
  telephone: PHONE_TEL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Nossa Senhora da Conceição, 1100",
    addressLocality: "Contagem",
    addressRegion: "MG",
    addressCountry: "BR",
  },
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
});

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#empresa", label: "Empresa" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

function Icon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const ICON_PHONE = "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2";
const ICON_PIN = "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z";
const ICON_ARROW = "M5 12h14M13 6l6 6-6 6";
const ICON_CHAT = "M4 5h16v11H8l-4 4V5Z";

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex items-baseline gap-2.5">
      <span className={`font-serif text-2xl font-semibold tracking-[0.06em] ${inverse ? "text-ink-foreground" : "text-primary"}`}>MCA</span>
      <span className={`text-[11px] font-medium uppercase tracking-[0.22em] ${inverse ? "text-ink-foreground/70" : "text-muted-foreground"}`}>
        Ar Condicionado
      </span>
    </span>
  );
}

function ButtonLink({ href, children, variant = "primary", external = false }: { href: string; children: React.ReactNode; variant?: "primary" | "outline" | "inverse"; external?: boolean }) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-foreground/25 text-foreground hover:border-foreground/60",
    inverse: "bg-ink-foreground text-ink hover:bg-ink-foreground/90",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${styles}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-accent">{n}</span>
      <span className="h-px w-8 bg-border" />
      {children}
    </p>
  );
}

const faqs = [
  {
    q: "Como solicito um orçamento?",
    a: "Envie uma mensagem pelo WhatsApp ou ligue para o número informado nesta página. Descreva o serviço desejado, o tipo de aparelho e o local, para que o atendimento possa orientar os próximos passos.",
  },
  {
    q: "Quais informações ajudam no orçamento de uma instalação?",
    a: "Em geral, ajudam o modelo e a capacidade do aparelho (em BTUs), o ambiente onde será instalado, a distância aproximada entre as unidades interna e externa e fotos do local.",
  },
  {
    q: "Com que frequência devo fazer manutenção?",
    a: "A periodicidade depende do uso, do ambiente e das recomendações do fabricante do aparelho. Uma avaliação técnica é a melhor forma de definir o intervalo adequado para o seu caso.",
  },
  {
    q: "Quais sinais indicam que o aparelho precisa de atenção?",
    a: "Perda de rendimento no resfriamento, ruídos diferentes do habitual, mau cheiro, gotejamento na unidade interna ou aumento perceptível no consumo de energia são motivos comuns para uma verificação.",
  },
  {
    q: "Vocês atendem a minha região?",
    a: "A empresa está localizada no bairro Europa, em Contagem. Para confirmar o atendimento no seu endereço, entre em contato informando o bairro e a cidade.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-3 focus:py-2">
        Pular para o conteúdo
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
          <a href="#topo" aria-label="MCA Ar Condicionado — início">
            <Wordmark />
          </a>
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="flex shrink-0 items-center gap-2 text-sm font-medium text-primary">
            <Icon d={ICON_PHONE} className="h-4 w-4" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Ligar</span>
          </a>
        </div>
        <nav aria-label="Seções" className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-6xl justify-between px-5 py-2.5 text-[13px]">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="text-muted-foreground">{n.label}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="conteudo">
        {/* Hero */}
        <section id="topo" className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:gap-12 md:px-8 md:py-20">
            <div className="flex flex-col justify-center md:col-span-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Contagem · Minas Gerais</p>
              <h1 className="mt-5 font-serif text-4xl leading-[1.1] font-medium text-foreground md:text-[3.25rem]">
                Instalação e manutenção de ar-condicionado.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Atendimento para residências e empresas que precisam instalar um novo aparelho
                ou cuidar do equipamento que já possuem. Fale diretamente com a MCA para
                descrever sua necessidade e solicitar um orçamento.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={WHATSAPP_QUOTE} external>
                  Solicitar orçamento <Icon d={ICON_ARROW} className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#servicos" variant="outline">Ver serviços</ButtonLink>
              </div>
            </div>
            <figure className="md:col-span-6">
              {/* PLACEHOLDER: substituir por foto real da equipe/serviço da MCA */}
              <img src={heroImg} alt="Técnico instalando a unidade interna de um ar-condicionado split (imagem ilustrativa)" width={1536} height={1024} fetchPriority="high" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="mt-2 text-xs text-muted-foreground">Imagem ilustrativa.</figcaption>
            </figure>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="scroll-mt-28 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <SectionLabel n="01">Serviços</SectionLabel>
                <h2 className="mt-5 font-serif text-3xl font-medium leading-tight">Duas frentes de trabalho.</h2>
              </div>
              <p className="max-w-xl text-muted-foreground md:col-span-7 md:col-start-6 md:self-end">
                {/* PLACEHOLDER: proprietário deve confirmar tipos de aparelho e serviços específicos atendidos */}
                Os detalhes de cada atendimento — tipo de aparelho, local e escopo — são combinados
                diretamente com a empresa antes da execução.
              </p>
            </div>

            <div className="mt-12 grid border-t border-border md:grid-cols-2">
              {[
                {
                  n: "A",
                  t: "Instalação",
                  d: "Instalação de aparelhos de ar-condicionado em ambientes residenciais e comerciais, com avaliação prévia do local e das condições necessárias para o equipamento.",
                  items: ["Avaliação do ambiente", "Posicionamento das unidades", "Orientação sobre uso"],
                },
                {
                  n: "B",
                  t: "Manutenção",
                  d: "Cuidados com aparelhos já instalados, voltados a manter o bom funcionamento do equipamento e a qualidade do ar no ambiente.",
                  items: ["Limpeza e verificação", "Avaliação de funcionamento", "Diagnóstico de problemas"],
                },
              ].map((s, i) => (
                <article key={s.t} className={`py-10 md:py-12 ${i === 0 ? "border-b border-border md:border-b-0 md:border-r md:pr-12" : "md:pl-12"}`}>
                  <p className="font-serif text-sm text-accent">{s.n}</p>
                  <h3 className="mt-3 font-serif text-2xl font-medium">{s.t}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.d}</p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 border-b border-border/70 pb-2.5">
                        <span className="h-1 w-1 shrink-0 bg-accent" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Empresa */}
        <section id="empresa" className="scroll-mt-28 bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
            <div className="md:col-span-5">
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-foreground/60">
                <span className="text-ink-foreground">02</span><span className="h-px w-8 bg-ink-foreground/30" />Empresa
              </p>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight md:text-4xl">
                Uma empresa local, em Contagem.
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-ink-foreground/80 md:col-span-6 md:col-start-7">
              {/* PLACEHOLDER: proprietário pode incluir aqui a história e os diferenciais confirmados da empresa */}
              <p>
                A MCA Ar Condicionado está estabelecida no bairro Europa, em Contagem, e atua com
                instalação e manutenção de ar-condicionado.
              </p>
              <p>
                O contato é direto com a empresa, por telefone ou WhatsApp, o que facilita
                explicar a necessidade, enviar fotos do local e combinar o atendimento.
              </p>
              <dl className="grid grid-cols-1 gap-px border-t border-ink-foreground/20 pt-6 sm:grid-cols-3">
                {[
                  ["Localização", "Contagem, MG"],
                  ["Serviços", "Instalação e manutenção"],
                  ["Contato", "Telefone e WhatsApp"],
                ].map(([k, v]) => (
                  <div key={k} className="py-2">
                    <dt className="text-xs uppercase tracking-[0.16em] text-ink-foreground/50">{k}</dt>
                    <dd className="mt-1 text-sm text-ink-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Imagens */}
        <section aria-labelledby="imagens-titulo" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <SectionLabel n="03">Ambientes</SectionLabel>
                <h2 id="imagens-titulo" className="mt-5 font-serif text-3xl font-medium leading-tight">Residências, comércios e escritórios.</h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Fotografias ilustrativas de referência. Não representam serviços realizados pela MCA.
              </p>
            </div>
            {/* PLACEHOLDER: substituir por fotos autênticas de trabalhos da MCA antes do lançamento */}
            <div className="mt-10 grid gap-4 md:grid-cols-12">
              <figure className="md:col-span-7 md:row-span-2">
                <img src={escritorioImg} alt="Escritório com ar-condicionado tipo cassete no teto (imagem ilustrativa)" width={1328} height={1184} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover md:aspect-auto" />
              </figure>
              <figure className="md:col-span-5">
                <img src={condensadorasImg} alt="Unidades condensadoras instaladas na fachada de um edifício (imagem ilustrativa)" width={1448} height={1086} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
              </figure>
              <figure className="md:col-span-5">
                <img src={manutencaoImg} alt="Limpeza do filtro de um ar-condicionado split (imagem ilustrativa)" width={1536} height={1024} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
              </figure>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="scroll-mt-28 border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
            <div className="md:col-span-4">
              <SectionLabel n="04">Dúvidas</SectionLabel>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight">Perguntas frequentes.</h2>
              <p className="mt-4 text-sm text-muted-foreground">Respostas gerais. Para o seu caso, fale com a empresa.</p>
            </div>
            <div className="border-t border-border md:col-span-8">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <span aria-hidden="true" className="shrink-0 font-serif text-xl text-accent transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-28">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <SectionLabel n="05">Contato</SectionLabel>
            <div className="mt-5 grid gap-12 md:grid-cols-12">
              <div className="md:col-span-6">
                <h2 className="font-serif text-3xl font-medium leading-tight md:text-4xl">Solicite um orçamento.</h2>
                <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                  Envie uma mensagem com o tipo de serviço, o aparelho e o endereço. Se possível,
                  inclua fotos do local.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={WHATSAPP_QUOTE} external>
                    <Icon d={ICON_CHAT} className="h-4 w-4" /> Conversar no WhatsApp
                  </ButtonLink>
                  <ButtonLink href={`tel:${PHONE_TEL}`} variant="outline">
                    <Icon d={ICON_PHONE} className="h-4 w-4" /> Ligar
                  </ButtonLink>
                </div>
              </div>
              <dl className="border-t border-border md:col-span-5 md:col-start-8">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-border py-6">
                  <Icon d={ICON_PHONE} className="mt-0.5 h-5 w-5 text-accent" />
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Telefone e WhatsApp</dt>
                    <dd className="mt-1.5 font-serif text-xl"><a href={`tel:${PHONE_TEL}`} className="hover:text-primary">{PHONE_DISPLAY}</a></dd>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-border py-6">
                  <Icon d={ICON_PIN} className="mt-0.5 h-5 w-5 text-accent" />
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Endereço</dt>
                    <dd className="mt-1.5 leading-relaxed">
                      {ADDRESS_LINE}<br />{ADDRESS_AREA}
                      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline">
                        Abrir no mapa <Icon d={ICON_ARROW} className="h-3.5 w-3.5" />
                      </a>
                    </dd>
                  </div>
                </div>
                {/* PLACEHOLDER: incluir horário de atendimento quando confirmado pelo proprietário */}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
          <div>
            <Wordmark inverse />
            <p className="mt-3 text-sm text-ink-foreground/60">Instalação e manutenção de ar-condicionado.</p>
          </div>
          <address className="text-sm not-italic leading-relaxed text-ink-foreground/80">
            {ADDRESS_LINE}<br />{ADDRESS_AREA}
          </address>
          <div className="text-sm md:text-right">
            <a href={`tel:${PHONE_TEL}`} className="block text-ink-foreground/80 hover:text-ink-foreground">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-1 block text-ink-foreground/80 hover:text-ink-foreground">WhatsApp</a>
          </div>
        </div>
        <div className="border-t border-ink-foreground/15">
          <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-ink-foreground/50 md:px-8">
            © {new Date().getFullYear()} MCA Ar Condicionado · Contagem, MG · Imagens meramente ilustrativas.
          </p>
        </div>
      </footer>
    </div>
  );
}
