import { useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight, BrainCircuit, BriefcaseBusiness, CheckCircle2, ChevronRight, ExternalLink, Gauge, Linkedin, Mail, Menu, MessageCircle, Network, Sparkles, Target, X, Zap } from "lucide-react";

const profileImage = "/manus-storage/wanderson-viegas_92b86290.png";

const timeline = [
  { period: "Mai 2025 — atual", role: "Consultor Sênior", company: "Nechain Consultoria", text: "Consultoria em planejamento logístico e produção, análise de dados e definição de KPIs. Desenvolvimento de controles e métricas de performance operacional para decisões data-driven." },
  { period: "Nov 2024 — Abr 2025", role: "Supervisor de Operações", company: "RPM Soluções em Logística", text: "Gestão de equipes em First Mile, Last Mile e Cross-Docking. Padronização de fretes e otimização da tabela, reduzindo custos de transporte em 26%, com SLA de 99,3%." },
  { period: "Out 2021 — Out 2024", role: "Coordenador de Logística", company: "Mastro Escapamentos", text: "Gestão de toda a cadeia de suprimentos interna, almoxarifados, armazenagem e movimentação. Automação de processos e implantação de CT-e, reduzindo erro de nota fiscal em 98%." },
  { period: "Jun 2023 — Out 2024", role: "Coordenador de PCP/PCM", company: "IEATEC | Indústria", text: "Coordenação do planejamento estratégico de produção, atendimento e carteira de pedidos, com programação e acompanhamento de entregas e compromissos com o cliente." },
];

const capabilities = [
  { icon: BrainCircuit, title: "Inteligência artificial aplicada", text: "Criação de soluções, conteúdos, análises e automações com IA para acelerar decisões e transformar conhecimento em resultado." },
  { icon: Network, title: "Métodos & processos", text: "Desenho, padronização e evolução de métodos operacionais que tornam a execução mais previsível, escalável e eficiente." },
  { icon: Gauge, title: "Indicadores de performance", text: "Definição de KPIs, rotinas de acompanhamento e leitura gerencial para conectar operação, estratégia e performance." },
  { icon: Target, title: "Gestão integrada", text: "Liderança de equipes, projetos e prioridades com foco em custo, qualidade, prazo, nível de serviço e melhoria contínua." },
];

