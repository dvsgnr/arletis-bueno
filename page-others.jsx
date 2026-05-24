/* ===================== Plans page ===================== */

const { useState: useStatePl, useEffect: useEffectPl } = React;
const Cpl = window.CONTENT;
const tpl = window.t;

function PlanesPage({ lang, setRoute, setPrefilledPlan }) {
  const [selected, setSelected] = useStatePl(Cpl.plans[2].id); // premium default
  const [billing, setBilling] = useStatePl("monthly");
  const [openFaq, setOpenFaq] = useStatePl(0);

  const goContact = (planName) => (e) => {
    e.preventDefault();
    setPrefilledPlan(planName);
    setRoute("contacto");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const discount = (price) => {
    const n = parseFloat(price.replace("$", ""));
    return "$" + Math.round(n * 0.9);
  };

  return (
    <main className="ab-fadein">
      {/* Header section */}
      <section style={{ paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(40px, 5vw, 60px)" }}>
        <div className="ab-container">
          <div style={{ maxWidth: 920, display: "flex", flexDirection: "column", gap: 20 }}>
            <span className="ab-eyebrow">{tpl(lang, Cpl.plansPage.eyebrow)}</span>
            <h1 className="ab-display ab-h1" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
              {tpl(lang, Cpl.plansPage.title)}
            </h1>
            <p className="ab-lead">{tpl(lang, Cpl.plansPage.sub)}</p>
          </div>

          {/* Billing toggle */}
          <div style={{
            marginTop: 40,
            display: "inline-flex",
            background: "var(--ab-bg-alt)",
            padding: 4,
            borderRadius: 999,
            border: "1px solid var(--ab-line)"
          }}>
            {[
            ["monthly", tpl(lang, Cpl.plansPage.monthly)],
            ["quarterly", tpl(lang, Cpl.plansPage.quarterly)]].
            map(([id, label]) =>
            <button
              key={id}
              onClick={() => setBilling(id)}
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                background: billing === id ? "var(--ab-fg)" : "transparent",
                color: billing === id ? "var(--ab-bg)" : "var(--ab-fg-muted)",
                transition: "background .2s, color .2s"
              }}>
              
                {label}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section style={{ paddingBottom: "clamp(60px, 7vw, 100px)" }}>
        <div className="ab-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20
          }} className="ab-plans-full">
            {Cpl.plans.map((plan) =>
            <PlanCardLarge
              key={plan.id}
              plan={plan}
              lang={lang}
              billing={billing}
              discount={discount}
              selected={selected === plan.id}
              onSelect={() => setSelected(plan.id)}
              onReserve={goContact(tpl(lang, plan.name))} />

            )}
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section className="ab-section" style={{ background: "var(--ab-bg-alt)" }}>
        <div className="ab-container">
          <SectionHeader
            eyebrow={tpl(lang, { es: "Comparativa", en: "Comparison" })}
            title={tpl(lang, Cpl.plansPage.compareTitle)} />
          

          <div style={{
            background: "var(--ab-paper)",
            borderRadius: 24,
            border: "1px solid var(--ab-line)",
            overflow: "hidden"
          }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: 720
              }}>
                <thead>
                  <tr>
                    <th style={cellHead}></th>
                    {Cpl.plans.map((p) =>
                    <th key={p.id} style={{
                      ...cellHead,
                      textAlign: "center",
                      background: p.best ? "var(--ab-accent)" : "transparent"
                    }}>
                        <div style={{ fontFamily: "var(--ab-serif)", fontSize: 18, fontWeight: 400 }}>
                          {tpl(lang, p.name)}
                        </div>
                        <div style={{ fontSize: 12, color: "var(--ab-fg-muted)", marginTop: 4 }}>
                          {p.price}{tpl(lang, p.cadence)}
                        </div>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {Cpl.plansPage.compareRows.map((row, i) =>
                  <tr key={i} style={{ borderTop: "1px solid var(--ab-line)" }}>
                      <td style={cell}>{tpl(lang, row.k)}</td>
                      {row.v.map((v, j) =>
                    <td key={j} style={{ ...cell, textAlign: "center" }}>
                          {v ? <Icon.check style={{ color: "var(--ab-accent-deep)", width: 18, height: 18 }} /> : <Icon.x style={{ color: "#c5c0ad", width: 14, height: 14 }} />}
                        </td>
                    )}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ab-section">
        <div className="ab-container" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "clamp(40px, 5vw, 80px)", margin: "0px 60px 0px 0px"
        }} className="ab-faq-grid">
          <div style={{ margin: "0px 0px 0px 35px" }}>
            <span className="ab-eyebrow">FAQ</span>
            <h2 className="ab-display ab-h2" style={{ marginTop: 16, marginBottom: 24 }}>
              {tpl(lang, Cpl.plansPage.faqTitle)}
            </h2>
            <p className="ab-muted" style={{ marginBottom: 20 }}>
              {tpl(lang, {
                es: "¿No encuentras la respuesta? Escríbeme directamente.",
                en: "Can't find your answer? Message me directly."
              })}
            </p>
            <a href={Cpl.contact.whatsapp} target="_blank" rel="noreferrer" className="ab-btn ab-btn--ghost">
              <Icon.whatsapp /> WhatsApp
            </a>
          </div>
          <div>
            {Cpl.plansPage.faq.map((item, i) =>
            <div key={i} style={{
              borderTop: "1px solid var(--ab-line)",
              borderBottom: i === Cpl.plansPage.faq.length - 1 ? "1px solid var(--ab-line)" : "none"
            }}>
                <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "20px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  fontFamily: "var(--ab-serif)",
                  fontSize: "clamp(20px, 1.8vw, 26px)",
                  color: "var(--ab-fg)"
                }}
                aria-expanded={openFaq === i}>
                
                  <span>{tpl(lang, item.q)}</span>
                  <span style={{
                  width: 36, height: 36, borderRadius: 999,
                  background: openFaq === i ? "var(--ab-accent)" : "var(--ab-bg-alt)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  transform: openFaq === i ? "rotate(180deg)" : "none",
                  transition: "transform .3s, background .3s",
                  flexShrink: 0
                }}>
                    <Icon.arrowDown style={{ width: 14, height: 14 }} />
                  </span>
                </button>
                <div style={{
                maxHeight: openFaq === i ? 200 : 0,
                overflow: "hidden",
                transition: "max-height .35s cubic-bezier(.16,1,.3,1)"
              }}>
                  <p style={{ padding: "0 0 24px", color: "var(--ab-fg-muted)", margin: 0, maxWidth: "60ch" }}>
                    {tpl(lang, item.a)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>);

}

const cellHead = {
  padding: "20px 16px",
  textAlign: "left",
  fontWeight: 400,
  fontSize: 13,
  color: "var(--ab-fg-muted)"
};
const cell = {
  padding: "16px",
  fontSize: 14,
  color: "var(--ab-fg)"
};

function PlanCardLarge({ plan, lang, billing, discount, selected, onSelect, onReserve }) {
  const price = billing === "quarterly" ? discount(plan.price) : plan.price;
  return (
    <div
      onClick={onSelect}
      style={{
        background: plan.best ? "var(--ab-bg-dark)" : "var(--ab-paper)",
        color: plan.best ? "var(--ab-bg)" : "var(--ab-fg)",
        border: selected ? "2px solid var(--ab-accent)" : "1px solid var(--ab-line)",
        borderRadius: 28,
        padding: "clamp(28px, 3vw, 40px)",
        position: "relative",
        cursor: "pointer",
        transition: "border-color .2s, transform .2s",
        transform: selected ? "translateY(-4px)" : "none"
      }}>
      
      {plan.best &&
      <span className="ab-tag ab-tag--accent" style={{ position: "absolute", top: 20, right: 20 }}>
          {tpl(lang, Cpl.plansPage.bestBadge)}
        </span>
      }

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <h3 className="ab-display" style={{
            fontSize: "clamp(28px, 3vw, 40px)",
            color: plan.best ? "#f6f3e8" : "var(--ab-fg)",
            marginBottom: 8
          }}>
            {tpl(lang, plan.name)}
          </h3>
          <p style={{
            margin: 0,
            color: plan.best ? "#b8b5a3" : "var(--ab-fg-muted)",
            fontSize: 15,
            maxWidth: "40ch"
          }}>
            {tpl(lang, plan.blurb)}
          </p>
        </div>

        <div style={{
          display: "flex", alignItems: "baseline", gap: 6,
          paddingBlock: 16,
          borderTop: plan.best ? "1px solid #2f3422" : "1px solid var(--ab-line)",
          borderBottom: plan.best ? "1px solid #2f3422" : "1px solid var(--ab-line)"
        }}>
          <span className="ab-display" style={{
            fontSize: 48,
            color: plan.best ? "#f6f3e8" : "var(--ab-fg)"
          }}>{price}</span>
          <span style={{ fontSize: 14, color: plan.best ? "#8e8b78" : "var(--ab-fg-muted)" }}>
            {tpl(lang, plan.cadence)}
          </span>
          {billing === "quarterly" &&
          <span style={{
            marginLeft: "auto",
            fontSize: 12,
            textDecoration: "line-through",
            color: plan.best ? "#8e8b78" : "var(--ab-fg-soft)"
          }}>{plan.price}</span>
          }
        </div>

        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {tpl(lang, plan.features).map((f, i) =>
          <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14 }}>
              <span style={{
              width: 22, height: 22, borderRadius: 999,
              background: plan.best ? "var(--ab-accent)" : "var(--ab-bg-alt)",
              color: "var(--ab-fg)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              marginTop: 1
            }}>
                <Icon.check style={{ width: 12, height: 12 }} />
              </span>
              <span style={{ color: plan.best ? "#d8d4c4" : "var(--ab-fg)" }}>{f}</span>
            </li>
          )}
        </ul>

        <button
          onClick={(e) => {e.stopPropagation();onReserve(e);}}
          className="ab-btn"
          style={{
            justifyContent: "center",
            background: plan.best ? "var(--ab-accent)" : "var(--ab-fg)",

            marginTop: 8, color: "rgb(255, 255, 255)"
          }}>
          
          {tpl(lang, Cpl.plansPage.selectCta)} <Icon.arrow className="ab-arrow" />
        </button>
      </div>
    </div>);

}

window.PlanesPage = PlanesPage;

/* ===================== About page ===================== */

function SobreMiPage({ lang, setRoute }) {
  const go = (id) => (e) => {e.preventDefault();setRoute(id);window.scrollTo({ top: 0, behavior: "smooth" });};

  return (
    <main className="ab-fadein">
      {/* Hero */}
      <section style={{ paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(40px, 5vw, 60px)" }}>
        <div className="ab-container" style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center", padding: "0px 38px 0px 0px"
        }} className="ab-about-hero">
          <div style={{ padding: "0px 0px 0px 53px" }}>
            <span className="ab-eyebrow">{tpl(lang, Cpl.about.eyebrow)}</span>
            <h1 className="ab-display ab-h1" style={{ fontSize: "clamp(60px, 9vw, 132px)", marginTop: 20, marginBottom: 28 }}>
              {tpl(lang, Cpl.about.title)}
            </h1>
            <p className="ab-lead" style={{ maxWidth: "48ch" }}>
              {tpl(lang, Cpl.about.intro)}
            </p>
          </div>
          <div className="ab-imgframe" style={{ aspectRatio: "3/4", maxWidth: 460, marginLeft: "auto" }}>
            <img src={window.__resources && window.__resources.photoCharm || "assets/arletis-charm.jpg"} alt="Arletis Bueno" style={{ margin: "0px", padding: "0px" }} />
          </div>
        </div>
      </section>

      {/* Long body + values */}
      <section className="ab-section">
        <div className="ab-container" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 100px)"
        }} className="ab-about-body">
          <div style={{ display: "flex", flexDirection: "column", gap: 24, margin: "0px 0px 0px 53px" }}>
            {tpl(lang, Cpl.about.paragraphs).map((p, i) =>
            <p key={i} style={{
              fontSize: i === 0 ? 22 : 17,
              lineHeight: i === 0 ? 1.45 : 1.65,
              color: i === 0 ? "var(--ab-fg)" : "var(--ab-fg-muted)",
              margin: 0,
              fontFamily: i === 0 ? "var(--ab-serif)" : "var(--ab-sans)",
              fontStyle: i === 0 ? "italic" : "normal",
              fontWeight: i === 0 ? 400 : 400,
              textWrap: "pretty"
            }}>
                {p}
              </p>
            )}
          </div>
          <div>
            <h3 className="ab-display" style={{ fontSize: 28, marginBottom: 24 }}>
              {tpl(lang, Cpl.about.valuesTitle)}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {tpl(lang, Cpl.about.values).map((v, i) =>
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 20,
                paddingBlock: 20,
                borderTop: "1px solid var(--ab-line)",
                borderBottom: i === Cpl.about.values.es.length - 1 ? "1px solid var(--ab-line)" : "none"
              }}>
                  <span className="ab-display" style={{
                  fontSize: 24,
                  fontStyle: "italic",
                  color: "var(--ab-accent-deep)",
                  fontFamily: "var(--ab-serif)",
                  lineHeight: 1
                }}>0{i + 1}</span>
                  <div>
                    <h4 style={{ fontFamily: "var(--ab-serif)", fontSize: 22, margin: "0 0 6px", fontWeight: 400 }}>{v.t}</h4>
                    <p style={{ color: "var(--ab-fg-muted)", margin: 0, fontSize: 15, lineHeight: 1.5 }}>{v.d}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section style={{ paddingBottom: "clamp(60px, 7vw, 100px)" }}>
        <div className="ab-container" style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: 16
        }} className="ab-image-strip">
          <div className="ab-imgframe" style={{ aspectRatio: "4/5" }}>
            <img src={window.__resources && window.__resources.photoMat || "assets/arletis-mat-sitting.jpg"} alt="" style={{ height: "700px", objectFit: "cover", padding: "0px" }} />
          </div>
          <div className="ab-imgframe" style={{ aspectRatio: "4/5" }}>
            <img src={window.__resources && window.__resources.photoPedestal || "assets/arletis-pedestal.jpg"} alt="" />
          </div>
          <div className="ab-imgframe" style={{ aspectRatio: "4/5" }}>
            <img src={window.__resources && window.__resources.photoElegant || "assets/arletis-elegant.jpg"} alt="" />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="ab-section" style={{ background: "var(--ab-bg-alt)" }}>
        <div className="ab-container" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "clamp(40px, 5vw, 80px)"
        }} className="ab-creds-grid">
          <div style={{ margin: "0px 0px 0px 53px" }}>
            <span className="ab-eyebrow">{tpl(lang, Cpl.about.credsTitle)}</span>
            <h2 className="ab-display ab-h2" style={{ marginTop: 16 }}>
              {tpl(lang, {
                es: "Formación, certificación, experiencia.",
                en: "Training, certification, experience."
              })}
            </h2>
          </div>
          <div>
            {tpl(lang, Cpl.about.creds).map((c, i) =>
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: 32,
              alignItems: "center",
              padding: "24px 0",
              borderTop: "1px solid var(--ab-line)",
              borderBottom: i === Cpl.about.creds.es.length - 1 ? "1px solid var(--ab-line)" : "none"
            }}>
                <span className="ab-display" style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontStyle: "italic",
                color: "var(--ab-fg-muted)",
                lineHeight: 1,
                minWidth: "3ch"
              }}>{c.y}</span>
                <span style={{ fontFamily: "var(--ab-serif)", fontSize: "clamp(20px, 2vw, 26px)", lineHeight: 1.3, color: "var(--ab-fg)" }}>{c.t}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-section--tight">
        <div className="ab-container" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <h2 className="ab-display" style={{ fontSize: "clamp(40px, 6vw, 80px)", marginBottom: 24 }}>
            <span style={{ fontStyle: "italic", color: "var(--ab-accent-deep)" }}>{tpl(lang, Cpl.about.cta)}</span>
          </h2>
          <a href="#" onClick={go("contacto")} className="ab-btn ab-btn--primary">
            {tpl(lang, Cpl.nav.cta)} <Icon.arrow className="ab-arrow" />
          </a>
        </div>
      </section>
    </main>);

}

