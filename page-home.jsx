/* ===================== Pages ===================== */

const { useState: useStateP, useEffect: useEffectP, useRef: useRefP } = React;
const Cp = window.CONTENT;
const tp = window.t;

/* =========================================================
   HOME
   ========================================================= */
function HomePage({ lang, setRoute }) {
  const go = (id) => (e) => { e.preventDefault(); setRoute(id); window.scrollTo({top: 0, behavior: "smooth"}); };

  return (
    <main className="ab-fadein">
      {/* ---------- HERO ---------- */}
      <section style={{paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(60px, 7vw, 110px)"}}>
        <div className="ab-container" style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "clamp(32px, 4vw, 60px)",
          alignItems: "center",
        }}>
          <div>
            <span className="ab-tag ab-tag--dot" style={{marginBottom: 24, color: "var(--ab-fg)"}}>
              <span style={{color: "var(--ab-accent-deep)"}}>●</span>{tp(lang, Cp.home.heroEyebrow)}
            </span>
            <h1 className="ab-display ab-h1" style={{marginBottom: 24}}>
              {tp(lang, Cp.home.heroTitle).map((line, i) => (
                <span key={i} style={{display: "block"}}>
                  {i === 1 ? (
                    <span style={{position: "relative"}}>
                      <span style={{position: "relative", zIndex: 1, fontStyle: "italic"}}>{line}</span>
                      <span style={{
                        position: "absolute",
                        left: "-4px", right: "-8px",
                        bottom: "8%",
                        height: "32%",
                        background: "var(--ab-accent)",
                        zIndex: 0,
                        borderRadius: 4,
                      }}/>
                    </span>
                  ) : line}
                </span>
              ))}
            </h1>
            <p className="ab-lead" style={{marginBottom: 32, maxWidth: "52ch"}}>
              {tp(lang, Cp.home.heroSub)}
            </p>
            <div style={{display: "flex", gap: 12, flexWrap: "wrap"}}>
              <a href="#" className="ab-btn ab-btn--primary" onClick={go("planes")}>
                {tp(lang, Cp.home.heroPrimary)} <Icon.arrow className="ab-arrow"/>
              </a>
              <a href="#" className="ab-btn ab-btn--ghost" onClick={go("sobre")}>
                {tp(lang, Cp.home.heroSecondary)}
              </a>
            </div>
          </div>

          <div style={{position: "relative"}}>
            <div className="ab-imgframe" style={{
              aspectRatio: "3/4",
              maxWidth: 520, marginLeft: "auto",
            }}>
              <img src={(window.__resources && window.__resources.photoStrawberries) || "assets/arletis-strawberries.jpg"} alt="Arletis Bueno"/>
            </div>
            {/* floating credential chip */}
            <div style={{
              position: "absolute",
              left: "-12px", bottom: "32px",
              background: "var(--ab-paper)",
              border: "1px solid var(--ab-line)",
              borderRadius: 18,
              padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 14,
              boxShadow: "0 20px 40px -28px rgba(31,36,16,0.35)",
              maxWidth: 240,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "var(--ab-accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon.leaf style={{width: 22, height: 22}}/>
              </div>
              <div>
                <div style={{fontSize: 13, fontWeight: 600}}>
                  {tp(lang, {es: "Nutrición clínica", en: "Clinical nutrition"})}
                </div>
                <div style={{fontSize: 12, color: "var(--ab-fg-muted)"}}>
                  {tp(lang, {es: "Certificada · NASM CPT", en: "Certified · NASM CPT"})}
                </div>
              </div>
            </div>
            {/* small floating pill */}
            <div style={{
              position: "absolute",
              right: "-20px", top: "60px",
              background: "var(--ab-bg-dark)",
              color: "var(--ab-bg)",
              borderRadius: 999,
              padding: "8px 16px",
              fontSize: 13,
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 12px 30px -18px rgba(0,0,0,0.5)",
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: 999,
                background: "var(--ab-accent)",
                boxShadow: "0 0 0 4px rgba(210,222,50,0.25)",
              }}/>
              {tp(lang, {es: "Aceptando clientes", en: "Taking new clients"})}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <Marquee
        items={lang === "es"
          ? ["Nutrición personalizada", "Entrenamiento funcional", "Hábitos sostenibles", "Cocina real"]
          : ["Personalised Nutrition", "Functional Training", "Sustainable Habits", "Real Food"]}
        lang={lang}
      />

      {/* ---------- STATS ---------- */}
      <section className="ab-section--tight">
        <div className="ab-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(20px, 3vw, 40px)",
          }} className="ab-stats">
            {Cp.home.stats.map((s, i) => (
              <div key={i} style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                paddingBlock: 24,
                borderTop: "1px solid var(--ab-line)",
              }}>
                <div className="ab-display" style={{fontSize: "clamp(48px, 5vw, 72px)", lineHeight: 1}}>{s.n}</div>
                <div className="ab-muted" style={{fontSize: 14}}>{tp(lang, s.l)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT PREVIEW ---------- */}
      <section className="ab-section" style={{background: "var(--ab-bg-alt)"}}>
        <div className="ab-container" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
        }} className="ab-about-grid">
          <div style={{position: "relative"}}>
            <div className="ab-imgframe" style={{aspectRatio: "3/4", maxWidth: 480}}>
              <img src={(window.__resources && window.__resources.photoElegant) || "assets/arletis-elegant.jpg"} alt="Arletis Bueno"/>
            </div>
            <div style={{
              position: "absolute",
              right: "8px", top: "20px",
              background: "var(--ab-accent)",
              borderRadius: 999,
              padding: "10px 18px",
              fontFamily: "var(--ab-serif)",
              fontStyle: "italic",
              fontSize: 18,
              boxShadow: "0 14px 30px -20px rgba(0,0,0,0.3)",
            }}>
              {tp(lang, {es: "Hola, soy Arletis", en: "Hi, I'm Arletis"})}
            </div>
          </div>
          <div>
            <span className="ab-eyebrow" style={{marginBottom: 16, display: "inline-block"}}>
              {tp(lang, Cp.home.aboutEyebrow)}
            </span>
            <h2 className="ab-display ab-h2" style={{marginBottom: 24}}>
              {tp(lang, Cp.home.aboutTitle)}
            </h2>
            <p className="ab-lead" style={{marginBottom: 28}}>
              {tp(lang, Cp.home.aboutBody)}
            </p>
            <div style={{display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28}}>
              {tp(lang, Cp.home.aboutPills).map((p, i) => (
                <span key={i} className="ab-tag ab-tag--sage">{p}</span>
              ))}
            </div>
            <a href="#" className="ab-btn ab-btn--link" onClick={go("sobre")}>
              {tp(lang, Cp.home.aboutCta)} <Icon.arrow className="ab-arrow"/>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- PLANS PREVIEW ---------- */}
      <section className="ab-section">
        <div className="ab-container">
          <SectionHeader
            eyebrow={tp(lang, Cp.home.plansEyebrow)}
            title={tp(lang, Cp.home.plansTitle)}
            sub={tp(lang, Cp.home.plansSub)}
          />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }} className="ab-plans-grid">
            {Cp.plans.map((p, i) => (
              <PlanCardSmall key={p.id} plan={p} lang={lang} onClick={go("planes")}/>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="ab-section" style={{background: "var(--ab-bg-dark)", color: "var(--ab-bg)"}}>
        <div className="ab-container">
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "clamp(40px, 5vw, 80px)",
            alignItems: "end", marginBottom: 56,
          }} className="ab-test-head">
            <div>
              <span className="ab-eyebrow" style={{color: "#8e8b78"}}>
                {tp(lang, Cp.home.testimonialsEyebrow)}
              </span>
              <h2 className="ab-display ab-h2" style={{color: "#f6f3e8", marginTop: 16}}>
                {tp(lang, Cp.home.testimonialsTitle)}
              </h2>
            </div>
          </div>

          <TestimonialCarousel lang={lang}/>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="ab-section--tight">
        <div className="ab-container">
          <div style={{
            background: "var(--ab-accent)",
            borderRadius: "clamp(28px, 4vw, 40px)",
            padding: "clamp(40px, 6vw, 80px)",
            display: "grid",
            gridTemplateColumns: "1.5fr auto",
            gap: 40,
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }} className="ab-cta-block">
            <div>
              <h2 className="ab-display ab-h2" style={{marginBottom: 16}}>
                {tp(lang, Cp.home.ctaTitle)}
              </h2>
              <p className="ab-lead" style={{margin: 0, maxWidth: "44ch"}}>
                {tp(lang, Cp.home.ctaSub)}
              </p>
            </div>
            <a href="#" className="ab-btn ab-btn--primary" onClick={go("contacto")} style={{padding: "18px 28px"}}>
              {tp(lang, Cp.home.ctaBtn)} <Icon.arrow className="ab-arrow"/>
            </a>
            {/* deco circle */}
            <div aria-hidden style={{
              position: "absolute",
              right: -120, top: -120, width: 320, height: 320,
              borderRadius: "50%",
              border: "1px solid rgba(31, 36, 16, 0.18)",
              pointerEvents: "none",
            }}/>
          </div>
        </div>
      </section>
    </main>
  );
}

