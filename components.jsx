/* ===================== Shared components ===================== */
/* All components exposed on window so other Babel scripts can use them. */

const { useState, useEffect, useRef } = React;
const C = window.CONTENT;
const t = window.t;

/* ----- Icon set ----- */
const Icon = {
  arrow: (p) =>
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>,

  arrowDown: (p) =>
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>,

  check: (p) =>
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="4 12 10 18 20 6" />
    </svg>,

  x: (p) =>
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
    </svg>,

  menu: (p) =>
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" />
    </svg>,

  instagram: (p) =>
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>,

  whatsapp: (p) =>
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p} style={{ fill: "rgb(66, 62, 54)" }}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1s-.8.9-1 1.1c-.2.2-.4.2-.6.1-1.5-.7-2.4-1.4-3.4-3.1-.3-.5.3-.4.7-1.3.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1.1 2.8 1.2 3 .1.2 2.1 3.3 5.2 4.6 1.9.7 2.7.8 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.4-.5-4.9-1.4l-.3-.2-3.4 1 .9-3.3-.2-.4c-1-1.5-1.5-3.2-1.5-5 0-4.8 4-8.7 8.7-8.7 4.8 0 8.7 4 8.7 8.7s-3.8 8.6-8.7 8.6z" />
    </svg>,

  email: (p) =>
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>,

  phone: (p) =>
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M5 4h3l2 5-2 1c1 2 3 4 5 5l1-2 5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>,

  leaf: (p) =>
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 20c0-8 6-14 16-16-1 10-7 16-16 16z" />
      <line x1="4" y1="20" x2="12" y2="12" />
    </svg>

};

/* ----- Header ----- */
function Header({ route, setRoute, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {setMenuOpen(false);}, [route]);

  const navItems = [
  { id: "home", label: t(lang, C.nav.home) },
  { id: "planes", label: t(lang, C.nav.planes) },
  { id: "sobre", label: t(lang, C.nav.sobre) },
  { id: "contacto", label: t(lang, C.nav.contacto) }];


  const go = (id) => (e) => {e.preventDefault();setRoute(id);window.scrollTo({ top: 0, behavior: "smooth" });};

  return (
    <React.Fragment>
      <header className="ab-header" data-scrolled={scrolled}>
        <div className="ab-container ab-header__row">
          <a href="#" className="ab-header__brand" onClick={go("home")} aria-label="Arletis Bueno — home">
            <img src={window.__resources && window.__resources.logoWordmark || "assets/logo-wordmark.png"} alt="Arletis Bueno" />
          </a>

          <nav className="ab-header__nav" aria-label="Main">
            {navItems.map((item) =>
            <a
              key={item.id}
              href="#"
              onClick={go(item.id)}
              aria-current={route === item.id ? "page" : undefined}>
              
                {item.label}
              </a>
            )}
          </nav>

          <div className="ab-header__right">
            <LangToggle lang={lang} setLang={setLang} />
            <a href="#" className="ab-btn ab-btn--accent" onClick={go("contacto")}>
              <span className="ab-header__cta-text">{t(lang, C.nav.cta)}</span>
              <span style={{ display: "none" }} className="ab-header__cta-short">{t(lang, C.nav.ctaShort)}</span>
              <Icon.arrow className="ab-arrow" />
            </a>
            <button className="ab-menubtn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Icon.menu />
            </button>
          </div>
        </div>
      </header>

      <div className="ab-mobilemenu" data-open={menuOpen}>
        <button className="ab-mobilemenu__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <Icon.x />
        </button>
        {navItems.map((item) =>
        <a key={item.id} href="#" onClick={go(item.id)} aria-current={route === item.id ? "page" : undefined}>
            {item.label}
          </a>
        )}
        <div style={{ marginTop: "auto", display: "flex", gap: 12, alignItems: "center" }}>
          <LangToggle lang={lang} setLang={setLang} />
          <a href="#" className="ab-btn ab-btn--accent" onClick={go("contacto")}>
            {t(lang, C.nav.cta)} <Icon.arrow />
          </a>
        </div>
      </div>
    </React.Fragment>);

}

function LangToggle({ lang, setLang }) {
  return (
    <div className="ab-langtoggle" role="group" aria-label="Language">
      <button data-active={lang === "es"} onClick={() => setLang("es")}>ES</button>
      <button data-active={lang === "en"} onClick={() => setLang("en")}>EN</button>
    </div>);

}