window.SobreMiPage = SobreMiPage;

/* ===================== Contact page ===================== */

function ContactoPage({ lang, prefilledPlan }) {
  const f = Cpl.contactPage.form;
  const [state, setState] = useStatePl({
    name: "", email: "", phone: "", plan: prefilledPlan || "", goal: "", message: ""
  });
  const [errors, setErrors] = useStatePl({});
  const [status, setStatus] = useStatePl("idle"); // idle | sending | sent

  useEffectPl(() => {
    if (prefilledPlan) setState((s) => ({ ...s, plan: prefilledPlan }));
  }, [prefilledPlan]);

  const update = (k) => (e) => {
    setState((s) => ({ ...s, [k]: e.target.value }));
    setErrors((err) => ({ ...err, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!state.name.trim()) next.name = tpl(lang, f.required);
    if (!state.email.trim()) next.email = tpl(lang, f.required);else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) next.email = tpl(lang, f.invalidEmail);
    if (!state.message.trim()) next.message = tpl(lang, f.required);

    if (Object.keys(next).length) {setErrors(next);return;}

    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1100);
  };

  return (
    <main className="ab-fadein">
      <section style={{ paddingTop: "clamp(40px, 6vw, 80px)", paddingBottom: "clamp(40px, 5vw, 60px)" }}>
        <div className="ab-container">
          <div style={{ maxWidth: 920, display: "flex", flexDirection: "column", gap: 20 }}>
            <span className="ab-eyebrow">{tpl(lang, Cpl.contactPage.eyebrow)}</span>
            <h1 className="ab-display ab-h1" style={{ fontSize: "clamp(56px, 8.5vw, 120px)" }}>
              {tpl(lang, Cpl.contactPage.title)}
            </h1>
            <p className="ab-lead">{tpl(lang, Cpl.contactPage.sub)}</p>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: "clamp(80px, 9vw, 130px)" }}>
        <div className="ab-container" style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "clamp(40px, 5vw, 80px)"
        }} className="ab-contact-grid">
          {/* Form */}
          <div style={{
            background: "var(--ab-paper)",
            borderRadius: 28,
            padding: "clamp(28px, 4vw, 48px)",
            border: "1px solid var(--ab-line)", margin: "0px 0px 0px 27px"
          }}>
            {status === "sent" ?
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", textAlign: "center",
              paddingBlock: 60, gap: 20
            }}>
                <div style={{
                width: 72, height: 72, borderRadius: 999,
                background: "var(--ab-accent)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                  <Icon.check style={{ width: 36, height: 36, strokeWidth: 2.5 }} />
                </div>
                <h3 className="ab-display ab-h3">{tpl(lang, f.success)}</h3>
                <p className="ab-muted" style={{ margin: 0 }}>
                  {tpl(lang, { es: "Mientras tanto, sígueme en Instagram para más contenido.", en: "Meanwhile, follow me on Instagram for more content." })}
                </p>
                <a href={Cpl.contact.instagram} target="_blank" rel="noreferrer" className="ab-btn ab-btn--ghost" style={{ marginTop: 8 }}>
                  <Icon.instagram /> {Cpl.contact.instagramHandle}
                </a>
              </div> :

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="ab-form-row">
                  <Field label={tpl(lang, f.name)} error={errors.name}>
                    <input type="text" value={state.name} onChange={update("name")} />
                  </Field>
                  <Field label={tpl(lang, f.email)} error={errors.email}>
                    <input type="email" value={state.email} onChange={update("email")} />
                  </Field>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="ab-form-row">
                  <Field label={tpl(lang, f.phone)}>
                    <input type="tel" value={state.phone} onChange={update("phone")} />
                  </Field>
                  <Field label={tpl(lang, f.plan)}>
                    <select value={state.plan} onChange={update("plan")}>
                      <option value="">—</option>
                      {tpl(lang, f.planOptions).map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label={tpl(lang, f.goal)}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {tpl(lang, f.goals).map((g) =>
                  <button
                    key={g}
                    type="button"
                    onClick={() => setState((s) => ({ ...s, goal: g }))}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 999,
                      border: "1px solid",
                      borderColor: state.goal === g ? "var(--ab-fg)" : "var(--ab-line)",
                      background: state.goal === g ? "var(--ab-fg)" : "transparent",
                      color: state.goal === g ? "var(--ab-bg)" : "var(--ab-fg)",
                      fontSize: 13,
                      cursor: "pointer",
                      transition: "all .2s"
                    }}>
                    
                        {g}
                      </button>
                  )}
                  </div>
                </Field>
                <Field label={tpl(lang, f.message)} error={errors.message}>
                  <textarea
                  value={state.message}
                  onChange={update("message")}
                  placeholder={tpl(lang, f.messagePlaceholder)} />
                
                </Field>

                <button type="submit" className="ab-btn ab-btn--primary" style={{ justifyContent: "center", marginTop: 8 }}>
                  {status === "sending" ? tpl(lang, f.sending) : tpl(lang, f.submit)}
                  {status === "idle" && <Icon.arrow className="ab-arrow" />}
                </button>
              </form>
            }
          </div>

          {/* Direct contact */}
          <div>
            <span className="ab-eyebrow">{tpl(lang, Cpl.contactPage.directTitle)}</span>
            <h3 className="ab-display ab-h3" style={{ marginTop: 12, marginBottom: 32 }}>
              {tpl(lang, { es: "O escríbeme directamente.", en: "Or message me directly." })}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <DirectLink icon={<Icon.whatsapp />} label="WhatsApp" value={Cpl.contact.phone} href={Cpl.contact.whatsapp} />
              <DirectLink icon={<Icon.email />} label="Email" value={Cpl.contact.email} href={Cpl.contact.emailHref} />
              <DirectLink icon={<Icon.phone />} label={tpl(lang, { es: "Teléfono", en: "Phone" })} value={Cpl.contact.phone} href={Cpl.contact.phoneHref} />
              <DirectLink icon={<Icon.instagram />} label="Instagram" value={Cpl.contact.instagramHandle} href={Cpl.contact.instagram} />
            </div>

            <div style={{
              marginTop: 32,
              padding: 24,
              background: "var(--ab-bg-alt)",
              borderRadius: 20,
              display: "flex", flexDirection: "column", gap: 8
            }}>
              <span className="ab-eyebrow">{tpl(lang, { es: "Horario", en: "Hours" })}</span>
              <div style={{ fontFamily: "var(--ab-serif)", fontSize: 20 }}>
                {tpl(lang, Cpl.contactPage.hours)}
              </div>
              <div style={{ fontSize: 13, color: "var(--ab-fg-muted)" }}>
                {tpl(lang, { es: "Respuesta en menos de 24 horas", en: "Reply within 24 hours" })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>);

}

function Field({ label, children, error }) {
  return (
    <div className="ab-field" data-error={!!error}>
      <label>{label}</label>
      {children}
      {error && <span className="ab-error">{error}</span>}
    </div>);

}

function DirectLink({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 16,
        alignItems: "center",
        padding: "20px 0",
        borderTop: "1px solid var(--ab-line)",
        transition: "color .2s"
      }}
      onMouseEnter={(e) => e.currentTarget.style.color = "var(--ab-accent-deep)"}
      onMouseLeave={(e) => e.currentTarget.style.color = ""}>
      
      <span style={{
        width: 44, height: 44, borderRadius: 12,
        background: "var(--ab-bg-alt)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--ab-fg)"
      }}>{icon}</span>
      <div>
        <div style={{ fontSize: 12, color: "var(--ab-fg-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
        <div style={{ fontFamily: "var(--ab-serif)", fontSize: 20, marginTop: 2 }}>{value}</div>
      </div>
      <Icon.arrow />
    </a>);

}

window.ContactoPage = ContactoPage;