function PlanCardSmall({ plan, lang, onClick }) {
  return (
    <a href="#" className="ab-card" onClick={onClick} style={{
      display: "flex", flexDirection: "column", gap: 16, color: "inherit", textDecoration: "none",
      background: plan.best ? "var(--ab-bg-dark)" : "var(--ab-paper)",
      color: plan.best ? "var(--ab-bg)" : "var(--ab-fg)",
    }}>
      {plan.best && (
        <span className="ab-tag ab-tag--accent" style={{alignSelf: "flex-start"}}>
          {tp(lang, Cp.plansPage.bestBadge)}
        </span>
      )}
      <h3 className="ab-display ab-h4" style={{
        color: plan.best ? "#f6f3e8" : "var(--ab-fg)",
      }}>
        {tp(lang, plan.name)}
      </h3>
      <p style={{fontSize: 14, color: plan.best ? "#b8b5a3" : "var(--ab-fg-muted)", lineHeight: 1.5, margin: 0, flex: 1}}>
        {tp(lang, plan.blurb)}
      </p>
      <div style={{
        display: "flex", alignItems: "baseline", gap: 4,
        paddingTop: 12,
        borderTop: plan.best ? "1px solid #2f3422" : "1px solid var(--ab-line)",
      }}>
        <span className="ab-display" style={{fontSize: 28, color: plan.best ? "#f6f3e8" : "var(--ab-fg)"}}>{plan.price}</span>
        <span style={{fontSize: 13, color: plan.best ? "#8e8b78" : "var(--ab-fg-muted)"}}>{tp(lang, plan.cadence)}</span>
        <span style={{marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: plan.best ? "var(--ab-accent)" : "var(--ab-fg)"}}>
          {tp(lang, Cp.home.plansSee)} <Icon.arrow/>
        </span>
      </div>
    </a>
  );
}