/* ----- Footer ----- */
function Footer({ lang, setRoute }) {
  const go = (id) => (e) => {e.preventDefault();setRoute(id);window.scrollTo({ top: 0, behavior: "smooth" });};
  const year = new Date().getFullYear();

  return (
    <footer className="ab-footer">
      <div className="ab-container">
        <div className="ab-footer__grid">
          <div>
            <img src={window.__resources && window.__resources.logoWordmarkWhite || "assets/logo-wordmark-white.png"} alt="Arletis Bueno" style={{ height: 56, marginBottom: 20, marginLeft: -8 }} />
            <p style={{ maxWidth: 320, color: "#b8b5a3", lineHeight: 1.6, marginTop: 0 }}>
              {t(lang, C.brand.tag)}
            </p>
            <a href="#" className="ab-btn ab-btn--accent" onClick={go("contacto")} style={{ marginTop: 20, color: "rgb(31, 36, 16)" }}>
              {t(lang, { es: "Haz una cita", en: "Book a session" })}
              <Icon.arrow className="ab-arrow" />
            </a>
          </div>

          <div className="ab-footer__col">
            <h4>{t(lang, { es: "Páginas", en: "Pages" })}</h4>
            <ul>
              <li><a href="#" onClick={go("home")}>{t(lang, C.nav.home)}</a></li>
              <li><a href="#" onClick={go("planes")}>{t(lang, C.nav.planes)}</a></li>
              <li><a href="#" onClick={go("sobre")}>{t(lang, C.nav.sobre)}</a></li>
              <li><a href="#" onClick={go("contacto")}>{t(lang, C.nav.contacto)}</a></li>
            </ul>
          </div>

          <div className="ab-footer__col">
            <h4>{t(lang, { es: "Contacto", en: "Contact" })}</h4>
            <ul>
              <li><a href={C.contact.phoneHref}>{C.contact.phone}</a></li>
              <li><a href={C.contact.emailHref}>{C.contact.email}</a></li>
              <li><a href={C.contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>

          <div className="ab-footer__col">
            <h4>{t(lang, { es: "Sígueme", en: "Follow" })}</h4>
            <ul>
              <li>
                <a href={C.contact.instagram} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Icon.instagram /> Instagram
                </a>
              </li>
              <li>
                <a href={C.contact.whatsapp} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Icon.whatsapp /> WhatsApp
                </a>
              </li>
              <li>
                <a href={C.contact.emailHref} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Icon.email /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ab-footer__bottom">
          <div>© {year} Arletis Bueno · {t(lang, { es: "Todos los derechos reservados", en: "All rights reserved" })}</div>
          <div>{t(lang, { es: "Hecho con cuidado en NYC", en: "Made with care in NYC" })}</div>
        </div>
      </div>
    </footer>);

}

/* ----- Section header ----- */
function SectionHeader({ eyebrow, title, sub, align = "left" }) {
  return (
    <div className={`ab-sectionhead ab-sectionhead--${align}`} style={{
      textAlign: align,
      marginBottom: "clamp(40px, 5vw, 64px)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: align === "center" ? "center" : "flex-start"
    }}>
      {eyebrow && <span className="ab-eyebrow">{eyebrow}</span>}
      <h2 className="ab-display ab-h2">{title}</h2>
      {sub && <p className="ab-lead ab-muted" style={{ margin: 0 }}>{sub}</p>}
    </div>);

}

/* ----- Marquee ticker ----- */
function Marquee({ items, lang }) {
  return (
    <div style={{
      overflow: "hidden",
      borderTop: "1px solid var(--ab-line)",
      borderBottom: "1px solid var(--ab-line)",
      padding: "22px 0",
      background: "var(--ab-bg)"
    }}>
      <div style={{
        display: "flex",
        gap: "56px",
        whiteSpace: "nowrap",
        animation: "ab-ticker 32s linear infinite",
        width: "max-content"
      }}>
        {[...items, ...items, ...items].map((it, i) =>
        <span key={i} style={{
          display: "inline-flex", alignItems: "center", gap: 16,
          fontFamily: "var(--ab-serif)",
          fontSize: "clamp(28px, 3vw, 44px)",
          letterSpacing: "-0.01em",
          color: i % 2 === 0 ? "var(--ab-fg)" : "var(--ab-accent-deep)",
          fontStyle: i % 2 === 0 ? "normal" : "italic"
        }}>
            {it}
            <span style={{
            display: "inline-block",
            width: 8, height: 8, borderRadius: 999,
            background: "var(--ab-accent)",
            transform: "translateY(-4px)"
          }} />
          </span>
        )}
      </div>
    </div>);

}

/* Expose to window */
Object.assign(window, { Icon, Header, Footer, SectionHeader, Marquee, LangToggle });