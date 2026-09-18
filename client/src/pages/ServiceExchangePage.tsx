import { ArrowRight, ArrowUpRight, Check, Handshake, PackageOpen, Search, Store, Wrench } from "lucide-react";
import { SITE_LINKS } from "@/const";
import { serviceExchangeFaqs } from "@/serviceExchangeFaqs";

const steps = [
  { number: "01", title: "Ofereça", text: "Publique o produto ou serviço que você pode oferecer em uma permuta.", icon: PackageOpen },
  { number: "02", title: "Encontre", text: "Veja o que outras empresas e profissionais estão procurando ou oferecendo.", icon: Search },
  { number: "03", title: "Negocie", text: "Entre em contato, combine os valores e defina diretamente as condições da troca.", icon: Handshake },
];

const audiences = [
  ["Empresas com produtos ou estoque", "Produtos parados também representam valor. Você pode encontrar alguém interessado e usar essa oportunidade para conseguir um serviço de que precisa.", Store],
  ["Profissionais com tempo disponível", "Se você tem horários disponíveis, pode utilizar sua capacidade de atendimento em uma permuta e receber algo que faça sentido para você.", Wrench],
  ["Prestadores de serviços", "Marketing, fotografia, design, manutenção, tecnologia, estética, consultoria, construção, alimentação e muitos outros serviços podem gerar oportunidades de troca.", Handshake],
] as const;

const benefits = [
  "Aproveitar melhor o que sua empresa já tem",
  "Utilizar capacidade ou horários que estariam parados",
  "Girar produtos e estoque",
  "Conseguir produtos ou serviços sem utilizar todo o pagamento em dinheiro",
  "Criar novos relacionamentos profissionais",
  "Encontrar novos clientes e parceiros",
  "Transformar recursos disponíveis em algo que você realmente precisa",
];

