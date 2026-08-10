// Editorial Atlântico: asymmetric editorial narrative, navy contrast, gold as an action signal.
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Facebook,
  Handshake,
  Instagram,
  Link2,
  Menu,
  PackageOpen,
  Sparkles,
  Store,
  UsersRound,
  Wrench,
  X,
} from "lucide-react";
import { type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";
import { SITE_LINKS } from "@/const";

const heroImage = "/assets/permutas/hero.webp";
const patternImage = "/assets/permutas/pattern.webp";
const detailImage = "https://raw.githubusercontent.com/RSA-Master/permutasguaruja/main/public/assets/permutas/carrossel-permutas-card-04.png";

const communityLinks = [
  { label: "Grupo do Facebook", href: SITE_LINKS.facebookGroup, icon: Facebook },
  { label: "Grupo do WhatsApp", href: SITE_LINKS.whatsappGroup, icon: Link2 },
  { label: "Página do Facebook", href: SITE_LINKS.facebookPage, icon: Facebook },
  { label: "Instagram", href: SITE_LINKS.instagram, icon: Instagram },
];

const steps = [
  { number: "01", title: "Ofereça", text: "Publique o produto ou serviço que você pode oferecer em permuta.", icon: ArrowUpRight },
  { number: "02", title: "Encontre", text: "Veja o que outras empresas e profissionais estão oferecendo ou procurando.", icon: Sparkles },
  { number: "03", title: "Negocie", text: "Entre em contato e combine diretamente as condições da permuta.", icon: Handshake },
];

const audiences = [
  { title: "Empresas", question: "Tem produtos ou estoque parados?", text: "Transforme parte deles em produtos e serviços que sua empresa realmente precisa.", icon: Store },
  { title: "Profissionais", question: "Tem horários ou capacidade disponíveis?", text: "Transforme horários que ficariam ociosos em oportunidades de negócio.", icon: Clock3 },
  { title: "Prestadores de serviços", question: "Tem um serviço para oferecer?", text: "Encontre quem precisa dele e pode oferecer algo de valor em troca.", icon: Wrench },
];

const benefits = [
  ["Preserve seu caixa", "Consiga produtos e serviços sem desembolsar todo o valor em dinheiro.", CircleDollarSign],
  ["Aproveite sua capacidade ociosa", "Transforme horários, espaços e recursos disponíveis em novas oportunidades.", Clock3],
  ["Gire seu estoque", "Dê utilidade a produtos que estão parados.", PackageOpen],
  ["Gere novos negócios", "Coloque sua empresa em contato com outros profissionais e empresas.", BriefcaseBusiness],
  ["Crie relacionamentos", "Uma permuta pode ser o começo de uma nova parceria comercial.", UsersRound],
  ["Aproveite o que já tem", "Transforme produtos, serviços e capacidade disponível em poder de negociação.", ArrowDownRight],
] as const;

const examples = [
  ["MARKETING", "FOTOGRAFIA", "Uma agência oferece um pacote de marketing e recebe um ensaio profissional."],
  ["SERVIÇO AUTOMOTIVO", "ALIMENTAÇÃO", "Uma oficina oferece um serviço e recebe produtos ou refeições de um restaurante."],
  ["ESTÉTICA", "DIVULGAÇÃO", "Uma profissional oferece seus serviços e recebe marketing ou produção de conteúdo."],
  ["SITE", "SERVIÇOS PROFISSIONAIS", "Um profissional de tecnologia cria um site e recebe contabilidade, fotografia ou outro serviço."],
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="brand" aria-label="Permutas Guarujá — início">
      <span className={"brand-mark" + (light ? " brand-mark--light" : "")}>
        <img src={SITE_LINKS.logo} alt="" />
      </span>
      <span className={light ? "brand-name brand-name--light" : "brand-name"}>
        <strong>Permutas</strong>
        <small>GUARUJÁ</small>
      </span>
    </a>
  );
}

function CommunityLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "community-links community-links--compact" : "community-links"}>
      {communityLinks.map(({ label, href, icon: Icon }) => (
        <a href={href} key={label} className="community-link" target={href.includes("URL") ? undefined : "_blank"} rel="noreferrer">
          <Icon size={compact ? 15 : 16} strokeWidth={1.8} />
          <span>{label}</span>
          {!compact && <ArrowUpRight size={13} />}
        </a>
      ))}
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tradeSlide, setTradeSlide] = useState(0);
  const tradeCarouselRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  useScrollReveal();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const handleTradePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    dragStartX.current = event.clientX;
    dragDeltaX.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const handleTradePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    dragDeltaX.current = event.clientX - dragStartX.current;
  };
  const handleTradePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    if (Math.abs(dragDeltaX.current) > 42) {
      setTradeSlide((slide) => dragDeltaX.current < 0 ? Math.min(5, slide + 1) : Math.max(0, slide - 1));
    }
    dragStartX.current = null;
    dragDeltaX.current = 0;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <main>
      <header className={scrolled ? "site-header site-header--scrolled" : "site-header"} id="inicio">
        <div className="container nav-wrap">
          <Brand />
          <nav className={menuOpen ? "main-nav main-nav--open" : "main-nav"} aria-label="Navegação principal">
            <a href="#ideia" onClick={closeMenu}>A ideia</a>
            <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
            <a href="#para-quem" onClick={closeMenu}>Para quem é</a>
            <a href="#exemplos" onClick={closeMenu}>Exemplos</a>
            <a className="nav-cta" href={SITE_LINKS.facebookGroup} target={SITE_LINKS.facebookGroup.includes("URL") ? undefined : "_blank"} rel="noreferrer" onClick={closeMenu}>Quero participar <ArrowUpRight size={15} /></a>
          </nav>
          <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" /><div className="hero-flow" aria-hidden="true"><span className="flow-node flow-node--one">O que você tem</span><i /><span className="flow-node flow-node--two">Permuta</span><i /><span className="flow-node flow-node--three">O que você precisa</span></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--gold"><span /> Comunidade de negócios • Guarujá/SP</p>
            <h1 id="hero-title">Troque o que você tem <em>pelo que você precisa.</em></h1>
            <p className="hero-lead">Produtos, serviços, tempo e capacidade ociosa também podem gerar negócios.</p>
            <p className="hero-text">O Permutas Guarujá conecta empresas e profissionais que querem encontrar oportunidades de permuta de produtos e serviços.</p>
            <div className="hero-actions">
              <a className="button button--gold" href={SITE_LINKS.facebookGroup} target={SITE_LINKS.facebookGroup.includes("URL") ? undefined : "_blank"} rel="noreferrer">Entrar no grupo do Facebook <ArrowUpRight size={17} /></a>
              <a className="button button--outline-light" href={SITE_LINKS.whatsappGroup} target={SITE_LINKS.whatsappGroup.includes("URL") ? undefined : "_blank"} rel="noreferrer">Entrar no grupo do WhatsApp <ArrowUpRight size={17} /></a>
            </div>
            <CommunityLinks compact />
          </div>
          <div className="hero-note"><span>01</span><span className="hero-note-line" /><span>valor em movimento</span></div>
        </div>
        <a className="scroll-cue" href="#ideia" aria-label="Conheça a ideia"><span>Conheça a ideia</span><ChevronRight size={17} /></a>
      </section>

      <section className="idea section-light" id="ideia">
        <div className="container split-layout">
          <div className="section-intro reveal">
            <p className="eyebrow"><span /> A ideia</p>
            <h2>Você tem algo de valor. <em>Alguém pode estar procurando.</em></h2>
          </div>
          <div className="idea-body reveal">
            <p>Uma empresa pode ter estoque parado. Um profissional pode ter horários disponíveis. Uma empresa pode ter serviços que consegue oferecer. Outra pode ter exatamente aquilo que você precisa.</p>
            <p className="idea-highlight">A permuta transforma essas oportunidades em negócios.</p>
            <a className="text-link" href="#como-funciona">Entenda como funciona <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="how section-navy" id="como-funciona">
        <div className="container">
          <div className="section-heading section-heading--light">
            <div><p className="eyebrow eyebrow--gold"><span /> O caminho</p><h2>Como funciona</h2></div>
            <p>Uma comunidade que aproxima as partes. A negociação acontece diretamente entre quem oferece e quem procura.</p>
          </div>
          <div className="steps-grid">
            {steps.map(({ number, title, text, icon: Icon }) => <article className="step-card" key={number}><div className="step-top"><span>{number}</span><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="audience section-mist" id="para-quem" style={{ backgroundImage: `url(${patternImage})` }}>
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow"><span /> Quem participa</p><h2>Para empresas <em>e profissionais.</em></h2></div><p>Não importa o tamanho da operação. O que importa é ter algo de valor para oferecer e uma necessidade para encontrar.</p></div>
          <div className="audience-grid">{audiences.map(({ title, question, text, icon: Icon }) => <article className="audience-card" key={title}><div className="card-icon"><Icon size={22} /></div><p className="card-kicker">{title}</p><h3>{question}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={18} /></article>)}</div>
        </div>
      </section>

      <section className="benefits section-light">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow"><span /> Na prática</p><h2>Por que fazer <em>permuta?</em></h2></div><p>Usar melhor o que você já tem pode abrir espaço para novos negócios, relações e possibilidades.</p></div>
          <div className="benefits-grid">{benefits.map(([title, text, Icon], index) => <article className="benefit" key={title}><span className="benefit-number">0{index + 1}</span><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="practical-example section-light" id="exemplo-pratico"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span /> Exemplo prático</p><h2>Imagine esta <em>situação.</em></h2></div><p>Uma história ilustrativa para entender como uma permuta pode resolver uma necessidade real sem comprometer o caixa.</p></div><div className="trade-carousel reveal-stagger" ref={tradeCarouselRef} aria-label="Jornada ilustrativa de uma permuta entre uma loja e um profissional" onPointerDown={handleTradePointerDown} onPointerMove={handleTradePointerMove} onPointerUp={handleTradePointerEnd} onPointerCancel={handleTradePointerEnd} onPointerLeave={handleTradePointerEnd}><div className="trade-track trade-track--six" data-active-slide={tradeSlide} style={{ transform: "none" }}><article className="trade-card trade-card--visual"><img className="trade-card-image" src="https://raw.githubusercontent.com/RSA-Master/permutasguaruja/main/public/assets/permutas/carrossel-permutas-card-01.png" alt="Proprietária em sua loja de roupas refletindo sobre melhorias" /><div className="trade-card-caption"><span className="trade-index">01 / 06</span><p className="card-kicker">O ponto de partida</p><h3>Uma loja para melhorar</h3><strong>A proprietária quer deixar o espaço ainda mais bonito e funcional.</strong></div></article><article className="trade-card trade-card--visual"><img className="trade-card-image" src="https://raw.githubusercontent.com/RSA-Master/permutasguaruja/main/public/assets/permutas/carrossel-permutas-card-02.png" alt="Proprietária procurando profissionais disponíveis para permuta no grupo" /><div className="trade-card-caption"><span className="trade-index">02 / 06</span><p className="card-kicker">A busca começa</p><h3>Ela procura no grupo</h3><strong>Profissionais disponíveis para realizar um serviço por permuta.</strong></div></article><article className="trade-card trade-card--visual"><img className="trade-card-image" src="https://raw.githubusercontent.com/RSA-Master/permutasguaruja/main/public/assets/permutas/carrossel-permutas-card-03.png" alt="Profissional de obras com um horário disponível na agenda" /><div className="trade-card-caption"><span className="trade-index">03 / 06</span><p className="card-kicker">O profissional também ganha</p><h3>Preenche um horário</h3><strong>Um serviço que ocuparia um espaço vazio na agenda.</strong></div></article><article className="trade-card trade-card--visual"><img className="trade-card-image" src="https://raw.githubusercontent.com/RSA-Master/permutasguaruja/main/public/assets/permutas/carrossel-permutas-card-04.png" alt="Profissional realizando o rebaixamento de teto dentro da loja" /><div className="trade-card-caption"><span className="trade-index">04 / 06</span><p className="card-kicker">A troca acontece</p><h3>O serviço é realizado</h3><strong>O rebaixamento de teto melhora o ambiente da loja.</strong></div></article><article className="trade-card trade-card--visual"><img className="trade-card-image" src="https://raw.githubusercontent.com/RSA-Master/permutasguaruja/main/public/assets/permutas/carrossel-permutas-card-05.png" alt="Loja oferecendo créditos para consumo em seus produtos" /><div className="trade-card-caption"><span className="trade-index">05 / 06</span><p className="card-kicker">Sem comprometer o caixa</p><h3>Créditos para consumir</h3><strong>A loja oferece produtos no valor negociado pelo serviço.</strong></div></article><article className="trade-card trade-card--visual"><img className="trade-card-image" src="https://raw.githubusercontent.com/RSA-Master/permutasguaruja/main/public/assets/permutas/carrossel-permutas-card-06.png" alt="Duas participantes celebrando uma permuta que gera contatos e oportunidades" /><div className="trade-card-caption"><span className="trade-index">06 / 06</span><p className="card-kicker">O resultado</p><h3>Todos saem ganhando</h3><strong>A permuta gera valor, contatos e novas oportunidades.</strong></div></article></div><div className="trade-carousel-controls"><button type="button" aria-label="Etapa anterior" onClick={() => setTradeSlide((slide) => Math.max(0, slide - 1))} disabled={tradeSlide === 0}><ArrowLeft size={17} /></button><div className="trade-dots" aria-label={`Etapa ${tradeSlide + 1} de 6`}>{Array.from({ length: 6 }, (_, dot) => <button type="button" key={dot} aria-label={`Ir para etapa ${dot + 1}`} aria-current={tradeSlide === dot} onClick={() => setTradeSlide(dot)} />)}</div><button type="button" aria-label="Próxima etapa" onClick={() => setTradeSlide((slide) => Math.min(5, slide + 1))} disabled={tradeSlide === 5}><ArrowRight size={17} /></button></div></div><p className="trade-note">A negociação depende do interesse e das condições acordadas entre as partes. <strong>Cada permuta é combinada diretamente pelos participantes.</strong></p></div></section>

      <section className="capacity section-navy"><div className="container capacity-layout"><div className="capacity-copy reveal"><p className="eyebrow eyebrow--gold"><span /> Capacidade ociosa</p><h2>Seu tempo <em>também tem valor.</em></h2><p>Um profissional com horários disponíveis pode transformar esse tempo ocioso em produtos e serviços que precisa.</p></div><div className="capacity-flow reveal-stagger"><div className="capacity-item"><span>Fotógrafo</span><small>Tem uma data disponível.</small><b>↓</b><strong>Pode oferecer um ensaio.</strong><b>↓</b><em>Pode receber outro serviço em permuta.</em></div><div className="capacity-item"><span>Profissional de estética</span><small>Tem horários disponíveis.</small><b>↓</b><strong>Oferece seu atendimento.</strong><b>↓</b><em>Pode receber produtos ou serviços.</em></div></div></div></section>

      <section className="examples section-mist" id="exemplos">
        <div className="container examples-layout">
          <div className="examples-visual"><img src={detailImage} alt="Módulos conectados representando oferta e necessidade" loading="lazy" /><span className="visual-caption">Possibilidades ilustrativas</span></div>
          <div className="examples-content"><p className="eyebrow"><span /> Ideias para começar</p><h2>Como uma permuta <em>pode acontecer?</em></h2><div className="examples-list">{examples.map(([from, to, text]) => <div className="example-row" key={from}><div className="exchange-label"><strong>{from}</strong><span>↔</span><strong>{to}</strong></div><p>{text}</p></div>)}</div><p className="examples-note">As possibilidades dependem do que cada participante tem para oferecer e do que está procurando.</p></div>
        </div>
      </section>

      <section className="feature-callout section-navy"><div className="container feature-inner"><p className="eyebrow eyebrow--gold"><span /> Uma nova possibilidade</p><h2>Você não precisa necessariamente pagar em dinheiro por tudo o que sua empresa precisa.</h2><p>Talvez você já tenha algo que outra empresa ou profissional esteja procurando.</p><strong>Sua capacidade, seu estoque e seus serviços podem ter valor para alguém.</strong><a className="button button--gold" href={SITE_LINKS.facebookGroup} target={SITE_LINKS.facebookGroup.includes("URL") ? undefined : "_blank"} rel="noreferrer">Quero participar <ArrowUpRight size={17} /></a></div></section>

      <section className="final-cta section-light"><div className="container final-cta-inner"><div><p className="eyebrow"><span /> Faça parte</p><h2>Tem algo para oferecer?</h2><p>Pode ser que alguém no Guarujá esteja procurando exatamente por isso.</p><small>Entre gratuitamente na comunidade e comece a encontrar oportunidades de permuta.</small></div><div className="final-actions"><a className="button button--navy" href={SITE_LINKS.facebookGroup} target={SITE_LINKS.facebookGroup.includes("URL") ? undefined : "_blank"} rel="noreferrer">Entrar no grupo do Facebook <ArrowUpRight size={17} /></a><a className="button button--outline-navy" href={SITE_LINKS.whatsappGroup} target={SITE_LINKS.whatsappGroup.includes("URL") ? undefined : "_blank"} rel="noreferrer">Entrar no grupo do WhatsApp <ArrowUpRight size={17} /></a><CommunityLinks compact /></div></div></section>

      <section className="responsibility"><div className="container responsibility-inner"><div className="responsibility-mark"><Check size={17} /></div><div><h2>Sobre as negociações</h2><p>O Permutas Guarujá é uma comunidade criada para aproximar empresas e profissionais interessados em realizar permutas.</p><p>As negociações são realizadas diretamente entre as partes. Valores, condições, contratos, pagamentos, entrega de produtos e execução dos serviços são de responsabilidade exclusiva dos envolvidos. O Permutas Guarujá não participa das negociações e não garante os produtos ou serviços oferecidos pelos participantes.</p></div></div></section>

      <footer className="site-footer"><div className="container footer-grid"><div><Brand light /><p>Empresas e profissionais conectados para fazer negócios através da permuta.</p></div><div><p className="footer-title">Comunidade</p><CommunityLinks /></div><div><p className="footer-title">Uma iniciativa local</p><p>Foco inicial exclusivo em Guarujá/SP.</p><p className="footer-credit">Desenvolvido por <a href={SITE_LINKS.rsaWhatsapp} target="_blank" rel="noreferrer">RSA Digital Consultoria</a></p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Permutas Guarujá</span><span>Produtos e serviços em movimento.</span></div></footer>
    </main>
  );
}