function TestimonialCarousel({ lang }) {
  const [i, setI] = useStateP(0);
  const items = Cp.testimonials;
  useEffectP(() => {
    const id = setInterval(() => setI(prev => (prev + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div>
      <div style={{minHeight: 280, position: "relative"}}>
        {items.map((q, idx) => (
          <div key={idx} style={{
            position: idx === i ? "relative" : "absolute",
            inset: 0,
            opacity: idx === i ? 1 : 0,
            transform: idx === i ? "translateY(0)" : "translateY(12px)",
            transition: "opacity .5s, transform .5s",
            pointerEvents: idx === i ? "auto" : "none",
          }}>
            <span style={{
              fontFamily: "var(--ab-serif)",
              fontSize: 120,
              lineHeight: 0.5,
              color: "var(--ab-accent)",
              display: "block",
              marginBottom: 20,
              fontStyle: "italic",
            }}>"</span>
            <p className="ab-display" style={{
              fontSize: "clamp(22px, 2.4vw, 36px)",
              color: "#f6f3e8",
              lineHeight: 1.3,
              maxWidth: "20ch",
              marginBottom: 24,
              maxWidth: "32ch",
              fontWeight: 400,
              textWrap: "balance",
            }}>
              {tp(lang, q.q)}
            </p>
            <div style={{display: "flex", alignItems: "center", gap: 14}}>
              <div style={{
                width: 44, height: 44, borderRadius: 999,
                background: "var(--ab-accent)",
                color: "var(--ab-fg)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 600,
                fontFamily: "var(--ab-serif)",
                fontSize: 18,
              }}>
                {q.a.charAt(0)}
              </div>
              <div>
                <div style={{color: "#f6f3e8", fontWeight: 600, fontSize: 15}}>{q.a}</div>
                <div style={{color: "#8e8b78", fontSize: 13}}>{tp(lang, q.r)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{display: "flex", gap: 8, marginTop: 32}}>
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Testimonial ${idx + 1}`}
            style={{
              width: idx === i ? 36 : 12,
              height: 6,
              borderRadius: 999,
              background: idx === i ? "var(--ab-accent)" : "#2f3422",
              transition: "width .3s, background .3s",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

window.HomePage = HomePage;