export default function ServiceExchangePage() {
  return (
    <main className="exchange-page">
      <header className="exchange-header">
        <div className="container exchange-header-inner">
          <a className="brand" href="/" aria-label="Permutas Guarujá — início"><span className="brand-mark"><img src={SITE_LINKS.logo} alt="" /></span><span className="brand-name"><strong>Permutas</strong><small>GUARUJÁ</small></span></a>
          <a className="exchange-header-link" href="/">Conhecer o Permutas Guarujá <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <section className="exchange-hero">
        <div className="exchange-hero-shape" aria-hidden="true" />
        <div className="container exchange-hero-inner">
          <div className="exchange-hero-copy">
            <p className="eyebrow eyebrow--gold"><span /> Comunidade local de permutas</p>
            <h1>Grupo de Troca de Serviços em Guarujá</h1>
            <p className="exchange-hero-lead">Encontre empresas e profissionais que podem trocar serviços, produtos e outras formas de valor com você.</p>
            <p className="exchange-hero-text">Você oferece o que sabe fazer e procura aquilo que precisa. A troca pode acontecer entre serviços, entre produtos ou entre produtos e serviços.</p>
            <div className="exchange-actions"><a className="button button--gold" href={SITE_LINKS.facebookGroup} target="_blank" rel="noreferrer">Participar gratuitamente <ArrowUpRight size={17} /></a><a className="button button--outline-light" href="/">Conhecer o Permutas Guarujá <ArrowRight size={17} /></a></div>
          </div>
          <div className="exchange-flow" aria-label="O que você tem, troca, o que você precisa"><span>O que você tem</span><i /><strong>Troca</strong><i /><span>O que você precisa</span></div>
        </div>
      </section>

      <section className="exchange-section exchange-section-light">
        <div className="container exchange-two-column"><div><p className="eyebrow"><span /> Entenda a ideia</p><h2>O que é <em>troca de serviços?</em></h2></div><div className="exchange-copy"><p>Troca de serviços é quando duas empresas ou profissionais utilizam aquilo que sabem fazer para conseguir algo de que precisam, sem que a negociação precise acontecer somente em dinheiro.</p><p>O serviço de uma pessoa pode ter valor para outra. Uma habilidade, um produto, um horário disponível ou um estoque parado podem abrir caminho para uma troca interessante para os dois lados.</p></div></div>
      </section>

      <section className="exchange-section exchange-section-navy" id="como-funciona"><div className="container"><div className="exchange-section-heading"><div><p className="eyebrow eyebrow--gold"><span /> Passo a passo</p><h2>Como <em>funciona?</em></h2></div><p>A comunidade aproxima pessoas. A negociação acontece diretamente entre os participantes.</p></div><div className="exchange-steps">{steps.map(({ number, title, text, icon: Icon }) => <article className="exchange-step" key={number}><div className="exchange-step-top"><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="exchange-section exchange-section-mist"><div className="container"><div className="exchange-section-heading"><div><p className="eyebrow"><span /> Possibilidades</p><h2>O que você <em>pode trocar?</em></h2></div><p>Você não precisa trocar exatamente o mesmo tipo de serviço. O importante é encontrar algo que tenha valor para as duas partes.</p></div><div className="exchange-types"><div><strong>Serviço ↔ serviço</strong><span>Fotografia por marketing, manutenção por design ou consultoria por tecnologia.</span></div><div><strong>Serviço ↔ produto</strong><span>Um atendimento profissional em troca de produtos que sua empresa ou família precisa.</span></div><div><strong>Produto ↔ serviço</strong><span>Estoque, alimentos ou materiais podem fazer sentido para quem oferece um serviço.</span></div><div><strong>Produto ↔ produto</strong><span>Produtos diferentes também podem ser combinados quando existe interesse dos dois lados.</span></div></div></div></section>

      <section className="exchange-section exchange-example"><div className="container exchange-example-inner"><div><p className="eyebrow eyebrow--gold"><span /> Exemplo ilustrativo</p><h2>Imagine <em>esta situação.</em></h2></div><div className="exchange-example-card"><p>Uma loja de roupas precisa fazer algumas melhorias no estabelecimento: rebaixamento de teto, pintura, iluminação, fachada ou outros serviços de manutenção.</p><p>Em vez de procurar apenas alguém para contratar e pagar em dinheiro, a empresa pode procurar no grupo um profissional que tenha interesse em receber produtos da loja, total ou parcialmente, em uma permuta.</p><strong>Você tem algo de valor. Alguém pode estar procurando justamente por isso.</strong><small>O exemplo é apenas ilustrativo. Cada participante define diretamente as condições da sua negociação.</small></div></div></section>

      <section className="exchange-section exchange-section-light"><div className="container"><div className="exchange-section-heading"><div><p className="eyebrow"><span /> Quem pode participar</p><h2>Para empresas e <em>profissionais.</em></h2></div><p>A troca de serviços não fica limitada a uma categoria. Toda oferta depende do interesse e do acordo entre os participantes.</p></div><div className="exchange-audiences">{audiences.map(([title, text, Icon]) => <article key={title}><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="exchange-section exchange-section-mist"><div className="container exchange-two-column"><div><p className="eyebrow"><span /> Atuação local</p><h2>Troca de Serviços <em>em Guarujá.</em></h2></div><div className="exchange-copy"><p>O objetivo do Permutas Guarujá é aproximar empresas e profissionais que atuam na cidade e querem encontrar oportunidades de troca.</p><p>Se você procura um grupo de troca de serviços em Guarujá, pode participar da comunidade, publicar o que oferece e procurar oportunidades entre as publicações. A proposta é simples: trocar serviços, produtos e outras formas de valor de maneira direta e consciente.</p></div></div></section>

      <section className="exchange-section exchange-section-light"><div className="container exchange-benefits"><div><p className="eyebrow"><span /> Possíveis benefícios</p><h2>Por que fazer uma <em>troca?</em></h2></div><ul>{benefits.map((benefit) => <li key={benefit}><Check size={16} />{benefit}</li>)}</ul></div></section>

      <section className="exchange-section exchange-faq" id="faq"><div className="container"><div className="exchange-section-heading"><div><p className="eyebrow eyebrow--gold"><span /> Dúvidas frequentes</p><h2>Antes de <em>participar.</em></h2></div><p>Respostas diretas para quem está conhecendo uma troca de produtos e serviços.</p></div><div className="exchange-faq-list">{serviceExchangeFaqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="exchange-final"><div className="container exchange-final-inner"><p className="eyebrow eyebrow--gold"><span /> Faça parte</p><h2>Tem algo para oferecer? Talvez alguém esteja procurando.</h2><p>Entre para o Permutas Guarujá, publique o que você oferece e descubra o que outras empresas e profissionais estão procurando.</p><a className="button button--gold" href={SITE_LINKS.facebookGroup} target="_blank" rel="noreferrer">Participar gratuitamente <ArrowUpRight size={17} /></a></div></section>

      <section className="exchange-responsibility"><div className="container"><Check size={17} /><p>O Permutas Guarujá é uma comunidade que conecta empresas e profissionais. As condições da permuta, valores, prazos, pagamentos, entrega e execução dos produtos ou serviços são definidos diretamente entre os participantes. Antes de fechar qualquer negociação, confirme todas as condições com a outra parte.</p></div></section>
      <footer className="exchange-footer"><div className="container"><a href="/">Voltar para Permutas Guarujá</a><div><a href={SITE_LINKS.facebookPage} target="_blank" rel="noreferrer">Facebook</a><a href={SITE_LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={SITE_LINKS.whatsappGroup} target="_blank" rel="noreferrer">WhatsApp</a></div></div></footer>
    </main>
  );
}
