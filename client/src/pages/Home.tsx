import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight, BrainCircuit, BriefcaseBusiness, CheckCircle2, ChevronRight, ExternalLink, Gauge, Globe2, Linkedin, Mail, Menu, MessageCircle, Network, Sparkles, Target, X, Zap } from "lucide-react";

const profileImage = "/manus-storage/wanderson-viegas-reframed_65517f21.png";
type Language = "pt" | "en" | "es";

const i18n = {
  pt: {
    languageLabel: "Idioma", languageNames: { pt: "Português", en: "Inglês", es: "Espanhol" },
    nav: ["Sobre", "Competências", "Trajetória"], navCta: "Vamos conversar",
    brandSub: "Logística · Supply Chain · IA", available: "Disponível para novos desafios",
    heroTitle: <>Operações inteligentes.<br/><em>Resultados que movem.</em></>,
    heroLead: <>Transformo complexidade operacional em <strong>métodos, processos e indicadores</strong> que geram clareza, performance e crescimento sustentável.</>,
    heroPrimary: "Conheça minha trajetória", heroSecondary: "Entrar em contato", scrollHint: "Role para explorar",
    proofs: ["SLA operacional", "redução em fretes", "menos erros fiscais"],
    aboutKicker: "/ 01 — SOBRE MIM", aboutTitle: <>Experiência que organiza. <span>Visão que antecipa.</span></>,
    aboutText1: "Profissional de Logística e Supply Chain com MBA em Gestão da Cadeia de Suprimentos e sólida experiência em planejamento, controle de produção, armazenagem, transportes e gestão de equipes.",
    aboutText2: <>Minha atuação conecta o chão da operação à visão estratégica: crio <strong>métodos, processos e indicadores</strong> que tornam a performance visível — e uso a <strong>inteligência artificial</strong> como alavanca para analisar, criar e evoluir continuamente.</>,
    signature: <>Construir clareza para<br/>gerar movimento.</>,
    capabilitiesKicker: "/ 02 — COMO EU GERO VALOR", capabilitiesTitle: <>Competências que <span>conectam tudo.</span></>,
    capabilitiesIntro: "Uma abordagem integrada para transformar desafios complexos em sistemas simples de operar e medir.",
    capabilities: [
      ["Inteligência artificial aplicada", "Criação de soluções, conteúdos, análises e automações com IA para acelerar decisões e transformar conhecimento em resultado."],
      ["Métodos & processos", "Desenho, padronização e evolução de métodos operacionais que tornam a execução mais previsível, escalável e eficiente."],
      ["Indicadores de performance", "Definição de KPIs, rotinas de acompanhamento e leitura gerencial para conectar operação, estratégia e performance."],
      ["Gestão integrada", "Liderança de equipes, projetos e prioridades com foco em custo, qualidade, prazo, nível de serviço e melhoria contínua."],
    ],
    impactKicker: "/ IMPACTO EM NÚMEROS", impactTitle: <>Performance não é discurso.<br/><span>É o que fica no indicador.</span></>,
    impactLabels: [<>redução de custos<br/>em transporte</>, <>nível de serviço<br/>mantido</>, <>redução de erros<br/>em notas fiscais</>],
    journeyKicker: "/ 03 — TRAJETÓRIA", journeyTitle: <>Uma carreira em <span>movimento.</span></>, experience: "Experiência", stack: "Stack de habilidades",
    timeline: [
      ["Mai 2025 — atual", "Consultor Sênior", "Nechain Consultoria", "Consultoria em planejamento logístico e produção, análise de dados e definição de KPIs. Desenvolvimento de controles e métricas de performance operacional para decisões data-driven."],
      ["Nov 2024 — Abr 2025", "Supervisor de Operações", "RPM Soluções em Logística", "Gestão de equipes em First Mile, Last Mile e Cross-Docking. Padronização de fretes e otimização da tabela, reduzindo custos de transporte em 26%, com SLA de 99,3%."],
      ["Out 2021 — Out 2024", "Coordenador de Logística", "Mastro Escapamentos", "Gestão de toda a cadeia de suprimentos interna, almoxarifados, armazenagem e movimentação. Automação de processos e implantação de CT-e, reduzindo erro de nota fiscal em 98%."],
      ["Jun 2023 — Out 2024", "Coordenador de PCP/PCM", "IEATEC | Indústria", "Coordenação do planejamento estratégico de produção, atendimento e carteira de pedidos, com programação e acompanhamento de entregas e compromissos com o cliente."],
    ],
    loadMore: "Ver toda a trajetória", loadLess: "Ver menos", skillTitle: "Ferramentas para pensar, criar e executar.", skillText: "Da gestão tradicional à inteligência artificial, um repertório construído para gerar impacto real.",
    skills: ["Supply Chain", "PCP / PCM", "WMS & ERP", "Gestão de Estoque", "Power BI", "KPI & SLA", "Gestão de Armazéns", "Projetos", "IA aplicada", "Lean & Melhoria contínua"],
    contactKicker: "/ 04 — CONEXÃO", contactTitle: <>Vamos transformar<br/><em>possibilidades em prática?</em></>, contactText: "Se você busca alguém para estruturar operações, liderar mudanças e criar soluções com inteligência, vamos conversar.", email: "E-mail", phone: "Celular", linkedin: "LinkedIn", whatsapp: "WhatsApp", talk: "Falar comigo", backTop: "Voltar ao topo",
  },
  en: {
    languageLabel: "Language", languageNames: { pt: "Portuguese", en: "English", es: "Spanish" },
    nav: ["About", "Capabilities", "Journey"], navCta: "Let's talk",
    brandSub: "Logistics · Supply Chain · AI", available: "Available for new challenges",
    heroTitle: <>Intelligent operations.<br/><em>Results that move.</em></>,
    heroLead: <>I turn operational complexity into <strong>methods, processes and performance indicators</strong> that create clarity, performance and sustainable growth.</>,
    heroPrimary: "Explore my journey", heroSecondary: "Get in touch", scrollHint: "Scroll to explore",
    proofs: ["Operational SLA", "freight reduction", "fewer tax errors"],
    aboutKicker: "/ 01 — ABOUT ME", aboutTitle: <>Experience that organizes. <span>Vision that anticipates.</span></>,
    aboutText1: "Logistics and Supply Chain professional with an MBA in Supply Chain Management and solid experience in planning, production control, warehousing, transportation and team leadership.",
    aboutText2: <>I connect the operational floor to the strategic view: I create <strong>methods, processes and performance indicators</strong> that make performance visible — and use <strong>artificial intelligence</strong> to analyze, create and continuously improve.</>,
    signature: <>Build clarity to<br/>create momentum.</>,
    capabilitiesKicker: "/ 02 — HOW I CREATE VALUE", capabilitiesTitle: <>Capabilities that <span>connect everything.</span></>, capabilitiesIntro: "An integrated approach to turn complex challenges into systems that are simple to operate and measure.",
    capabilities: [["Applied artificial intelligence", "Creating AI-powered solutions, content, analysis and automation to accelerate decisions and turn knowledge into results."], ["Methods & processes", "Designing, standardizing and evolving operational methods that make execution more predictable, scalable and efficient."], ["Performance indicators", "Defining KPIs, monitoring routines and management insights to connect operations, strategy and performance."], ["Integrated management", "Leading teams, projects and priorities with focus on cost, quality, deadlines, service level and continuous improvement."]],
    impactKicker: "/ IMPACT IN NUMBERS", impactTitle: <>Performance is not a speech.<br/><span>It is what remains in the indicator.</span></>, impactLabels: [<>cost reduction<br/>in transportation</>, <>service level<br/>maintained</>, <>fewer errors<br/>in invoices</>],
    journeyKicker: "/ 03 — JOURNEY", journeyTitle: <>A career in <span>motion.</span></>, experience: "Experience", stack: "Skills stack",
    timeline: [["May 2025 — present", "Senior Consultant", "Nechain Consultoria", "Consulting in logistics and production planning, data analysis and KPI definition. Developing controls and operational performance metrics for data-driven decisions."], ["Nov 2024 — Apr 2025", "Operations Supervisor", "RPM Soluções em Logística", "Managed First Mile, Last Mile and Cross-Docking teams. Standardized freight tables and optimized costs by 26%, sustaining a 99.3% SLA."], ["Oct 2021 — Oct 2024", "Logistics Coordinator", "Mastro Escapamentos", "Managed the internal supply chain, warehouses and material movement. Automated processes and implemented CT-e, reducing invoice errors by 98%."], ["Jun 2023 — Oct 2024", "PCP/PCM Coordinator", "IEATEC | Industry", "Coordinated strategic production planning, customer service, order portfolio and delivery scheduling." ]],
    loadMore: "View full journey", loadLess: "View less", skillTitle: "Tools to think, create and execute.", skillText: "From traditional management to artificial intelligence, a toolkit built for real impact.", skills: ["Supply Chain", "PCP / PCM", "WMS & ERP", "Inventory Management", "Power BI", "KPI & SLA", "Warehouse Management", "Projects", "Applied AI", "Lean & Continuous improvement"],
    contactKicker: "/ 04 — CONNECTION", contactTitle: <>Let's turn<br/><em>possibilities into practice?</em></>, contactText: "If you are looking for someone to structure operations, lead change and create intelligent solutions, let's talk.", email: "Email", phone: "Phone", linkedin: "LinkedIn", whatsapp: "WhatsApp", talk: "Talk to me", backTop: "Back to top",
  },
  es: {
    languageLabel: "Idioma", languageNames: { pt: "Portugués", en: "Inglés", es: "Español" },
    nav: ["Sobre mí", "Competencias", "Trayectoria"], navCta: "Hablemos",
    brandSub: "Logística · Supply Chain · IA", available: "Disponible para nuevos desafíos",
    heroTitle: <>Operaciones inteligentes.<br/><em>Resultados que avanzan.</em></>,
    heroLead: <>Transformo la complejidad operativa en <strong>métodos, procesos e indicadores</strong> que generan claridad, rendimiento y crecimiento sostenible.</>,
    heroPrimary: "Conoce mi trayectoria", heroSecondary: "Contactarme", scrollHint: "Desplázate para explorar",
    proofs: ["SLA operativo", "reducción en fletes", "menos errores fiscales"],
    aboutKicker: "/ 01 — SOBRE MÍ", aboutTitle: <>Experiencia que organiza. <span>Visión que anticipa.</span></>,
    aboutText1: "Profesional de Logística y Supply Chain con MBA en Gestión de la Cadena de Suministro y sólida experiencia en planificación, control de producción, almacenamiento, transporte y liderazgo de equipos.",
    aboutText2: <>Conecto la operación con la visión estratégica: creo <strong>métodos, procesos e indicadores</strong> que hacen visible el rendimiento — y utilizo la <strong>inteligencia artificial</strong> para analizar, crear y evolucionar continuamente.</>,
    signature: <>Crear claridad para<br/>generar movimiento.</>,
    capabilitiesKicker: "/ 02 — CÓMO GENERO VALOR", capabilitiesTitle: <>Competencias que <span>conectan todo.</span></>, capabilitiesIntro: "Un enfoque integrado para transformar desafíos complejos en sistemas simples de operar y medir.",
    capabilities: [["Inteligencia artificial aplicada", "Creación de soluciones, contenidos, análisis y automatizaciones con IA para acelerar decisiones y convertir conocimiento en resultados."], ["Métodos y procesos", "Diseño, estandarización y evolución de métodos operativos que hacen la ejecución más predecible, escalable y eficiente."], ["Indicadores de rendimiento", "Definición de KPIs, rutinas de seguimiento y lectura gerencial para conectar operación, estrategia y rendimiento."], ["Gestión integrada", "Liderazgo de equipos, proyectos y prioridades con foco en costo, calidad, plazo, nivel de servicio y mejora continua."]],
    impactKicker: "/ IMPACTO EN NÚMEROS", impactTitle: <>El rendimiento no es discurso.<br/><span>Es lo que queda en el indicador.</span></>, impactLabels: [<>reducción de costos<br/>en transporte</>, <>nivel de servicio<br/>mantenido</>, <>reducción de errores<br/>en facturas</>],
    journeyKicker: "/ 03 — TRAYECTORIA", journeyTitle: <>Una carrera en <span>movimiento.</span></>, experience: "Experiencia", stack: "Habilidades",
    timeline: [["May 2025 — actual", "Consultor Senior", "Nechain Consultoria", "Consultoría en planificación logística y de producción, análisis de datos y definición de KPIs. Desarrollo de controles y métricas de rendimiento operacional para decisiones basadas en datos."], ["Nov 2024 — Abr 2025", "Supervisor de Operaciones", "RPM Soluções em Logística", "Gestión de equipos de First Mile, Last Mile y Cross-Docking. Estandarización de fletes y optimización de costos en 26%, con SLA de 99,3%."], ["Oct 2021 — Oct 2024", "Coordinador de Logística", "Mastro Escapamentos", "Gestión de la cadena de suministro interna, almacenes y movimiento de materiales. Automatización e implantación de CT-e, reduciendo errores de facturación en 98%."], ["Jun 2023 — Oct 2024", "Coordinador de PCP/PCM", "IEATEC | Industria", "Coordinación de la planificación estratégica de producción, atención, cartera de pedidos y programación de entregas."]],
    loadMore: "Ver toda la trayectoria", loadLess: "Ver menos", skillTitle: "Herramientas para pensar, crear y ejecutar.", skillText: "De la gestión tradicional a la inteligencia artificial, un repertorio construido para generar impacto real.", skills: ["Supply Chain", "PCP / PCM", "WMS & ERP", "Gestión de Inventario", "Power BI", "KPI & SLA", "Gestión de Almacenes", "Proyectos", "IA aplicada", "Lean y mejora continua"],
    contactKicker: "/ 04 — CONEXIÓN", contactTitle: <>¿Convertimos<br/><em>posibilidades en práctica?</em></>, contactText: "Si buscas a alguien para estructurar operaciones, liderar cambios y crear soluciones inteligentes, hablemos.", email: "Correo electrónico", phone: "Celular", linkedin: "LinkedIn", whatsapp: "WhatsApp", talk: "Hablar conmigo", backTop: "Volver arriba",
  },
} as const;