const skills = ["Supply Chain", "PCP / PCM", "WMS & ERP", "Gestão de Estoque", "Power BI", "KPI & SLA", "Gestão de Armazéns", "Projetos", "IA aplicada", "Lean & Melhoria contínua"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"trajetoria" | "competencias">("trajetoria");
  const [showAll, setShowAll] = useState(false);
  const visibleTimeline = showAll ? timeline : timeline.slice(0, 3);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="nav-wrap">
          <button className="brand" onClick={() => scrollTo("inicio")} aria-label="Voltar ao início"><span>WV</span><div><strong>Wanderson Viegas</strong><small>Logística · Supply Chain · IA</small></div></button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollTo("sobre")}>Sobre</button><button onClick={() => scrollTo("competencias")}>Competências</button><button onClick={() => scrollTo("trajetoria")}>Trajetória</button><button onClick={() => scrollTo("contato")} className="nav-cta">Vamos conversar <ArrowUpRight size={15}/></button>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-grid"></div><div className="hero-glow"></div>
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse-dot"></span> Disponível para novos desafios</div>
              <h1>Operações inteligentes.<br/><em>Resultados que movem.</em></h1>
              <p className="hero-lead">Transformo complexidade operacional em <strong>métodos, processos e indicadores</strong> que geram clareza, performance e crescimento sustentável.</p>
              <div className="hero-actions"><button className="button-primary" onClick={() => scrollTo("sobre")}>Conheça minha trajetória <ArrowDown size={17}/></button><button className="button-ghost" onClick={() => scrollTo("contato")}>Entrar em contato <ArrowUpRight size={17}/></button></div>
              <div className="hero-proof"><div className="proof-item"><strong>99,3%</strong><span>SLA operacional</span></div><div className="proof-item"><strong>26%</strong><span>redução em fretes</span></div><div className="proof-item"><strong>98%</strong><span>menos erros fiscais</span></div></div>
            </div>
            <div className="hero-visual"><div className="portrait-frame"><div className="portrait-accent"></div><img src={profileImage} alt="Wanderson Viegas"/><div className="portrait-label"><span>01</span><div><strong>Wanderson Viegas</strong><small>Consultor Sênior</small></div></div></div><div className="floating-card ai-card"><Sparkles size={17}/><div><strong>IA aplicada</strong><span>à gestão</span></div></div><div className="floating-card metric-card"><Zap size={17}/><div><strong>Data-driven</strong><span>decisões melhores</span></div></div></div>
          </div>
          <div className="scroll-hint"><span>Role para explorar</span><div></div></div>
        </section>

        <section id="sobre" className="section about-section"><div className="container about-grid"><div className="section-kicker">/ 01 — SOBRE MIM</div><div className="about-main"><h2>Experiência que organiza. <span>Visão que antecipa.</span></h2><p>Profissional de Logística e Supply Chain com MBA em Gestão da Cadeia de Suprimentos e sólida experiência em planejamento, controle de produção, armazenagem, transportes e gestão de equipes.</p><p>Minha atuação conecta o chão da operação à visão estratégica: crio <strong>métodos, processos e indicadores</strong> que tornam a performance visível — e uso a <strong>inteligência artificial</strong> como alavanca para analisar, criar e evoluir continuamente.</p><div className="signature-line"><div className="signature-mark">WV</div><span>Construir clareza para<br/>gerar movimento.</span></div></div></div></section>

        <section id="competencias" className="section capabilities-section"><div className="container"><div className="section-heading"><div><div className="section-kicker">/ 02 — COMO EU GERO VALOR</div><h2>Competências que <span>conectam tudo.</span></h2></div><p>Uma abordagem integrada para transformar desafios complexos em sistemas simples de operar e medir.</p></div><div className="capability-grid">{capabilities.map(({icon: Icon, title, text}, i) => <article className="capability-card" key={title}><div className="card-number">0{i+1}</div><div className="icon-wrap"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={20}/></article>)}</div></div></section>

        <section className="section results-section"><div className="container"><div className="results-banner"><div><div className="section-kicker light">/ IMPACTO EM NÚMEROS</div><h2>Performance não é discurso.<br/><span>É o que fica no indicador.</span></h2></div><div className="results-list"><div><strong>26<span>%</span></strong><p>redução de custos<br/>em transporte</p></div><div><strong>99,3<span>%</span></strong><p>nível de serviço<br/>mantido</p></div><div><strong>98<span>%</span></strong><p>redução de erros<br/>em notas fiscais</p></div></div></div></div></section>

        <section id="trajetoria" className="section journey-section"><div className="container"><div className="section-heading journey-heading"><div><div className="section-kicker">/ 03 — TRAJETÓRIA</div><h2>Uma carreira em <span>movimento.</span></h2></div><div className="tabs"><button className={activeTab === "trajetoria" ? "active" : ""} onClick={() => setActiveTab("trajetoria")}>Experiência</button><button className={activeTab === "competencias" ? "active" : ""} onClick={() => setActiveTab("competencias")}>Stack de habilidades</button></div></div>{activeTab === "trajetoria" ? <div className="timeline">{visibleTimeline.map((item, i) => <div className="timeline-item" key={item.company}><div className="timeline-marker"><span></span></div><div className="timeline-period">{item.period}</div><div className="timeline-body"><h3>{item.role}</h3><div className="company">{item.company}</div><p>{item.text}</p></div><ChevronRight className="timeline-arrow" size={21}/></div>)}<button className="load-more" onClick={() => setShowAll(!showAll)}>{showAll ? "Ver menos" : "Ver toda a trajetória"} <ArrowDown size={16} className={showAll ? "rotate" : ""}/></button></div> : <div className="skills-panel"><div className="skills-intro"><BrainCircuit size={32}/><h3>Ferramentas para pensar, criar e executar.</h3><p>Da gestão tradicional à inteligência artificial, um repertório construído para gerar impacto real.</p></div><div className="skill-cloud">{skills.map((skill, i) => <span key={skill} className={i === 8 ? "featured" : ""}>{skill}</span>)}</div></div>}</div></section>

        <section id="contato" className="contact-section"><div className="container contact-grid"><div><div className="section-kicker light">/ 04 — CONEXÃO</div><h2>Vamos transformar<br/><em>possibilidades em prática?</em></h2><p>Se você busca alguém para estruturar operações, liderar mudanças e criar soluções com inteligência, vamos conversar.</p></div><div className="contact-actions"><a href="mailto:wanderson.viegas@gmail.com" className="contact-link"><Mail size={19}/><span><small>E-mail</small>wanderson.viegas@gmail.com</span><ArrowUpRight size={18}/></a><a href="https://www.linkedin.com/in/wanderson-viegas" target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={19}/><span><small>LinkedIn</small>/in/wanderson-viegas</span><ExternalLink size={17}/></a><a href="https://wa.me/5519988276951" target="_blank" rel="noreferrer" className="contact-link"><MessageCircle size={19}/><span><small>WhatsApp</small>Falar comigo</span><ArrowUpRight size={18}/></a></div></div></section>
      </main>
      <footer><div className="container footer-inner"><span>© 2026 Wanderson Viegas</span><span>Logística · Supply Chain · IA</span><button onClick={() => scrollTo("inicio")}>Voltar ao topo <ArrowUp size={15}/></button></div></footer>
    </div>
  );
}

export { CheckCircle2, BriefcaseBusiness };
