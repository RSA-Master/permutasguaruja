// Editorial Atlântico: asymmetric editorial narrative, navy contrast, gold as an action signal.
import {
  ArrowDownRight,
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
import { useEffect, useState } from "react";
import { SITE_LINKS } from "@/const";

const heroImage = "/manus-storage/permutas-guaruja-hero_cca0f62e.png";
const patternImage = "/manus-storage/permutas-guaruja-pattern_67c32b1a.png";
const detailImage = "/manus-storage/permutas-guaruja-detail_7711031a.png";

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
  useScrollReveal();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);

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

      <section className="practical-example section-light" id="exemplo-pratico"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span /> Exemplo prático</p><h2>Imagine esta <em>situação.</em></h2></div><p>Uma forma simples de visualizar como uma permuta pode aproximar necessidades diferentes.</p></div><div className="trade-flow reveal-stagger"><article className="trade-card trade-card--store"><span className="trade-index">01</span><Store size={23} /><p className="card-kicker">Loja de roupas</p><h3>Oferece</h3><strong>Roupas e produtos da loja</strong></article><div className="trade-connector"><ArrowRight size={20} /><span>negociação</span></div><article className="trade-card trade-card--exchange"><span className="trade-index">02</span><Handshake size={23} /><p className="card-kicker">Permuta</p><h3>Conecta</h3><strong>Valor combinado entre as partes</strong></article><div className="trade-connector"><ArrowRight size={20} /><span>necessidade</span></div><article className="trade-card trade-card--professional"><span className="trade-index">03</span><Wrench size={23} /><p className="card-kicker">Profissional</p><h3>Recebe</h3><strong>Rebaixamento de teto + reforma da fachada</strong></article></div><p className="trade-note">A loja fornece produtos no valor negociado e recebe os serviços necessários. <strong>Todos saem ganhando.</strong> Os exemplos são ilustrativos; cada permuta é negociada diretamente entre os participantes.</p></div></section>

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

      <a className="mobile-community-cta" href={SITE_LINKS.facebookGroup} target="_blank" rel="noreferrer">Entrar na comunidade <ArrowUpRight size={15} /></a><footer className="site-footer"><div className="container footer-grid"><div><Brand light /><p>Empresas e profissionais conectados para fazer negócios através da permuta.</p></div><div><p className="footer-title">Comunidade</p><CommunityLinks /></div><div><p className="footer-title">Uma iniciativa local</p><p>Foco inicial exclusivo em Guarujá/SP.</p><p className="footer-credit">Desenvolvido por <a href={SITE_LINKS.rsaWhatsapp} target="_blank" rel="noreferrer">RSA Digital Consultoria</a></p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Permutas Guarujá</span><span>Produtos e serviços em movimento.</span></div></footer>
    </main>
  );
}