const capabilityIcons = [BrainCircuit, Network, Gauge, Target];

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "pt";
    const saved = window.localStorage.getItem("wanderson-language");
    return saved === "en" || saved === "es" ? saved : "pt";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"trajetoria" | "competencias">("trajetoria");
  const [showAll, setShowAll] = useState(false);
  const content = i18n[language];
  const visibleTimeline = showAll ? content.timeline : content.timeline.slice(0, 3);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    window.localStorage.setItem("wanderson-language", language);
  }, [language]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="nav-wrap">
          <button className="brand" onClick={() => scrollTo("inicio")} aria-label="Voltar ao início"><span>WV</span><div><strong>Wanderson Viegas</strong><small>{content.brandSub}</small></div></button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollTo("sobre")}>{content.nav[0]}</button><button onClick={() => scrollTo("competencias")}>{content.nav[1]}</button><button onClick={() => scrollTo("trajetoria")}>{content.nav[2]}</button><button onClick={() => scrollTo("contato")} className="nav-cta">{content.navCta} <ArrowUpRight size={15}/></button>
            <label className="language-picker"><Globe2 size={15}/><span className="sr-only">{content.languageLabel}</span><select value={language} onChange={(event) => setLanguage(event.target.value as Language)} aria-label={content.languageLabel}><option value="pt">PT</option><option value="en">EN</option><option value="es">ES</option></select></label>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero"><div className="hero-grid"></div><div className="hero-glow"></div><div className="container hero-content"><div className="hero-copy"><div className="eyebrow"><span className="pulse-dot"></span> {content.available}</div><h1>{content.heroTitle}</h1><p className="hero-lead">{content.heroLead}</p><div className="hero-actions"><button className="button-primary" onClick={() => scrollTo("sobre")}>{content.heroPrimary} <ArrowDown size={17}/></button><button className="button-ghost" onClick={() => scrollTo("contato")}>{content.heroSecondary} <ArrowUpRight size={17}/></button></div><div className="hero-proof"><div className="proof-item"><strong>99,3%</strong><span>{content.proofs[0]}</span></div><div className="proof-item"><strong>26%</strong><span>{content.proofs[1]}</span></div><div className="proof-item"><strong>98%</strong><span>{content.proofs[2]}</span></div></div></div><div className="hero-visual"><div className="portrait-frame"><div className="portrait-accent"></div><img src={profileImage} alt="Wanderson Viegas"/><div className="portrait-label"><span>01</span><div><strong>Wanderson Viegas</strong><small>{language === "pt" ? "Consultor Sênior" : language === "en" ? "Senior Consultant" : "Consultor Senior"}</small></div></div></div><div className="floating-card ai-card"><Sparkles size={17}/><div><strong>{language === "pt" ? "IA aplicada" : language === "en" ? "Applied AI" : "IA aplicada"}</strong><span>{language === "pt" ? "à gestão" : language === "en" ? "for management" : "a la gestión"}</span></div></div><div className="floating-card metric-card"><Zap size={17}/><div><strong>Data-driven</strong><span>{language === "pt" ? "decisões melhores" : language === "en" ? "better decisions" : "mejores decisiones"}</span></div></div></div></div><div className="scroll-hint"><span>{content.scrollHint}</span><div></div></div></section>

        <section id="sobre" className="section about-section"><div className="container about-grid"><div className="section-kicker">{content.aboutKicker}</div><div className="about-main"><h2>{content.aboutTitle}</h2><p>{content.aboutText1}</p><p>{content.aboutText2}</p><div className="signature-line"><div className="signature-mark">WV</div><span>{content.signature}</span></div></div></div></section>

        <section id="competencias" className="section capabilities-section"><div className="container"><div className="section-heading"><div><div className="section-kicker">{content.capabilitiesKicker}</div><h2>{content.capabilitiesTitle}</h2></div><p>{content.capabilitiesIntro}</p></div><div className="capability-grid">{content.capabilities.map(([title, text], i) => { const Icon = capabilityIcons[i]; return <article className="capability-card" key={title}><div className="card-number">0{i+1}</div><div className="icon-wrap"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={20}/></article>; })}</div></div></section>

        <section className="section results-section"><div className="container"><div className="results-banner"><div><div className="section-kicker light">{content.impactKicker}</div><h2>{content.impactTitle}</h2></div><div className="results-list"><div><strong>26<span>%</span></strong><p>{content.impactLabels[0]}</p></div><div><strong>99,3<span>%</span></strong><p>{content.impactLabels[1]}</p></div><div><strong>98<span>%</span></strong><p>{content.impactLabels[2]}</p></div></div></div></div></section>

        <section id="trajetoria" className="section journey-section"><div className="container"><div className="section-heading journey-heading"><div><div className="section-kicker">{content.journeyKicker}</div><h2>{content.journeyTitle}</h2></div><div className="tabs"><button className={activeTab === "trajetoria" ? "active" : ""} onClick={() => setActiveTab("trajetoria")}>{content.experience}</button><button className={activeTab === "competencias" ? "active" : ""} onClick={() => setActiveTab("competencias")}>{content.stack}</button></div></div>{activeTab === "trajetoria" ? <div className="timeline">{visibleTimeline.map(([period, role, company, text]) => <div className="timeline-item" key={company}><div className="timeline-marker"><span></span></div><div className="timeline-period">{period}</div><div className="timeline-body"><h3>{role}</h3><div className="company">{company}</div><p>{text}</p></div><ChevronRight className="timeline-arrow" size={21}/></div>)}<button className="load-more" onClick={() => setShowAll(!showAll)}>{showAll ? content.loadLess : content.loadMore} <ArrowDown size={16} className={showAll ? "rotate" : ""}/></button></div> : <div className="skills-panel"><div className="skills-intro"><BrainCircuit size={32}/><h3>{content.skillTitle}</h3><p>{content.skillText}</p></div><div className="skill-cloud">{content.skills.map((skill, i) => <span key={skill} className={i === 8 ? "featured" : ""}>{skill}</span>)}</div></div>}</div></section>

        <section id="contato" className="contact-section"><div className="container contact-grid"><div><div className="section-kicker light">{content.contactKicker}</div><h2>{content.contactTitle}</h2><p>{content.contactText}</p></div><div className="contact-actions"><a href="mailto:wanderson.v@hotmail.com" className="contact-link"><Mail size={19}/><span><small>{content.email}</small>wanderson.v@hotmail.com</span><ArrowUpRight size={18}/></a><a href="tel:+5519987720637" className="contact-link"><MessageCircle size={19}/><span><small>{content.phone}</small>(19) 98772-0637</span><ArrowUpRight size={18}/></a><a href="https://www.linkedin.com/in/wanderson-viegas" target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={19}/><span><small>{content.linkedin}</small>/in/wanderson-viegas</span><ExternalLink size={17}/></a><a href="https://wa.me/5519987720637" target="_blank" rel="noreferrer" className="contact-link"><MessageCircle size={19}/><span><small>{content.whatsapp}</small>{content.talk}</span><ArrowUpRight size={18}/></a></div></div></section>
      </main>
      <footer><div className="container footer-inner"><span>© 2026 Wanderson Viegas</span><span>{content.brandSub}</span><button onClick={() => scrollTo("inicio")}>{content.backTop} <ArrowUp size={15}/></button></div></footer>
    </div>
  );
}

export { CheckCircle2, BriefcaseBusiness };
