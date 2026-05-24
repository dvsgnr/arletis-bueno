/* ===================== App ===================== */

const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULS = /*EDITMODE-BEGIN*/{
  "lang": "es",
  "accent": "#D2DE32",
  "showHeroBadges": true,
  "scrollHint": false
}/*EDITMODE-END*/;

function App() {
  // Persisted tweaks
  const tweaks = useTweaks(TWEAK_DEFAULS);

  // Local state
  const [route, setRoute] = useStateA(() => {
    const hash = window.location.hash.replace("#", "");
    return ["home", "planes", "sobre", "contacto"].includes(hash) ? hash : "home";
  });
  const [lang, setLangLocal] = useStateA(tweaks.lang || "es");
  const [prefilledPlan, setPrefilledPlan] = useStateA("");

  // Sync language tweak <-> state
  useEffectA(() => {
    if (tweaks.lang && tweaks.lang !== lang) setLangLocal(tweaks.lang);
  }, [tweaks.lang]);

  const setLang = (l) => {
    setLangLocal(l);
    tweaks.setTweak("lang", l);
  };

  // Sync URL hash
  useEffectA(() => {
    if (window.location.hash.replace("#", "") !== route) {
      history.replaceState(null, "", "#" + route);
    }
  }, [route]);

  // Hash change listener
  useEffectA(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (["home", "planes", "sobre", "contacto"].includes(h)) setRoute(h);
    };
    window.addEventListener("hashchange", onHash);
    // Expose for external automation (PPTX export)
    window.__abGo = (r) => { if (["home", "planes", "sobre", "contacto"].includes(r)) setRoute(r); };
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Apply accent color tweak
  useEffectA(() => {
    if (tweaks.accent) {
      document.documentElement.style.setProperty("--ab-accent", tweaks.accent);
    }
  }, [tweaks.accent]);

  const pageProps = { lang, setRoute, setPrefilledPlan, prefilledPlan };

  return (
    <React.Fragment>
      <Header route={route} setRoute={setRoute} lang={lang} setLang={setLang}/>

      <div data-screen-label={`01 ${route}`}>
        {route === "home" && <HomePage {...pageProps}/>}
        {route === "planes" && <PlanesPage {...pageProps}/>}
        {route === "sobre" && <SobreMiPage {...pageProps}/>}
        {route === "contacto" && <ContactoPage {...pageProps}/>}
      </div>

      <Footer lang={lang} setRoute={setRoute}/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor
            label="Accent"
            value={tweaks.accent}
            onChange={(v) => tweaks.setTweak("accent", v)}
            options={["#D2DE32", "#A2C579", "#E8A87C", "#3a5a3a", "#1a1a1a"]}
          />
        </TweakSection>

        <TweakSection title="Language">
          <TweakRadio
            label="Default"
            value={tweaks.lang}
            onChange={(v) => tweaks.setTweak("lang", v)}
            options={[
              { value: "es", label: "ES" },
              { value: "en", label: "EN" },
            ]}
          />
        </TweakSection>

        <TweakSection title="Hero">
          <TweakToggle
            label="Floating badges"
            value={tweaks.showHeroBadges}
            onChange={(v) => tweaks.setTweak("showHeroBadges", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
